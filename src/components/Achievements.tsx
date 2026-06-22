"use client";

import {
  Award,
  ExternalLink,
  Shield,
  Cloud,
  Code2,
  Star,
  Brain,
} from "lucide-react";
import { certifications } from "@/data/certifications";
import type { ComponentType } from "react";

const categoryIcons: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  security: Shield,
  cloud: Cloud,
  development: Code2,
  ai: Brain,
  other: Star,
};

const categoryColors: Record<string, string> = {
  security: "var(--primary)",
  cloud: "var(--accent)",
  development: "var(--secondary)",
  ai: "var(--warm)",
  other: "var(--muted)",
};

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
              Achievements
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Certifications & milestones.
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--muted)]">
            Verified certifications and training milestones that validate
            continuous learning in cybersecurity and technology.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const key = cert.category.toLowerCase();
            const Icon = categoryIcons[key] || Star;
            const color = categoryColors[key] || "var(--muted)";
            return (
              <article
                key={cert.title}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/8"
              >
                {/* Top accent line */}
                <div
                  className="h-1 w-full opacity-60 transition-opacity group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${color}, transparent)`,
                  }}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon & category */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                      <Icon className="text-[var(--primary)]" size={22} />
                    </div>
                    <span className="rounded-full border border-[var(--card-border)] bg-[var(--primary)]/5 px-3 py-1 text-xs font-semibold capitalize text-[var(--muted)]">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-bold leading-snug">
                    {cert.title}
                  </h3>

                  {/* Issuer & date */}
                  <div className="mt-3 space-y-1.5">
                    <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
                      <Award size={14} className="text-[var(--accent)]" />
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-[var(--muted)]">{cert.date}</p>
                  </div>

                  {/* Drive link */}
                  <a
                    href={cert.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-[var(--primary)] transition-colors hover:text-[var(--accent)]"
                  >
                    View Certificate
                    <ExternalLink
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
