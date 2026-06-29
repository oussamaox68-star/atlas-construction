import { IMAGES } from "@/lib/images"

export const TESTIMONIALS = [
  {
    name: "Michael Thompson",
    role: "CEO, Tech Innovations Inc.",
    content:
      "Atlas Construction Group exceeded all our expectations. They delivered our new headquarters on time and within budget. The attention to detail and professionalism was outstanding. I highly recommend them for any commercial project.",
    rating: 5,
    avatar: "MT",
  },
  {
    name: "Sarah Chen",
    role: "Homeowner, Houston",
    content:
      "Working with Atlas Construction Group on our dream home was an incredible experience. They listened to every request and brought our vision to life perfectly. The quality of work is exceptional, and the team was always professional and communicative.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "David Rodriguez",
    role: "Real Estate Developer",
    content:
      "We have partnered with Atlas Construction Group on multiple projects over the years. Their consistency, reliability, and quality of work make them our go-to construction company. They truly understand the commercial construction landscape.",
    rating: 5,
    avatar: "DR",
  },
  {
    name: "Emily Watson",
    role: "Interior Designer",
    content:
      "As an interior designer, I appreciate Atlas Construction Group's commitment to excellence. They understand the importance of architectural details and work seamlessly with design teams. Their craftsmanship is second to none.",
    rating: 5,
    avatar: "EW",
  },
  {
    name: "James Mitchell",
    role: "Property Manager",
    content:
      "Atlas Construction Group handled a major renovation of our apartment complex. The project was completed ahead of schedule with minimal disruption to residents. Their project management skills are impressive and the results speak for themselves.",
    rating: 5,
    avatar: "JM",
  },
  {
    name: "Lisa Anderson",
    role: "Restaurant Owner",
    content:
      "Transforming our space into a beautiful restaurant was seamless with Atlas Construction Group. They understood our vision and delivered a stunning result that has impressed every customer. The team's creativity and expertise made all the difference.",
    rating: 5,
    avatar: "LA",
  },
] as const

export const VIDEO_TESTIMONIALS = [
  {
    name: "Robert Johnson",
    role: "CEO, Johnson Enterprises",
    thumbnail: IMAGES.testimonials.robert,
    duration: "3:45",
  },
  {
    name: "Maria Garcia",
    role: "Homeowner, Katy, TX",
    thumbnail: IMAGES.testimonials.maria,
    duration: "2:30",
  },
  {
    name: "David Kim",
    role: "Real Estate Developer",
    thumbnail: IMAGES.testimonials.david,
    duration: "4:15",
  },
] as const
