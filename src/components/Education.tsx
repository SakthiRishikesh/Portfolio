"use client";

import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
          Education
        </p>
        <h2 className="mt-3 text-4xl font-bold">Academic foundation.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          A strong academic background in Computer Science Engineering with a
          focus on cybersecurity and secure system design.
        </p>

        <div className="mt-10 space-y-6">
          {education.map((edu) => (
            <article
              key={edu.institution}
              className="group relative overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card)] backdrop-blur transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5"
            >
              {/* Gradient accent bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] opacity-70 transition-opacity group-hover:opacity-100" />

              <div className="p-8 pl-10 md:p-10 md:pl-12">
                {/* Header */}
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 transition-colors group-hover:bg-[var(--primary)]/15">
                      <GraduationCap className="text-[var(--primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                      <p className="mt-1 text-lg font-semibold text-[var(--primary)]">
                        {edu.field}
                      </p>
                      <p className="mt-2 text-[var(--muted)]">{edu.institution}</p>
                    </div>
                  </div>
                </div>

                {/* Meta info */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[var(--accent)]" />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[var(--accent)]" />
                    {edu.duration}
                  </span>
                </div>

                {/* Highlights */}
                <div className="mt-8">
                  <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-[var(--muted)]">
                    <BookOpen size={14} />
                    Key Highlights
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-[var(--card-border)] bg-[var(--background)]/50 p-4 transition-colors hover:border-[var(--primary)]/20"
                      >
                        <Award
                          size={16}
                          className="mt-0.5 shrink-0 text-[var(--accent)]"
                        />
                        <p className="text-sm leading-relaxed text-[var(--muted)]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
