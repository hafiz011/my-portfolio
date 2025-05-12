"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Download, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/service" },
  { name: "projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-header"
          : "bg-transparent",
      )}
    >
      <div className="container-margin flex h-20 items-center justify-between">
        <div className={`flex items-center gap-2 ${mounted ? "animate-slide-down" : "opacity-0"}`}>
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary shadow-primary">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="font-bold text-xl shadow-text">Elito.</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary py-6",
                pathname === item.path ? "active-nav-item" : "text-foreground",
                mounted ? `animate-slide-down animate-delay-${(index + 1) * 100}` : "opacity-0",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className={`flex items-center gap-4 ${mounted ? "animate-slide-down animate-delay-700" : "opacity-0"}`}>
          <Link href="/resume" className="hidden md:flex">
            <Button className="btn-primary hover-lift shadow-primary-hover">
              Resume
              <Download className="h-4 w-4 ml-2" />
            </Button>
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="hover-scale shadow-sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="shadow-xl p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="font-bold text-lg">Elito.</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex flex-col gap-1 p-4 flex-1">
                  <AnimatePresence>
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.path}
                          className={cn(
                            "flex items-center p-3 rounded-md text-sm font-medium transition-colors",
                            pathname === item.path ? "bg-primary/10 text-primary" : "hover:bg-muted hover:text-primary",
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="p-4 border-t">
                  <Link href="/resume" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button className="btn-primary w-full hover-lift shadow-primary-hover">
                      Resume
                      <Download className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
