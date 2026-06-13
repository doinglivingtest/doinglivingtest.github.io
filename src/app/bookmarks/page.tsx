import type { Metadata } from "next";
import BookmarksView from "@/components/BookmarksView";

export const metadata: Metadata = {
  title: "Bookmarks",
  description: "Curated articles, tools and resources by topic.",
};

export default function BookmarksPage() {
  return <BookmarksView />;
}
