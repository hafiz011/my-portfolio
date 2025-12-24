import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md Hafizur Rahman | Software Engineer & Cybersecurity Specialist",
  description: "Explore the professional portfolio of Md Hafizur Rahman, showcasing expertise in software engineering, .NET development, and cybersecurity solutions. View projects, skills, and contact information.",
  keywords: ["Md Hafizur Rahman", "Software Engineer", "Cybersecurity Specialist", ".NET Developer", "Web Developer", "Portfolio", "Application Security"],
  authors: [{ name: "Md Hafizur Rahman" }],
  generator: "v0.dev",
  openGraph: {
    title: "Md Hafizur Rahman | Software Engineer & Cybersecurity Specialist",
    description: "Professional portfolio of Md Hafizur Rahman highlighting software engineering, .NET development, and cybersecurity expertise.",
    url: "https://eng-hafiz-portfolio.vercel.app",
    siteName: "Md Hafizur Rahman Portfolio",
    images: [
      {
        url: "https://eng-hafiz-portfolio.vercel.app/hafiz.jpg",
        width: 641,
        height: 630,
        alt: "Md Hafizur Rahman Portfolio"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Hafizur Rahman | Software Engineer & Cybersecurity Specialist",
    description: "Professional portfolio of Md Hafizur Rahman highlighting software engineering, .NET development, and cybersecurity expertise.",
    images: ["https://eng-hafiz-portfolio.vercel.app/hafiz.jpg"],
    creator: "@YourTwitterHandle"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
