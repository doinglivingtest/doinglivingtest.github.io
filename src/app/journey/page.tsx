import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";

export const metadata = {
  title: "Journey — Alejandro Tellez",
  description: "Personal timeline",
};

export default function Journey() {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:flex">
        <Sidebar />

        <div className="flex flex-1">
          <div className="relative flex w-full flex-col">
            <MobileHeader title="Journey" />

            <div className="content-wrapper">
              <div className="content">
                <div className="mb-6 lg:hidden">
                  <h1 className="text-3xl font-bold">Journey</h1>
                </div>

                <h1 className="mb-8 text-4xl font-bold hidden lg:block">Journey</h1>

                {/* Timeline */}
                {/* increase vertical spacing between year sections on larger screens */}
                <div className="space-y-12 lg:space-y-20">

                    {/* 2025 – Present */}
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">2025</h2>
                    <div className="space-y-8">

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Joined Radix</h3>
                          <ul className="space-y-1 text-gray-700 list-disc list-inside mb-3">
                            <li>Scaled Playwright automation suite to achieve 90%+ coverage across Web3 apps.</li>
                            <li>Integrated MetaMask and Infura to simulate real decentralized transactions in QA pipelines.</li>
                            <li>Developed test strategies for mint/burn token flows across Ethereum and Radix blockchains and Bridge Dapps.</li>
                            <li>Validated complex React-based components — wallet connections, manifests, and dApp integrations.</li>
                            <li>Created company-wide testing guidelines for writing semantic and testeable code</li>
                          </ul>
                          <p className="text-sm text-gray-600 mb-2">Key Projects: Instabridge (cross-chain bridge testing) & {' '}
                    <a href="https://www.radixdlt.com/wallet" target="_blank" rel="noopener noreferrer" className="link break-words after:content-['_↗']">
                      Radix Wallet
                    </a>{' '} (mobile wallet QA & persona validation).</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Released new version of my personal website</h3>
                          <p className="text-gray-700 mb-3">New version of my personal website built with Next.js, Tailwind CSS.</p>
                        </div>
                      </div>

                      </div>
                    </div>
                  </div>
                  
                  {/* 2022 */}
                <div className="space-y-12 lg:space-y-20"></div>  
        <div>
          <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">2022</h2>
                    <div className="space-y-8">

                      
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Joined Allianz</h3>
                          <ul className="space-y-1 text-gray-700 list-disc list-inside">
                            <li>As a Test Architect I designed and led enterprise-level QA automation aligned with Agile/DevOps best practices.</li>
                            <li>Standardized automation pipelines across 50+ global engineers.</li>
                            <li>Automated complex API validations using Rest-Assured, improving defect detection by 40%.</li>
                            <li>Mentored QA engineers to adopt modern frameworks and CI/CD integrations.</li>
                          </ul>
                        
                      </div>
                    </div>
                  </div>
                  


                  {/* 2019 */}
                  <div>
                    <h2 className="mt-8 lg:mt-12 space-y-8 text-2xl font-bold mb-6">2019</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Joined Monolithic Power Systems</h3>
                          <ul className="space-y-1 text-gray-700 list-disc list-inside">
                            <li>Developed hybrid automation framework (Java, Cucumber, Rest-Assured) reducing regression by 70%.</li>
                            <li>Automated desktop (using WinAppDriver) and web apps (Selenium and Grid); integrated test suites with TestRail and Jenkins CI.</li>
                            <li>Led QA documentation, regression suites, and exploratory testing workflows.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* 2014 – 2021 */}
                  <div className="space-y-12 lg:space-y-20"></div>
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">Freelance journey</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Working as SDET/QA Engineer Contractor</h3>
                          <p className="text-gray-700 mb-2">Worked with {' '}
                    <a href="https://www.lazydogrestaurants.com/" target="_blank" rel="noopener noreferrer" className="link break-words after:content-['_↗']">
                      Lazy Dog Restaurant
                    </a>{' '} , {' '}
                    <a href="https://www.amazon.jobs/content/en/teams/worldwide-grocery-stores/amazon-go" target="_blank" rel="noopener noreferrer" className="link break-words after:content-['_↗']">
                      Amazon Go
                    </a>{' '}, <a href="https://neon.com/" target="_blank" rel="noopener noreferrer" className="link break-words after:content-['_↗']">
                      neondb
                    </a>{' '}, among others.</p>
                          <ul className="space-y-1 text-gray-700 list-disc list-inside">
                            <li>Implemented automated frameworks using Typescript, Python, Java, and Swift (XCUITest, Pytest, Allure).</li>
                            <li>Built contract-based testing suites with pact-jvm for backend validation.</li>
                            <li>Executed cross-browser E2E tests on BrowserStack for multi-vendor systems.</li>
                            <li>Implemented automation frameworks from scratch using Playwright / Cypress / Webdriverio</li>
                            <li>Designed UAT workflows and CI/CD-integrated QA pipelines from scratch.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2015 */}
                  <div className="space-y-12 lg:space-y-20"></div>
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">2015</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">won a Scholarship with DAAD in Germany</h3>
                            <p className="text-gray-700">I got the Study visit by groups of foreign students scholarship by DAAD, had the opportunity to visit Universities and Research institutes across Germany.</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Graduated from university</h3>
                          <p className="text-gray-700">It was like forever but now missing it!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2017 */}
                  <div className="space-y-12 lg:space-y-20"></div>
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">2014</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Joined SPRC</h3>
                          <p className="text-gray-700">Landed my first role at Sociedad Portuaria Regional Cartagena while studying, expanding my perspective.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2014 */}
                  <div className="space-y-12 lg:space-y-20"></div>
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">2010</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Started at University of Cartagena</h3>
                          <p className="text-gray-700">Studying Software Engineering at public university was great!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1996 */}
                  <div className="space-y-12 lg:space-y-20"></div>
                  <div>
                    <h2 className="mt-8 lg:mt-12 text-2xl font-bold mb-6">1993</h2>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" fill="white"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">Born</h3>
                          <p className="text-gray-700">On the 17th of December.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
