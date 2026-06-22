"use client";

import { Shield, Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/profile";
import { useState, useEffect, useCallback } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Track scroll for navbar backdrop intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on link click
  const handleLinkClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[var(--card-border)] bg-[var(--background)]/90 shadow-sm shadow-[var(--primary)]/5 backdrop-blur-xl"
            : "border-transparent bg-[var(--background)]/60 backdrop-blur-lg"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-lg font-bold"
          >
            <Shield className="text-[var(--primary)]" size={20} />
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
              MSR
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-[var(--primary)]"
                    : "text-[var(--muted)] hover:text-[var(--primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:brightness-110 sm:flex"
            >
              <Download size={15} />
              Resume
            </a>
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-[var(--card-border)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] md:hidden"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile slide-in menu */}
      <div
        className={`fixed right-0 top-0 z-40 flex h-full w-72 flex-col border-l border-[var(--card-border)] bg-[var(--background)] p-6 pt-20 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                  : "text-[var(--muted)] hover:bg-[var(--primary)]/5 hover:text-[var(--primary)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile resume button */}
        <a
          href={profile.resumeUrl}
          download
          onClick={handleLinkClick}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] px-4 py-3 text-base font-semibold text-white shadow-md shadow-[var(--primary)]/20 transition-all duration-300 hover:shadow-lg hover:brightness-110"
        >
          <Download size={18} />
          Download Resume
        </a>
      </div>
    </>
  );
}
