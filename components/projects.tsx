"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Star,
  Eye,
  Code,
  Globe,
  Smartphone,
  Database,
  Palette,
  Zap,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
      image: "/placeholder.jpg",
      category: "fullstack",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "MongoDB",
      ],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johnprince/ecommerce",
      stars: 127,
      views: 2.5,
      featured: true,
      year: "2024",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.jpg",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/johnprince/taskmanager",
      stars: 89,
      views: 1.8,
      featured: true,
      year: "2024",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Interactive portfolio website with advanced animations, smooth transitions, and modern design.",
      image: "/placeholder.jpg",
      category: "frontend",
      technologies: ["Next.js", "Framer Motion", "GSAP", "Tailwind CSS"],
      liveUrl: "https://johnprince.dev",
      githubUrl: "https://github.com/johnprince/portfolio",
      stars: 45,
      views: 1.2,
      featured: false,
      year: "2024",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Cross-platform mobile banking application with secure authentication and real-time transactions.",
      image: "/placeholder.jpg",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      liveUrl: "https://banking-app-demo.com",
      githubUrl: "https://github.com/johnprince/banking-app",
      stars: 156,
      views: 3.1,
      featured: false,
      year: "2023",
    },
    {
      id: 5,
      title: "AI Chat Application",
      description:
        "Real-time chat application with AI-powered responses and natural language processing.",
      image: "/placeholder.jpg",
      category: "fullstack",
      technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL"],
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/johnprince/ai-chat",
      stars: 203,
      views: 4.2,
      featured: true,
      year: "2023",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with real-time data, charts, and location-based forecasts.",
      image: "/placeholder.jpg",
      category: "frontend",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/johnprince/weather-dashboard",
      stars: 67,
      views: 1.5,
      featured: false,
      year: "2023",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Globe className="w-5 h-5" />;
      case "fullstack":
        return <Code className="w-5 h-5" />;
      case "mobile":
        return <Smartphone className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-shadow">
            FEATURED PROJECTS
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mb-6 animate-glow" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 font-medium">
            A collection of my recent work showcasing modern web development,
            mobile applications, and full-stack solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg"
                  : "bg-black/40 backdrop-blur-md border border-red-500/30 text-gray-300 hover:text-white hover:border-red-500/50"
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg hover:shadow-xl transition-all duration-500 group hover:neon-glow animate-slide-up hover-lift"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(project.category)}
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-bold bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
                      FEATURED
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-black text-white group-hover:text-red-300 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border border-red-500/20 overflow-hidden group-hover:border-red-500/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Code className="w-12 h-12 text-red-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-bold rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-bold">{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span className="font-bold">{project.views}k</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold">{project.year}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 transition-transform" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500/50 text-red-400 hover:text-white hover:bg-red-600/20"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
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
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              Let's collaborate to bring your ideas to life with cutting-edge
              technology and exceptional design.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 neon-glow hover:neon-glow-red"
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
