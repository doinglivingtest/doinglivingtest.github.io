type Bookmark = {
  title: string;
  url: string;
  description: string;
  thumbnail?: string;
};

export default function BookmarkGrid({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {bookmarks.map((b) => (
        <a
          key={b.url}
          href={b.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-300 bg-white"
        >
          {b.thumbnail && (
            <img
              src={b.thumbnail}
              alt={b.title}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
          )}
          <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-3">{b.description}</p>
        </a>
      ))}
    </div>
  );
}
