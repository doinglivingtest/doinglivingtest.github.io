import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import BookmarkGrid from "@/components/BookmarkGrid";
import { bookmarkCategories, getBookmarksByCategory } from "@/lib/bookmark";

function CategoryList({
  activeSlug,
  variant,
}: {
  activeSlug?: string;
  variant: "desktop" | "mobile";
}) {
  const base =
    variant === "desktop"
      ? "rounded-lg p-2 hover:bg-zinc-200/70"
      : "border-b border-zinc-200 px-4 py-3 hover:bg-zinc-100";
  return (
    <div className={variant === "desktop" ? "flex flex-col gap-1 text-sm" : ""}>
      {bookmarkCategories.map((category) => {
        const active = category.slug === activeSlug;
        return (
          <Link
            key={category.slug}
            href={`/bookmarks/${category.slug}`}
            className={`flex flex-col gap-0.5 transition-colors duration-200 ${base} ${
              active
                ? variant === "desktop"
                  ? "bg-brand-50 ring-1 ring-brand-200"
                  : "bg-brand-50"
                : ""
            }`}
          >
            <span
              className={`font-medium ${active ? "text-brand-800" : "text-zinc-800"}`}
            >
              {category.name}
            </span>
            <span className="text-xs text-zinc-500">
              {category.count} bookmark{category.count === 1 ? "" : "s"}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default function BookmarksView({ activeSlug }: { activeSlug?: string }) {
  const current = bookmarkCategories.find((c) => c.slug === activeSlug);
  const items = activeSlug ? getBookmarksByCategory(activeSlug) : [];

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <div className="lg:flex">
        <Sidebar />

        <div className="flex w-full flex-1">
          {/* Category column (desktop) */}
          <div className="hidden w-72 shrink-0 flex-col border-r border-zinc-200 bg-zinc-50 lg:flex xl:w-80">
            <div className="sticky top-0 z-10 border-b border-zinc-200 bg-zinc-50 px-5 py-3">
              <span className="text-sm font-semibold tracking-tight text-zinc-900">
                Bookmarks
              </span>
            </div>
            <div className="p-3">
              <CategoryList activeSlug={activeSlug} variant="desktop" />
            </div>
          </div>

          {/* Content area */}
          <div className="flex w-full flex-1 flex-col">
            <div className="lg:hidden">
              <MobileHeader title="Bookmarks" />
              <CategoryList activeSlug={activeSlug} variant="mobile" />
            </div>

            <div className="px-6 py-10 md:px-10">
              {current ? (
                <>
                  <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-zinc-900">
                      {current.name}
                    </h1>
                    <span className="text-sm text-zinc-500">
                      {current.count} bookmark{current.count === 1 ? "" : "s"}
                    </span>
                  </div>
                  <BookmarkGrid bookmarks={items} />
                </>
              ) : (
                <div className="max-w-md py-16">
                  <h1 className="text-2xl font-bold text-zinc-900">Bookmarks</h1>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    A small, hand-picked collection of articles, tools and
                    resources I keep coming back to — on testing, AI, crypto and
                    design. Pick a category to explore.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {bookmarkCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/bookmarks/${category.slug}`}
                        className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
