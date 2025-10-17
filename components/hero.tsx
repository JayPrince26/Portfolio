"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Shield,
  Github,
  Linkedin,
  ExternalLink,
  Star,
  TrendingUp,
} from "lucide-react";
import ElectricBorder from "@/components/ElectricBorder";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Particles } from "./particles";
import { FloatingElements } from "./floating-elements";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "Iskanme",
      tech: ["Next.js", "TypeScript", "Supabase"],
      description:
        "Landing page for the upcoming Iskanme marketplace app, focused on safer listings, verified owners, and secure onboarding.",
      stars: 4.9,
      link: "https://www.iskanme.app",
      ctaLabel: "View Site",
      image: "/projects/iskan_web.jpg",
      imageAlt: "Iskanme rental marketplace website preview",
      imageFit: "cover" as const,
    },
    {
      name: "House of Mix",
      tech: ["Next.js", "Tailwind CSS", "Contentful"],
      description:
        "Subscription hub for mix lovers with curated playlists, exclusive downloads, and content tailored for DJs.",
      stars: 4.8,
      link: "https://houseofmix.club",
      ctaLabel: "Explore Website",
      image: "/projects/houseofmix_web.jpg",
      imageAlt: "House of Mix website hero section",
      imageFit: "cover" as const,
    },
    {
      name: "Outsourcee Landing",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      description:
        "Landing page promoting the Outsourcee mobile app, showcasing released capabilities and upcoming feature drops.",
      stars: 4.7,
      link: "https://outsourcee.app",
      ctaLabel: "Visit Landing Page",
      image: "/projects/outsourcee_web.jpg",
      imageAlt: "Outsourcee marketing site home screen",
      imageFit: "cover" as const,
    },
    {
      name: "Outsourcee Mobile",
      tech: ["React Native", "Expo", "Firebase"],
      description:
        "Android app connecting Filipino service providers with global clients via secure messaging and proposals.",
      stars: 4.6,
      link: "https://play.google.com/store/apps/details?id=com.comptrolla.outsourcee&pcampaignid=web_share",
      ctaLabel: "View on Google Play",
      image: "/projects/outsourcee_app.jpg",
      imageAlt: "Outsourcee mobile app interface preview",
      imageFit: "cover" as const,
    },
    {
      name: "KBahay Service",
      tech: ["React Native", "Expo", "Stripe"],
      description:
        "On-demand home services marketplace offering seamless bookings, professional profiles, and in-app payments.",
      stars: 4.5,
      link: "https://play.google.com/store/apps/details?id=com.kbahayservice&pcampaignid=web_share",
      ctaLabel: "View on Google Play",
      image: "/projects/kbahay_app.jpg",
      imageAlt: "KBahay Service application badge",
      imageFit: "contain" as const,
    },
    {
      name: "SnapTrail",
      tech: ["React Native", "Firebase", "Zustand"],
      description:
        "Travel journaling companion that captures photo stories, itineraries, and shareable highlights for every trip.",
      stars: 4.7,
      link: "https://play.google.com/store/apps/details?id=com.snaptrail&pcampaignid=web_share",
      ctaLabel: "View on Google Play",
      image: "/projects/snaptrail.png",
      imageAlt: "SnapTrail travel companion app logo",
      imageFit: "contain" as const,
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
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-sky-100/40 to-white/70" />

      {/* Interactive Mouse Follow */}
      <div
        className="absolute w-10 h-10 bg-gradient-to-r from-sky-200 to-sky-400 rounded-full blur-xl transition-all duration-1000 ease-out opacity-60"
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
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 backdrop-blur-md border border-sky-500/30">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
                {/*  <span className="text-sm font-bold text-sky-300 uppercase tracking-wider">
                  Available for new opportunities
                </span> */}
              </div>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-sky-500 rounded-full"></div>
                <div className="w-6 h-1 bg-sky-500 rounded-full"></div>
                <div className="w-4 h-1 bg-sky-500 rounded-full"></div>
              </div>
              <p className="text-lg text-slate-600 font-medium">Hello, I'm</p>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-600">
                <span className="text-slate-900 animate-slide-up block text-shadow">
                  JOHN PRINCE
                </span>
                <span
                  className="text-slate-900 animate-slide-up block text-shadow"
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-sky-400">
                  FRONTEND DEVELOPER
                </h2>
              </div>
            </div>

            {/* Description */}
            <div
              className="animate-slide-up max-w-lg"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                Crafting exceptional digital experiences with modern web
                technologies. Specialized in React, Next.js, and TypeScript with
                a focus on performance, accessibility, and user experience.
                <br />
                <span className="text-sky-400 font-bold">
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
                className="group relative overflow-hidden bg-gradient-to-r from-sky-600 to-sky-800 hover:from-sky-700 hover:to-sky-900 text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 neon-glow hover:neon-glow-red"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  VIEW PROJECTS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-sky-700 to-sky-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-sky-500/50 text-sky-400 hover:text-white px-8 py-4 text-lg font-black rounded-lg transition-all duration-300 hover:bg-sky-600/20"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume.pdf";
                  link.download = "John_Prince_Victorino_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
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
                href="https://github.com/JayPrince26"
                className="p-3 bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-full text-slate-600 hover:text-sky-400 hover:bg-sky-200/40 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/victorino-john-prince-g-a5b419305"
                className="p-3 bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-full text-slate-600 hover:text-sky-400 hover:bg-sky-200/40 transition-all duration-300"
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
                <div className="text-2xl font-black text-slate-900 mb-1">
                  1+
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  YEAR OF EXPERIENCE
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-slate-900 mb-1">
                  8+
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  PROJECTS COMPLETED
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-slate-900 mb-1">
                  100%
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  CLIENT SATISFACTION
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Featured Project */}
          <div className="relative animate-slide-right">
            <ElectricBorder
              color="#7df9ff"
              speed={1.1}
              chaos={0.55}
              thickness={2.5}
              className="block rounded-[28px]"
              style={{ borderRadius: 28 }}
            >
              <div className="relative h-full rounded-[24px] border border-sky-500/20 bg-white/85 p-6 shadow-md backdrop-blur">
                <div className="absolute -top-2 -right-2 h-4 w-4 animate-pulse rounded-full bg-sky-500" />

                <div className="mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900">
                      {projects[currentProject].name}
                    </h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-bold">
                        {projects[currentProject].stars.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].tech.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-sky-500/30 bg-sky-500/15 px-2 py-1 text-xs font-bold text-sky-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "relative h-48 overflow-hidden rounded-lg border border-sky-500/20 transition-all duration-300",
                    projects[currentProject].imageFit === "contain"
                      ? "flex items-center justify-center bg-white/90"
                      : "group-hover:border-sky-500/40"
                  )}
                >
                  <Image
                    src={projects[currentProject].image}
                    alt={projects[currentProject].imageAlt}
                    fill
                    className={
                      projects[currentProject].imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 90vw"
                  />
                  {projects[currentProject].imageFit !== "contain" && (
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-slate-900/30" />
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <TrendingUp className="h-4 w-4 text-green-400" />
                    <span>Featured Project</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-sky-600 text-white hover:bg-sky-700"
                    asChild
                  >
                    <a
                      href={projects[currentProject].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projects[currentProject].ctaLabel ?? "View Live"}
                    </a>
                  </Button>
                </div>
              </div>
            </ElectricBorder>

            <div className="absolute -top-4 -right-4 h-16 w-16 animate-float rounded-full bg-sky-500/30 blur-sm" />
            <div
              className="absolute -bottom-8 -left-8 h-12 w-12 animate-float rounded-full bg-sky-600/20"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/*  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-sky-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
}
