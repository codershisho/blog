export const runtime = 'edge'

import { client } from '@/libs/client'
import Link from 'next/link'

// 日本時間に変換する関数
const toJapanTime = (utcDate: string) => {
  const date = new Date(utcDate)
  const japanTime = new Date(
    date.getTime() + (date.getTimezoneOffset() + 540) * 60 * 1000,
  ) // UTC+9に変換
  return japanTime.toLocaleString('ja-JP') // 日本時間の形式で表示
}

export default async function BlogPage({
  params: { id },
}: Readonly<{
  params: {
    id: string
  }
}>) {
  const blog: Blog = await client.get({ endpoint: 'blogs', contentId: id })

  return (
    <div className="flex">
      <div className="w-5/6 mx-auto md:w-4/6">
        <Link href="/blogs">
          <button
            type="button"
            className="py-2 inline-flex items-center text-sm font-semibold bg-white text-blue-600 hover:border-blue-500 hover:text-blue-500"
          >
            一覧へ戻る
          </button>
        </Link>
        <h1 className="text-base font-bold my-4 md:text-2xl">{blog.title}</h1>
        <p className="text-xs font-semibold text-right md:text-base">
          {toJapanTime(blog.publishedAt)}
        </p>
        {/* <p>{blog.category && blog.category.name}</p> */}
        <div
          className="content my-4"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>
    </div>
  )
}
