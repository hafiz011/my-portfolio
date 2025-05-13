"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatedText } from "./animated-text"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  avatar: string
  content: string
  rating: number
}

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useMobile()

 const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO",
    company: "Tech Innovations",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The site looks professional and performs flawlessly. Dynamic content and a powerful admin panel make managing our cybersecurity services incredibly efficient and secure.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mahbub Murshed",
    position: "Founder",
    company: "Travel Express BD",
    avatar: "/travelexpressbd.jpeg?height=80&width=80",
    content:
      "The booking interface is smooth and user-friendly. Admin tools allow us to manage packages easily, helping increase engagement and streamline our business operations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Masud Reza",
    position: "CTO",
    company: "SmartSpace Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Hafiz built a secure IoT platform with MAC authentication and AI-driven automation, giving us real-time control and impressive efficiency across smart devices.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ariana N.",
    position: "Security Analyst",
    company: "Zinthe",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The activity tracking system offers precise insights into login behavior and geo-location. It helped us boost security and understand user behavior better.",
    rating: 5,
  },
  {
    id: 5,
    name: "Rayhan Kabir",
    position: "Researcher",
    company: "CyberTrack Lab",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The cybersecurity insights and research on web vulnerabilities and IoT risks were spot-on. Great hands-on knowledge of tools like Burp Suite and Metasploit.",
    rating: 5,
  },
  {
    id: 6,
    name: "Farzana Rahman",
    position: "Engineer",
    company: "Smart Living Co.",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "The smart home automation project was perfectly executed. Secure APIs and MQTT integration enabled seamless remote control and future AI integration planning.",
    rating: 5,
  },
];

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    // Auto-advance slides
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? (isMobile ? 200 : 300) : isMobile ? -200 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? (isMobile ? 200 : 300) : isMobile ? -200 : -300,
      opacity: 0,
    }),
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={index < rating ? "currentColor" : "none"}
        stroke="currentColor"
        className={`w-5 h-5 ${index < rating ? "text-yellow-500" : "text-gray-300"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            Testimonials
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            What Clients Say
          </AnimatedText>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-10">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 500, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <Card className="border-none shadow-xl bg-secondary/20 backdrop-blur-sm">
                  <CardContent className={`p-8 ${isMobile ? "p-6" : "p-8"}`}>
                    <div className="flex flex-col items-center text-center">
                      <Quote className={`${isMobile ? "h-8 w-8 mb-4" : "h-12 w-12 mb-6"} text-primary opacity-50`} />
                      <p className={`${isMobile ? "text-base" : "text-lg"} mb-6 italic text-muted-foreground`}>
                        "{testimonials[currentIndex].content}"
                      </p>
                      <div className="flex justify-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>
                      <div className={`flex ${isMobile ? "flex-col" : "items-center"} mt-4`}>
                        <div
                          className={`${isMobile ? "w-12 h-12 mx-auto mb-3" : "w-16 h-16 mr-4"} rounded-full overflow-hidden border-2 border-primary shadow-primary`}
                        >
                          <img
                            src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className={`${isMobile ? "text-center" : "text-left"}`}>
                          <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 ${isMobile ? "-translate-x-1/4" : "-translate-x-1/2 md:-translate-x-full"} bg-background rounded-full p-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 ${isMobile ? "translate-x-1/4" : "translate-x-1/2 md:translate-x-full"} bg-background rounded-full p-3 shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors z-10`}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
