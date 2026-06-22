"use client";

import {
  BadgeCheck,
  Brain,
  Crosshair,
  FileSearch,
  Target,
  Users,
  ShieldCheck,
  BookOpen,
  Zap,
} from "lucide-react";

const highlights = [
  {
    icon: FileSearch,
    title: "Investigation Mindset",
    copy: "Breaking noisy signals into clear evidence, timelines, and actionable next steps for incident response.",
  },
  {
    icon: Crosshair,
    title: "Security First",
    copy: "Studying attacker behavior to design better defenses, enforce secure workflows, and minimize attack surfaces.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Growth",
    copy: "Committed to responsible practice, clean documentation, and continuous improvement in security operations.",
  },
  {
    icon: Brain,
    title: "Analytical Thinking",
    copy: "Approaching complex security challenges with structured reasoning and methodical evidence-based analysis.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    copy: "Bridging technical and business contexts with clear communication, fostering shared understanding across teams.",
  },
  {
    icon: Target,
    title: "Attention to Detail",
    copy: "Meticulous analysis of logs, configurations, and network traffic to identify subtle indicators of compromise.",
  },
];

const stats = [
  { label: "Projects Built", value: "4+", icon: Zap },
  { label: "Skills Mastered", value: "15+", icon: BookOpen },
  { label: "Certifications", value: "6+", icon: ShieldCheck },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
            About Me
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Building security through practice.
          </h2>
        </div>

        {/* Two-column layout: paragraphs + stats */}
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left — narrative */}
          <div className="space-y-5 text-lg leading-8 text-[var(--muted)]">
            <p>
              Driven by curiosity and a deep passion for cybersecurity, I focus
              on understanding how systems are attacked, how threats evolve, and
              how effective defenses are built. Through hands-on labs, real-world
              projects, and continuous learning, I'm developing the skills needed
              to protect modern digital environments.
            </p>
            <p>
              My interests span{" "}
              <span className="font-semibold text-[var(--foreground)]">
                network security
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--foreground)]">
                system hardening
              </span>
              ,{" "}
              <span className="font-semibold text-[var(--foreground)]">
                web application security
              </span>
              , and{" "}
              <span className="font-semibold text-[var(--foreground)]">
                incident investigation
              </span>
              . I enjoy exploring how vulnerabilities are discovered, how attacks
              unfold, and how strong defensive strategies can reduce risk and
              improve resilience.
            </p>
            <p>
              Looking ahead, my goal is to grow into a Security Engineer capable
              of designing secure systems, detecting and responding to threats,
              and helping organizations build resilient security programs — bridging
              the gap between understanding how attacks work and creating defenses
              that protect people, businesses, and critical digital infrastructure.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="card-glow flex items-center gap-5 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5 backdrop-blur"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10">
                  <Icon className="text-[var(--primary)]" size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--primary)]">
                    {value}
                  </p>
                  <p className="text-sm font-medium text-[var(--muted)]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient divider */}
        <div className="mx-auto my-14 h-px max-w-md bg-gradient-to-r from-transparent via-[var(--primary)]/25 to-transparent" />

        {/* Highlight cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="card-glow rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 backdrop-blur"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                <Icon className="text-[var(--accent)]" size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
