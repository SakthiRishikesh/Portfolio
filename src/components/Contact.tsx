import { BriefcaseBusiness, Code2, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Left — Contact CTA card */}
          <article className="card-glow flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 backdrop-blur md:p-10">
            <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Let&apos;s connect.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              Reach out for cybersecurity learning opportunities,
              collaboration, or conversations around SOC analysis, defensive
              security, and hands-on labs.
            </p>

            <div className="mt-8 rounded-lg border border-[var(--card-border)] bg-[var(--background)]/55 p-5">
              <p className="text-sm font-semibold uppercase text-[var(--muted)]">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-[var(--primary)] transition hover:text-[var(--accent)]"
              >
                <Mail size={20} />
                {profile.email}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <BriefcaseBusiness size={18} />
                LinkedIn
              </a>
            </div>
          </article>

          {/* Right — Quick info card */}
          <article className="card-glow flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 backdrop-blur md:p-10">
            <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
              Open To
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Opportunities & collaboration.
            </h2>

            <div className="mt-8 space-y-4 flex-1">
              {[
                {
                  title: "Internships & Entry-Level Roles",
                  desc: "SOC Analyst, Security Operations, Threat Analysis",
                },
                {
                  title: "Collaborative Projects",
                  desc: "Open-source security tools, CTF teams, research papers",
                },
                {
                  title: "Learning Communities",
                  desc: "Cybersecurity study groups, lab partnerships, mentorship",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[var(--card-border)] bg-[var(--background)]/50 p-4 transition-colors hover:border-[var(--primary)]/20"
                >
                  <p className="flex items-center gap-2 font-semibold">
                    <ArrowRight
                      size={14}
                      className="text-[var(--primary)]"
                    />
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
