"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, ArrowRightIcon } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ParallaxSection } from "@/components/parallax-section"
import { motion } from "framer-motion"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const slides = [
    {
      title: "Md Hafizur Rahman",
      subtitle: "Hello,",
      role: ".NET Developer",
      description:
        "Enthusiastic and versatile IT professional with proven expertise in .NET development, cybersecurity, and server infrastructure.",
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      title: "Md Hafizur Rahman",
      subtitle: "Welcome,",
      role: "Cybersecurity Specialist",
      description:
        "Skilled in building secure, scalable web and IoT applications using .NET Core, MongoDB, and cloud platforms.",
      image: "/placeholder.svg?height=800&width=600",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const currentSlideData = slides[currentSlide]

  return (
    <>
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-8 z-10 -translate-y-1/2">
          <button onClick={prevSlide} className="slide-nav-btn hover-scale shadow-card-hover shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10">
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="absolute top-1/2 right-8 z-10 -translate-y-1/2">
          <button onClick={nextSlide} className="slide-nav-btn hover-scale shadow-card-hover shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10">
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        <div className="container-margin grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-subtitle shadow-text"
            >
              {currentSlideData.subtitle}
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="section-title shadow-text-lg"
            >
              I am {currentSlideData.title}.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-primary font-medium shadow-text"
            >
              {currentSlideData.role}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground max-w-lg"
            >
              {currentSlideData.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <Link href="/contact" className="btn-primary hover-lift shadow-primary-hover">
                Hire Me
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block relative h-[80vh] z-0"
          >
            <div className="absolute inset-0 shadow-xl rounded-lg overflow-hidden">
              <div className="w-full h-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
                <img
                  src={currentSlideData.image || "/placeholder.svg"}
                  alt="Hero"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AboutSection />

      <ParallaxSection direction="up" baseVelocity={0.1}>
        <StatsSection />
      </ParallaxSection>

      <SkillsSection />

      <ParallaxSection direction="down" baseVelocity={0.1}>
        <TestimonialsSection />
      </ParallaxSection>

      <FeaturedProjects />
    </>
  )
}
