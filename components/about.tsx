import {
  MapPin,
  GraduationCap,
  Calendar,
  User,
  Code,
  Heart,
  Shield,
  Target,
  Award,
  Briefcase,
  Globe,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      role: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2021 - 2022",
      description:
        "Developed scalable web applications using modern technologies",
      icon: <Code className="w-5 h-5" />,
    },
    {
      role: "Frontend Developer",
      company: "WebStudio Pro",
      period: "2020 - 2021",
      description: "Created responsive and interactive user interfaces",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  const achievements = [
    {
      title: "Performance Excellence",
      description: "Achieved 95+ Lighthouse scores across all projects",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Team Leadership",
      description: "Led development teams of 5+ developers",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Client Satisfaction",
      description: "100% client satisfaction rate over 3 years",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-shadow">
            ABOUT ME
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full animate-glow" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 animate-slide-left">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                Hello! I'm{" "}
                <span className="font-bold text-red-100">
                  John Prince Victorino
                </span>
                , a passionate and experienced frontend developer with over 4
                years of expertise in creating exceptional digital experiences.
                I specialize in building modern, scalable web applications that
                combine cutting-edge technology with intuitive design.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                My journey in software development began with a curiosity for
                creating things that people love to use. Today, I focus on
                React, Next.js, and TypeScript to build performant, accessible,
                and user-centric applications. I believe in writing clean,
                maintainable code and staying current with industry best
                practices.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or mentoring junior
                developers. I'm always excited to take on new challenges and
                collaborate with teams to bring innovative ideas to life.
              </p>
            </div>

            {/* Skills Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-4 text-center hover:neon-glow transition-all duration-300">
                <Code className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-sm font-bold text-gray-300">
                  FRONTEND DEVELOPMENT
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-4 text-center hover:neon-glow-red transition-all duration-300">
                <Target className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-sm font-bold text-gray-300">
                  UI/UX DESIGN
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 animate-slide-right">
            {/* Personal Info Cards */}
            <Card className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:neon-glow group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">EDUCATION</h3>
                    <p className="text-gray-300">BS Information Technology</p>
                  </div>
                </div>
                <p className="text-gray-400 ml-16">EARIST (Manila Campus)</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:neon-glow-red group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-colors">
                    <Calendar className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">AGE</h3>
                    <p className="text-gray-300">23 years old</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:neon-glow-dark-red group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-colors">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">LOCATION</h3>
                    <p className="text-gray-300">Marikina City, Philippines</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Work Experience */}
        <div
          className="mt-16 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            WORK EXPERIENCE
          </h3>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:neon-glow group"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-500/20 rounded-full group-hover:bg-red-500/30 transition-colors flex-shrink-0">
                      <div className="text-red-400">{exp.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-lg text-white">
                          {exp.role}
                        </h4>
                        <span className="text-sm text-gray-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-red-300 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div
          className="mt-16 animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8">
            KEY ACHIEVEMENTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-6 text-center hover:neon-glow transition-all duration-300 group"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{achievement.icon}</div>
                </div>
                <h4 className="text-lg font-black text-white mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-300 text-sm font-medium">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-6 text-center hover:neon-glow transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2">4+</div>
            <div className="text-gray-300 font-bold">YEARS OF EXPERIENCE</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-6 text-center hover:neon-glow-red transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2">75+</div>
            <div className="text-gray-300 font-bold">PROJECTS COMPLETED</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl p-6 text-center hover:neon-glow-dark-red transition-all duration-300">
            <div className="text-3xl font-black text-white mb-2">100%</div>
            <div className="text-gray-300 font-bold">CLIENT SATISFACTION</div>
          </div>
        </div>
      </div>
    </section>
  );
}
