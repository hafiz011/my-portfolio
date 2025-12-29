"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2, HeartHandshake, Shield, Zap, Users, Database, Lock, TrendingUp, Layout, Server, Code2, Camera } from "lucide-react"

export default function BloodBDProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="relative mb-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
              <HeartHandshake className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium text-red-700 dark:text-red-400">Healthcare & Social Impact</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
              BloodBD.org
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A full-featured blood donation management platform connecting donors, recipients, and hospitals —
              saving lives through real-time availability, secure authentication, and scalable architecture.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {[
                { name: "ASP.NET Core 8", icon: Code2 },
                { name: "Blazor", icon: Layout },
                { name: "SQL Server", icon: Database },
                { name: "Entity Framework", icon: Server },
                { name: "Healthcare", icon: HeartHandshake },
                { name: "Social Impact", icon: Users }
              ].map((tech) => (
                <Badge key={tech.name} variant="secondary" className="px-4 py-2 text-base hover:bg-secondary/80 transition-colors">
                  <tech.icon className="h-4 w-4 mr-2" />
                  {tech.name}
                </Badge>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Button asChild size="lg" className="gap-2 text-lg px-8 h-12 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 transition-all">
                <a href="https://bloodbd.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Site
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">The Challenge</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
            </div>

            <Card className="border-none shadow-xl bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-8 md:p-12 space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  In Bangladesh, finding blood donors during emergencies is a critical challenge. Traditional methods rely on
                  unstructured social media posts, causing dangerous delays in life-saving situations.
                </p>
                <p className="text-foreground font-medium">
                  BloodBD.org provides a secure, centralized platform for managing donors, blood requests, hospitals, and
                  administrators — making the process efficient, reliable, and impactful.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-20" />

        {/* Screenshots Gallery */}
        <section className="mb-32">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-primary">
              <Camera className="h-8 w-8" />
              <h2 className="text-4xl md:text-5xl font-bold">Visual Showcase</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/projects/bloodbd/home.jpg", alt: "Home page with hero section and quick access", label: "Home Page" },
              { src: "/projects/bloodbd/dashboard.jpg", alt: "Admin Dashboard showing donor management", label: "Admin Dashboard" },
              { src: "/projects/bloodbd/request.jpg", alt: "Blood request management interface", label: "Request Management" },
              { src: "/projects/bloodbd/request-search.jpg", alt: "Donor search with advanced filters", label: "Donor Search" },
              { src: "/projects/bloodbd/profile.jpg", alt: "User profile with donation history", label: "User Profile" },
              { src: "/projects/bloodbd/donor-details.jpg", alt: "Detailed donor information view", label: "Donor Details" }
            ].map((screenshot, index) => (
              <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0 relative aspect-video overflow-hidden">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white text-lg font-semibold p-6">{screenshot.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* Core Features */}
        <section className="mb-32">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-3 text-primary">
              <HeartHandshake className="h-10 w-10 text-red-600" />
              <h2 className="text-4xl md:text-5xl font-bold">Core Features</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Lock, text: "Role-based authentication with ASP.NET Core Identity", color: "text-blue-600" },
              { icon: Users, text: "Instant donor search by blood group & location", color: "text-red-600" },
              { icon: TrendingUp, text: "Donation history & availability tracking", color: "text-green-600" },
              { icon: HeartHandshake, text: "Hospital & organization management dashboard", color: "text-purple-600" },
              { icon: Shield, text: "Admin panel for users, donations & reports", color: "text-orange-600" },
              { icon: Layout, text: "Fully responsive Blazor UI", color: "text-cyan-600" },
              { icon: Zap, text: "Built-in contact & blood request system", color: "text-yellow-600" }
            ].map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`${feature.color} bg-background p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <p className="text-base leading-relaxed pt-1">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-20" />

        {/* System Architecture */}
        <section className="mb-32">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-3 text-primary">
              <Server className="h-10 w-10" />
              <h2 className="text-4xl md:text-5xl font-bold">System Architecture</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
          </div>

          <Card className="max-w-5xl mx-auto border-none shadow-2xl bg-gradient-to-br from-card to-card/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl">Clean Layered Architecture</CardTitle>
              <CardDescription className="text-lg">Separation of concerns for maintainability and scalability</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="relative aspect-video mb-10 rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/projects/bloodbd/architecture.png"
                  alt="BloodBD.org layered architecture: Presentation (Blazor), Application, Infrastructure (EF Core + SQL Server), Identity"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Layout, text: "Presentation Layer", desc: "Blazor & Razor Components" },
                  { icon: Code2, text: "Application Layer", desc: "Business logic & services" },
                  { icon: Database, text: "Infrastructure Layer", desc: "Entity Framework & SQL Server" },
                  { icon: Lock, text: "Identity Layer", desc: "ASP.NET Core Identity" }
                ].map((layer, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <layer.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">{layer.text}</p>
                      <p className="text-sm text-muted-foreground">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-20" />

        {/* Challenges & Learnings */}
        <section className="mb-32">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">Challenges & Key Learnings</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700 dark:text-red-400 flex items-center gap-3">
                  <Shield className="h-7 w-7" />
                  Major Challenges
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Designing a secure role-based identity system from scratch",
                  "Optimizing complex donor search queries for speed",
                  "Implementing accurate real-time availability logic",
                  "Ensuring performance and privacy with growing user data"
                ].map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{challenge}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 dark:text-green-400 flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7" />
                  Key Learnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Production-grade ASP.NET Core & Blazor best practices",
                  "Advanced security patterns (authentication & authorization)",
                  "Blazor component performance optimization",
                  "Real-world healthcare application design & deployment"
                ].map((learning, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{learning}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-20" />

        {/* Performance & Security */}
        <section className="mb-32">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-3 text-primary">
              <Shield className="h-10 w-10 text-blue-600" />
              <h2 className="text-4xl md:text-5xl font-bold">Performance & Security</h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-700 dark:text-blue-400 flex items-center gap-3">
                  <Lock className="h-7 w-7" />
                  Security First
                </CardTitle>
                <CardDescription className="text-base">Built with industry-standard security practices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "ASP.NET Core Identity with hashed passwords",
                  "Strict role-based access control (Admin, Hospital, Donor)",
                  "Comprehensive input validation & data protection"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-black/20">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-700 dark:text-purple-400 flex items-center gap-3">
                  <Zap className="h-7 w-7" />
                  Optimized Performance
                </CardTitle>
                <CardDescription className="text-base">Engineered for speed and scalability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Optimized database indexing for fast searches",
                  "Efficient Entity Framework Core queries",
                  "Scalable layered architecture ready for growth"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-white/50 dark:bg-black/20">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <p className="text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600 opacity-90" />
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center py-20 px-8 text-white space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Let's Build Something Impactful</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Passionate about creating solutions that make a real difference? I'd love to collaborate on your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="px-10 text-lg h-12 hover:scale-105 transition-transform">
                <a href="https://bloodbd.org" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Explore Live Site
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-10 text-lg h-12 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
