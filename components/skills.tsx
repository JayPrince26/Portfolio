import { Card, CardContent } from "@/components/ui/card";
import { Layers, Accessibility, Server } from "lucide-react";

const frontendSkills = [
  "React",
  "Next.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Motion",
  "Accessibility",
  "Responsiveness",
  "Version Control System",
  "Code Quality",
  "UI/UX Implementation",
];

const focusAreas = [
  {
    title: "Reusable Interface Systems",
    description:
      "Builds reusable UI components that stay consistent with the design system. Keeps interfaces simple, scalable, and easy to maintain.",
    icon: <Layers className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Inclusive Experiences",
    description:
      "Ensures accessibility standards are met through early checks and testing. Aims to make every feature usable for all users.",
    icon: <Accessibility className="w-6 h-6 text-sky-500" />,
  },
  {
    title: "Seamless Delivery",
    description:
      "Works closely with backend developers to connect APIs smoothly. Focuses on delivering fast and seamless user experiences.",
    icon: <Server className="w-6 h-6 text-sky-500" />,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        <header className="text-center space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 text-shadow">
            Frontend Toolkit
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            A focused stack for crafting performant, accessible interfaces across
            web and mobile. Every project leans on these skills to ship polished
            user experiences that scale.
          </p>
        </header>

        <Card className="bg-white/75 backdrop-blur-md border border-sky-500/30 shadow-lg animate-slide-up">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">
              Core Frontend Skills
            </h3>
            <p className="text-slate-600 mb-6">
              The tools and practices I rely on daily to prototype quickly,
              maintain quality, and collaborate efficiently.
            </p>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-sky-500/15 text-sky-600 border border-sky-400/40 text-sm font-semibold shadow-sm hover:-translate-y-0.5 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3 animate-slide-up">
          {focusAreas.map((area, index) => (
            <Card
              key={area.title}
              className="bg-white/75 backdrop-blur-md border border-sky-500/30 shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  {area.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  {area.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

