import type { Metadata } from "next";
import BookmarksView from "@/components/BookmarksView";
import { bookmarkCategories } from "@/lib/bookmark";

export function generateStaticParams() {
  return bookmarkCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await props.params;
  const current = bookmarkCategories.find((c) => c.slug === category);
  return {
    title: current ? `${current.name} | Bookmarks` : "Bookmarks",
    description: "Curated articles, tools and resources by topic.",
  };
}

export default async function BookmarksCategoryPage(props: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await props.params;
  return <BookmarksView activeSlug={category} />;
}
