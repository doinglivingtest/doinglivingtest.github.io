import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import BookmarkGrid from "@/components/BookmarkGrid";
import Link from "next/link";
import { Metadata } from "next";
import { getBookmarksByCategory } from "@/lib/bookmark";

export const metadata: Metadata = {
  title: "Bookmarks — Alejandro Tellez",
  description: "Curated bookmarks by category — Alejandro Tellez",
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

// For static export we must provide all dynamic route params
export async function generateStaticParams() {
  const categories = Array.from(new Set(bookmarks.map((b) => b.category)));
  return categories.map((category) => ({ category }));
}

export default async function BookmarksCategoryPage(props: { params: Promise<{ category: string }> }) {
  const { category } = await props.params;

  const selectedCategory = category;
  const currentCategory = bookmarkCategories.find(cat => cat.slug === selectedCategory);
  const bookmarks = getBookmarksByCategory(selectedCategory);

  return (
    <main className="min-h-screen bg-white">
      <div className="flex h-full min-h-screen">
        <Sidebar />

        <div className="flex-1 flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:flex lg:flex-col lg:w-80 xl:w-96 bg-zinc-50 border-r">
            <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight">
                  Bookmarks
                </span>
                
              </div>
            </div>

            {/* Category list */}
            <div className="flex-1 p-3">
              <div className="flex flex-col gap-1 text-sm">
                {bookmarkCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/bookmarks/${category.slug}`}
                    className={`flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2 ${
                      category.slug === selectedCategory ? "bg-gray-200" : ""
                    }`}
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

          {/* Main content area */}
          <div className="flex-1 flex flex-col">
            {/* Mobile header and nav */}
            <div className="lg:hidden">
              <MobileHeader title="Bookmarks" />
              <div className="border-b">
                {bookmarkCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/bookmarks/${category.slug}`}
                    className={`flex flex-col gap-1 transition-colors duration-300 px-4 py-3 text-sm hover:bg-gray-100 ${
                      category.slug === selectedCategory ? "bg-gray-100" : ""
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-slate-500">
                      {category.count} bookmarks
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-6">
              <div className="max-w-7xl mx-auto">
                {currentCategory ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <h1 className="text-2xl font-bold">
                        {currentCategory.name}
                      </h1>
                      <span className="text-sm text-gray-500">
                        {currentCategory.count} bookmarks
                      </span>
                    </div>

                    {bookmarks && bookmarks.length > 0 ? (
                      <div className="pb-6">
                        <BookmarkGrid bookmarks={bookmarks} />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-96 text-gray-400">
                        No bookmarks found in this category yet.
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center justify-center h-96 text-gray-400">
                    Category not found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
