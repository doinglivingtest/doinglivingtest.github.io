import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookmarks — Alejandro Tellez",
  description: "Personal bookmarks and resources categorized by topic.",
};

import { bookmarks } from "@/lib/bookmark";

// Category definitions with dynamic counts
const bookmarkCategories = [
  { name: "AI", slug: "ai" },
  { name: "Apps & Tools", slug: "apps-and-tools" },
  { name: "Backend", slug: "backend" },
  { name: "Frontend", slug: "frontend" },
  { name: "Crypto", slug: "crypto" },
  { name: "Books & Reading", slug: "reading" },
  { name: "Design", slug: "design" },
  { name: "Websites", slug: "websites" },
].map(category => ({
  ...category,
  count: bookmarks.filter(b => b.category === category.slug).length
}));

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Mobile Header */}
          <div className="relative flex w-full flex-col lg:hidden">
            <MobileHeader title="Bookmarks" />
            <div>
              {bookmarkCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/bookmarks/${category.slug}`}
                  className="flex flex-col gap-1 transition-colors duration-300 border-b px-4 py-3 text-sm hover:bg-gray-100"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-slate-500">
                    {category.count} bookmarks
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-1 min-h-screen">
            {/* Left Column — Category List */}
            <div className="relative flex flex-col bg-zinc-50 border-r w-80 xl:w-96">
              <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-tight">
                    Bookmarks
                  </span>
                  
                </div>
              </div>

              <div className="bg-zinc-50 p-3 flex-1">
                <div className="flex flex-col gap-1 text-sm">
                  {bookmarkCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/bookmarks/${category.slug}`}
                      className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2"
                    >
                      <span className="font-medium">{category.name}</span>
                      <span className="text-slate-500">
                        {category.count} bookmarks
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column — Empty Visor Placeholder */}
            <div className="flex-1 bg-white flex items-center justify-center p-6">
              <div className="text-gray-400 text-center">
                <p className="text-lg mb-2">Select a category to view bookmarks</p>
                <p className="text-sm text-gray-500">
                  Choose from the left to explore curated articles, tools, and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
