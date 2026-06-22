import { Code2, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-semibold uppercase text-[var(--primary)]">
              Projects
            </p>
            <h2 className="mt-3 text-4xl font-bold">Security work in practice.</h2>
          </div>
          <p className="max-w-xl leading-7 text-[var(--muted)]">
            Focused project cards with short summaries, tooling context, and
            direct repository links.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex min-h-80 flex-col rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[var(--primary)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[var(--foreground)] text-[var(--background)]">
                <Code2 size={22} />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-[var(--muted)]">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-[var(--primary)]/12 px-3 py-1.5 text-xs font-semibold text-[var(--primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-[var(--primary)] transition hover:text-[var(--accent)]"
              >
                View repository
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
