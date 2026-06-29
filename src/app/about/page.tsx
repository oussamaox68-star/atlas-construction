"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Users, Building2, Target, HeartHandshake, Zap } from "lucide-react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { COMPANY } from "@/lib/company"
import { IMAGES } from "@/lib/images"

export default function About() {
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
              About {COMPANY.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Building excellence since {COMPANY.founded}. We transform visions into reality with quality construction and innovative solutions across {COMPANY.address.region}.
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-5 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Founded in {COMPANY.founded}, {COMPANY.name} has grown from a small family business to one of Texas&apos;s most trusted construction companies. Our journey began with a simple mission: to deliver exceptional quality and unparalleled service to every client.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
              Over the past 25 years, we have completed over 500 projects across Houston and the greater Texas region, ranging from residential homes to commercial complexes. Our team brings decades of combined experience to every project.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, we continue to push the boundaries of construction innovation while maintaining the core values that define our success: integrity, quality, and customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-elevated relative">
              <Image
                src={IMAGES.about}
                alt="Atlas Construction Group team on a commercial job site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-slate-50 dark:bg-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Our Values
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: Award, title: "Excellence", description: "We strive for perfection in every project, delivering the highest quality workmanship." },
            { icon: HeartHandshake, title: "Integrity", description: "Honest and transparent relationships with clients, partners, and team members." },
            { icon: Users, title: "Collaboration", description: "Working together with clients and partners to achieve shared goals." },
            { icon: Target, title: "Innovation", description: "Embracing new technologies and methods to deliver cutting-edge solutions." },
            { icon: Zap, title: "Efficiency", description: "Optimizing processes to deliver projects on time and within budget." },
            { icon: Building2, title: "Sustainability", description: "Committed to environmentally responsible construction practices." },
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full hover:shadow-elevated transition-shadow duration-300">
                <CardHeader>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center mb-4 shadow-soft">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Let us discuss your next project and how we can bring your vision to life.
          </p>
        </div>
        <div className="text-center">
          <Button size="lg" href="/contact">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  )
}
