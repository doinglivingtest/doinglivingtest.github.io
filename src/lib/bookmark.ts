// src/lib/bookmarks.ts

type Bookmark = {
  title: string;
  url: string;
  description: string;
  thumbnail?: string;
  category: string;
};

export const bookmarks: Bookmark[] = [
  {
    title: "How to Supercharge Test Automation with AI and Playwright",
    url: "https://testguild.com/ai-playwright-testing",
    description: "By Test Guild",
    thumbnail: "https://cdn-bojkm.nitrocdn.com/xNQtoampyRQBytOGuBcersslgKBwHfMI/assets/images/optimized/rev-bb0715a/testguild.com/wp-content/uploads/2025/08/AI-and-Playwright-with-Cursor-TestGuild-1200x0-c-default.png",
    category: "ai",
  },
  {
    title: "Playwright AI Agents: Fix Broken Tests Automatically",
    url: "https://testguild.com/playwright-ai-agents",
    description: "By Test Guild",
    thumbnail: "https://cdn-bojkm.nitrocdn.com/xNQtoampyRQBytOGuBcersslgKBwHfMI/assets/images/optimized/rev-bb0715a/testguild.com/wp-content/uploads/2025/10/Playwright-AI-Agents-Test-Automation-Test-Guild-1200x0-c-default.png",
    category: "ai",
  },
  {
    title: "History of Blockchain",
    url: "https://www.binance.com/en/academy/articles/history-of-blockchain",
    description: "The underlying technology behind cryptocurrencies is the blockchain. It allows every client in the network to reach consensus without ever having to trust each other.",
    thumbnail: "https://www.binance.com/bapi/fe/resource/image?image=aHR0cHM6Ly9wdWJsaWMuYm5ic3RhdGljLmNvbS9zdGF0aWMvYWNhZGVteS91cGxvYWRzLW9yaWdpbmFsLzFiZTljNWVhMThlMzQyZWJhZTNiOTMxYTEwZDA1Yjg4LmpwZw==&level=lg",
    category: "crypto",
  },
  {
    title: "Playwright + Blockchain Testing: Validating dApps and Smart Contract Frontends",
    url: "https://testrig.medium.com/playwright-blockchain-testing-validating-dapps-and-smart-contract-frontends-9d6dd8b6c7a9",
    description: "Ensuring reliability requires E2E testing that bridges UI, blockchain RPCs, and wallet integrations. Playwright, with its network interception, multi-context browser automation, and deterministic mocks, is uniquely positioned for this.",
    thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ElX3TxfvN43gOg7Lt3B-qA.jpeg",
    category: "crypto",
  },
  {
    title: "The Principles of Design and Their Importance",
    url: "https://www.toptal.com/designers/ui/principles-of-design",
    description: "Understanding the principles of design and how they interact is vital for both new and expert designers. Implementing them purposefully is key to creating visually appealing, functional designs.",
    thumbnail: "https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fblog_post_page%2F4084187%2Fcover_image%2Fregular_1708x683%2Fcover-principles-of-design-28b23ac84ae880cb7fe65c93e1678780.png",
    category: "design",
  },
  {
    title: "24 best fonts for websites",
    url: "https://www.figma.com/resource-library/best-fonts-for-websites/",
    description: "Read on to learn more about the best fonts for websites in 2025, how to find the right typeface for your brand, and how Figma can help",
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/573b0b955a5d8b2d183a2e4724899ce69b72c6d8-1000x500.png?q=75&fit=max&auto=format&dpr=2",
    category: "design",
  },
  {
    title: "Seven essential UI design principles + how to use them",
    url: "https://www.figma.com/resource-library/ui-design-principles/",
    description: "UI design starts with a clear understanding of best practices. Learn the seven essential UI design pri",
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/0af30a1e645c1fdd5c8b18acc7313790ef03b34e-2880x1440.png?q=75&fit=max&auto=format&dpr=2",
    category: "design",
  },
  {
    title: "Web design explained—key elements and best practices",
    url: "https://www.figma.com/resource-library/what-is-web-design/",
    description: "Web design involves creating visually appealing, user-centric web pages and web apps. Learn how to develop effective web designs with Figma",
    thumbnail: "https://cdn.sanity.io/images/599r6htc/regionalized/3d9bf639d89e9b9492e2591505d937835ef74ae1-720x360.png?q=75&fit=max&auto=format&dpr=2",
    category: "design",
  },
  {
    title: "Software Engineering Principles Every backend Developer Should Know",
    url: "https://dev.to/nikhilxd/software-engineering-principles-every-backend-developer-should-know-3j7c",
    description: "As a backend developer, there are several software engineering principles that are crucial to understand and implement. These principles help ensure that your code is maintainable, scalable, and robust.",
    thumbnail: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fydw8ny5okdospyqq1bj3.jpg",
    category: "backend",
  },
  {
    title: "Build Your Web Skills for Free",
    url: "https://www.freecodecamp.org/",
    description: "Advance your career by learning in-demand skills in Programming, DevOps, Cybersecurity, AI Engineering, and English for Developers.",
    thumbnail: "https://i.pcmag.com/imagery/reviews/01tPXClg2WjLamQzScplH3y-15.fit_scale.size_1028x578.v1627670281.png",
    category: "backend",
  },
  {
    title: "is it christmas?",
    url: "https://isitchristmas.com/",
    description: "Web to know if it's christmas alreadey",
    thumbnail: "https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image.jpg",
    category: "websites",
  },
  {
    title: "Guthib",
    url: "https://guthib.com/",
    description: "Website when you spelled github wrong.",
    thumbnail: "https://brandhub.co.nz/wp-content/uploads/2018/03/blog-page-placeholder-image.jpg",
    category: "websites",
  }
];

export function getBookmarksByCategory(category: string) {
  return bookmarks.filter((b) => b.category === category);
}
