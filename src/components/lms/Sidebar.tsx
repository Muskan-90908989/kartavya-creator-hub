import { Wrench, LinkIcon } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 min-h-screen text-white flex flex-col" style={{ backgroundColor: "var(--sidebar-bg)" }}>
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-extrabold tracking-tight">
          Karta<span style={{ color: "var(--brand-red)" }}>V</span>ya
        </h1>
        <p className="text-xs text-white/60 mt-1">Healtheon Pvt. Ltd.</p>
      </div>

      <div className="p-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex items-center justify-center text-lg font-bold">
            AU
          </div>
          <div>
            <p className="text-sm font-bold flex items-center gap-1">Hello Author <span>👋</span></p>
            <p className="text-xs text-white/60">Course Author</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>Profile completion</span>
            <span>0%</span>
          </div>
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full" style={{ width: "0%", backgroundColor: "var(--brand-green)" }} />
          </div>
        </div>
      </div>

      <nav className="p-4 flex-1 space-y-1">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition text-sm font-semibold cursor-pointer">
          <LinkIcon size={18} style={{ color: "var(--brand-blue)" }} /> LMS Link
        </a>
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition text-sm font-semibold cursor-pointer">
          <Wrench size={18} style={{ color: "var(--brand-yellow)" }} /> Tool Kit
        </a>
      </nav>
    </aside>
  );
}
