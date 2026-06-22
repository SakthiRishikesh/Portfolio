"use client";

import { Briefcase, Code2, Palette, ChevronRight, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";
import type { ComponentType } from "react";

const roleIcons: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "Web Scraper": Code2,
  "UI/UX Designer": Palette,
};

function getRoleIcon(role: string) {
  for (const [key, Icon] of Object.entries(roleIcons)) {
    if (role.includes(key)) return Icon;
  }
  return Briefcase;
}

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-bold">Hands-on contributions.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Technical contributions as a project member in Dev/Track, a
          student-driven technical club focused on building real-world projects.
        </p>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--primary)]/40 via-[var(--accent)]/20 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = getRoleIcon(exp.role);
              return (
                <article
                  key={exp.role}
                  className="group relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[15px] top-8 z-10 hidden h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--background)] md:flex">
                    <div className="h-2.5 w-2.5 rounded-full bg-[var(--primary)] transition-transform group-hover:scale-125" />
                  </div>

                  <div className="overflow-hidden rounded-xl border border-[var(--card-border)] bg-[var(--card)] backdrop-blur transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/5">
                    <div className="p-7 md:p-8">
                      {/* Header */}
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                            <Icon className="text-[var(--primary)]" size={22} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="mt-1 font-semibold text-[var(--primary)]">
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                          <span className="rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-3 py-1 font-semibold text-[var(--primary)]">
                            {exp.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {exp.duration}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-5 leading-7 text-[var(--muted)]">
                        {exp.description}
                      </p>

                      {/* Contributions */}
                      <div className="mt-6 space-y-2.5">
                        {exp.contributions.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <ChevronRight
                              size={16}
                              className="mt-0.5 shrink-0 text-[var(--accent)]"
                            />
                            <p className="text-sm leading-relaxed text-[var(--muted)]">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech tags */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-[var(--card-border)] bg-[var(--primary)]/5 px-3 py-1.5 text-xs font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
