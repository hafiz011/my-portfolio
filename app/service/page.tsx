"use client"

import React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Lock, Server, Cpu, Shield, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"

export default function ServicePage() {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary mb-4" />,
      title: "Web Development",
      description:
        "Custom web applications built with ASP.NET Core, MongoDB, and modern frontend technologies. Responsive, secure, and scalable solutions for your business needs.",
      features: ["Custom Web Applications", "API Development", "Database Design", "UI/UX Implementation"],
      packages: [
        {
          name: "Basic",
          price: "$1,500",
          features: [
            "Single-page website",
            "Responsive design",
            "Basic contact form",
            "3 content revisions",
            "1 month support",
          ],
        },
        {
          name: "Standard",
          price: "$3,500",
          features: [
            "Multi-page web application",
            "User authentication",
            "Database integration",
            "Admin dashboard",
            "5 content revisions",
            "3 months support",
          ],
          recommended: true,
        },
        {
          name: "Premium",
          price: "$7,000+",
          features: [
            "Complex web application",
            "Custom API development",
            "Advanced security features",
            "Third-party integrations",
            "Performance optimization",
            "Unlimited revisions",
            "6 months support",
          ],
        },
      ],
    },
    {
      icon: <Lock className="h-12 w-12 text-primary mb-4" />,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security assessments, vulnerability testing, and implementation of robust security measures to protect your digital assets.",
      features: ["Security Audits", "Vulnerability Assessment", "Security Implementation", "Penetration Testing"],
      packages: [
        {
          name: "Basic Audit",
          price: "$800",
          features: [
            "Basic vulnerability scan",
            "Security configuration review",
            "Summary report",
            "Basic recommendations",
          ],
        },
        {
          name: "Comprehensive Assessment",
          price: "$2,500",
          features: [
            "In-depth vulnerability assessment",
            "Network security analysis",
            "Application security testing",
            "Detailed report with prioritized findings",
            "Remediation guidance",
          ],
          recommended: true,
        },
        {
          name: "Enterprise Security",
          price: "$5,000+",
          features: [
            "Full penetration testing",
            "Advanced threat modeling",
            "Security architecture review",
            "Custom security implementation",
            "Executive summary and technical report",
            "Follow-up assessment",
          ],
        },
      ],
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary mb-4" />,
      title: "IoT Development",
      description:
        "End-to-end IoT solutions from hardware integration to software development. Create smart, connected systems for home or business automation.",
      features: ["Device Integration", "Sensor Networks", "Automation Systems", "Remote Monitoring"],
      packages: [
        {
          name: "Starter",
          price: "$2,000",
          features: [
            "Basic IoT setup",
            "Single device integration",
            "Simple monitoring dashboard",
            "Basic automation rules",
          ],
        },
        {
          name: "Advanced",
          price: "$4,500",
          features: [
            "Multi-device integration",
            "Custom sensor network",
            "Advanced monitoring dashboard",
            "Mobile app control",
            "Complex automation rules",
          ],
          recommended: true,
        },
        {
          name: "Enterprise",
          price: "$8,000+",
          features: [
            "Large-scale device network",
            "Custom hardware integration",
            "AI-powered analytics",
            "Advanced security features",
            "Cloud infrastructure setup",
            "Ongoing maintenance",
          ],
        },
      ],
    },
    {
      icon: <Server className="h-12 w-12 text-primary mb-4" />,
      title: "Server Infrastructure",
      description:
        "Design, setup, and management of server infrastructure using AWS, Azure, or on-premises solutions. Optimize for performance, security, and cost.",
      features: ["Cloud Migration", "Server Setup", "Performance Optimization", "Infrastructure Management"],
      packages: [
        {
          name: "Basic Setup",
          price: "$1,200",
          features: ["Single server setup", "Basic security configuration", "Performance monitoring", "Documentation"],
        },
        {
          name: "Business Infrastructure",
          price: "$3,000",
          features: [
            "Multi-server architecture",
            "Load balancing",
            "Backup solutions",
            "Security hardening",
            "Monitoring and alerts",
          ],
          recommended: true,
        },
        {
          name: "Enterprise Solution",
          price: "$6,000+",
          features: [
            "High-availability architecture",
            "Disaster recovery planning",
            "Advanced security implementation",
            "Performance optimization",
            "Automated scaling",
            "24/7 monitoring",
          ],
        },
      ],
    },
    {
      icon: <Database className="h-12 w-12 text-primary mb-4" />,
      title: "Database Solutions",
      description:
        "Database design, optimization, and management services for MongoDB, MySQL, and other database systems. Ensure data integrity and performance.",
      features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"],
      packages: [
        {
          name: "Basic",
          price: "$900",
          features: ["Database setup", "Basic schema design", "Initial optimization", "Backup configuration"],
        },
        {
          name: "Standard",
          price: "$2,200",
          features: [
            "Advanced schema design",
            "Query optimization",
            "Data migration",
            "Replication setup",
            "Performance monitoring",
          ],
          recommended: true,
        },
        {
          name: "Enterprise",
          price: "$4,500+",
          features: [
            "Complex database architecture",
            "Sharding implementation",
            "High-availability setup",
            "Advanced security measures",
            "Custom backup solutions",
            "Ongoing maintenance",
          ],
        },
      ],
    },
    {
      icon: <Shield className="h-12 w-12 text-primary mb-4" />,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to help your business leverage technology effectively. Get expert advice on technology selection, implementation, and optimization.",
      features: ["Technology Assessment", "Strategic Planning", "Process Optimization", "Training & Support"],
      packages: [
        {
          name: "Single Consultation",
          price: "$500",
          features: ["2-hour consultation", "Basic assessment", "Recommendations report", "Follow-up call"],
        },
        {
          name: "Project Consulting",
          price: "$2,000",
          features: [
            "Comprehensive assessment",
            "Detailed strategy document",
            "Implementation roadmap",
            "Multiple consultation sessions",
            "Project oversight",
          ],
          recommended: true,
        },
        {
          name: "Ongoing Partnership",
          price: "$1,000/month",
          features: [
            "Regular consultation sessions",
            "Technology roadmap development",
            "Vendor selection assistance",
            "Implementation oversight",
            "Training and knowledge transfer",
            "Continuous improvement",
          ],
        },
      ],
    },
  ]

  return (
    <div className="container-margin py-12 pt-32">
      <AnimatedText as="h1" className="text-4xl font-bold mb-2 shadow-text">
        My Services
      </AnimatedText>
      <AnimatedText as="p" className="text-muted-foreground mb-8" delay={200}>
        Comprehensive solutions tailored to your needs
      </AnimatedText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <AnimatedSection key={index} delay={index * 100}>
            <Card className="hover-lift shadow-card-hover border-border hover:border-primary transition-colors h-full">
              <CardHeader>
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
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
                <Button
                  className="w-full hover-lift shadow-primary-hover"
                  onClick={() => document.getElementById(`service-${index}`).scrollIntoView({ behavior: "smooth" })}
                >
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-24 mb-16">
        <AnimatedText as="h2" className="text-3xl font-bold mb-8 text-center shadow-text">
          Service Packages & Pricing
        </AnimatedText>

        {services.map((service, serviceIndex) => (
          <div key={serviceIndex} id={`service-${serviceIndex}`} className="mb-20 scroll-mt-32">
            <AnimatedSection delay={100}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 shadow-text">
                {service.icon && (
                  <span className="text-primary">{React.cloneElement(service.icon, { className: "h-6 w-6" })}</span>
                )}
                {service.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg, pkgIndex) => (
                  <Card
                    key={pkgIndex}
                    className={`hover-lift ${
                      pkg.recommended
                        ? "border-primary shadow-primary-hover"
                        : "shadow-card-hover border-border hover:border-primary"
                    } transition-all relative h-full`}
                  >
                    {pkg.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground shadow-primary">Recommended</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{pkg.name}</CardTitle>
                      <div className="mt-2 text-3xl font-bold text-primary">{pkg.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/contact" className="w-full">
                        <Button className="w-full hover-lift shadow-primary-hover">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          </div>
        ))}
      </div>

      <AnimatedSection className="mt-16 text-center bg-secondary p-12 rounded-lg shadow-card">
        <h2 className="text-2xl font-bold mb-4 shadow-text">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Every project is unique. If you don't see a package that fits your needs, I offer custom solutions tailored to
          your specific requirements and budget.
        </p>
        <Link href="/contact" className="btn-primary hover-lift shadow-primary-hover inline-block">
          Request a Custom Quote
        </Link>
      </AnimatedSection>

      <AnimatedSection className="mt-16" delay={200}>
        <h2 className="text-2xl font-bold mb-6 shadow-text">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">How do we start working together?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                The process begins with an initial consultation to understand your needs. After that, I'll provide a
                detailed proposal with timeline and pricing. Once approved, we'll begin the development process with
                regular updates and milestones.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">What is your payment structure?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Typically, I require a 50% deposit to begin work, with the remaining 50% due upon project completion.
                For larger projects, we can arrange milestone-based payments. Monthly retainers are available for
                ongoing services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">How long do projects typically take?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity. Simple websites might take 2-4 weeks, while complex web
                applications can take 2-3 months. I'll provide a detailed timeline during the proposal phase based on
                your specific requirements.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Do you offer ongoing maintenance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, I offer ongoing maintenance and support packages to keep your systems running smoothly. These can
                be tailored to your needs, from basic monitoring to comprehensive management and regular updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  )
}
