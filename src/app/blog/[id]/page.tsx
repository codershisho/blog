export const runtime = "edge";

import { client } from "@/libs/client";
import Link from "next/link";

export default async function BlogPage({
  params: { id },
}: Readonly<{
  params: {
    id: string;
  };
}>) {
  const blog: Blog = await client.get({ endpoint: "blogs", contentId: id })

  return (
    <main>
      <Link href="/"><button className="btn bg-green-500">戻る</button></Link>
      <h1 className="text-2xl font-bold my-4">{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p>{blog.category && blog.category.name}</p>
      <div
        className="my-4"
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </main>
  );
}