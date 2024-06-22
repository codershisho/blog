import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { adventPro, libreBaskerville, notoJP } from "@/utils/font";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="ja">
      <body className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className}`}>
        <div className="max-w-5xl mx-auto p-8">{children}</div>
      </body>
    </html>
  );
}
