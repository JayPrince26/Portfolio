"use client";

import type React from "react";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  ArrowRight,
  Shield,
  Target,
  ExternalLink,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description:
        "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "victorinoprince.fe.dev@gmail.com",
      href: "mailto:victorinoprince.fe.dev@gmail.com",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Marikina City, Philippines",
      href: "https://maps.google.com/?q=Marikina+City+Philippines",
      color: "from-red-600 to-red-700",
      bgColor: "bg-red-600/20",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+63 961 339 4268",
      href: "tel:+639613394268",
      color: "from-red-700 to-red-800",
      bgColor: "bg-red-700/20",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      href: "https://github.com/johnprincevictorino",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/johnprincevictorino",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-900/30",
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      name: "Portfolio",
      href: "https://johnprince.dev",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-900/30",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 text-shadow">
            CONTACT ME
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full mb-6 animate-glow" />
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4 font-medium">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something exceptional together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8 animate-slide-left">
            <div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6">
                LET'S WORK TOGETHER
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question, want to collaborate, or
                just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-md hover:shadow-lg transition-all duration-300 hover:neon-glow group"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <div
                        className={`p-2 md:p-3 rounded-full bg-gradient-to-r ${info.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
                      >
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-white text-sm md:text-base">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm md:text-base break-all"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-bold text-white mb-4">FOLLOW ME</h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-black/40 backdrop-blur-md border border-red-500/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-gray-300 ${social.color} ${social.bgColor} text-center group`}
                    aria-label={social.name}
                  >
                    <div className="mb-2">{social.icon}</div>
                    <div className="text-xs font-bold">{social.name}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="pt-6">
              <div className="bg-black/40 backdrop-blur-md border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      Available for new opportunities
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Response time: Within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-black/40 backdrop-blur-md border border-red-500/30 shadow-lg animate-slide-right">
            <CardHeader className="pb-4 md:pb-6">
              <CardTitle className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-red-400" />
                SEND A MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full min-h-[120px] bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-4 text-lg font-black rounded-full transition-all duration-300 neon-glow hover:neon-glow-red border border-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      SEND MESSAGE
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div
          className="text-center mt-16 pt-8 border-t border-red-500/30 animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} John Prince Victorino. Built with
            Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
