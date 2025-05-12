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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const skillCategories = [
    {
      name: "Development",
      skills: [
        { name: "C#", level: 97 },
        { name: ".NET", level: 95 },
        { name: "ASP.NET Core", level: 95 },
        { name: "Entity Framework", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 95 },
        { name: "C/C++", level: 85 },
      ],
    },
    {
      name: "Databases & Infrastructure",
      skills: [
        { name: "MongoDB", level: 95 },
        { name: "MySQL", level: 90 },
        { name: "AWS", level: 95 },
        { name: "Azure", level: 95 },
        { name: "Docker", level: 90},
        { name: "VMware ESXi", level: 85 },
        { name: "Server Administration (Windows, Linux)", level: 95 },
      ],
    },
    {
      name: "Cybersecurity",
      skills: [
        { name: "Vulnerability Assessment", level: 90 },
        { name: "Penetration Testing", level: 95 },
        { name: "privilege escalation", level: 90 },
        { name: "web application security flaws", level: 95 },
        { name: "Digital forensics", level: 90 },
        { name: "Network Security", level: 85 },
      ],
    },
    {
      name: "Networking & Devices",
      skills: [
        { name: "Active Directory", level: 95 },
        { name: "Firewall Configs", level: 95 },
        { name: "Sensor Integration", level: 90 },
        { name: "Microcontrollers", level: 95 },
        { name: "PCBA Repair (L1–L4)", level: 90 },
      ],
    }
  ]

  // Animate progress bars when they come into view
  useEffect(() => {
    const allSkills: Record<string, number> = {}

    skillCategories.forEach((category) => {
      category.skills.forEach((skill) => {
        allSkills[skill.name] = 0
      })
    })

    setSkillValues(allSkills)

    if (isInView) {
      controls.start("visible")
      // Small delay before starting animations
      const timer = setTimeout(() => {
        setAnimationStarted(true)
        skillCategories.forEach((category) => {
          category.skills.forEach((skill, index) => {
            setTimeout(() => {
              setSkillValues((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }))
            }, index * 200)
          })
        })
      }, 500)

      return () => clearTimeout(timer)
    } else {
      controls.start("hidden")
      setAnimationStarted(false)
      setSkillValues(allSkills)
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-secondary" id="skills" ref={sectionRef}>
      <div className="container-margin">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            My Skills
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            My Expertise
          </AnimatedText>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="space-y-8 p-6 rounded-lg shadow-card bg-background/5"
              variants={itemVariants}
              custom={categoryIndex}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold shadow-text">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: animationStarted ? 1 : 0,
                      x: animationStarted ? 0 : -10,
                    }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span>
                        {animationStarted ? (
                          <CounterUp end={skill.level} suffix="%" duration={1500} delay={index * 200} />
                        ) : (
                          "0%"
                        )}
                      </span>
                    </div>
                    <Progress
                      value={skillValues[skill.name] || 0}
                      className="h-2 bg-background transition-all duration-1000 ease-out shadow-sm"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
