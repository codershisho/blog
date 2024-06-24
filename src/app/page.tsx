import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image"

export default async function Home() {
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
    <main>
      <div className="grid grid-cols-3 gap-5 w-4/5 mx-auto">
        {blogs.map((blog) => (
          // <div key={blog.id} className="card bg-base-300 shadow-xl image-full flex flex-col">
          //   <figure><img src={blog.eyecatch?.url} alt="" /></figure>
          //   <div className="card-body flex-1">
          //     <h2 className="card-title text-slate-50">{blog.title}</h2>
          //     <div className="badge badge-lg badge-success p-4">
          //       <p className="text-slate-100">{blog.category?.name}</p>
          //     </div>
          //     <div className="card-actions justify-end">
          //       <p className="text-slate-200">{toJapanTime(blog.publishedAt)}</p>
          //       <Link href={`/blog/${blog.id}`}>
          //         <button className="btn btn-primary text-slate-50">見てみる</button>
          //       </Link>
          //     </div>
          //   </div>
          // </div>
          <div key={blog.id} className="card glass w-96">
            <figure>
              {blog.eyecatch?.url ? (
                <img src={blog.eyecatch.url} alt="car!" />
              ) : (
                <Image src="/no_image.png" width={384} height={201} alt="no_image" />
              )}
            </figure>
            <div className="card-body">
              <h2 className="card-title">{blog.title}</h2>
              <div className="badge badge-success p-4 text-white">
                <p>{blog.category?.name}</p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read Now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}