'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Pagination from './Pagination'

interface Blog {
  id: string
  title: string
  eyecatch?: { url: string }
  category?: { name: string }
  publishedAt: string
}

interface Props {
  blogs: Blog[]
}

const BlogList: React.FC<Props> = ({ blogs }) => {
  const totalItems = blogs.length
  // 1ページの表示件数
  const itemsPerPage = 20
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    console.log(`Current page is ${page}`)
  }

  // 現在のページに表示するブログ記事をスライス
  const startIndex = (currentPage - 1) * itemsPerPage
  const selectedBlogs = blogs.slice(startIndex, startIndex + itemsPerPage)

  // 日本時間に変換する関数
  const toJapanTime = (utcDate: string) => {
    const date = new Date(utcDate)
    const japanTime = new Date(
      date.getTime() + (date.getTimezoneOffset() + 540) * 60 * 1000,
    ) // UTC+9に変換
    return japanTime.toLocaleString('ja-JP') // 日本時間の形式で表示
  }

  return (
    <div>
      <div className="grid grid-cols-1 w-5/6 mx-auto gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3 xl:w-7/12">
        {selectedBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div className="flex bg-white border rounded-xl h-full shadow hover:shadow-gray-300 lg:w-11/12">
              <div className="flex flex-col h-auto">
                <img
                  className="w-full h-auto rounded-t-xl"
                  src={blog.eyecatch?.url}
                  alt="blog_image"
                />
                <div className="flex-grow p-4 md:p-5">
                  <h3 className="text-sm font-bold text-gray-800 md:text-base hover:text-blue-400">
                    {blog.title}
                  </h3>
                  {blog.category ? (
                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 mt-2 rounded-full text-xs font-medium bg-teal-500 text-white">
                      {blog.category.name}
                    </span>
                  ) : (
                    ''
                  )}
                  <p className="mt-5 text-xs text-gray-500 md:text-sm">
                    {toJapanTime(blog.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default BlogList
