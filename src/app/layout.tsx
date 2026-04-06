import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const geistSans = Geist({
  display: 'swap',
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  display: 'swap', 
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "LuvConvos",
    template: "%s | LuvConvos"
  },
  description: "AI-powered relationship communication intelligence",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
}

import { Suspense, type ReactNode } from 'react'

type RootLayoutProps = Readonly<{
  children: ReactNode
}>
import { Providers } from '../../components/providers'

export default function RootLayout({
  children,
}: RootLayoutProps): ReactNode {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-color-scheme="system"
      data-theme="default"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:ring-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <div id="main-content" className="flex-1 flex flex-col max-w-7xl mx-auto w-full">
          <Providers>
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
