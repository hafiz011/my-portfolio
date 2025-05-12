"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ParallaxBackgroundProps {
  className?: string
  imageUrl: string
  strength?: number
  overlay?: boolean
  overlayColor?: string
  overlayOpacity?: number
  children?: React.ReactNode
}

export function ParallaxBackground({
  className,
  imageUrl,
  strength = 100,
  overlay = true,
  overlayColor = "black",
  overlayOpacity = 0.6,
  children,
}: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, strength])

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundColor: overlayColor,
            opacity: overlayOpacity,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
