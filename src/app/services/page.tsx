"use client"

import { motion } from "framer-motion"
import { Services as ServicesSection } from "@/components/sections/services"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import {
  Home,
  Building,
  Hammer,
  Palette,
  Ruler,
  ClipboardList,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

const serviceDetails = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Build your dream home with our expert residential construction services.",
    features: ["Custom home building", "Home additions", "Garage construction", "Outdoor living spaces", "Foundation work"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description: "Transform your business with our commercial construction expertise.",
    features: ["Office buildings", "Retail spaces", "Industrial facilities", "Warehouses", "Restaurant construction"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Breathe new life into your existing property with comprehensive renovations.",
    features: ["Kitchen remodeling", "Bathroom renovations", "Whole house renovations", "Basement finishing", "Structural repairs"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Create stunning interiors that reflect your style and personality.",
    features: ["Space planning", "Material selection", "Color consultation", "Furniture design", "Lighting design"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Ruler,
    title: "Architecture",
    description: "Innovative architectural solutions for projects of any scale.",
    features: ["Custom designs", "3D modeling", "Blueprint creation", "Site analysis", "Permit assistance"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Seamless project management from conception to completion.",
    features: ["Budget management", "Timeline coordination", "Vendor management", "Quality control", "Progress reporting"],
    color: "from-amber-500 to-yellow-500",
  },
]

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive construction solutions tailored to your needs. From concept to completion, Atlas Construction Group delivers excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />

      <Section className="bg-slate-50 dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Service Details
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore what each of our services includes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceDetails.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full hover:shadow-elevated transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 shadow-soft`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" href="/contact" className="mt-6 group/btn px-0">
                    Get Quote
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Contact us to discuss your specific requirements and get a personalized quote.
          </p>
        </div>
        <div className="text-center">
          <Button size="lg" href="/contact">
            Request a Quote
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Section>
    </>
  )
}
