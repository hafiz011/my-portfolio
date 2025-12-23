"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Shield, Server, Cpu, Cloud, Lock, ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text" // assuming you have this from previous components

export default function AboutPage() {
  const expertiseAreas = [
    { icon: <Code className="h-8 w-8" />, title: "Full Stack Web Development", desc: ".NET Core, React/Next.js, MongoDB, REST APIs & modern frontend/backend." },
    { icon: <Cloud className="h-8 w-8" />, title: "Cloud & DevOps", desc: "AWS, Azure, Docker/Kubernetes, CI/CD pipelines & infrastructure as code." },
    { icon: <Lock className="h-8 w-8" />, title: "Cybersecurity & DevSecOps", desc: "Penetration testing, vulnerability assessments, OWASP, secure architecture." },
    { icon: <Cpu className="h-8 w-8" />, title: "IoT & Embedded Systems", desc: "ESP32/Arduino, MQTT, embedded C++, hardware-software integration." },
    { icon: <Server className="h-8 w-8" />, title: "System Administration", desc: "Linux/Windows servers, performance optimization & security hardening." },
  ]

  return (
    <div className="container-margin py-16 pt-32">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText as="h1" className="text-5xl sm:text-6xl font-bold mb-6 shadow-text">
            About Me
          </AnimatedText>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full Stack Developer & Cybersecurity Specialist passionate about building secure, scalable, and innovative solutions at the intersection of software, cloud, and hardware.
          </p>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="leading-relaxed">
              I'm a versatile engineer with expertise spanning modern web development, cloud infrastructure, cybersecurity, and embedded/IoT systems. I love solving complex problems by combining clean code, robust security practices, and efficient architecture.
            </p>
            <p className="leading-relaxed mt-4">
              Whether it's crafting high-performance web applications, securing systems against real-world threats, deploying scalable cloud solutions, or building smart connected devices — I deliver end-to-end solutions that are reliable, secure, and future-proof.
            </p>
          </div>
        </motion.section>

        {/* Expertise Grid */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center shadow-text">My Expertise Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift shadow-card-hover border-border hover:border-primary transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {area.icon}
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{area.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Me */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center shadow-text">Why Work With Me</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-card-hover">
              <CardHeader>
                <CardTitle>Secure by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I integrate security from day one — OWASP compliance, threat modeling, and DevSecOps practices ensure your product is protected against modern threats.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card-hover">
              <CardHeader>
                <CardTitle>Full-Stack Versatility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From cloud-native backends to responsive frontends and even embedded firmware — I handle the entire stack so you get a cohesive, high-quality solution.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card-hover">
              <CardHeader>
                <CardTitle>Performance Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Optimized code, efficient infrastructure, and scalable architecture mean faster load times, lower costs, and systems that grow with your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card-hover">
              <CardHeader>
                <CardTitle>Future-Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clean, maintainable code with modern tools and best practices — making it easy to extend, update, and innovate long after launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center py-16 bg-secondary/50 rounded-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 shadow-text">
            Let's Build Something Extraordinary
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Ready to create a secure, scalable application or bring your IoT vision to life? I'm here to help turn your ideas into reality.
          </p>
          <Link href="/contact">
            <Button size="lg" className="hover-lift shadow-primary-hover">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  )
}