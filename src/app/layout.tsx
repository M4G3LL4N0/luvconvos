import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'

import '@/app/globals.css'
import { Providers } from '@/components/providers'

// Load local font files for better performance/reliability
const neueHaas = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplay-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
})

export const metadata: Metadata = {
  title: 'LuvConvos',
  description: 'Practice the conversation before it matters.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${neueHaas.variable} ${GeistSans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
