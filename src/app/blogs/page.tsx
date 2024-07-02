import { NextPage } from "next";
import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image"

export default async function BlogList() {
  const blogs: Blog[] = await client
    .get({ endpoint: "blogs" })
    .then((res) => res.contents);

  // 日本時間に変換する関数
  const toJapanTime = (utcDate: string) => {
    const date = new Date(utcDate);
    const japanTime = new Date(date.getTime() + (date.getTimezoneOffset() + 540) * 60 * 1000); // UTC+9に変換
    return japanTime.toLocaleString('ja-JP'); // 日本時間の形式で表示
  };

  return (
    <div className="grid grid-cols-1 gap-4 px-5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 lg:px-24 xl:grid-cols-4 xl:px-44">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <div className="flex bg-white border rounded-xl h-full hover:animate-shake animate-once animate-duration-[2000ms] animate-delay-0 shadow-2xl shadow-blue-500/20">
            <div className="flex flex-col h-auto">
              <img className="w-full h-auto rounded-t-xl" src={blog.eyecatch?.url} alt="car!" />
              <div className="flex-grow p-4 md:p-5">
                <h3 className="text-sm font-bold text-gray-800 md:text-base hover:text-blue-400">
                  {blog.title}
                </h3>
                {blog.category ?
                  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mt-2 rounded-full text-xs font-medium bg-teal-500 text-white">
                    {blog.category.name}
                  </span>
                  :
                  ''
                }
                <p className="mt-5 text-xs text-gray-500 md:text-sm">{toJapanTime(blog.publishedAt)}</p>
              </div>

            </div>
          </div>
        </Link>
      ))
      }
    </div >
  )
}