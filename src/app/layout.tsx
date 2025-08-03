import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Brand with AI-Powered Marketing",
  description: "Create stunning marketing campaigns, generate compelling content, and boost your brand's presence with our cutting-edge AI suite. 10x faster than traditional methods.",
  keywords: "AI marketing, content generation, brand management, marketing automation, AI tools",
  authors: [{ name: "ADmyBRAND AI Suite" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Brand with AI",
    description: "AI-powered marketing suite for creating stunning campaigns and content",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Brand with AI",
    description: "AI-powered marketing suite for creating stunning campaigns and content",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
