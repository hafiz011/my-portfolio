"use client"

import { Progress } from "@/components/ui/progress"
import { AnimatedText } from "./animated-text"
import { CounterUp } from "./counter-up"
import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export function SkillsSection() {
  const [skillValues, setSkillValues] = useState<Record<string, number>>({})
  const [animationStarted, setAnimationStarted] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }) // reduced amount for mobile

  const skillCategories = [
    {
      name: "Full Stack Development",
      skills: [
        { name: "C#", level: 100 },
        { name: ".NET & ASP.NET Core", level: 100 },
        { name: "Entity Framework", level: 100 },
        { name: "JavaScript", level: 98 },
        { name: "React", level: 100 },
        { name: "Razor Pages / Blazor", level: 100 },
        { name: "Microservices", level: 100 },
      ],
    },
    {
      name: "Cloud & Infrastructure",
      skills: [
        { name: "MongoDB", level: 100 },
        { name: "SQL", level: 100 },
        { name: "Docker & Kubernetes", level: 100 },
        { name: "AWS", level: 100 },
        { name: "Azure", level: 98 },
        { name: "CI/CD (GitHub Actions)", level: 95 },
        { name: "Linux / Windows Server Admin", level: 100 },
      ],
    },
    {
      name: "Cybersecurity & DevSecOps",
      skills: [
        { name: "Penetration Testing", level: 95 },
        { name: "Vulnerability Assessment", level: 98 },
        { name: "Privilege Escalation", level: 98 },
        { name: "OWASP Top 10", level: 100 },
        { name: "Digital Forensics", level: 95 },
        { name: "Network Security", level: 100 },
        { name: "TryHackMe / CTFs", level: 95 },
      ],
    },
    {
      name: "IoT & Embedded Systems",
      skills: [
        { name: "Sensor Integration", level: 100 },
        { name: "Microcontrollers (ESP32, Arduino)", level: 100 },
        { name: "PCBA Repair (L1–L4)", level: 100 },
        { name: "Embedded C/C++", level: 100 },
        { name: "MQTT / REST for IoT", level: 100 },
        { name: "Device Security (MAC/Token Auth)", level: 100 },
      ],
    },
  ]

  useEffect(() => {
    // Reset values
    const resetValues = () => {
      const allSkills: Record<string, number> = {}
      skillCategories.forEach((cat) => {
        cat.skills.forEach((skill) => {
          allSkills[skill.name] = 0
        })
      })
      setSkillValues(allSkills)
      setAnimationStarted(false)
    }

    resetValues()

    if (isInView) {
      controls.start("visible")
      const timer = setTimeout(() => {
        setAnimationStarted(true)
        let delay = 0
        skillCategories.forEach((cat) => {
          cat.skills.forEach((skill) => {
            setTimeout(() => {
              setSkillValues((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }))
            }, delay)
            delay += 120 // faster stagger on mobile
          })
        })
      }, 300)

      return () => clearTimeout(timer)
    } else {
      controls.start("hidden")
      resetValues()
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 bg-secondary" id="skills" ref={sectionRef}>
      <div className="container-margin px-4">
        <div className="text-center mb-12">
          <AnimatedText as="h2" className="text-3xl sm:text-4xl font-bold shadow-text">
            My Skills
          </AnimatedText>
          <AnimatedText as="p" className="mt-4 text-lg text-muted-foreground">
            My Expertise Across Technologies
          </AnimatedText>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="bg-background/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border min-h-[400px]" // min-height to prevent collapse
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.name}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-base">{skill.name}</span>
                      <span className="text-sm font-bold text-primary">
                        {animationStarted ? <CounterUp end={skill.level} suffix="%" duration={1000} /> : "0%"}
                      </span>
                    </div>
                   <Progress
                      value={skillValues[skill.name] || 0}
                      className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/70"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}