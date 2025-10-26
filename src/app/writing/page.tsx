import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import Link from "next/link";

export const metadata = {
  title: "Writing — Alejandro Tellez",
  description: "Personal writings",
};

const posts = [
  {
    title: "Building CLI tool with Go to clean up node_modules",
    date: "July 27, 2024",
    dateTime: "2024-07-28T00:00:00.000+03:00",
    views: 379,
    slug: "dead_modules",
  },
  {
    title: "Fixing open source bug",
    date: "June 04, 2024",
    dateTime: "2024-06-05T00:00:00.000+03:00",
    views: 519,
    slug: "vaul",
  },
  {
    title: "Welcome",
    date: "May 31, 2024",
    dateTime: "2024-06-01T00:00:00.000+03:00",
    views: 444,
    slug: "welcome",
  },
];

export default function Writing() {
  return (
    <main className="min-h-screen bg-white">
      <div className="lg:flex">
        <Sidebar />

        <div className="flex flex-1">
          {/* Desktop Sidebar */}
          <div className="relative w-full flex-col hidden bg-zinc-50 lg:flex lg:flex-col lg:border-r lg:w-80 xl:w-96">
            <div className="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-tight">Writing</span>
                
              </div>
            </div>
            <div className="bg-zinc-50 p-3">
              <div className="flex flex-col gap-1 text-sm">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    className="flex flex-col gap-1 transition-colors duration-300 hover:bg-gray-200 rounded-lg p-2"
                    href={`/writing/${post.slug}`}
                  >
                    <span className="font-medium">{post.title}</span>
                    <span className="transition-colors duration-300 text-slate-500">
                      <time dateTime={post.dateTime}>{post.date}</time>{" "}
                      <span>
                        <span className="tabular-nums">· {post.views} views</span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="relative flex w-full flex-col lg:hidden">
              <MobileHeader title="Writing" />
              <div className="">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    className="flex flex-col gap-1 transition-colors duration-300 border-b px-4 py-3 text-sm hover:bg-gray-100"
                    href={`/writing/${post.slug}`}
                  >
                    <span className="font-medium">{post.title}</span>
                    <span className="transition-colors duration-300 text-slate-500">
                      <time dateTime={post.dateTime}>{post.date}</time>{" "}
                      <span>
                        <span className="tabular-nums">· {post.views} views</span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Content Area - Empty for now */}
            <div className="hidden lg:block w-full h-screen bg-white">
              <div className="content-wrapper">
                <div className="content">
                  <div className="flex items-center justify-center h-96 text-gray-400">
                    Select a post to read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
