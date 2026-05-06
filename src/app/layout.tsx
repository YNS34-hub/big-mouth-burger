import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '大嘴堡情报局 | Big Mouth Burger',
  description: '用最优质的食材，打造最极致的汉堡体验。',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-[#0a0a0a] text-[#fafafa] antialiased">{children}</body>
    </html>
  )
}
