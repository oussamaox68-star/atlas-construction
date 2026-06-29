import { Hero } from "@/components/sections/hero"
import { Statistics } from "@/components/sections/statistics"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Projects } from "@/components/sections/projects"
import { Testimonials } from "@/components/sections/testimonials"
import { CallToAction } from "@/components/sections/call-to-action"

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Services />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <CallToAction />
    </>
  )
}
