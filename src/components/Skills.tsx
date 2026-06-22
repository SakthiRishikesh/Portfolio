import { Award, Shield, Terminal } from "lucide-react";
import { skillGroups } from "@/data/skills";
import type { ComponentType } from "react";

const categoryIcons: Record<
  string,
  ComponentType<{ size?: number; className?: string }>
> = {
  "Security Operations": Shield,
  "Tools & Platforms": Terminal,
  "Professional Strengths": Award,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
              Skills
            </p>
            <h2 className="mt-3 text-4xl font-bold">Core competencies.</h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--muted)]">
            A practical mix of security operations, essential tooling, and
            professional habits that drive effective defense.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = categoryIcons[group.category];
            return (
              <article
                key={group.category}
                className="card-glow rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                      <Icon size={18} className="text-[var(--primary)]" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold">{group.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[var(--card-border)] bg-[var(--primary)]/5 px-3 py-2 text-sm font-medium text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
