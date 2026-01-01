// components/featured-projects.tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "User Activity & Geo Tracking System",
            shortDescription:
        "A SaaS platform for tracking user behavior, detecting suspicious sessions, and delivering actionable security analytics for modern web applications.",
      tags: ["ASP.NET Core 8", "Blazor", "SQL Server", "Healthcare", "Social Impact"],
      category: "Cybersecurity, Analytics",
      image: "/projects/user-tracking.jpg",
      link: "/projects/user-activity-tracking",
    },
    {
      title: "BloodBD.org - Blood Donation Management System",
      shortDescription:
        "A full-featured blood donation management platform connecting donors, recipients, and hospitals using ASP.NET Core & Blazor.",
      tags: ["ASP.NET Core 8", "Blazor", "SQL Server", "Healthcare", "Social Impact"],
      category: "Healthcare, Social Impact, Web Development",
      status: "Completed",
      year: "2025",
      image: "/projects/bloodbd/architecture.png",
      link: "/projects/bloodbd-management-system",
    },
    {
      title: "Travel Agency Booking Website",
      category: "Web Development, eCommerce",
      image: "/projects/travel-agency.jpg",
      link: "/projects/travel-agency-website",
    },
    {
      title: "IoT Device Management System",
      category: "IoT, Web API",
      image: "/projects/IoT.jpg",
      link: "/projects/iot-device-management",
    },
  ]

 return (
    <section className="py-24 bg-background/95" id="projects" aria-labelledby="projects-heading">
      <div className="container-margin">
        {/* Section Header */}
        <header className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <AnimatedText as="h2" className="section-subtitle shadow-text text-primary/80">
            <span id="projects-heading">My Projects</span>
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg max-w-3xl">
            Crafting Digital Experiences with Purpose
          </AnimatedText>
          <AnimatedText as="p" className="text-muted-foreground max-w-2xl text-lg" delay={300}>
            Here are some of my recent works that showcase innovation, clean design, and robust functionality in cybersecurity, healthcare, IoT, and web development.
          </AnimatedText>
        </header>

        {/* Projects Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          itemScope 
          itemType="https://schema.org/ItemList"
        >
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 150}
              direction={index % 2 === 0 ? "up" : "down"}
              className="group"
            >
              <Link href={project.link} className="block h-full focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl">
                <article 
                  className="relative rounded-2xl bg-card shadow-card-hover transition-all duration-500 hover:-translate-y-4 overflow-hidden flex flex-col h-full"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  {/* Image */}
                  <figure className="aspect-[4/3] relative overflow-hidden bg-muted/40 flex items-center justify-center">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} - Project screenshot showcasing ${project.category.toLowerCase()} features`}
                      className="object-contain w-full h-full p-6 transition-transform duration-700 group-hover:scale-105"
                      loading={index < 2 ? "eager" : "lazy"}
                      itemProp="image"
                    />
                    <meta itemProp="url" content={`https://eng-hafiz-portfolio.vercel.app${project.link}`} />
                  </figure>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span 
                      className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full w-fit"
                      itemProp="keywords"
                    >
                      {project.category}
                    </span>

                    <h4 
                      className="text-xl font-bold text-foreground mb-4 line-clamp-2"
                      itemProp="name"
                    >
                      {project.title}
                    </h4>

                    {project.shortDescription && (
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3" itemProp="description">
                        {project.shortDescription}
                      </p>
                    )}

                    {project.tags && (
                      <meta itemProp="keywords" content={project.tags.join(", ")} />
                    )}

                    <div className="mt-auto flex items-center text-primary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm mr-2">View Project</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
