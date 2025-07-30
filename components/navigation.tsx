"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-black shadow-2xl shadow-red-500/20 border-b border-red-500/30"
          : "bg-black/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center gap-3 animate-slide-down">
            <div className="relative group">
              <div className="text-3xl font-bold text-gradient neon-glow text-shadow transition-all duration-300 group-hover:scale-110">
                JPV
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div
              className="hidden sm:flex items-center gap-2 animate-slide-down"
              style={{ animationDelay: "0.1s" }}
            >
              <Shield className="w-5 h-5 text-red-400 animate-flicker" />
              <span
                className="text-sm font-medium text-red-300 animate-slide-right"
                style={{ animationDelay: "0.2s" }}
              ></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-red-400 transition-all duration-300 font-medium relative group animate-slide-down"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute -top-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-700 transition-all duration-300 group-hover:w-full"></span>
                <div className="absolute inset-0 bg-red-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          {/*  <div
            className="hidden md:block animate-slide-down"
            style={{ animationDelay: "0.8s" }}
          >
            <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-2 rounded-full border border-red-500/30 hover:neon-glow transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
              <Zap className="w-4 h-4 mr-2 animate-pulse-slow" />
              HIRE ME
            </Button>
          </div> */}

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-300 hover:text-red-400 hover:bg-red-400/10 border border-red-500/20 transition-all duration-300 hover:scale-110 animate-slide-down"
            style={{ animationDelay: "0.9s" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 animate-rotate-slow" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-red-500/30 shadow-2xl shadow-red-500/20 animate-slide-down">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-300 border border-transparent hover:border-red-500/30 hover:scale-105 animate-slide-left"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div
                className="pt-4 border-t border-red-500/20 animate-slide-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-3 rounded-full border border-red-500/30 hover:neon-glow transition-all duration-300 hover:scale-105">
                  <Zap className="w-4 h-4 mr-2 animate-pulse-slow" />
                  HIRE ME
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
