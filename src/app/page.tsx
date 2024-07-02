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
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="bg-gray-200 p-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </section>
  );
}