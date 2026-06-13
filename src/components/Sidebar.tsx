import SidebarContent from "./SidebarContent";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-zinc-200 bg-zinc-50 p-3 lg:flex xl:w-72">
      <SidebarContent />
    </aside>
  );
}
