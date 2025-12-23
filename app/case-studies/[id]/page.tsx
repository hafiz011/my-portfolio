// app/case-studies/[id]/page.tsx  (Dynamic Details Page - /case-studies/ecommerce-platform etc.)

"use client"

import React from "react"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimatedText } from "@/components/animated-text"

const caseStudyDetails: Record<string, {
  title: string
  overview: string
  challenge: string
  solution: string[]
  technologies: string[]
  results: string[]
  clientQuote?: string
}> = {

    "enterprise-api-security": {
    title: "Enterprise API Security Assessment",
    overview: "Performed a targeted security assessment on a high-traffic Laravel-based REST API serving sensitive financial data. Discovered and reported critical information disclosure vulnerabilities that could enable reconnaissance and further attacks.",
    challenge: "The client had recently launched a new API gateway for their mobile and web applications. They suspected potential misconfigurations but had no internal security team capable of performing in-depth testing. The API handled authenticated financial transactions, making any information leak a serious risk.",
    solution: [
        "Conducted black-box and grey-box testing on public API endpoints",
        "Tested invalid routes, malformed requests, and error conditions",
        "Identified verbose error responses exposing internal server paths, framework details, and stack traces",
        "Confirmed root cause: debug mode enabled in production (APP_DEBUG=true)",
        "Provided detailed Proof of Concept with real request/response examples",
        "Delivered comprehensive report with severity ratings, impact analysis, and step-by-step remediation",
        "Recommended API-specific exception handler and production-hardened configuration",
    ],
    technologies: ["Laravel", "PHP", "REST API", "Burp Suite", "Postman", "OWASP ZAP", "Linux Server Analysis"],
    results: [
        "Critical vulnerability (Information Disclosure via Verbose Errors) identified and rated High severity",
        "Client disabled debug mode and implemented custom API exception handler within 24 hours",
        "All internal paths, framework details, and stack traces eliminated from error responses",
        "Reduced attack surface significantly — prevented reconnaissance for framework-specific exploits",
        "Client passed follow-up external audit with zero findings in error handling",
        "Established ongoing security review process for future deployments",
    ],
    clientQuote: "The assessment uncovered a serious issue we had completely overlooked. The detailed report and clear remediation steps allowed us to fix it immediately. Highly professional and thorough.",
    },

  "ecommerce-platform": {
    title: "Secure E-Commerce Platform",
    overview: "A modern, multi-tenant SaaS e-commerce platform built for a startup, supporting multiple stores with isolated data and custom branding.",
    challenge: "The client needed a secure, scalable platform that could handle multiple vendors while ensuring PCI compliance and protecting user data.",
    solution: [
      "Designed multi-tenant architecture with tenant isolation at database level",
      "Implemented JWT + refresh token authentication with role-based access control",
      "Integrated Stripe for payments with webhook handling and subscription management",
      "Built responsive admin dashboard with real-time analytics using SignalR",
      "Added security analytics: login monitoring, rate limiting, and suspicious activity alerts",
    ],
    technologies: ["Next.js", "React", ".NET Core", "MongoDB", "Redis", "Stripe", "Docker", "AWS"],
    results: [
      "Platform launched with 50+ active stores in first 3 months",
      "Zero security incidents reported",
      "99.9% uptime with auto-scaling",
      "Reduced operational costs by 40% using serverless components",
    ],
    clientQuote: "Exceptional work — delivered a secure and professional platform ahead of schedule.",
  },
  "cybersecurity-dashboard": {
    title: "Real-Time Security Monitoring Dashboard",
    overview: "Enterprise-grade security operations center dashboard for monitoring threats across multiple systems.",
    challenge: "Client required real-time visibility into vulnerabilities, attacks, and compliance status across their infrastructure.",
    solution: [
      "Built Blazor Server app with SignalR for live updates",
      "Integrated multiple data sources: vulnerability scanners, logs, and SIEM",
      "Implemented custom anomaly detection rules",
      "Created executive and technical dashboards with drill-down capabilities",
    ],
    technologies: ["Blazor", ".NET 8", "SignalR", "ElasticSearch", "Kibana", "Docker", "AWS"],
    results: [
      "Reduced mean time to detect (MTTD) threats by 70%",
      "Automated reporting saved 20+ hours/week",
      "Passed external security audit with zero critical findings",
    ],
  },
  // Add more details for other IDs as needed...
  // "iot-home-automation": { ... },
  // "cloud-migration-project": { ... },
}

export default function CaseStudyDetailPage({ params }: { params: { id: string } }) {
  const study = caseStudyDetails[params.id.replace(/-/g, "")] || caseStudyDetails[params.id]

  if (!study) {
    notFound()
  }

  return (
    <div className="container-margin py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/case-studies">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Case Studies
          </Button>
        </Link>

        <AnimatedText as="h1" className="text-5xl font-bold mb-8 shadow-text">
          {study.title}
        </AnimatedText>

        <p className="text-xl text-muted-foreground mb-12">{study.overview}</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Challenge</h2>
            <p className="text-lg text-muted-foreground">{study.challenge}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <ul className="space-y-4">
              {study.solution.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
                {study.clientQuote && (
                  <p className="mt-8 italic text-lg border-l-4 border-primary pl-6 py-2">
                    "{study.clientQuote}" — Client
                  </p>
                )}
              </CardContent>
            </Card>
          </section>
        </div>

        <div className="text-center mt-16">
          <Link href="/contact">
            <Button size="lg" className="hover-lift shadow-primary-hover">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}