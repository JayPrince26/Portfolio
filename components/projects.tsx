"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Globe, Smartphone, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProjectCategory = "web" | "mobile";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  category: ProjectCategory;
  technologies: string[];
  liveUrl: string;
  primaryLabel: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  featured?: boolean;
  year: string;
};

const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web App",
  mobile: "Mobile App",
};

const projectData: Project[] = [
  {
    id: 1,
    title: "Iskanme",
    description:
      "Digital rental marketplace for renters and property owners with verified listings, dashboards, and guided onboarding flows.",
    image: "/projects/iskan_web.jpg",
    imageAlt: "Iskanme web application home screen showcasing rental listings",
    imageFit: "cover",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://www.iskanme.app",
    primaryLabel: "Visit Site",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "House of Mix",
    description:
      "Mixology collective website featuring seasonal menus, event bookings, and a CMS-powered blog for cocktail enthusiasts.",
    image: "/projects/houseofmix_web.jpg",
    imageAlt: "House of Mix hero section featuring call-to-action and DJ imagery",
    imageFit: "cover",
    category: "web",
    technologies: ["Next.js", "Contentful", "Tailwind CSS", "Vercel"],
    liveUrl: "https://houseofmix.club",
    primaryLabel: "Visit Site",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Outsourcee Landing",
    description:
      "Conversion-focused marketing site for the Outsourcee talent marketplace highlighting services, testimonials, and lead capture.",
    image: "/projects/outsourcee_web.jpg",
    imageAlt: "Outsourcee marketing site hero featuring headline and mobile mockups",
    imageFit: "cover",
    category: "web",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveUrl: "https://outsourcee.app",
    primaryLabel: "Visit Site",
    featured: false,
    year: "2024",
  },
  {
    id: 4,
    title: "Outsourcee Mobile",
    description:
      "Android app connecting Filipino service providers with global clients, including job browsing, proposals, and secure chat.",
    image: "/projects/outsourcee_app.jpg",
    imageAlt: "Outsourcee mobile app screens showing available experts and reviews",
    imageFit: "cover",
    category: "mobile",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.comptrolla.outsourcee&pcampaignid=web_share",
    primaryLabel: "View on Google Play",
    featured: false,
    year: "2024",
  },
  {
    id: 5,
    title: "SnapTrail",
    description:
      "Travel companion app that lets adventurers capture photo journals, track itineraries, and share curated trip highlights.",
    image: "/projects/snaptrail.png",
    imageAlt: "SnapTrail logo featuring stylised mountain within a rounded glyph",
    imageFit: "contain",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase", "Zustand"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.snaptrail&pcampaignid=web_share",
    primaryLabel: "View on Google Play",
    featured: false,
    year: "2024",
  },
  {
    id: 6,
    title: "KBahay Service",
    description:
      "Home services marketplace for local professionals offering on-demand bookings, service tracking, and secure in-app messaging.",
    image: "/projects/kbahay_app.jpg",
    imageAlt: "KBahay Service application logo featuring a house and handshake",
    imageFit: "contain",
    category: "mobile",
    technologies: ["React Native", "Expo", "Firebase", "Stripe"],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kbahayservice&pcampaignid=web_share",
    primaryLabel: "View on Google Play",
    featured: false,
    year: "2024",
  },
];

const categoryOrder: ProjectCategory[] = ["web", "mobile"];

const filters = [
  { id: "all" as const, label: "All Projects", count: projectData.length },
  ...categoryOrder.map((category) => ({
    id: category,
    label: category === "web" ? "Web Apps" : "Mobile Apps",
    count: projectData.filter((project) => project.category === category).length,
  })),
];

const getCategoryIcon = (category: ProjectCategory) => {
  switch (category) {
    case "web":
      return <Globe className="w-5 h-5" />;
    case "mobile":
      return <Smartphone className="w-5 h-5" />;
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">(
    "all"
  );

  const filteredProjects = projectData.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 text-shadow">
            FEATURED PROJECTS
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-700 mx-auto rounded-full mb-6 animate-glow" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 font-medium">
            Real-world launches across web and mobile - each built with
            attention to performance, accessibility, and conversion.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 text-sm font-semibold ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-sky-600 to-sky-800 text-white shadow-lg"
                  : "bg-white/70 backdrop-blur-md border border-sky-500/30 text-slate-600 hover:text-white hover:border-sky-500/50"
              }`}
            >
              {filter.label}{" "}
              <span className="text-xs font-bold opacity-70">
                ({filter.count})
              </span>
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-white/70 backdrop-blur-md border border-sky-500/30 shadow-lg hover:shadow-xl transition-all duration-500 group hover:neon-glow animate-slide-up hover-lift"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-bold bg-sky-500/20 text-sky-300 rounded-full border border-sky-500/30">
                      FEATURED
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-black text-slate-900 group-hover:text-sky-500 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Image */}
                <div
                  className={`relative h-48 rounded-lg border border-sky-500/20 overflow-hidden group-hover:border-sky-500/40 transition-all duration-300 ${
                    project.imageFit === "contain"
                      ? "bg-white/90 flex items-center justify-center"
                      : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className={
                      project.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
                    priority={index === 0}
                  />
                  {project.imageFit !== "contain" && (
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-transparent to-slate-900/20" />
                  )}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-bold rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-sky-600 hover:bg-sky-700 text-white group/btn"
                    asChild
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      {project.primaryLabel}
                    </a>
                  </Button>
                  {project.secondaryUrl && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-sky-500/50 text-sky-500 hover:text-white hover:bg-sky-600/20"
                      asChild
                    >
                      <a
                        href={project.secondaryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.secondaryLabel ?? "Learn More"}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-600 mb-6 font-medium">
              Let's collaborate to bring your ideas to life with cutting-edge
              technology and exceptional design.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-sky-600 to-sky-800 hover:from-sky-700 hover:to-sky-900 text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 neon-glow hover:neon-glow-red"
            >
              <span className="flex items-center gap-3">
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
