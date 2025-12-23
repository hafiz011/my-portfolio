"use client"
import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Globe, Lock, Server, Cpu, Database, Shield, Wrench, Monitor, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"

export function ServiceSection() {
  const categories = [
    {
      categoryTitle: "Core Development Services",
      icon: <Code className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Web Development",
          icon: <Globe className="h-8 w-8 text-primary" />,
          description: "Custom web applications built with modern technologies like ASP.NET Core, MongoDB, React, and Next.js. Scalable, responsive, and secure solutions.",
          features: ["Custom Web Applications", "API Development", "Database Design", "UI/UX Implementation"],
        },
        {
          title: "Frontend Development",
          icon: <Code className="h-8 w-8 text-primary" />,
          description: "High-performance frontend solutions using React and Next.js for engaging user experiences.",
          features: ["React & Next.js Development", "Responsive Design", "Dashboard UI", "Performance Optimization"],
        },
        {
          title: "API & Backend Engineering",
          icon: <Server className="h-8 w-8 text-primary" />,
          description: "Robust backend systems with secure REST APIs and seamless integrations.",
          features: ["REST API Development", "JWT & API Key Security", "Third-Party Integrations", "Performance Optimization"],
        },
      ],
    },
    {
      categoryTitle: "SaaS & Product Engineering",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "SaaS & Product Development",
          icon: <Rocket className="h-8 w-8 text-primary" />,
          description: "Full-cycle SaaS product development with scalable architecture and billing integration.",
          features: ["SaaS Architecture Design", "Multi-Tenant Systems", "Authentication & Authorization", "Subscription & Billing"],
        },
        {
          title: "Security Analytics & Monitoring",
          icon: <Monitor className="h-8 w-8 text-primary" />,
          description: "Proactive monitoring and analytics to detect and prevent security threats in your application.",
          features: ["User Activity Tracking", "Login & Session Monitoring", "Geo-location Analysis", "Suspicious Behavior Detection"],
        },
      ],
    },
    {
      categoryTitle: "Security Services",
      icon: <Lock className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Cybersecurity Services",
          icon: <Lock className="h-8 w-8 text-primary" />,
          description: "Comprehensive security assessments, vulnerability testing, and robust protection measures.",
          features: ["Security Audits", "Vulnerability Assessment", "Security Implementation", "Penetration Testing"],
        },
      ],
    },
    {
      categoryTitle: "Infrastructure & DevOps",
      icon: <Server className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Server Infrastructure",
          icon: <Server className="h-8 w-8 text-primary" />,
          description: "Design, setup, and management of cloud or on-premises servers for optimal performance and security.",
          features: ["Cloud Migration", "Server Setup", "Performance Optimization", "Infrastructure Management"],
        },
        {
          title: "DevOps & Deployment",
          icon: <Wrench className="h-8 w-8 text-primary" />,
          description: "Automated pipelines and containerized deployments for faster, reliable releases.",
          features: ["CI/CD Pipelines", "Docker & Containers", "Cloud Deployment", "Monitoring & Logging"],
        },
      ],
    },
    {
      categoryTitle: "Data & Storage",
      icon: <Database className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Database Solutions",
          icon: <Database className="h-8 w-8 text-primary" />,
          description: "Expert database design, optimization, and management for MongoDB, MySQL, and more.",
          features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"],
        },
      ],
    },
    {
      categoryTitle: "Consulting & Support",
      icon: <Shield className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "IT Consulting",
          icon: <Shield className="h-8 w-8 text-primary" />,
          description: "Strategic guidance to align technology with your business goals.",
          features: ["Technology Assessment", "Strategic Planning", "Process Optimization", "Training & Support"],
        },
        {
          title: "Maintenance & Support",
          icon: <Cpu className="h-8 w-8 text-primary" />,
          description: "Ongoing support to keep your systems secure, updated, and performing optimally.",
          features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Feature Enhancements"],
        },
      ],
    },
  ]

  let cardIndex = 0

  return (
    <div className="container-margin py-12 pt-32">
      <div className="flex flex-col items-center justify-center space-y-3 mb-12">
        <AnimatedText as="h2" className="text-4xl font-bold mb-2 shadow-text">
          My Services
        </AnimatedText>
        <AnimatedText as="p" className="text-muted-foreground" delay={200}>
          Comprehensive, category-wise solutions tailored to your needs
        </AnimatedText>
      </div>

      {categories.map((category, catIndex) => (
        <div key={catIndex} className="mb-16">
          <AnimatedSection delay={catIndex * 100}>
            <div className="flex items-center gap-4 mb-8">
              {category.icon}
              <h3 className="text-3xl font-semibold">{category.categoryTitle}</h3>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service, servIndex) => {
              const currentIndex = cardIndex++
              return (
                <AnimatedSection key={currentIndex} delay={100 + servIndex * 100}>
                  <Card className="hover-lift shadow-card-hover border-border hover:border-primary transition-colors h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        {service.icon}
                        <CardTitle>{service.title}</CardTitle>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {service.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/service#service-${currentIndex}`} className="w-full">
                        <Button className="w-full hover-lift shadow-primary-hover">
                          View Pricing
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}