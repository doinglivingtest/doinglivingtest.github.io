"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if no input is focused
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      switch (e.key) {
        case "1":
          router.push("/");
          break;
        case "2":
          router.push("/journey");
          break;
        case "3":
          router.push("/writing");
          break;
        case "4":
          router.push("/bookmarks");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return null;
}
