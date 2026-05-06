import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '大嘴堡情报局 | 探索美味的无限可能',
  description: '用最优质的食材，打造最极致的汉堡体验。大嘴堡情报局，你的美食情报专家。',
  keywords: ['汉堡', '美食', '大嘴堡', '情报局', '快餐'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <meta name="theme-color" content="#111827" />
      </head>
      <body className="min-h-full bg-gray-900 text-gray-100">{children}</body>
    </html>
  )
}
