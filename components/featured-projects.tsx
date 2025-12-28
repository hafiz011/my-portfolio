"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { AnimatedText } from "./animated-text"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "User Activity & Geo Tracking System",
      category: "Cybersecurity, Analytics",
      image: "/projects/user-tracking.jpg",
      link: "/projects/user-activity-tracking",
    },
    {
      title: "BloodBD - Blood Donation Platform",
      category: "Web Application, Healthcare",
      image: "/projects/bloodbd.jpg",
      link: "/projects/bloodbd-platform",
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
    <section className="py-24 bg-background/95" id="projects">
      <div className="container-margin">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <AnimatedText as="h2" className="section-subtitle shadow-text text-primary/80">
            My Projects
          </AnimatedText>
          <AnimatedText as="h3" className="section-title shadow-text-lg max-w-3xl">
            Crafting Digital Experiences with Purpose
          </AnimatedText>
          <AnimatedText as="p" className="text-muted-foreground max-w-2xl text-lg" delay={300}>
            Here are some of my recent works that showcase innovation, clean design, and robust functionality.
          </AnimatedText>
        </div>

        {/* Projects Grid - 4 columns */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={index}
              delay={index * 150}
              direction={index % 2 === 0 ? "up" : "down"}
              className="group"
            >
              <Link href={project.link} className="block h-full">
                <div className="relative rounded-2xl bg-card transition-colors shadow-card-hover duration-500 hover:-translate-y-4 overflow-hidden flex flex-col h-full">
                  {/* Image - Full visible, no crop */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted/40 flex items-center justify-center">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-contain w-full h-full p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Below Image */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <span className="inline-block px-4 py-1.5 mb-3 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full w-fit">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4 line-clamp-2">
                      {project.title}
                    </h3>

                    {/* View Project Link */}
                    <div className="mt-auto flex items-center text-primary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm mr-2">View Project</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <AnimatedSection delay={600}>
            <Link
              href="/projects"
              className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              View All Projects
              <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-2" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}