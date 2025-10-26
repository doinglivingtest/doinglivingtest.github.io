import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:flex">
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-1">
          <div className="relative flex w-full flex-col">
            <MobileHeader title="Alejandro Tellez" />

            {/* Content */}
            <div className="content-wrapper">
              <div className="content min-h-screen">
                {/* Mobile Page Title */}
                <div className="mb-6 lg:hidden">
                  <h1 className="text-3xl font-bold">Home</h1>
                </div>

                {/* Hero Section */}
                <h1 className="mb-4 text-4xl font-bold">Hi! I'm Alejandro 👋</h1>

                <div className="space-y-4 text-base leading-relaxed">
                  <p>
                    Senior Software Engineer who breaks things so users don't have to. Passionate about code quality, automation, building products, reading books, traveling and building a better web and DeFi. Proudly born and raised in Colombia 🇨🇴 Based in Barcelona, Spain 🇪🇸
                  </p>

                  <p>
                    Developing stuff at{' '}
                    <a href="https://www.radixdlt.com/" target="_blank" rel="noopener noreferrer" className="link break-words after:content-['_↗']">
                      Radix
                    </a>{' '}
                    to helping user and devs to have a radically better experience needed for everyone to confidently use Web3 & DeFi.
                  </p>
                </div>

                {/* Writing Section */}
                <Link className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 text-gray-900 underline-offset-4 hover:underline inline px-0" href="/writing">
                  <h2 className="mb-4 mt-8 text-2xl font-bold">Writing</h2>
                </Link>

                <div className="text-sm">
                  {/* Table Header */}
                  <div className="grid grid-cols-6 py-2 font-medium text-gray-500">
                    <span className="col-span-1 hidden text-left md:grid">Year</span>
                    <span className="col-span-6 md:col-span-5">
                      <span className="grid grid-cols-4 items-center md:grid-cols-8">
                        <span className="col-span-1 text-left">Date</span>
                        <span className="col-span-2 md:col-span-6">Title</span>
                        <span className="col-span-1 text-right">Views</span>
                      </span>
                    </span>
                  </div>

                  {/* Writing Posts */}
                  <div className="group/list-wrapper">
                    <ul className="group/list list-none">
                      {/* Post 1 */}
                      <li className="group/list-item grid grid-cols-6 p-0 group-hover/list-wrapper:text-gray-300">
                        <span className="pointer-events-none col-span-1 hidden items-center tabular-nums transition-colors duration-300 group-hover/list:text-gray-900 md:grid border-t border-gray-200 py-4">
                          2024
                        </span>
                        <a className="col-span-6 group-hover/list-item:text-gray-900 md:col-span-5" href="/writing/dead_modules">
                          <span className="grid grid-cols-4 items-center gap-2 border-t border-gray-200 py-4 md:grid-cols-8">
                            <span className="col-span-1 text-left tabular-nums">
                              <time dateTime="2024-07-28T00:00:00.000+03:00" className="hidden md:block">27/07</time>
                              <time dateTime="2024-07-28T00:00:00.000+03:00" className="md:hidden">07/2024</time>
                            </span>
                            <span className="col-span-2 line-clamp-4 md:col-span-6">
                              Building CLI tool with Go to clean up node_modules
                            </span>
                            <span className="col-span-1">
                              <span className="flex justify-end tabular-nums" title="379 views">379</span>
                            </span>
                          </span>
                        </a>
                      </li>

                      {/* Post 2 */}
                      <li className="group/list-item grid grid-cols-6 p-0 group-hover/list-wrapper:text-gray-300">
                        <span className="pointer-events-none col-span-1 hidden items-center tabular-nums transition-colors duration-300 md:grid border-t border-gray-200 py-4">
                        </span>
                        <a className="col-span-6 group-hover/list-item:text-gray-900 md:col-span-5" href="/writing/vaul">
                          <span className="grid grid-cols-4 items-center gap-2 border-t border-gray-200 py-4 md:grid-cols-8">
                            <span className="col-span-1 text-left tabular-nums">
                              <time dateTime="2024-06-05T00:00:00.000+03:00" className="hidden md:block">04/06</time>
                              <time dateTime="2024-06-05T00:00:00.000+03:00" className="md:hidden">06/2024</time>
                            </span>
                            <span className="col-span-2 line-clamp-4 md:col-span-6">
                              Fixing open source bug
                            </span>
                            <span className="col-span-1">
                              <span className="flex justify-end tabular-nums" title="519 views">519</span>
                            </span>
                          </span>
                        </a>
                      </li>

                      {/* Post 3 */}
                      <li className="group/list-item grid grid-cols-6 p-0 group-hover/list-wrapper:text-gray-300">
                        <span className="pointer-events-none col-span-1 hidden items-center tabular-nums transition-colors duration-300 md:grid border-t border-gray-200 py-4">
                        </span>
                        <a className="col-span-6 group-hover/list-item:text-gray-900 md:col-span-5" href="/writing/welcome">
                          <span className="grid grid-cols-4 items-center gap-2 border-t border-gray-200 py-4 md:grid-cols-8">
                            <span className="col-span-1 text-left tabular-nums">
                              <time dateTime="2024-06-01T00:00:00.000+03:00" className="hidden md:block">31/05</time>
                              <time dateTime="2024-06-01T00:00:00.000+03:00" className="md:hidden">05/2024</time>
                            </span>
                            <span className="col-span-2 line-clamp-4 md:col-span-6">
                              Welcome
                            </span>
                            <span className="col-span-1">
                              <span className="flex justify-end tabular-nums" title="444 views">444</span>
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
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
