"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Eye,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { profile } from "@/data/profile";
import TerminalAnimation from "./TerminalAnimation";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center px-6 py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Left column ──────────────────────────────── */}
        <div className="relative z-10">
          <p className="mb-4 font-mono text-sm font-semibold uppercase text-[var(--primary)]">
            {"< Hello World />"}
          </p>

          <p className="mb-5 font-mono text-sm text-[var(--muted)]">
            &gt; whoami
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-6 min-h-10 text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            <TypeAnimation
              sequence={[
                "Cybersecurity Enthusiast",
                1800,
                "SOC Analyst in Progress",
                1800,
                "Security Engineer Aspirant",
                1800,
                "Defensive Security Learner",
                1800,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Driven by curiosity and a passion for cybersecurity, I focus on understanding how threats emerge, how systems are targeted, and how effective defenses are built. Through hands-on practice, continuous learning, and security research, I am developing the skills needed to protect modern digital environments.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Email Me
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>

            <a
              href={profile.resumeUrl}
              download
              className="btn-secondary"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>

        {/* ── Right column ─────────────────────────────── */}
        <div className="relative z-10">
          <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 shadow-2xl shadow-purple-950/10 backdrop-blur">
            {/* Profile header */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] p-[3px]">
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase text-[var(--muted)]">Profile</p>
                <h2 className="text-2xl font-bold">{profile.role}</h2>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-4 border-[var(--primary)] pl-5 text-2xl font-bold leading-snug text-[var(--foreground)]">
              &ldquo;{profile.quote}&rdquo;
            </blockquote>

            {/* Trait cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { trait: "Curious", Icon: Eye },
                { trait: "Responsible", Icon: Shield },
                { trait: "Defensive", Icon: ShieldCheck },
              ].map(({ trait, Icon }) => (
                <div
                  key={trait}
                  className="card-glow rounded-lg border border-[var(--card-border)] bg-[var(--background)]/50 p-3"
                >
                  <Icon
                    className="mb-3 text-[var(--accent)] transition-transform duration-300 hover:scale-110"
                    size={20}
                  />
                  <p className="text-sm font-semibold">{trait}</p>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              <a
                
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="social-icon-btn"
              >
                <Code2 size={20} />
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="social-icon-btn"
              >
                <BriefcaseBusiness size={20} />
              </a>
            </div>
          </div>

          {/* Terminal animation */}
          <TerminalAnimation />
        </div>
      </div>
    </section>
  );
}
