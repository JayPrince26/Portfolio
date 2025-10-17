"use client"

import { useEffect, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  Menu,
  X,
  Zap,
  Shield,
  Home,
  UserRound,
  Sparkles,
  Briefcase,
  Mail,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavItem = {
  id: string
  label: string
  icon: LucideIcon
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: UserRound },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

type NavigationProps = {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSelect = (section: string) => {
    onSectionChange(section)
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out md:hidden",
          scrolled ? "bg-white/95 shadow-2xl shadow-sky-200/40" : "bg-white/80",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center gap-3 animate-slide-down">
              <div className="relative group">
                <div className="text-3xl font-bold text-gradient neon-glow text-shadow transition-all duration-300 group-hover:scale-110">
                  JPV
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-sky-300/30 blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div
                className="hidden sm:flex items-center gap-2 animate-slide-down"
                style={{ animationDelay: "0.1s" }}
              >
                <Shield className="w-5 h-5 text-sky-500 animate-flicker" />
                <span
                  className="text-sm font-medium text-sky-400 animate-slide-right"
                  style={{ animationDelay: "0.2s" }}
                >
                  Frontend specialist
                </span>
              </div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-600 hover:text-sky-500 hover:bg-sky-100 border border-sky-200/60 transition-all duration-300 hover:scale-110 animate-slide-down"
              style={{ animationDelay: "0.6s" }}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <X className="h-6 w-6 animate-rotate-slow" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {isOpen ? (
            <div className="absolute top-full left-0 right-0 border-b border-sky-200/60 bg-white/90 backdrop-blur-md shadow-2xl shadow-sky-200/40 animate-slide-down md:hidden">
              <div className="px-4 py-6 space-y-4">
                {NAV_ITEMS.map((item, index) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-lg font-medium transition-all duration-300 animate-slide-left",
                        isActive
                          ? "border-sky-300 bg-sky-500/10 text-sky-600"
                          : "border-transparent text-slate-600 hover:border-sky-200/60 hover:bg-sky-100 hover:text-sky-500 hover:scale-105",
                      )}
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <Icon
                        className={cn("h-5 w-5", isActive ? "text-sky-500" : "")}
                      />
                      {item.label}
                    </button>
                  )
                })}
                <div
                  className="pt-4 border-t border-sky-200/60 animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <Button className="w-full rounded-full border border-sky-200/60 bg-gradient-to-r from-sky-400 to-cyan-500 py-3 text-white transition-all duration-300 hover:from-sky-500 hover:to-cyan-600 hover:scale-105 hover:neon-glow">
                    <Zap className="mr-2 h-4 w-4 animate-pulse-slow" />
                    HIRE ME
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      <aside
        className="pointer-events-none fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-6 md:flex"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="pointer-events-auto flex flex-col items-center gap-2">
          <div className="relative flex flex-col items-center gap-2">
            <div className="text-3xl font-black text-slate-900 tracking-[0.4em]">
              JPV
            </div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">
              Frontend
            </p>
            <div className="absolute -right-2 top-1 h-2 w-2 rounded-full bg-sky-400 animate-ping" />
          </div>
        </div>

        <div className="pointer-events-auto flex flex-col items-center gap-5">
          {NAV_ITEMS.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={cn(
                  "group relative flex h-14 w-14 items-center justify-center rounded-[1.25rem] shadow-lg backdrop-blur transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
                  isActive
                    ? "bg-sky-500 text-white shadow-sky-500/40"
                    : "bg-white/80 text-slate-500 shadow-sky-200/40 hover:-translate-y-1 hover:bg-white hover:text-sky-500 hover:shadow-xl hover:shadow-sky-300/50",
                )}
                style={{ animationDelay: `${0.08 * index}s` }}
                aria-label={item.label}
              >
                <Icon className={cn("h-6 w-6", isActive ? "text-white" : "")} />
              </button>
            )
          })}
        </div>
      </aside>
    </>
  )
}
