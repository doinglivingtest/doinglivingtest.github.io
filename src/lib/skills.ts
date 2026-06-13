export type SkillGroup = {
  name: string;
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Test Automation",
    description: "End-to-end, UI, mobile and desktop automation frameworks.",
    items: [
      "Playwright",
      "Cypress",
      "WebdriverIO",
      "Selenium + Grid",
      "XCUITest",
      "WinAppDriver",
    ],
  },
  {
    name: "AI-Augmented Testing",
    description: "Using AI to author, maintain and scale test suites.",
    items: [
      "LLM-driven test generation",
      "Self-healing locators",
      "Playwright MCP",
      "Applitools (Visual AI)",
      "GitHub Copilot",
      "AI test data synthesis",
    ],
  },
  {
    name: "Languages",
    description: "Languages I write production test code in.",
    items: ["TypeScript", "JavaScript", "Python", "Java", "Swift"],
  },
  {
    name: "API & Contract Testing",
    description: "Service-level validation and consumer-driven contracts.",
    items: ["Rest-Assured", "Pact (pact-jvm)", "Postman", "GraphQL"],
  },
  {
    name: "Frameworks & Reporting",
    description: "BDD, test runners and reporting I build suites around.",
    items: ["Cucumber (BDD)", "Pytest", "JUnit / TestNG", "Allure"],
  },
  {
    name: "CI/CD & Infrastructure",
    description: "Where the suites run, scale and report back.",
    items: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "BrowserStack",
      "TestRail",
    ],
  },
  {
    name: "Databases",
    description: "Data layers I validate and query during testing.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    name: "Web3 & Blockchain",
    description: "Tooling for testing dApps and on-chain flows.",
    items: [
      "MetaMask",
      "Infura",
      "dApp / wallet testing",
      "Ethereum",
      "Coinbase Wallet",
      "Core Wallet",
      "Avalanche",
      "Polygon",
      "Prediction Markets",
    ],
  },
  {
    name: "Practices",
    description: "How I approach quality beyond the tooling.",
    items: [
      "Shift Left Testing",
      "Test strategy & architecture",
      "Agile / DevOps",
      "Mentoring & enablement",
      "Exploratory testing",
      "UAT design",
    ],
  },
];
