"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Code,
  Zap,
  ArrowRight,
  Shield,
  Target,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";
import { FloatingElements } from "./floating-elements";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "E-Commerce Platform",
      tech: "Next.js • TypeScript • Tailwind",
      description: "Full-stack e-commerce with real-time inventory",
      stars: 127,
      link: "#",
    },
    {
      name: "Task Management App",
      tech: "React • Node.js • MongoDB",
      description: "Collaborative project management with real-time updates",
      stars: 89,
      link: "#",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js • Framer Motion • GSAP",
      description: "Interactive portfolio with advanced animations",
      stars: 45,
      link: "#",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);

    // Auto-rotate featured projects
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, [projects.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <Particles />
      <FloatingElements />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-900/20 to-black/60" />

      {/* Interactive Mouse Follow */}
      <div
        className="absolute w-10 h-10 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-xl transition-all duration-1000 ease-out opacity-60"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-slide-left">
            {/* Animated Badge */}
            <div className="animate-slide-down">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-red-500/30">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                <span className="text-sm font-bold text-red-300 uppercase tracking-wider">
                  Available for new opportunities
                </span>
              </div>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-red-500 rounded-full"></div>
                <div className="w-6 h-1 bg-red-500 rounded-full"></div>
                <div className="w-4 h-1 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-300 font-medium">Hello, I'm</p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-red-300">
                <span className="text-white animate-slide-up block text-shadow">
                  JOHN PRINCE
                </span>
                <span
                  className="text-white animate-slide-up block text-shadow"
                  style={{ animationDelay: "0.2s" }}
                >
                  VICTORINO
                </span>
              </h1>

              {/* Title */}
              <div
                className="animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-red-100">
                  FRONTEND DEVELOPER
                </h2>
              </div>
            </div>

            {/* Description */}
            <div
              className="animate-slide-up max-w-lg"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                Crafting exceptional digital experiences with modern web
                technologies. Specialized in React, Next.js, and TypeScript with
                a focus on performance, accessibility, and user experience.
                <br />
                <span className="text-red-400 font-bold">
                  Building the future, one pixel at a time.
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 neon-glow hover:neon-glow-red"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  VIEW PROJECTS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-red-500/50 text-red-400 hover:text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 hover:bg-red-600/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ExternalLink className="w-5 h-5" />
                  RESUME
                </span>
              </Button>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <a
                href="#"
                className="p-3 bg-black/40 backdrop-blur-md border border-red-500/30 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-900/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-black/40 backdrop-blur-md border border-red-500/30 rounded-full text-gray-300 hover:text-red-400 hover:bg-red-900/30 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 animate-slide-up"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="text-center">
                <div className="text-2xl font-black text-white mb-1">4+</div>
                <div className="text-xs text-gray-400 font-medium">
                  YEARS OF EXPERIENCE
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white mb-1">75+</div>
                <div className="text-xs text-gray-400 font-medium">
                  PROJECTS COMPLETED
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white mb-1">100%</div>
                <div className="text-xs text-gray-400 font-medium">
                  CLIENT SATISFACTION
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Project */}
          <div className="relative animate-slide-right">
            {/* Featured Project Card */}
            <div className="relative bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-6 hover:neon-glow transition-all duration-500 group">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-white">
                    {projects[currentProject].name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">
                      {projects[currentProject].stars}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mb-3">
                  {projects[currentProject].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[currentProject].tech
                    .split("•")
                    .map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-bold rounded-full bg-red-500/20 text-red-300 border border-red-500/30"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                </div>
              </div>

              {/* Project Preview */}
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

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>Featured Project</span>
                </div>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  View Live
                </Button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-500/30 rounded-full blur-sm animate-float" />
            <div
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-red-600/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
