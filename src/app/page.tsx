import { client } from "@/libs/client";
import Link from "next/link";

export default async function Home() {
  const blogs: Blog[] = await client
    .get({ endpoint: "blogs" })
    .then((res) => res.contents);

  return (
    <main>
      <h1 className="text-2xl font-bold my-4">ブログ</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}