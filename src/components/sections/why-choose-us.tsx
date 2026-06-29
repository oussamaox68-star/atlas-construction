"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Clock,
  Users,
  Award,
  Zap,
  HeartHandshake,
} from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We maintain the highest standards of quality in every project. Our work is backed by comprehensive warranties and our commitment to excellence.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We understand the importance of deadlines. Our proven project management ensures your project is completed on schedule, every time.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of skilled professionals with years of experience. From architects to craftsmen, we have the expertise to deliver exceptional results.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description:
      "Recognized industry-wide for our outstanding work and innovation. Our awards reflect our dedication to pushing the boundaries of construction excellence.",
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description:
      "We embrace the latest technologies and methods. From sustainable materials to smart home integration, we bring cutting-edge solutions to your project.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Focused",
    description:
      "Your satisfaction is our priority. We work closely with you throughout the process, ensuring your vision is realized and your expectations exceeded.",
  },
]

export function WhyChooseUs() {
  return (
    <Section className="bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-16 lg:mb-20"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Discover the Atlas Construction Group difference. We are not just builders—we are partners in bringing your vision to life.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-card hover:shadow-elevated transition-shadow duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/10 dark:to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-soft">
                  <feature.icon className="h-8 w-8 text-white drop-shadow-sm" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
