import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Journey",
  description: "The career path of Alejandro Tellez — Senior QA Engineer.",
};

type Entry = {
  title: string;
  body: ReactNode;
  bullets?: string[];
};

type YearBlock = {
  year: string;
  entries: Entry[];
};

const link = (label: string, href: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="link">
    {label}
  </a>
);

const timeline: YearBlock[] = [
  {
    year: "2025",
    entries: [
      {
        title: "Joined Ava Labs",
        body: (
          <>
            Senior QA Engineer · Remote — Senior QA Engineer for{" "}
            {link("Core", "https://core.app/")}, the self-custodial Web3 wallet
            by Ava Labs on Avalanche.
          </>
        ),
        bullets: [
          "Designed an AI-driven testing process that integrates Claude with Figma, Atlassian and Playwright MCPs — pulling designs, Jira tickets and PRD documents to automatically generate test scenarios, which are then coded into Playwright suites and self-healed when the UI changes, boosting QA productivity by 50%.",
          "Own end-to-end QA strategy across the Core browser extension and iOS/Android wallets, defining risk-based coverage and release gating for high-stakes DeFi features.",
          "Built and maintain a Playwright + TypeScript automation suite simulating real on-chain transactions across Avalanche C/P/X-Chains, Ethereum, Bitcoin and EVM L2s, automating MetaMask and WalletConnect dApp integrations.",
          "Provided QA support for physical hardware wallets such as Ledger — validating device connection, on-device transaction signing and end-to-end flows against real hardware.",
          "Gained deep expertise across Core's full Web3 surface — perpetuals trading, staking, swapping, bridging, lending/borrowing, buying, sending and NFTs — to continuously expand and strengthen our regression suite across the entire application.",
        ],
      },
      {
        title: "Released a new version of my personal website",
        body: "Rebuilt this site with Next.js and Tailwind CSS.",
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        title: "Joined Inditex",
        body: (
          <>
            Senior QA Engineer · Remote — Quality owner for the Pattern Designer
            app at {link("Inditex", "https://www.inditex.com/")}.
          </>
        ),
        bullets: [
          "Owned quality for the Pattern Designer app end to end.",
          "Supported Grafana dashboard implementation with InfluxDB and Prometheus to track quality metrics — reducing user-reported bugs by 60% and bug-fixing time by 35%.",
          "Created a test-coverage and requirements-traceability strategy using Xray in Jira, enabling product decisions under tight deadlines.",
          "Implemented a Cypress regression suite covering 70% of features and 100% of core features — increasing release confidence and speeding up releases by 20%.",
        ],
      },
    ],
  },
  {
    year: "2022",
    entries: [
      {
        title: "Joined Radix",
        body: (
          <>
            Key projects: Instabridge (cross-chain bridge testing) &amp;{" "}
            {link("Radix Wallet", "https://www.radixdlt.com/wallet")} (mobile
            wallet QA &amp; persona validation).
          </>
        ),
        bullets: [
          "Scaled a Playwright automation suite to 90%+ coverage across Web3 apps.",
          "Integrated MetaMask and Infura to simulate real decentralized transactions in QA pipelines.",
          "Designed test strategies for mint/burn token flows across Ethereum and Radix.",
          "Validated complex React components — wallet connections, manifests and dApp integrations.",
          "Authored company-wide guidelines for writing semantic, testable code.",
        ],
      },
      {
        title: "Joined Allianz",
        body: "Test Architect designing enterprise-level QA automation aligned with Agile/DevOps best practices.",
        bullets: [
          "Standardized automation pipelines across 50+ global engineers.",
          "Automated complex API validations with Rest-Assured, improving defect detection by 40%.",
          "Mentored QA engineers to adopt modern frameworks and CI/CD integrations.",
          "Led performance testing initiatives for insurance web applications to ensure they could handle the expected traffic and load.",
        ],
      },
    ],
  },
  {
    year: "2019",
    entries: [
      {
        title: "Joined Monolithic Power Systems",
        body: "Built a hybrid automation framework spanning desktop and web.",
        bullets: [
          "Developed a hybrid Selenium framework (Java, Cucumber, Rest-Assured) reducing regression effort by 70%.",
          "Automated desktop (WinAppDriver) and web apps (Selenium + Grid); integrated with TestRail and Jenkins CI.",
          "Led QA documentation, regression suites and exploratory testing workflows.",
          "Implemented a regression testing framework for desktop applications simulating real devices like chips/semiconductors under test. This framework required extensive knowledge of the hardware and the software running on it.",
        ],
      },
    ],
  },
  {
    year: "Freelance",
    entries: [
      {
        title: "SDET / QA Engineer Contractor",
        body: (
          <>
            Worked with{" "}
            {link("Lazy Dog Restaurant", "https://www.lazydogrestaurants.com/")},{" "}
            {link(
              "Amazon Go",
              "https://www.amazon.jobs/content/en/teams/worldwide-grocery-stores/amazon-go",
            )}
            , {link("neondb", "https://neon.com/")}, among others.
          </>
        ),
        bullets: [
          "Implemented automation frameworks in TypeScript, Python, Java and Swift (XCUITest, Pytest, Allure).",
          "Built contract-based testing suites with pact-jvm for backend validation.",
          "Executed cross-browser E2E tests on BrowserStack for multi-vendor systems.",
          "Stood up frameworks from scratch with Playwright / Cypress / WebdriverIO.",
          "Designed UAT workflows and CI/CD-integrated QA pipelines.",
        ],
      },
    ],
  },
  {
    year: "2015",
    entries: [
      {
        title: "Won a DAAD scholarship in Germany",
        body: "Received the DAAD study-visit scholarship for groups of foreign students, visiting universities and research institutes across Germany. Created a network of students from different levels of study and led the initiative to visit universities and research institutes across Germany.",
      },
      {
        title: "Graduated from university",
        body: "It felt like forever — now I miss it!",
      },
    ],
  },
  {
    year: "2014",
    entries: [
      {
        title: "Joined SPRC",
        body: "Landed my first role at Sociedad Portuaria Regional Cartagena while studying, broadening my perspective. I started as a software engineer intern implementing simple tasks in Java and later transitioned to QA.",
      },
    ],
  },
  {
    year: "2010",
    entries: [
      {
        title: "Started at the University of Cartagena",
        body: "Studying Software Engineering at a public university was great.",
      },
    ],
  },
  {
    year: "1993",
    entries: [
      {
        title: "Born",
        body: "On the 17th of December, in Colombia 🇨🇴.",
      },
    ],
  },
];

export default function Journey() {
  return (
    <PageShell title="Journey">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
        Journey
      </h1>

      <div className="mt-12 space-y-12">
        {timeline.map((block) => (
          <section key={block.year}>
            <h2 className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-brand-700">
              {block.year}
            </h2>

            <div className="space-y-8 border-l border-zinc-200 pl-6">
              {block.entries.map((entry) => (
                <div key={entry.title} className="relative">
                  {/* node */}
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-500 ring-1 ring-brand-200" />
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {entry.title}
                  </h3>
                  <div className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {entry.body}
                  </div>
                  {entry.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {entry.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative pl-4 text-sm leading-relaxed text-zinc-600 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-brand-400"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
