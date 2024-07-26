import { adventPro, libreBaskerville, notoJP } from '@/utils/font'
import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import BlogFooter from './components/BlogFooter'
import BlogHeader from './components/BlogHeader'
import PrelineScript from './components/PrelineScript'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codershishoの成長記録',
  description:
    '日々エンジニアとして得たこと、Web開発で得た知見、備忘録、雑記…etcを綴っていきくブログ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" data-theme="emerald">
      <head>
        <meta
          name="google-site-verification"
          content="2paoRE281-1XqeFQgbSjpTVtEGxlXBNAuEMTpH71V8w"
        />
      </head>
      <body
        className={`${notoJP.variable} ${adventPro.variable} ${libreBaskerville.variable} ${notoJP.className}`}
      >
        <div
          className="grid min-h-screen"
          style={{
            gridTemplateRows: 'auto 1fr auto',
            gridTemplateColumns: '100%',
          }}
        >
          <BlogHeader />
          <main className="py-5">{children}</main>
          <BlogFooter />
        </div>
      </body>
      <PrelineScript />
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GA_ID}`} />
    </html>
  )
}
