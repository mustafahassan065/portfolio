// app/projects/page.js
"use client";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout";
import Image from 'next/image';

const projects = [
  {
    title: "Prime EPC and Design Consultants",
    description: "UK-based EPC booking platform serving Manchester — customers book Energy Performance Certificates and design consultancy online, with a full admin panel handling dynamic scheduling, assessor assignment, and order management.",
    image: "https://source.unsplash.com/800x600/?modern-house,architecture",
    url: "https://www.primeepcdesign.co.uk/",
    tech: ["NEXT.JS", "NODE.JS", "POSTGRESQL", "TAILWIND CSS", "PAYMENTS"],
  },
  {
    title: "Aethla Care",
    description: "Technology-driven home healthcare platform for families across Qatar — elderly care, disability support, and newborn/maternity care, built with three separate portals: Admin, Employee, and Patient, each with its own secure dashboard.",
    image: "https://source.unsplash.com/800x600/?healthcare,nurse",
    url: "https://www.aethlacare.com/",
    tech: ["REACT", "NODE.JS", "MONGODB", "TAILWIND CSS", "VPS DEPLOYMENT"],
  },
  {
    title: "VoiceControl AI",
    description: "AI-powered voice coaching platform — users record or upload audio, and an AI-agentic pipeline analyzes speech patterns to generate an Authority Score with a personalized daily training program.",
    image: "https://source.unsplash.com/800x600/?microphone,recording-studio",
    url: "https://www.voicecontrol.tech/",
    tech: ["NEXT.JS", "PYTHON FASTAPI", "POSTGRESQL", "AI AGENTIC", "PAYMENTS"],
  },
  {
    title: "SpritzoMetro",
    description: "Live, crowd-sourced Aperol Spritz price-index platform across Italian cities with an interactive map — integrated with a Vapi-powered AI voice calling agent that handles bar owner onboarding calls automatically.",
    image: "https://source.unsplash.com/800x600/?aperol-spritz,italy",
    url: "https://spritzometro.com/",
    tech: ["REACT", "NODE.JS", "VAPI VOICE AI", "SUPABASE", "AI CALLING AGENT"],
  },
  {
    title: "Sevil Velsha",
    description: "Marketing and conversion funnel site for a voice and identity coach — helping leaders and professionals communicate with confidence, built with a clean booking and payment flow for coaching programs.",
    image: "https://source.unsplash.com/800x600/?public-speaking,confidence",
    url: "https://www.sevilvelsha.com/",
    tech: ["REACT", "TAILWIND CSS", "VPS DEPLOYMENT", "PAYMENTS"],
  },
  {
    title: "Sprinklers and Lawns",
    description: "Full-service business site for a Dallas-Fort Worth irrigation company — online booking, service-area pages, transparent pricing tables, and a lead-generation contact system for a 25+ year family-owned business.",
    image: "https://source.unsplash.com/800x600/?lawn,sprinkler-irrigation",
    url: "https://www.sprinklersandlawns.com/",
    tech: ["NEXT.JS", "NODE.JS", "POSTGRESQL", "VPS DEPLOYMENT"],
  },
  {
    title: "Seaglore",
    description: "Ocean Living wellness platform with pixel-perfect Figma-matched design, Stripe-powered payment flows, and a protected course dashboard for members.",
    image: "https://source.unsplash.com/800x600/?ocean,wellness",
    url: "https://www.seaglore.com/",
    tech: ["REACT", "PAYMENTS", "VPS DEPLOYMENT"],
  },
  {
    title: "ForexTrading4Earning",
    description: "Pakistan-based forex trading education and managed-investment platform — course enrollment, investment program tiers with live profit-share dashboards, and a full client login/portal system.",
    image: "https://source.unsplash.com/800x600/?forex,trading-chart",
    url: "https://forextrading4earning.com/",
    tech: ["PHP", "XAMPP", "MYSQL", "TRADING LOGIC"],
  },
  {
    title: "Coached by Steele",
    description: "Fitness and nutrition coaching brand site with a custom calorie calculator tool, testimonials, and both local in-person and worldwide online coaching booking funnels.",
    image: "https://source.unsplash.com/800x600/?personal-trainer,gym",
    url: "https://www.coachsteele.com/",
    tech: ["REACT", "VPS DEPLOYMENT"],
  },
  {
    title: "EP Fitness",
    description: "Personal training and nutrition coaching platform with multi-currency (USD/PHP) package pricing, city-based in-person training tiers, and dedicated client assessment intake forms.",
    image: "https://source.unsplash.com/800x600/?fitness-training,workout",
    url: "https://www.ep-fitness.com/",
    tech: ["REACT", "VPS DEPLOYMENT"],
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <section id="projects" className="px-8 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            All <span className="bg-cyan-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-white-300 max-w-2xl mx-auto">
            Live, deployed client projects — click any project to visit the site.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-xl shadow-2xl bg-gray-800/60 border border-gray-700 flex flex-col"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-cyan-300/20 text-cyan-300 text-xs rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-cyan-300 text-sm font-semibold inline-flex items-center gap-1">
                    Visit Live Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
