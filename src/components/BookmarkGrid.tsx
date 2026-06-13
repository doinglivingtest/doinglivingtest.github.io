import { ArrowUpRight, Link2 } from "lucide-react";

type Bookmark = {
  title: string;
  url: string;
  description: string;
  thumbnail?: string;
};

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function BookmarkGrid({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 2xl:grid-cols-3">
      {bookmarks.map((b) => (
        <a
          key={b.url}
          href={b.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:border-brand-200 hover:shadow-[0_2px_20px_-8px_rgba(13,148,136,0.35)]"
        >
          <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100">
            {b.thumbnail ? (
              <img
                src={b.thumbnail}
                alt={b.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-zinc-300">
                <Link2 className="h-8 w-8" aria-hidden="true" />
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-4">
            <h3 className="text-base font-semibold leading-snug text-zinc-900">
              {b.title}
            </h3>
            <span className="mt-1 inline-flex items-center gap-1 text-xs text-brand-700">
              {hostname(b.url)}
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
            </span>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
              {b.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
