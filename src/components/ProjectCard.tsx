import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:border-brand-200 hover:shadow-[0_2px_20px_-8px_rgba(13,148,136,0.35)]">
      <div className="mb-1 flex items-center gap-2 text-xs font-medium text-zinc-500">
        <span className="text-brand-700">{project.org}</span>
        <span className="text-zinc-300">·</span>
        <span>{project.period}</span>
      </div>

      <h3 className="text-lg font-semibold leading-snug text-zinc-900">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {project.summary}
      </p>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2"
          >
            <div className="font-display text-base font-bold text-brand-700">
              {metric.value}
            </div>
            <div className="text-[11px] uppercase tracking-wide text-zinc-500">
              {metric.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1 text-sm font-medium text-brand-700 transition-colors duration-200 hover:text-brand-600"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
