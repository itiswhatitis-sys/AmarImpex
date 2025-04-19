import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"
import { Inter } from "next/font/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Amar Impex - Premium Steel Solutions",
  description: "Your trusted partner in premium steel solutions since 1998",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}