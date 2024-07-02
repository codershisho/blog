import type { Metadata } from "next";
import "./globals.css";
import { adventPro, libreBaskerville, notoJP } from "@/utils/font";
import BlogHeader from "./components/BlogHeader";
import BlogFooter from "./components/BlogFooter";
import PrelineScript from "./components/PrelineScript";

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
      <body className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className}`}>
        <div className="grid min-h-screen" style={{ gridTemplateRows: 'auto 1fr auto', gridTemplateColumns: '100%' }}>
          <BlogHeader />
          <main className="py-5">{children}</main>
          <BlogFooter />
        </div>
      </body>
      <PrelineScript />
    </html>
  );
}
