"use client"

import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"
import { CounterUp } from "./counter-up"
import { motion } from "framer-motion"

export function AboutSection() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <section className="py-16 sm:py-20" id="about">
      <div className="container-margin px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8 sm:mb-12">
          <AnimatedText as="h2" className="section-subtitle shadow-text">
            About Me
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg" delay={200}>
            Know Me More
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left" duration={0.7} stiffness={50}>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl font-bold mb-4 shadow-text"
            >
              I'm <span className="text-yellow-500">Md Hafizur Rahman,</span> a<span className="text-primary"> .NET Developer</span> &<span className="text-blue-400"> Cybersecurity Specialist</span>
            </motion.h3>
            <div className="space-y-4 text-muted-foreground">
              <motion.p custom={0} initial="hidden" animate="visible" variants={paragraphVariants}>
                I'm a passionate IT professional with expertise in <strong className="text-primary">.NET development</strong>,{" "}
                <strong className="text-blue-400">cybersecurity</strong>, and <strong className="text-yellow-600">server administration</strong>. I specialize in building
                secure and scalable web and IoT solutions using <strong className="text-primary">ASP.NET Core</strong>, <strong className="text-indigo-500">MongoDB</strong>,{" "}
                <strong className="text-purple-500">MySQL</strong>, <strong className="text-pink-500">Microservices</strong>, and cloud platforms like <strong className="text-yellow-700">AWS</strong>{" "}
                and <strong className="text-blue-500">Azure</strong>.
              </motion.p>
              <motion.p custom={1} initial="hidden" animate="visible" variants={paragraphVariants}>
                With hands-on experience in development and IT operations, I bring a holistic approach to solving
                technology challenges. My background includes <strong className="text-blue-400">software engineering</strong>,{" "}
                <strong className="text-red-500">ethical hacking</strong>, <strong className="text-yellow-600">network security</strong>, and{" "}
                <strong className="text-green-600">IoT hardware integration</strong>.
              </motion.p>
              <motion.p custom={2} initial="hidden" animate="visible" variants={paragraphVariants}>
                I've worked across corporate IT support and engineering roles, handling everything from web platforms to{" "}
                <strong className="text-blue-400">PCBA-level repairs</strong>. I'm passionate about leveraging <strong className="text-blue-500">AI</strong> and{" "}
                <strong className="text-pink-600">automation</strong> to enhance efficiency, security, and user experience.
              </motion.p>
              <motion.p custom={3} initial="hidden" animate="visible" variants={paragraphVariants}>
                I continuously improve my skills through platforms like <strong className="text-red-300">TryHackMe</strong>, participating in{" "}
                <strong className="text-red-500">CTF challenges</strong>, and researching emerging technologies.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6"
            >
              <Link href="/about" className="btn-primary hover-lift">
                More About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-6">
            <AnimatedSection delay={100} direction="scale" duration={0.3}>
              <Card className="bg-card transition-colors shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={4} suffix="+" />
                  </h4>
                  <p className="text-muted-foreground">Years of Experience</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={200} direction="scale" duration={0.3}>
              <Card className="bg-card transition-colors shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={31} suffix="+" delay={200} />
                  </h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={300} direction="scale" duration={0.3}>
              <Card className="bg-card transition-colors shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={5} suffix="+" delay={400} />
                  </h4>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={400} direction="scale" duration={0.3}>
              <Card className="bg-card transition-colors shadow-card-hover">
                <CardContent className="p-6 text-center">
                  <h4 className="text-5xl font-bold text-primary mb-2 shadow-text">
                    <CounterUp end={3} suffix="+" delay={600} />
                  </h4>
                  <p className="text-muted-foreground">Certifications</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
