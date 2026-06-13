"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { navItems } from "@/lib/nav";

export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ignore when typing in a field or using modifier combos
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }

      const match = navItems.find((item) => item.shortcut === e.key);
      if (match) {
        router.push(match.href);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return null;
}
