import type { Metadata } from "next";
import "./globals.css";
import { adventPro, libreBaskerville, notoJP } from "@/utils/font";
import BlogHeader from "./components/BlogHeader";
import BlogFooter from "./components/BlogFooter";


export const metadata: Metadata = {
  title: "Blog",
  description: "blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full"> {/* 親要素を画面全体の高さに拡張 */}
      <body className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className} flex flex-col h-full`}> {/* flex flex-colを追加 */}
        <BlogHeader />
        <div className="flex-1 max-w-5xl mx-auto pt-24">{children}</div> {/* flex-1を追加 */}
        <BlogFooter />
      </body>
    </html>
  );
}
