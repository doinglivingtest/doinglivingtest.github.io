import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Selected QA automation and test-architecture work by Alejandro Tellez, with impact metrics.",
};

export default function Projects() {
  return (
    <PageShell title="Projects">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Projects &amp; Case Studies
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
        A selection of test-automation and quality-engineering work — from
        cross-chain bridges to enterprise pipelines. Metrics reflect the impact
        delivered on each engagement.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
