"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { PROJECTS } from "@/lib/projects"

export function Projects() {
  const featuredProjects = PROJECTS.slice(0, 6)

  return (
    <Section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Recent Projects
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Explore our portfolio of exceptional construction projects across Texas and beyond.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 border-0 shadow-card hover:shadow-elevated transition-shadow duration-300 group">
              <div className="h-64 lg:h-72 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-semibold mb-3 border border-white/30">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-2 font-medium">
                    <MapPin className="h-4 w-4 text-amber-500" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Calendar className="h-4 w-4 text-amber-500" />
                    {project.date}
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <Button variant="ghost" href="/projects" className="group/btn px-0 font-semibold">
                  View Project
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mt-14 lg:mt-16"
      >
        <Button size="lg" variant="outline" href="/projects" className="shadow-soft hover:shadow-card">
          View All Projects
          <ArrowRight className="h-5 w-5" />
        </Button>
      </motion.div>
    </Section>
  )
}
