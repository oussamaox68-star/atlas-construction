import { IMAGES } from "@/lib/images"

export const PROJECTS = [
  {
    title: "Skyline Tower",
    location: "Houston, TX",
    date: "2024",
    category: "Commercial",
    image: IMAGES.projects.skylineTower,
    description:
      "A 45-story mixed-use tower featuring luxury apartments, retail spaces, and rooftop amenities in downtown Houston.",
    size: "250,000 sq ft",
    duration: "18 months",
  },
  {
    title: "Harbor View Residence",
    location: "Galveston, TX",
    date: "2024",
    category: "Residential",
    image: IMAGES.projects.harborView,
    description:
      "Modern waterfront home with panoramic Gulf views, sustainable design, and smart home integration.",
    size: "8,500 sq ft",
    duration: "12 months",
  },
  {
    title: "Tech Campus Hub",
    location: "Austin, TX",
    date: "2023",
    category: "Commercial",
    image: IMAGES.projects.techCampus,
    description:
      "Innovative office complex spanning 200,000 sq ft with collaborative workspaces and green areas.",
    size: "200,000 sq ft",
    duration: "24 months",
  },
  {
    title: "Mountain Retreat",
    location: "Aspen, CO",
    date: "2023",
    category: "Residential",
    image: IMAGES.projects.mountainRetreat,
    description:
      "Luxury ski-in/ski-out estate featuring 8 bedrooms, indoor pool, and stunning mountain vistas.",
    size: "12,000 sq ft",
    duration: "14 months",
  },
  {
    title: "Urban Loft Complex",
    location: "Houston, TX",
    date: "2023",
    category: "Renovation",
    image: IMAGES.projects.urbanLoft,
    description:
      "Historic warehouse transformed into 50 modern loft apartments with industrial-chic design elements.",
    size: "75,000 sq ft",
    duration: "16 months",
  },
  {
    title: "Coastal Resort",
    location: "Corpus Christi, TX",
    date: "2022",
    category: "Commercial",
    image: IMAGES.projects.coastalResort,
    description:
      "Beachfront resort with 200 rooms, spa facilities, and direct ocean access for ultimate relaxation.",
    size: "150,000 sq ft",
    duration: "30 months",
  },
  {
    title: "Modern Family Home",
    location: "The Woodlands, TX",
    date: "2022",
    category: "Residential",
    image: IMAGES.projects.modernFamily,
    description:
      "Contemporary family home with open floor plan, energy-efficient features, and beautiful landscaping.",
    size: "4,200 sq ft",
    duration: "10 months",
  },
  {
    title: "Corporate Headquarters",
    location: "Dallas, TX",
    date: "2021",
    category: "Commercial",
    image: IMAGES.projects.corporateHq,
    description:
      "State-of-the-art corporate headquarters with sustainable design and advanced technology integration.",
    size: "180,000 sq ft",
    duration: "22 months",
  },
  {
    title: "Historic Restoration",
    location: "San Antonio, TX",
    date: "2021",
    category: "Renovation",
    image: IMAGES.projects.historicRestoration,
    description:
      "Meticulous restoration of a 19th-century landmark building, preserving history while adding modern amenities.",
    size: "45,000 sq ft",
    duration: "18 months",
  },
] as const

export const PROJECT_CATEGORIES = ["All", "Residential", "Commercial", "Renovation"] as const
