import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { Particles } from "@/components/particles";
import { FloatingElements } from "@/components/floating-elements";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-red-950/20 to-black relative overflow-hidden">
      {/* Background Effects */}
      <Particles />
      <FloatingElements />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-red-900/10 to-black/40" />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
