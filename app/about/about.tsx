"use client"
import Link from "next/link"
import React from "react"
import { motion } from "framer-motion"


export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>

      {/* Intro */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg mb-6 text-gray-700">
          Welcome! I'm a passionate and experienced Full Stack Developer and Cybersecurity Specialist with a strong foundation in modern software development, infrastructure management, and secure systems design. With a unique blend of development, DevSecOps, and embedded systems expertise, I thrive at the intersection of innovation, security, and performance.
        </p>
      </motion.section>

      {/* Who I Am */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 border-b pb-2">Who I Am</h2>
        <p className="text-gray-700 mb-4">
          I specialize in building scalable, secure, and cloud-native applications using technologies like .NET Core, React, MongoDB, and Docker/Kubernetes...
        </p>
        <p className="text-gray-700">
          On the security front, I have hands-on experience in penetration testing, vulnerability assessments, digital forensics, and implementing DevSecOps best practices...
        </p>
      </motion.section>

      {/* What I Do */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 border-b pb-2">What I Do</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Web Application Development",
              desc: "Crafting robust web solutions using .NET, C#, Razor Pages, Blazor, and React..."
            },
            {
              title: "Cloud Infrastructure & DevOps",
              desc: "Deploying and managing scalable applications on AWS and Azure..."
            },
            {
              title: "Cybersecurity Engineering",
              desc: "Applying OWASP principles, penetration testing, securing APIs..."
            },
            {
              title: "IoT & Embedded Systems",
              desc: "Building smart device ecosystems using ESP32, Arduino, MQTT..."
            },
            {
              title: "System Administration",
              desc: "Managing Linux and Windows servers, optimizing performance..."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-medium mb-3 text-blue-400">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Work With Me */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-blue-500 border-b pb-2">Why Work With Me</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Proven ability to bridge the gap between development and security</li>
          <li>Deep knowledge of both web and embedded system environments</li>
          <li>Committed to clean, maintainable code and scalable architecture</li>
          <li>Always exploring new tech and delivering future-ready solutions</li>
        </ul>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="text-center py-8 bg-blue-50 rounded-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Let's Build Something Secure and Scalable—Together.</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you're looking to develop a secure application, launch a cloud-native platform, or create intelligent IoT systems, I'm here to bring your vision to life with expertise and passion.
        </p>
      </motion.section>
    </div>
  )
}
