"use client"

import dynamic from "next/dynamic"
import { useEffect, useMemo, useRef, useState } from "react"

import personalAnimation from "@/public/animation/personal.json"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { FloatingElements } from "@/components/floating-elements"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Particles } from "@/components/particles"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

const VIEW_COMPONENTS = {
  home: <Hero />,
  about: <About />,
  skills: <Skills />,
  projects: <Projects />,
  contact: <Contact />,
} as const

type ViewKey = keyof typeof VIEW_COMPONENTS

export default function Home() {
  const [activeView, setActiveView] = useState<ViewKey>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isLoaderVisible, setIsLoaderVisible] = useState(false)
  const [loaderKey, setLoaderKey] = useState(0)
  const transitionTimeouts = useRef<number[]>([])

  const content = useMemo(() => VIEW_COMPONENTS[activeView] ?? VIEW_COMPONENTS.home, [activeView])

  useEffect(() => {
    return () => {
      transitionTimeouts.current.forEach((timeoutId) => {
        window.clearTimeout(timeoutId)
      })
    }
  }, [])

  const handleSectionChange = (section: string) => {
    if (section === activeView) return

    transitionTimeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
    transitionTimeouts.current = []

    setIsLoaderVisible(true)
    setIsTransitioning(true)
    setLoaderKey((prev) => prev + 1)
    setActiveView(section as ViewKey)

    const fallbackTimeout = window.setTimeout(() => {
      setIsTransitioning(false)
      setIsLoaderVisible(false)
    }, 2200)

    transitionTimeouts.current.push(fallbackTimeout)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-sky-100/40 to-white">
      <Particles />
      <FloatingElements />
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-sky-100/30 to-white/70" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Navigation activeSection={activeView} onSectionChange={handleSectionChange} />
        {isLoaderVisible && (
          <div className="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-white/85 backdrop-blur-md">
            <Lottie
              key={loaderKey}
              animationData={personalAnimation}
              loop={false}
              className="h-60 w-60"
              onComplete={() => {
                transitionTimeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
                transitionTimeouts.current = []
                setIsTransitioning(false)
                setIsLoaderVisible(false)
              }}
            />
          </div>
        )}
        <div className="flex-1 pt-28 md:pt-12 lg:pt-8">
          <div key={activeView} className="animate-slide-up">
            {content}
          </div>
        </div>
      </div>
    </main>
  )
}
