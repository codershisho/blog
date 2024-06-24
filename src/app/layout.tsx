import type { Metadata } from "next";
import "./globals.css";
import { adventPro, libreBaskerville, notoJP } from "@/utils/font";
import BlogHeader from "./components/BlogHeader";
import BlogFooter from "./components/BlogFooter";
import BlogHeaderFix from "./components/BlogHeaderFix";


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
    <html lang="ja" data-theme="emerald">
      <body className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className} bg-white h-full`}>
        {/* <BlogHeader />
        <div className="pt-24">{children}</div>
        <BlogFooter /> */}
        <BlogHeaderFix />
        <div className="pt-24">{children}</div>
        <BlogFooter />
      </body>
    </html>
  );
}
