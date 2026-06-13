import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { skillGroups } from "@/lib/skills";

export const metadata: Metadata = {
  title: "Skills & Tech Stack",
  description:
    "The QA and test-automation toolkit Alejandro Tellez works with day to day.",
};

export default function Skills() {
  return (
    <PageShell title="Skills">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Skills &amp; Tech Stack
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
        More than a decade of testing across traditional web, Web3, fintech and enterprise has shaped a
        broad toolkit.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.name}
            className="rounded-xl border border-zinc-200 bg-white p-5"
          >
            <h2 className="text-base font-semibold text-zinc-900">
              {group.name}
            </h2>
            <p className="mt-1 text-sm text-zinc-500">{group.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-mono text-xs text-zinc-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
