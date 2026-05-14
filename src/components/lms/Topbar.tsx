import { Bell } from "lucide-react";

export function Topbar() {
  const items = ["Dashboard", "Manage Course", "Feedback", "Change Role"];
  return (
    <header className="bg-white border-b px-8 py-4 flex items-center justify-between">
      <nav className="flex items-center gap-8">
        {items.map((it, i) => (
          <a key={it} className={`text-sm font-bold cursor-pointer pb-1 ${i === 0 ? "border-b-2" : "text-gray-500 hover:text-gray-900"}`}
             style={i === 0 ? { color: "var(--brand-red)", borderColor: "var(--brand-red)" } : {}}>
            {it}
          </a>
        ))}
      </nav>
      <button className="relative w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
        <Bell size={18} className="text-gray-700" />
        <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--brand-red)" }} />
      </button>
    </header>
  );
}
