import {
  Code,
  Smartphone,
  Globe,
  Palette,
  Zap,
  Star,
  Shield,
  Target,
  Database,
  Cpu,
  Layers,
  GitBranch,
  Monitor,
  Smartphone as Mobile,
  Cloud,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-sky-500 to-sky-600",
      bgColor: "bg-sky-500/20",
      iconColor: "text-sky-400",
      level: 95,
      technologies: [
        "React.js",
        "Next.js 14",
        "TypeScript",
        "JavaScript ES6+",
        "HTML5/CSS3",
        "Responsive Design",
      ],
    },
    {
      category: "Mobile Development",
      icon: <Mobile className="w-8 h-8" />,
      color: "from-sky-600 to-sky-700",
      bgColor: "bg-sky-600/20",
      iconColor: "text-sky-400",
      level: 88,
      technologies: [
        "React Native",
        "Expo",
        "Cross-platform",
        "Native Modules",
        "Mobile UI/UX",
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Database className="w-8 h-8" />,
      color: "from-sky-700 to-sky-800",
      bgColor: "bg-sky-700/20",
      iconColor: "text-sky-400",
      level: 85,
      technologies: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      category: "UI/UX & Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-sky-800 to-sky-900",
      bgColor: "bg-sky-800/20",
      iconColor: "text-sky-400",
      level: 90,
      technologies: [
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "Figma",
        "Adobe XD",
        "Design Systems",
      ],
    },
    {
      category: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-sky-800 to-sky-900",
      bgColor: "bg-sky-800/20",
      iconColor: "text-sky-400",
      level: 82,
      technologies: [
        "Git/GitHub",
        "Docker",
        "Vercel",
        "Netlify",
        "CI/CD",
        "AWS",
      ],
    },
    {
      category: "Testing & Quality",
      icon: <Shield className="w-8 h-8" />,
      color: "from-sky-600 to-sky-800",
      bgColor: "bg-sky-600/20",
      iconColor: "text-sky-400",
      level: 87,
      technologies: [
        "Jest",
        "React Testing Library",
        "Cypress",
        "ESLint",
        "Prettier",
        "TypeScript",
      ],
    },
  ];

  const expertise = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "PERFORMANCE OPTIMIZATION",
      description: "Lighthouse scores 95+ • Bundle optimization • Lazy loading",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "SECURITY BEST PRACTICES",
      description: "OWASP guidelines • Authentication • Data protection",
      color: "from-sky-600 to-sky-700",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "ACCESSIBILITY",
      description: "WCAG 2.1 AA • Screen readers • Keyboard navigation",
      color: "from-sky-700 to-sky-800",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CLOUD DEPLOYMENT",
      description: "AWS • Vercel • Netlify • CI/CD pipelines",
      color: "from-sky-800 to-sky-900",
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 text-shadow">
            SKILLS & EXPERTISE
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-sky-500 to-sky-700 mx-auto rounded-full mb-6 animate-glow" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4 font-medium">
            Specialized in modern web development with expertise across the full
            stack. Focused on creating scalable, performant, and user-centric
            applications.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur-md border border-sky-500/30 shadow-lg hover:shadow-xl transition-all duration-300 group hover:neon-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 md:pb-4">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div
                    className={`p-3 md:p-4 rounded-full ${
                      skill.bgColor
                    } group-hover:scale-110 transition-transform duration-300 group-hover:${skill.bgColor.replace(
                      "/20",
                      "/30"
                    )}`}
                  >
                    <div className={skill.iconColor}>{skill.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-lg md:text-xl font-black text-slate-900 mb-2">
                      {skill.category}
                    </CardTitle>
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <Progress value={skill.level} className="flex-1 h-2 bg-sky-100" />
                      <span className="text-sm font-bold text-slate-600 whitespace-nowrap">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 md:px-3 py-1 text-xs md:text-sm font-bold rounded-full bg-gradient-to-r ${skill.color} text-white shadow-sm hover:scale-105 transition-transform`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Areas */}
        <div
          className="mt-16 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
            AREAS OF EXPERTISE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{item.icon}</div>
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-xl p-6 text-center hover:neon-glow transition-all duration-300">
            <Zap className="w-8 h-8 text-sky-400 mx-auto mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">PERFORMANCE</h3>
            <p className="text-slate-600 text-sm font-medium">
              Optimizing for speed and efficiency
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-xl p-6 text-center hover:neon-glow-red transition-all duration-300">
            <Shield className="w-8 h-8 text-sky-400 mx-auto mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">QUALITY</h3>
            <p className="text-slate-600 text-sm font-medium">
              Clean, maintainable code
            </p>
          </div>
          <div className="bg-white/70 backdrop-blur-md border border-sky-500/30 rounded-xl p-6 text-center hover:neon-glow-dark-red transition-all duration-300">
            <Target className="w-8 h-8 text-sky-400 mx-auto mb-4" />
            <h3 className="text-lg font-black text-slate-900 mb-2">INNOVATION</h3>
            <p className="text-slate-600 text-sm font-medium">
              Latest technologies & best practices
            </p>
          </div>
        </div>

        <div
          className="mt-16 text-center animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-md border border-sky-500/30 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-sky-400 rounded-full animate-pulse" />
            <span className="text-slate-600 font-bold">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
