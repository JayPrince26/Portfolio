import type { ReactNode } from "react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import ElectricBorder from "@/components/ElectricBorder"
import { Component, MonitorSmartphone, Type } from "lucide-react"

const skillStacks = [
  {
    title: "Frameworks",
    items: ["Next.js", "React", "React Native"],
  },
  {
    title: "Language & Tooling",
    items: ["TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Quality Drivers",
    items: [
      "Accessibility",
      "Responsiveness",
      "Motion",
      "Version Control",
      "UI/UX Implementation",
      "Code Quality",
    ],
  },
]

const designPreviewScreens = [
  {
    label: "Mobile",
    size: "h-28 w-20",
    hover: "group-hover:-translate-y-1",
    accent: "from-sky-400/60 to-sky-400/20",
  },
  {
    label: "Tablet",
    size: "h-32 w-24",
    hover: "group-hover:-translate-y-2",
    accent: "from-sky-500/60 to-sky-500/20",
  },
  {
    label: "Desktop",
    size: "h-36 w-28",
    hover: "group-hover:-translate-y-3",
    accent: "from-sky-600/60 to-sky-600/20",
  },
]

type CraftHighlight = {
  title: string
  description: string
  icon: ReactNode
  preview: ReactNode
}

const craftHighlights: CraftHighlight[] = [
  {
    title: "Component Systems",
    description:
      "Designs reusable UI kits with purposeful card sizing, consistent spacing, and states for every interaction.",
    icon: <Component className="w-6 h-6 text-sky-500" />,
    preview: (
      <div className="relative flex min-h-[160px] flex-col justify-between gap-3">
        <div
          aria-hidden
          className="absolute inset-x-6 -top-6 h-12 rounded-full bg-sky-400/20 blur-3xl animate-pulse"
        />
        <div className="relative space-y-2 rounded-2xl border border-sky-500/30 bg-white p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Primary Card</span>
            <span className="text-sky-500">16px radius</span>
          </div>
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-slate-200" />
            <div className="h-2 w-2/3 rounded-full bg-slate-200/70" />
            <div className="h-2 w-1/2 rounded-full bg-slate-200/50" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-semibold text-sky-500">
            <span className="rounded-full bg-sky-100/80 px-2 py-1 text-center">
              Hover
            </span>
            <span className="rounded-full bg-sky-100/60 px-2 py-1 text-center">
              Focus
            </span>
            <span className="rounded-full bg-sky-100/40 px-2 py-1 text-center">
              Disabled
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Typographic Clarity",
    description:
      "Pairs text sizes and font weights to the content hierarchy so headlines, body copy, and microcopy stay legible on every device.",
    icon: <Type className="w-6 h-6 text-sky-500" />,
    preview: (
      <div className="relative min-h-[160px] space-y-3 rounded-2xl border border-sky-500/20 bg-slate-900/80 p-4 text-slate-100 shadow-inner">
        <div className="space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/90">
            <span>Display</span>
            <span>64px</span>
          </div>
          <div className="h-8 rounded-lg bg-gradient-to-r from-slate-100/80 to-slate-100/40" />
        </div>
        <div className="space-y-2 transition-transform duration-500 group-hover:translate-x-1">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/70">
            <span>Body</span>
            <span>18px</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-slate-100/60" />
            <div className="h-2 rounded bg-slate-100/40" />
            <div className="h-2 rounded bg-slate-100/30" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-300/60">
          <span>Microcopy</span>
          <span>14px</span>
        </div>
        <div className="h-1 rounded bg-sky-400/70" />
      </div>
    ),
  },
  {
    title: "Responsive Delivery",
    description:
      "Builds layouts that respond gracefully from mobile-first breakpoints to desktops with measured motion and performant rendering.",
    icon: <MonitorSmartphone className="w-6 h-6 text-sky-500" />,
    preview: (
      <div className="relative min-h-[160px] overflow-hidden rounded-2xl border border-sky-500/20 bg-white p-4 shadow-sm">
        <div
          aria-hidden
          className="absolute -top-10 right-6 h-20 w-20 rounded-full bg-sky-400/30 blur-2xl animate-pulse"
        />
        <div className="relative grid gap-3 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-5 h-12 rounded-xl bg-slate-200/80" />
            <div className="col-span-7 h-12 rounded-xl bg-sky-100/80" />
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4 h-20 rounded-xl bg-slate-200/60" />
            <div className="col-span-4 h-20 rounded-xl bg-slate-200/60" />
            <div className="col-span-4 h-20 rounded-xl bg-slate-200/60" />
          </div>
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
            <span>Mobile</span>
            <span>Tablet</span>
            <span>Desktop</span>
          </div>
        </div>
      </div>
    ),
  },
]

const deliveryStandards = [
  "Card sizing and spacing scale with a fluid 4px baseline across breakpoints.",
  "Typographic styles use rem units and Tailwind tokens for predictable font ramps.",
  "Each build is smoke-tested on touch, tablet, and desktop layouts before handoff.",
]

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-sky-400/20 via-sky-300/10 to-transparent blur-3xl animate-pulse"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-3 animate-slide-up">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500 font-semibold">
            Frontend Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Interfaces Crafted With Intent
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            I design, build, and refine component-driven frontends that balance
            polish with performance. Every detail — from card proportions to
            typography — is tuned to feel natural on any screen.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr] animate-slide-up">
          <Card className="bg-white/80 backdrop-blur-md border border-sky-500/20 shadow-md hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  Core Frontend Stack
                </h3>
                <p className="text-slate-600">
                  Tooling that keeps delivery predictable, collaborative, and
                  ready for scale.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {skillStacks.map((cluster) => (
                  <div key={cluster.title} className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                      {cluster.title}
                    </p>
                    <ul className="space-y-2">
                      {cluster.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-sky-500/70" />
                          <span className="text-slate-700 font-medium">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden bg-slate-950 text-slate-100 border border-slate-800 shadow-md hover:shadow-lg transition-all duration-300">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-12 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl"
            />
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-black">
                  Responsive Design Snapshot
                </h3>
                <p className="text-slate-300">
                  A quick visualization of how layouts scale from mobile-first
                  foundations to desktop canvases with consistent rhythm.
                </p>
              </div>
              <div className="relative mt-4 flex items-end gap-4">
                {designPreviewScreens.map((screen, index) => (
                  <div
                    key={screen.label}
                    className={cn(
                      "relative flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm transition-transform duration-500",
                      screen.size,
                      screen.hover,
                    )}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="space-y-2">
                      <div
                        className={cn(
                          "h-8 rounded-2xl bg-gradient-to-b shadow-inner",
                          screen.accent,
                        )}
                      />
                      <div className="h-1.5 rounded-full bg-white/40" />
                      <div className="h-1.5 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                      {screen.label}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3 animate-slide-up">
          {craftHighlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group h-full transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <ElectricBorder
                color="#7df9ff"
                speed={1.1}
                chaos={0.6}
                thickness={2.5}
                className="h-full"
                style={{ borderRadius: 28 }}
              >
                <Card className="h-full border border-transparent bg-white/90 shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                  <CardContent className="flex h-full flex-col space-y-5 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 shadow-inner">
                        {highlight.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {highlight.title}
                      </h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
                    <div className="mt-auto">
                      {highlight.preview}
                    </div>
                  </CardContent>
                </Card>
              </ElectricBorder>
            </div>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-sky-500/10 via-white/80 to-sky-500/10 border border-sky-500/20 shadow-lg animate-slide-up">
          <CardContent className="p-6 md:p-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-lg md:text-xl font-black text-slate-900">
                Delivery Standards Checklist
              </h3>
              <p className="text-sm text-slate-600">
                Benchmarks I run before handoff to keep visuals, motion, and
                responsiveness aligned with the design system.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-700 md:max-w-md">
              {deliveryStandards.map((standard) => (
                <li key={standard} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
