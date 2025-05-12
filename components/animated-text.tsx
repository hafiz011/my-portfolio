"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
  once?: boolean
  amount?: number
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as: Component = "p",
  once = true,
  amount = 0.3,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount })

  return (
    <Component className={cn(className)}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration,
          delay: delay / 1000,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </Component>
  )
}
