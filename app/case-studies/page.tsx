// app/case-studies/page.tsx  (Main List Page - /case-studies)

"use client"

import React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Server, Rocket } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedSection } from "@/components/animated-section"

const caseStudies = [
    {
    id: "vulnerability-assessment-report",
    title: "Enterprise API Security Assessment",
    shortDesc: "Conducted comprehensive vulnerability assessment on a production Laravel-based REST API, identifying critical information disclosure and misconfiguration issues.",
    tags: ["Penetration Testing", "Vulnerability Assessment", "Laravel", "API Security", "OWASP", "DevSecOps"],
    icon: <Shield className="h-10 w-10 text-primary" />,
    duration: "2 days",
    client: "Mid-size FinTech Company (NDA)",
    },
    {
    id: "ecommerce-platform",
    title: "Secure E-Commerce Platform",
    shortDesc: "Built a scalable, multi-tenant e-commerce SaaS with advanced security features and payment integration.",
    tags: ["React", "Next.js", ".NET Core", "MongoDB", "Stripe", "JWT Auth"],
    icon: <Rocket className="h-10 w-10 text-primary" />,
    duration: "4 months",
    client: "Startup (NDA)",
  },
  {
    id: "cybersecurity-dashboard",
    title: "Real-Time Security Monitoring Dashboard",
    shortDesc: "Developed a centralized dashboard for vulnerability scanning, threat detection, and incident response.",
    tags: ["Blazor", ".NET", "SignalR", "ElasticSearch", "Docker", "AWS"],
    icon: <Shield className="h-10 w-10 text-primary" />,
    duration: "3 months",
    client: "Enterprise Client",
  },
  {
    id: "iot-home-automation",
    title: "Smart Home IoT Ecosystem",
    shortDesc: "End-to-end IoT solution with ESP32 devices, MQTT broker, mobile app control, and cloud backend.",
    tags: ["Embedded C++", "ESP32", "MQTT", "React Native", "Node.js", "MongoDB"],
    icon: <Server className="h-10 w-10 text-primary" />,
    duration: "5 months",
    client: "Hardware Startup",
  },
  {
    id: "cloud-migration-project",
    title: "Legacy System Cloud Migration",
    shortDesc: "Migrated monolithic on-premise application to microservices architecture on Azure with zero downtime.",
    tags: ["Azure", "Kubernetes", ".NET Core", "CI/CD", "Terraform", "SQL Server"],
    icon: <Code className="h-10 w-10 text-primary" />,
    duration: "6 months",
    client: "Mid-size Company",
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="container-margin py-16 pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <AnimatedText as="h1" className="text-5xl sm:text-6xl font-bold mb-6 shadow-text">
            Case Studies
          </AnimatedText>
          <AnimatedText as="p" className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects where I delivered secure, scalable, and high-performance solutions.
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <AnimatedSection key={study.id} delay={index * 100}>
              <Link href={`/case-studies/${study.id}`}>
                <Card className="h-full hover-lift shadow-card-hover border-border hover:border-primary transition-all cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary mb-4">
                        {study.icon}
                      </div>
                      <Badge variant="secondary">{study.duration}</Badge>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="mt-3 text-base">
                      {study.shortDesc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}