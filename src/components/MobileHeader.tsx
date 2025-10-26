"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileHeaderProps {
  title: string;
}

export default function MobileHeader({ title }: MobileHeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", shortcut: "1" },
    { href: "/journey", label: "Journey", shortcut: "2" },
    { href: "/writing", label: "Writing", shortcut: "3" },
    { href: "/bookmarks", label: "Bookmarks", shortcut: "4" },
  ];

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden">
        <div className="flex size-full items-center px-3">
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex flex-1 items-center gap-1">
              <button
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 hover:text-gray-900 size-9"
                title="Toggle drawer"
                type="button"
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </button>
              <div className="flex flex-1 items-center justify-between">
                <span className="line-clamp-2 font-semibold tracking-tight">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 bg-zinc-50 shadow-lg lg:hidden overflow-y-auto">
            <div className="p-3">
              <div className="flex w-full flex-col text-sm">
                <div className="flex flex-col gap-4">
                  {/* Profile Card */}
                  <Link className="link-card inline-flex items-center gap-2 p-2" href="/" onClick={() => setIsDrawerOpen(false)}>
                    <img
                      src="/images/profile_picturet.png"
                      alt="Alejandro Tellez"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold tracking-tight">Alejandro Tellez</span>
                      <span className="text-gray-600 text-xs">Software Developer Engineer in Test</span>
                    </div>
                  </Link>

                  {/* Navigation */}
                  <div className="group/nav flex flex-col gap-1">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          className={`group flex items-center justify-between rounded-lg p-2 ${
                            isActive ? "bg-black text-white" : "hover:bg-gray-200"
                          }`}
                          href={item.href}
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          <span className="flex items-center gap-2">
                            <span className={`font-medium ${isActive ? "text-white" : ""}`}>
                              {item.label}
                            </span>
                          </span>
                          <span
                            className={`grid h-5 w-5 place-content-center rounded border text-xs font-medium ${
                              isActive
                                ? "border-gray-600 bg-gray-700 text-gray-200"
                                : "border-gray-200 bg-gray-100 text-gray-500"
                            }`}
                          >
                            {item.shortcut}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Online Section */}
                <div className="flex flex-col gap-2 text-sm mt-6">
                  <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">Online</span>
                  <div className="flex flex-col gap-1">
                    <a href="https://github.com/doinglivingtest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                      <span className="inline-flex items-center gap-2 font-medium">
                        <img src="https://ext.same-assets.com/782887636/1095139009.svg" alt="" width="16" height="16" />
                        GitHub
                      </span>
                      <img src="https://ext.same-assets.com/782887636/3712706355.svg" alt="" width="16" height="16" />
                    </a>

                    <a href="https://www.linkedin.com/in/alejandrotellez" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                      <span className="inline-flex items-center gap-2 font-medium">
                        <img src="https://ext.same-assets.com/782887636/3952120642.svg" alt="" width="16" height="16" />
                        LinkedIn
                      </span>
                      <img src="https://ext.same-assets.com/782887636/3602563458.svg" alt="" width="16" height="16" />
                    </a>

                    <a href="https://twitter.com/intent/user?screen_name=doinglivingtest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                      <span className="inline-flex items-center gap-2 font-medium">
                        <img src="https://ext.same-assets.com/782887636/80577991.svg" alt="" width="16" height="16" />
                        X (Twitter)
                      </span>
                      <img src="https://ext.same-assets.com/782887636/3556354803.svg" alt="" width="16" height="16" />
                    </a>

                    <a href="/files/CV_Alejandro_Tellez_SDET.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                      <span className="inline-flex items-center gap-2 font-medium">
                        <img src="https://ext.same-assets.com/782887636/1923229873.svg" alt="" width="16" height="16" />
                        Resume
                      </span>
                      <img src="https://ext.same-assets.com/782887636/3211956308.svg" alt="" width="16" height="16" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
