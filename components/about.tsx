import dynamic from "next/dynamic";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  Palette,
  LayoutTemplate,
  PenTool,
  MapPin,
  GraduationCap,
  Calendar,
  Code,
  Smartphone,
  Award,
  Users,
  Heart,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Principle = {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
};

type TimelineEvent = {
  period: string;
  title: string;
  description: string;
  detail: string;
};

type Achievement = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProfileDetail = {
  label: string;
  value: string;
  meta?: string;
  icon: LucideIcon;
};

const highlightTags = [
  "Design systems",
  "Prototype sprints",
  "TypeScript UI",
  "Accessibility",
  "Motion guidelines",
  "Responsive audits",
];

const principles: Principle[] = [
  {
    title: "Design-led Development",
    description:
      "Translate Figma into reusable React systems while protecting intent and micro-interactions.",
    badge: "Design systems",
    icon: Palette,
  },
  {
    title: "Structure Meets Delight",
    description:
      "Balance layout grids, card sizing, and typography scales with considered motion for polish.",
    badge: "Experience craft",
    icon: LayoutTemplate,
  },
  {
    title: "Build With Empathy",
    description:
      "Prototype quickly, validate accessibility early, and collaborate openly with designers and product.",
    badge: "Team play",
    icon: PenTool,
  },
];

const timeline: TimelineEvent[] = [
  {
    period: "2024 - Present",
    title: "Freelance Frontend Developer",
    description:
      "Leading web and mobile builds for founders and studios with a focus on clarity, speed, and scalable UI.",
    detail: "Next.js · React Native · Tailwind · Supabase",
  },
  {
    period: "2023 - 2024",
    title: "Design-to-Code Specialist",
    description:
      "Refined rapid prototyping habits by translating product explorations into working interfaces in days.",
    detail: "Component libraries · Motion · Accessibility",
  },
  {
    period: "Pre-2023",
    title: "Foundations & Curiosity",
    description:
      "Studied BS Information Technology while experimenting with emerging frontend workflows and open source.",
    detail: "EARIST · Community collaboration",
  },
];

const achievements: Achievement[] = [
  {
    title: "Learning Excellence",
    description:
      "Mastered React, Next.js, and modern tooling quickly to ship confidently for clients.",
    icon: Award,
  },
  {
    title: "Project Delivery",
    description:
      "Completed 8+ freelance engagements with structured handoffs and positive partner feedback.",
    icon: Users,
  },
  {
    title: "Client Satisfaction",
    description:
      "Held a 100% satisfaction rate by pairing clear communication with quality delivery.",
    icon: Heart,
  },
];

const profileDetails: ProfileDetail[] = [
  {
    label: "Education",
    value: "BS Information Technology",
    meta: "EARIST (Manila Campus)",
    icon: GraduationCap,
  },
  {
    label: "Experience",
    value: "1+ years shipping UI systems",
    icon: Calendar,
  },
  {
    label: "Location",
    value: "Marikina City, Philippines",
    icon: MapPin,
  },
];

const stats = [
  { value: "1+", label: "Years crafting interfaces" },
  { value: "8+", label: "Products launched" },
  { value: "100%", label: "Happy partners" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-12 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="max-w-6xl mx-auto space-y-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-center animate-slide-up">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                <Sparkles className="h-4 w-4" />
                Frontend storyteller
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Crafting expressive interfaces that stay faithful to design and
                fearless on device.
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                I build component-driven frontends that honor visual direction,
                feel intuitive on touch, and remain maintainable for teams. From
                card sizing to typography rhythm, every choice is intentional
                and documented.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {highlightTags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-600 shadow-sm"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-500" />
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-sky-500/20 bg-white/85 shadow-[0_30px_80px_-50px_rgba(14,165,233,0.65)] backdrop-blur">
              <div className="relative h-[420px] w-full">
                <Image
                  src="/prince4.jpg"
                  alt="John Prince Victorino"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold text-slate-900">
                    Currently crafting responsive design systems
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-sky-500/25 via-sky-300/10 to-transparent blur-3xl"
            />
            {/* <Card className="absolute -left-8 top-10 hidden w-44 border border-white/50 bg-white/85 p-0 shadow-lg backdrop-blur md:block">
              <CardContent className="p-4 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Focus
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Pixel-perfect meets performance-first
                </p>
              </CardContent>
            </Card> */}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 animate-slide-up">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <Card
                key={principle.title}
                className="group border border-slate-200 bg-white/80 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6 space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-600">
                    {principle.badge}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] items-start animate-slide-up">
          <div className="space-y-6 lg:pr-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-slate-900">
                Journey timeline
              </h3>
              <p className="text-sm text-slate-600">
                Where I sharpened my craft and how it shapes the way I approach
                frontend today.
              </p>
            </div>
            <div className="relative space-y-10 pl-6">
              <span className="absolute left-3 top-1 h-full w-px bg-slate-200" />
              {timeline.map((event, index) => (
                <div key={event.title} className="relative space-y-3">
                  <span className="absolute -left-6 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-sky-500 shadow-sm" />
                  <div className="flex flex-wrap items-baseline gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {event.period}
                    </p>
                    <span className="text-base font-semibold text-slate-900">
                      {event.title}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {event.description}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                    {event.detail}
                  </p>
                  {index < timeline.length - 1 ? (
                    <div className="pt-4" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Card className="border border-slate-200 bg-white/85 shadow-sm">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900">
                  Profile snapshot
                </h3>
                <p className="text-sm text-slate-500">
                  Details that influence how I collaborate and deliver.
                </p>
              </div>
              <ul className="space-y-4">
                {profileDetails.map((detail) => {
                  const Icon = detail.icon;
                  return (
                    <li key={detail.label} className="flex gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {detail.label}
                        </p>
                        <p className="text-sm text-slate-600">{detail.value}</p>
                        {detail.meta ? (
                          <p className="text-xs text-slate-500">
                            {detail.meta}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 animate-slide-up">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">
              Highlights & wins
            </h3>
            <p className="text-sm md:text-base text-slate-600">
              Signals that the work is resonating with peers and partners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.title}
                  className="border border-slate-200 bg-white/80 text-center shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-6 space-y-4">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h4 className="text-base font-semibold text-slate-900">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 animate-slide-up">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="border border-slate-200 bg-white/80 text-center shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardContent className="p-6 space-y-2">
                <span className="text-3xl font-black text-slate-900">
                  {stat.value}
                </span>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
