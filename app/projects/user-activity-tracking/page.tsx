"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Eye, Github, FileText, Activity, Zap, Globe, AlertCircle, BarChart3, Shield, Database, Code, Cloud, TrendingUp, CheckCircle2 } from "lucide-react"

export default function TracklyProjectPage() {
  const technologies = [
    { layer: "Backend", techs: "ASP.NET Core 8.0 (Web API)" },
    { layer: "Frontend", techs: "Next.js, React, Tailwind CSS, Recharts, React Leaflet" },
    { layer: "Database", techs: "MongoDB Atlas (sharded, multi-tenant)" },
    { layer: "Message Queue", techs: "RabbitMQ (async geo/anomaly processing)" },
    { layer: "Fingerprinting", techs: "FingerprintJS" },
    { layer: "GeoIP", techs: "ipapi.co / IPinfo" },
    { layer: "Authentication", techs: "JWT + API Keys" },
    { layer: "Deployment", techs: "Vercel (frontend), Docker/Render (backend)" },
  ]

  const features = [
    {
      title: "Comprehensive Tracking",
      icon: Activity,
      items: [
        "Session management",
        "Geo-location & VPN/proxy detection",
        "Device/browser fingerprinting",
        "Granular event tracking"
      ]
    },
    {
      title: "Real-Time Anomaly Detection",
      icon: AlertCircle,
      items: [
        "Rule-based + risk scoring",
        "New device/country detection",
        "Impossible travel detection (>1000 km/h)",
        "Bot action detection"
      ]
    },
    {
      title: "Admin Dashboard",
      icon: BarChart3,
      items: [
        "Real-time DAU/MAU metrics",
        "Session duration & bounce rate",
        "Interactive charts & world map",
        "Advanced filtering options"
      ]
    },
    {
      title: "Alerting & Integration",
      icon: Zap,
      items: [
        "Email & webhook alerts",
        "Lightweight JavaScript SDK",
        "REST APIs",
        "Multi-tenant isolation"
      ]
    }
  ]

  const achievements = [
    { metric: "99.9%", label: "Anomaly Detection Accuracy", subtitle: "on 50,000+ synthetic sessions" },
    { metric: "0.01%", label: "False Positives", subtitle: "optimized detection threshold" },
    { metric: "<200ms", label: "Response Time", subtitle: "for 1,000 concurrent events" },
    { metric: "100%", label: "Production Ready", subtitle: "deployable MVP with SDK and API" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-15 relative overflow-hidden">
        {/* <div className="absolute inset-0 -z-10">
          <Image
            src="https://blog.usermaven.com/wp-content/uploads/2025/04/analytics-dashboard-2.png"
            alt="Trackly analytics dashboard background"
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div> */}

        <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="px-4 py-2 border-teal-200 dark:border-teal-900/50 text-teal-700 dark:text-teal-400 text-sm font-medium">
                Personal Project • December 2025
              </Badge>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-muted-foreground">
              Trackly
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
              AI-Powered User Behavior Analytics with Real-Time Anomaly Detection
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A full-stack multi-tenant SaaS platform combining comprehensive user behavior tracking with intelligent real-time anomaly detection. Built as a Bachelor's thesis project, Trackly bridges the gap between traditional product analytics and security-focused UEBA solutions for SMEs and web applications.
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap justify-center gap-3 py-4">
            {["ASP.NET Core 8.0", "Next.js", "React", "MongoDB Atlas", "RabbitMQ", "gRPC", "Microservice", "Tailwind CSS", "Docker"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1.5 text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <Button asChild size="lg" className="gap-2 h-12 bg-teal-600 hover:bg-teal-700">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Eye className="h-5 w-5" />
                View Live Demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 h-12">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-5 space-y-32">
        {/* Project Overview Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">Project Overview</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              In today's digital world, businesses need both deep user insights and strong security. Trackly provides complete visibility into user interactions while proactively detecting threats like account takeovers, fraud, and bots — all in one unified platform.
            </p>
          </div>
        </section>

        {/* Key Functionalities Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Key Functionalities</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 space-y-6">
                  <div className="inline-flex p-3 rounded-lg bg-teal-100 dark:bg-teal-950/30 w-fit">
                    <feature.icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Technology Stack</h2>
            <p className="text-lg text-muted-foreground">Solo Implemented End-to-End</p>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-card to-card/50">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-border">
                    {technologies.map((tech, index) => (
                      <tr key={index} className="hover:bg-muted/30 transition-colors">
                        <td className="py-4 px-6 font-semibold text-teal-600 w-1/4">
                          {tech.layer}
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">
                          {tech.techs}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* System Architecture Section */}
        <section className="space-y-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold">System Architecture</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              API Gateway → RabbitMQ → Background Workers → MongoDB. Async processing ensures scalability while maintaining real-time anomaly detection capabilities.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96 bg-gradient-to-br from-muted to-muted/50">
            <Image
              src="/projects/trackly/trackly.png"
              alt="system architecture diagram"
              fill
              className="object-contain p-8"
            />
          </div>
        </section>

        {/* Results & Achievements Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Results & Achievements</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex p-2 rounded-lg bg-teal-100 dark:bg-teal-950/30">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-teal-600">
                    {achievement.metric}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{achievement.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-none shadow-xl bg-gradient-to-br from-teal-50 dark:from-teal-950/20 to-card/50 mt-12">
            <CardContent className="p-8">
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-2 rounded-lg bg-teal-100 dark:bg-teal-950/30 mt-1 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Production-Ready MVP</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      This solo project demonstrates my ability to design, build, and evaluate a production-ready SaaS product from scratch — covering architecture, security, scalability, and user experience. The deployable MVP includes a lightweight JavaScript SDK, REST APIs, and a comprehensive admin dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/trackly-dashboard.jpg"
                alt="dashboard active sessions list"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/trackly-active-session-list.jpg"
                alt="dashboard active sessions list"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/map-active-session.jpg"
                alt="active sessions world map"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>


            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/suspicious.jpg"
                alt="suspicious activity alert"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
               <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/country.jpg"
                alt="country security risk scoring interface"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/graph.jpg"
                alt="country security risk scoring interface"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/analytics.jpg"
                alt="Device, duration, and bounce rate analytics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg h-80 bg-muted">
              <Image
                src="/projects/trackly/country.jpg"
                alt="geo location and traffic source analytics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 space-y-6 border-t border-border">
          <p className="text-muted-foreground">Built by Md Hafizur Rahman</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              GitHub
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Live Demo
            </Link>
            {/* <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Thesis PDF
            </Link> */}
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
