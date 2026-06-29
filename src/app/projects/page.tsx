"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { MapPin, Calendar, ArrowRight, Filter } from "lucide-react"
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/projects"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All")

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory)

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of exceptional construction projects across Texas and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-amber-500" />
            <span className="text-lg font-semibold text-slate-900 dark:text-white">
              Filter by Category
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-elevated transition-shadow duration-300 group">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-amber-500" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <div><span className="font-semibold">Size:</span> {project.size}</div>
                    <div><span className="font-semibold">Duration:</span> {project.duration}</div>
                  </div>
                  <Button variant="ghost" href="/contact" className="group/btn px-0">
                    Request Details
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-slate-900">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Start Your Project
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let us discuss your next project.
          </p>
        </div>
        <div className="text-center">
          <Button size="lg" href="/contact">
            Get Free Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Section>
    </>
  )
}
