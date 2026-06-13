"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "@/lib/nav";
import Socials from "./Socials";

export default function SidebarContent({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="flex w-full flex-col text-sm">
      <div className="flex flex-col gap-5">
        {/* Profile Card */}
        <Link
          className="inline-flex items-center gap-3 rounded-xl p-2 transition-colors duration-200 hover:bg-zinc-100"
          href="/"
          onClick={onNavigate}
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-zinc-200"
          />
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-zinc-900">
              {profile.name}
            </span>
            <span className="text-xs text-zinc-500">{profile.title}</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="group/nav flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={`group flex items-center justify-between rounded-lg p-2 transition-colors duration-200 ${
                  active
                    ? "bg-brand-600 text-white"
                    : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Icon
                    className={`h-[18px] w-[18px] ${active ? "text-white" : "text-zinc-400 group-hover:text-zinc-600"}`}
                    aria-hidden="true"
                  />
                  <span className="font-medium">{item.label}</span>
                </span>
                <span
                  className={`grid h-5 w-5 place-content-center rounded border text-xs font-medium transition-opacity duration-200 lg:opacity-0 lg:group-hover/nav:opacity-100 ${
                    active
                      ? "border-white/30 bg-white/15 text-white opacity-100"
                      : "border-zinc-200 bg-zinc-50 text-zinc-400"
                  }`}
                  title={`Shortcut key: ${item.shortcut}`}
                >
                  {item.shortcut}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Online Section */}
      <div className="mt-7 flex flex-col gap-2">
        <span className="px-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
          Online
        </span>
        <Socials />
      </div>
    </div>
  );
}
