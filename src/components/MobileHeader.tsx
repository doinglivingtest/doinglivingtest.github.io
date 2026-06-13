"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import SidebarContent from "./SidebarContent";

interface MobileHeaderProps {
  title: string;
}

export default function MobileHeader({ title }: MobileHeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-30 flex h-12 w-full shrink-0 items-center border-b border-zinc-200 bg-white/90 px-3 text-sm font-medium backdrop-blur lg:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="inline-flex size-9 items-center justify-center rounded-md text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 hover:text-zinc-900"
          title="Open menu"
          type="button"
        >
          <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
        </button>
        <span className="ml-1 line-clamp-1 font-semibold tracking-tight">
          {title}
        </span>
      </header>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-zinc-50 p-3 shadow-xl lg:hidden">
            <div className="mb-2 flex justify-end">
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="inline-flex size-9 items-center justify-center rounded-md text-zinc-500 transition-colors duration-200 hover:bg-zinc-200 hover:text-zinc-900"
                title="Close menu"
                type="button"
              >
                <X className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
            </div>
            <SidebarContent onNavigate={() => setIsDrawerOpen(false)} />
          </div>
        </>
      )}
    </>
  );
}
