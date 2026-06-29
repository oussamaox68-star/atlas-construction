import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Read what our satisfied clients have to say about their experience working with Atlas Construction Group on their construction projects.",
  keywords: ["client testimonials", "construction reviews", "Houston builder reviews"],
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
