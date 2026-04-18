"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      }
      // Hide navbar if scrolling down and past a threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Why Trust Us", href: "#why-trust-us" },
    { label: "Team", href: "#team" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-300 ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}>
      <nav className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between rounded-2xl border border-border/70 bg-background/85 backdrop-blur-md shadow-sm animate-fade-in">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Marketspot logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-cover"
            priority
          />
          <span className="text-lg font-bold text-foreground">Marketspot</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="#contact">
            <Button className="h-10 px-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden w-[90%] mx-auto mt-2 rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md shadow-sm animate-fade-up">
          <div className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="w-full" onClick={() => setIsOpen(false)}>
              <Button className="w-full h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
