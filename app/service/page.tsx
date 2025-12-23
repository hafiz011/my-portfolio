"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Code, Globe, Lock, Server, Database, Shield, Rocket, Wrench, Monitor, Cpu, Check, ArrowRight, ArrowDown
} from "lucide-react"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedText } from "@/components/animated-text"

export default function ServicePage() {
  const categories = [
    {
      title: "Core Development Services",
      icon: <Code className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Web Development",
          icon: <Globe className="h-12 w-12 text-primary mb-4" />,
          description: "Full-stack custom web applications with modern technologies (React, Next.js, ASP.NET Core, MongoDB). Scalable, secure, and responsive.",
          features: ["Custom Web Applications", "API Development", "Database Design", "UI/UX Implementation"],
          packages: [
            { name: "Basic", price: "$1,500", features: ["Single-page website", "Responsive design", "Basic contact form", "3 revisions", "1 month support"] },
            { name: "Standard", price: "$3,500", features: ["Multi-page app", "User authentication", "Database integration", "Admin dashboard", "5 revisions", "3 months support"], recommended: true },
            { name: "Premium", price: "$7,000+", features: ["Complex application", "Custom APIs", "Advanced security", "Third-party integrations", "Unlimited revisions", "6 months support"] },
          ],
        },
        {
          title: "Frontend Development",
          icon: <Code className="h-12 w-12 text-primary mb-4" />,
          description: "High-performance, modern frontend solutions using React, Next.js, and Tailwind CSS.",
          features: ["React & Next.js Development", "Responsive Design", "Dashboard UI", "Performance Optimization"],
          packages: [
            { name: "Basic", price: "$1,200", features: ["Static site", "Responsive layout", "Basic animations", "2 revisions", "1 month support"] },
            { name: "Standard", price: "$2,800", features: ["Dynamic SPA", "Component library", "State management", "Performance audit", "4 revisions", "3 months support"], recommended: true },
            { name: "Premium", price: "$5,500+", features: ["Advanced Next.js app", "SSR/SSG", "Custom animations", "Accessibility", "Unlimited revisions", "6 months support"] },
          ],
        },
        {
          title: "API & Backend Engineering",
          icon: <Server className="h-12 w-12 text-primary mb-4" />,
          description: "Secure, scalable REST APIs and backend systems with authentication and integrations.",
          features: ["REST API Development", "JWT & API Key Security", "Third-Party Integrations", "Performance Optimization"],
          packages: [
            { name: "Basic", price: "$1,000", features: ["Simple REST API", "Basic auth", "CRUD operations", "API docs"] },
            { name: "Standard", price: "$2,500", features: ["Secure JWT auth", "Multiple integrations", "Error handling & logging", "Rate limiting", "3 months support"], recommended: true },
            { name: "Premium", price: "$5,000+", features: ["OAuth2 + JWT", "Caching", "Webhooks", "Advanced monitoring", "6 months support"] },
          ],
        },
      ],
    },
    {
      title: "SaaS & Product Engineering",
      icon: <Rocket className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "SaaS & Product Development",
          icon: <Rocket className="h-12 w-12 text-primary mb-4" />,
          description: "End-to-end SaaS product development with multi-tenancy, billing, and scalable architecture.",
          features: ["SaaS Architecture Design", "Multi-Tenant Systems", "Authentication & Authorization", "Subscription & Billing"],
          packages: [
            { name: "Starter", price: "$3,000", features: ["Basic MVP", "Single-tenant", "User auth", "Simple billing"] },
            { name: "Professional", price: "$6,000", features: ["Multi-tenant setup", "Role-based access", "Stripe integration", "Admin panel", "Analytics"], recommended: true },
            { name: "Enterprise", price: "$12,000+", features: ["Advanced tenancy", "Custom billing", "White-labeling", "Scalable infra", "Ongoing support"] },
          ],
        },
        {
          title: "Security Analytics & Monitoring",
          icon: <Monitor className="h-12 w-12 text-primary mb-4" />,
          description: "Real-time monitoring and analytics to detect suspicious activity and protect your application.",
          features: ["User Activity Tracking", "Login & Session Monitoring", "Geo-location Analysis", "Suspicious Behavior Detection"],
          packages: [
            { name: "Basic", price: "$1,500", features: ["Basic logging", "Login tracking", "Email alerts"] },
            { name: "Advanced", price: "$3,500", features: ["Full audit logs", "Geo-fencing", "Anomaly detection", "Real-time dashboard"], recommended: true },
            { name: "Premium", price: "$6,000+", features: ["AI-powered detection", "Custom alerts", "SIEM integration", "Incident response"] },
          ],
        },
      ],
    },
    {
      title: "Security Services",
      icon: <Lock className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Cybersecurity Services",
          icon: <Lock className="h-12 w-12 text-primary mb-4" />,
          description: "Professional security audits, penetration testing, and implementation of robust defenses.",
          features: ["Security Audits", "Vulnerability Assessment", "Security Implementation", "Penetration Testing"],
          packages: [
            { name: "Basic Audit", price: "$800", features: ["Vulnerability scan", "Config review", "Summary report"] },
            { name: "Comprehensive", price: "$2,500", features: ["In-depth testing", "Network analysis", "Prioritized findings", "Remediation guide"], recommended: true },
            { name: "Enterprise", price: "$5,000+", features: ["Full pen-testing", "Threat modeling", "Architecture review", "Follow-up"] },
          ],
        },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      icon: <Server className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Server Infrastructure",
          icon: <Server className="h-12 w-12 text-primary mb-4" />,
          description: "Cloud or on-premise server setup and management (AWS, Azure, etc.) for performance and reliability.",
          features: ["Cloud Migration", "Server Setup", "Performance Optimization", "Infrastructure Management"],
          packages: [
            { name: "Basic Setup", price: "$1,200", features: ["Single server", "Basic security", "Monitoring", "Docs"] },
            { name: "Business", price: "$3,000", features: ["Multi-server", "Load balancing", "Backups", "Alerts"], recommended: true },
            { name: "Enterprise", price: "$6,000+", features: ["High-availability", "Disaster recovery", "Auto-scaling", "24/7 monitoring"] },
          ],
        },
        {
          title: "DevOps & Deployment",
          icon: <Wrench className="h-12 w-12 text-primary mb-4" />,
          description: "Automated CI/CD pipelines, containerization, and cloud deployments.",
          features: ["CI/CD Pipelines", "Docker & Containers", "Cloud Deployment", "Monitoring & Logging"],
          packages: [
            { name: "Basic", price: "$1,500", features: ["Simple CI/CD", "Docker setup", "Basic deploy"] },
            { name: "Standard", price: "$3,500", features: ["Full pipeline", "Docker orchestration", "Logging", "Zero-downtime"], recommended: true },
            { name: "Enterprise", price: "$7,000+", features: ["Kubernetes", "Advanced testing", "Infrastructure as Code", "Full monitoring"] },
          ],
        },
      ],
    },
    {
      title: "Data & Storage",
      icon: <Database className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "Database Solutions",
          icon: <Database className="h-12 w-12 text-primary mb-4" />,
          description: "Design, optimization, and management of databases (MongoDB, MySQL, PostgreSQL, etc.).",
          features: ["Database Design", "Performance Tuning", "Data Migration", "Backup Solutions"],
          packages: [
            { name: "Basic", price: "$900", features: ["Setup & schema", "Initial optimization", "Backup config"] },
            { name: "Standard", price: "$2,200", features: ["Advanced schema", "Query tuning", "Migration", "Replication"], recommended: true },
            { name: "Enterprise", price: "$4,500+", features: ["Sharding", "High-availability", "Custom backups", "Ongoing maintenance"] },
          ],
        },
      ],
    },
    {
      title: "Consulting & Support",
      icon: <Shield className="h-10 w-10 text-primary" />,
      services: [
        {
          title: "IT Consulting",
          icon: <Shield className="h-12 w-12 text-primary mb-4" />,
          description: "Expert guidance on technology strategy, architecture, and implementation.",
          features: ["Technology Assessment", "Strategic Planning", "Process Optimization", "Training & Support"],
          packages: [
            { name: "Single Session", price: "$500", features: ["2-hour consult", "Assessment", "Report", "Follow-up"] },
            { name: "Project Consulting", price: "$2,000", features: ["Full assessment", "Roadmap", "Multiple sessions", "Oversight"], recommended: true },
            { name: "Ongoing", price: "$1,000/month", features: ["Regular sessions", "Roadmap updates", "Vendor help", "Continuous support"] },
          ],
        },
        {
          title: "Maintenance & Support",
          icon: <Cpu className="h-12 w-12 text-primary mb-4" />,
          description: "Ongoing maintenance to keep your systems secure, updated, and performing optimally.",
          features: ["Bug Fixes", "Security Updates", "Performance Monitoring", "Feature Enhancements"],
          packages: [
            { name: "Basic", price: "$300/month", features: ["Bug fixes", "Security patches", "Email support"] },
            { name: "Standard", price: "$800/month", features: ["All basic + enhancements", "Performance tuning", "Priority support", "Reports"], recommended: true },
            { name: "Premium", price: "$1,500+/month", features: ["Dedicated support", "Proactive monitoring", "New features", "24/7 emergency"] },
          ],
        },
      ],
    },
  ]

  let serviceIndex = 0

  return (
    <div className="container-margin py-12 pt-32">
      <div className="text-center mb-16">
        <AnimatedText as="h1" className="text-4xl font-bold mb-4 shadow-text">
          My Services
        </AnimatedText>
        <AnimatedText as="p" className="text-muted-foreground text-lg max-w-3xl mx-auto" delay={200}>
          Comprehensive solutions tailored to your needs — organized by category
        </AnimatedText>
      </div>

      {/* Service Overview Cards */}
      {categories.map((category, catIdx) => (
        <div key={catIdx} className="mb-20">
          <AnimatedSection delay={catIdx * 100}>
            <div className="flex items-center gap-4 mb-10">
              {category.icon}
              <h2 className="text-3xl font-semibold shadow-text">{category.title}</h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services.map((service, servIdx) => {
              const currentIndex = serviceIndex++
              return (
                <AnimatedSection key={currentIndex} delay={100 + servIdx * 100}>
                  <Card className="hover-lift shadow-card-hover border-border hover:border-primary transition-colors h-full">
                    <CardHeader>
                      {service.icon}
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        {service.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full hover-lift shadow-primary-hover"
                        onClick={() => document.getElementById(`service-${currentIndex}`).scrollIntoView({ behavior: "smooth" })}
                      >
                        View Pricing
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      ))}

      {/* Service Packages & Pricing Section - Exactly like your original */}
      <div className="mt-24 mb-16">
        <AnimatedText as="h2" className="text-3xl font-bold mb-12 text-center shadow-text">
          Service Packages & Pricing
        </AnimatedText>

        {categories.flatMap(category => category.services).map((service, serviceIndex) => (
          <div key={serviceIndex} id={`service-${serviceIndex}`} className="mb-20 scroll-mt-32">
            <AnimatedSection delay={100}>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 shadow-text">
                {service.icon && (
                  <span className="text-primary">{React.cloneElement(service.icon, { className: "h-8 w-8" })}</span>
                )}
                {service.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.packages.map((pkg, pkgIndex) => (
                  <Card
                    key={pkgIndex}
                    className={`hover-lift relative h-full transition-all ${
                      pkg.recommended
                        ? "border-primary shadow-primary-hover"
                        : "shadow-card-hover border-border hover:border-primary"
                    }`}
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
                      <ul className="space-y-3">
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

      {/* Custom Solution CTA */}
      <AnimatedSection className="my-20 text-center bg-secondary/50 p-12 rounded-2xl shadow-card">
        <h2 className="text-3xl font-bold mb-4 shadow-text">Need a Custom Solution?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
          Every project is unique. If none of the packages fit perfectly, I can create a fully custom solution based on your exact requirements and budget.
        </p>
        <Link href="/contact">
          <Button size="lg" className="hover-lift shadow-primary-hover">
            Request Custom Quote
          </Button>
        </Link>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection delay={200}>
        <h2 className="text-3xl font-bold mb-10 text-center shadow-text">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-card-hover">
            <CardHeader><CardTitle className="text-lg">How do we get started?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We start with a free initial consultation to discuss your needs. Then I prepare a detailed proposal with scope, timeline, and pricing.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-card-hover">
            <CardHeader><CardTitle className="text-lg">What are the payment terms?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Typically 50% upfront and 50% on completion. Milestone payments available for larger projects. Monthly retainers for ongoing support.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-card-hover">
            <CardHeader><CardTitle className="text-lg">How long do projects take?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Depends on complexity — simple sites: 2–4 weeks, complex apps: 2–4 months. You'll get a clear timeline in the proposal.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-card-hover">
            <CardHeader><CardTitle className="text-lg">Do you offer maintenance?</CardTitle></CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes! Flexible monthly packages for security updates, bug fixes, monitoring, and new features.
              </p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  )
}