import Link from "next/link";
import { ArrowRight, Bug, GitBranch, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const focusAreas = [
  {
    icon: Bug,
    title: "Break things on purpose",
    body: "End-to-end and exploratory testing that finds the edge cases before your users do.",
  },
  {
    icon: GitBranch,
    title: "Automate the boring parts",
    body: "Scalable Playwright, Cypress and Pytest suites wired straight into CI/CD pipelines.",
  },
  {
    icon: ShieldCheck,
    title: "Build quality in",
    body: "Test strategy, contract testing and guidelines that make whole teams ship with confidence.",
  },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <PageShell title="Home">
      {/* Hero */}
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        Senior QA Engineer @ Ava Labs
      </span>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
        Hi! I&apos;m Alejandro <span className="inline-block">👋</span>
      </h1>

      <div className="mt-5 space-y-4 text-base leading-relaxed text-zinc-600">
        <p>
          Senior Web3 QA Engineer &amp; SDET who breaks things so your users
          don&apos;t have to. I care about code quality, test automation and
          building products with high quality.
        </p>
        <p>
          Currently developing quality at{" "}
          <a
            href="https://www.avalabs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Ava Labs
          </a>
          {" "} for Core — arguably the most unfairly stacked wallet in Web3: swaps, perps, bridging, portfolio tracking… basically your financial survival kit for crypto degenerates.
        </p>
      </div>

      {/* Focus areas */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {focusAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div
              key={area.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4"
            >
              <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
              <h3 className="mt-3 text-sm font-semibold text-zinc-900">
                {area.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {area.body}
              </p>
            </div>
          );
        })}
      </div>

      {/* Selected work */}
      <div className="mt-12 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-zinc-900">Selected work</h2>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition-colors duration-200 hover:text-brand-600"
        >
          View all
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl border border-zinc-200 bg-zinc-50 p-6">
        <h2 className="text-lg font-semibold text-zinc-900">
          Let&apos;s make quality a feature.
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Open to interesting QA, SDET and test-architecture conversations.
        </p>
        <a
          href="mailto:alejandrotellezm12@gmail.com"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-700"
        >
          Get in touch
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </PageShell>
  );
}
