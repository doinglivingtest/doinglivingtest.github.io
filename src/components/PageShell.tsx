import Sidebar from "./Sidebar";
import MobileHeader from "./MobileHeader";

export default function PageShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <div className="lg:flex">
        <Sidebar />
        <div className="relative flex w-full flex-col">
          <MobileHeader title={title} />
          <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-12 md:py-14 lg:px-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
