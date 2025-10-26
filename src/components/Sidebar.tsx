"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", shortcut: "1" },
    { href: "/journey", label: "Journey", shortcut: "2" },
    { href: "/writing", label: "Writing", shortcut: "3" },
    { href: "/bookmarks", label: "Bookmarks", shortcut: "4" },
  ];

  return (
    <div className="relative w-full flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-60 xl:w-72">
      <div className="bg-zinc-50 p-3">
        <div className="flex w-full flex-col text-sm">
          <div className="flex flex-col gap-4">
            {/* Profile Card */}
            <Link className="link-card inline-flex items-center gap-2 p-2" href="/">
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
                      isActive
                        ? "bg-black text-white"
                        : "hover:bg-gray-200"
                    }`}
                    href={item.href}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`font-medium ${isActive ? "text-white" : ""}`}>
                        {item.label}
                      </span>
                    </span>
                    <span
                      className={`grid opacity-0 transition-opacity duration-500 ease-in-out group-hover/nav:opacity-100 h-5 w-5 place-content-center rounded border text-xs font-medium ${
                        isActive
                          ? "border-gray-600 bg-gray-700 text-gray-200"
                          : "border-gray-200 bg-gray-100 text-gray-500 group-hover:border-gray-300"
                      }`}
                      title={`Shortcut key: ${item.shortcut}`}
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
                  <img src="https://ext.same-assets.com/782887636/1095139009.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
                  GitHub
                </span>
                <img src="https://ext.same-assets.com/782887636/3712706355.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
              </a>

              <a href="https://www.linkedin.com/in/alejandrotellez" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                <span className="inline-flex items-center gap-2 font-medium">
                  <img src="https://ext.same-assets.com/782887636/3952120642.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
                  LinkedIn
                </span>
                <img src="https://ext.same-assets.com/782887636/3602563458.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
              </a>

              <a href="https://twitter.com/intent/user?screen_name=doinglivingtest" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                <span className="inline-flex items-center gap-2 font-medium">
                  <img src="https://ext.same-assets.com/782887636/80577991.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
                  X (Twitter)
                </span>
                <img src="https://ext.same-assets.com/782887636/3556354803.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
              </a>

              <a href="/files/CV_Alejandro_Tellez_SDET.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 rounded-lg p-2 hover:bg-gray-200">
                <span className="inline-flex items-center gap-2 font-medium">
                  <img src="https://ext.same-assets.com/782887636/1923229873.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
                  Resume
                </span>
                <img src="https://ext.same-assets.com/782887636/3211956308.svg" alt="" width="16" height="16" style={{width: '16px', height: '16px'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
