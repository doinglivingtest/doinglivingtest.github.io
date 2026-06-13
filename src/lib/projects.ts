export type Metric = { value: string; label: string };

export type Link = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  org: string;
  period: string;
  summary: string;
  metrics: Metric[];
  tags: string[];
  links?: Link[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "core-perps",
    title: "Perps — Leverage Trading",
    org: "Core (Ava Labs)",
    period: "2025 — Present",
    summary:
      "Validated Core's perpetual-futures trading flows — opening and closing leveraged long/short positions, margin and USDC settlement, funding rates and liquidation edge cases. Built end-to-end coverage for the trading UI across the Core browser extension and mobile wallet.",
    metrics: [
      { value: "Perps", label: "leveraged long/short flows" },
      { value: "E2E", label: "extension + mobile coverage" },
    ],
    tags: ["TypeScript", "Playwright", "Web3", "DeFi", "Avalanche", "Trading"],
    links: [{ label: "Perps Trading", href: "https://core.app/perps/AVAX" }],
    featured: true,
  },
  {
    slug: "core-earn",
    title: "Earn — Deposit, Borrow & Lending",
    org: "Core (Ava Labs)",
    period: "2025 — Present",
    summary:
      "Tested Core's Earn flows integrating Aave and Benqi on Avalanche — depositing tokens to generate yield, borrowing against collateral and monitoring loan health scores in real time. Designed regression suites for APY display, repayment and collateral-ratio edge cases.",
    metrics: [
      { value: "Aave + Benqi", label: "protocols validated" },
      { value: "Deposit / Borrow", label: "lending flows covered" },
    ],
    tags: ["TypeScript", "Playwright", "DeFi", "Aave", "Benqi", "Avalanche", "Lending Protocols"],
    links: [{ label: "Earn Deposit", href: "https://core.app/deposit" }],
    featured: true,
  },
  {
    slug: "instabridge",
    title: "Instabridge — Cross-chain Bridge Testing",
    org: "Radix",
    period: "2022 — 2023",
    summary:
      "Built and scaled a Playwright automation suite for a cross-chain bridge, simulating real decentralized transactions with MetaMask and Infura. Designed test strategies for mint/burn token flows across Ethereum and Radix.",
    metrics: [
      { value: "90%+", label: "automation coverage" },
      { value: "2", label: "chains validated" },
    ],
    tags: ["Playwright", "TypeScript", "MetaMask", "Infura", "Web3"],
    links: [{ label: "radixdlt.com", href: "https://www.radixdlt.com/" }],
    featured: true,
  },
  {
    slug: "radix-wallet",
    title: "Radix Wallet — Mobile QA & Persona Validation",
    org: "Radix",
    period: "2022 — 2023",
    summary:
      "Validated complex React-based components — wallet connections, transaction manifests and dApp integrations — and authored company-wide guidelines for writing semantic, testable code.",
    metrics: [
      { value: "Mobile", label: "wallet QA" },
      { value: "Org-wide", label: "testing guidelines" },
    ],
    tags: ["Mobile", "React", "dApp", "Test Strategy"],
    links: [{ label: "radixdlt.com/wallet", href: "https://www.radixdlt.com/wallet" }],
    featured: true,
  },
  {
    slug: "allianz-pipelines",
    title: "Enterprise QA Automation at Scale",
    org: "Allianz",
    period: "2022 — 2025",
    summary:
      "As Test Architect, designed and led enterprise-level QA automation aligned with Agile/DevOps best practices and built tools widely used across the organization. Standardized automation pipelines and automated complex API validations with Rest-Assured.",
    metrics: [
      { value: "+40%", label: "defect detection" },
      { value: "50+", label: "engineers aligned" },
    ],
    tags: ["Rest-Assured", "Java", "CI/CD", "Test Architecture"],
    featured: true,
  },
  {
    slug: "mps-framework",
    title: "Hybrid Automation Framework",
    org: "Monolithic Power Systems",
    period: "2019 — 2022",
    summary:
      "Developed a hybrid automation framework (Java, Cucumber, Rest-Assured) covering desktop apps with WinAppDriver and web apps with Selenium Grid, integrated with TestRail and Jenkins CI.",
    metrics: [
      { value: "-70%", label: "regression effort" },
      { value: "Web + Desktop", label: "coverage" },
    ],
    tags: ["Java", "Cucumber", "Selenium", "WinAppDriver", "Jenkins"],
  },
  {
    slug: "freelance-sdet",
    title: "SDET / QA Contractor",
    org: "Lazy Dog · Amazon Go · neondb",
    period: "2014 — 2022",
    summary:
      "Implemented automation frameworks from scratch with Playwright, Cypress and WebdriverIO across multiple clients. Built contract-based suites with pact-jvm and ran cross-browser E2E on BrowserStack.",
    metrics: [
      { value: "Multi-client", label: "engagements" },
      { value: "3", label: "frameworks built from scratch" },
    ],
    tags: ["TypeScript", "XCUITest", "Python", "Swift", "Playwright", "Cypress", "Pact", "Pytest", "BrowserStack"],
    links: [
      {
        label: "amazon.jobs — Amazon Go",
        href: "https://www.amazon.jobs/content/en/teams/worldwide-grocery-stores/amazon-go",
      },
      { label: "neondb", href: "https://neon.tech/" },
      { label: "LazyDog Restaurant", href: "https://lazydogrestaurants.com/" },
    ],
  },
];
