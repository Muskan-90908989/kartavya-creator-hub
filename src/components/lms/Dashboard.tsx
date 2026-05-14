import { BookOpen, CheckCircle2, FileEdit, Clock3, XCircle, MessageCircle, Plus } from "lucide-react";

const stats = [
  { label: "Total Courses", value: "67", color: "var(--brand-blue)", Icon: BookOpen },
  { label: "Publish Courses", value: "32", color: "var(--brand-green)", Icon: CheckCircle2 },
  { label: "Draft Courses", value: "09", color: "var(--brand-yellow)", Icon: FileEdit },
  { label: "Under Review", value: "21", color: "var(--brand-purple)", Icon: Clock3 },
  { label: "Reject Courses", value: "14", color: "var(--brand-red)", Icon: XCircle },
];

const courses = [
  { title: "Intro to Machine Learning", grad: "from-indigo-400 to-purple-600" },
  { title: "AI for Healthcare", grad: "from-cyan-400 to-blue-600" },
  { title: "Data Science Bootcamp", grad: "from-pink-400 to-red-500" },
];

const roleColors: Record<string, string> = {
  Trainer: "var(--brand-yellow)",
  "Review Department": "var(--brand-blue)",
  "Program Manager": "var(--brand-green)",
};

const baseNotifs = [
  { name: "Divya Balakrishna Shetty", role: "Trainer", msg: "Some suggestion for the course UI/UX the beginner guide.", time: "01 day ago", avatar: "var(--brand-yellow)" },
  { name: "Ankit Dharmnath Pandey", role: "Review Department", msg: "The course has been returned. Rework needed.", time: "25 Jan 2021", avatar: "#0fb9b1" },
  { name: "Clement Pinto", role: "Program Manager", msg: "A new course has been submitted for review is under the review of review department.", time: "02 hrs ago", avatar: "var(--brand-yellow)" },
];
const notifications = [...baseNotifs, ...baseNotifs, ...baseNotifs];

export function Dashboard({ onCreateCourse }: { onCreateCourse: () => void }) {
  return (
    <div className="p-8 space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map(({ label, value, color, Icon }) => (
          <div key={label} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: color }}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-gray-900">{value}</p>
              <p className="text-xs font-semibold text-gray-500">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Courses */}
          <section>
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">Recent View Courses</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {courses.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className={`h-32 bg-gradient-to-br ${c.grad} relative`}>
                    <span className="absolute top-2 right-2 text-[10px] font-bold bg-white/90 px-2 py-1 rounded-full" style={{ color: "var(--brand-red)" }}>Request</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 truncate">{c.title}</h3>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span className="font-semibold" style={{ color: "var(--brand-green)" }}>● Sales Live</span>
                      <span>3 Sections</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h2 className="text-lg font-extrabold text-gray-900 mb-4">Notifications</h2>
            <div className="bg-white rounded-2xl shadow-sm divide-y">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ backgroundColor: n.avatar }}>
                    {n.name.split(" ").map(p => p[0]).slice(0, 2).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-gray-900 truncate">
                      {n.name}{" "}
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md text-white" style={{ backgroundColor: roleColors[n.role] }}>
                        {n.role}
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{n.msg}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{n.time}</span>
                  <MessageCircle size={18} className="text-gray-400" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-extrabold text-gray-900">Create Course</h3>
            <p className="text-xs text-gray-500 mt-1">Start building a course from scratch!</p>
            <div className="my-5 h-32 rounded-xl bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center text-5xl">
              👩‍💻👨‍🏫
            </div>
            <button onClick={onCreateCourse}
              className="w-full py-2.5 rounded-lg text-white font-bold text-sm hover:opacity-90 transition"
              style={{ backgroundColor: "var(--brand-red)" }}>
              + Create Course
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-extrabold text-gray-900">To Do List</h3>
            <div className="my-5 h-32 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-5xl">
              📋✨
            </div>
            <button className="w-full py-2.5 rounded-lg text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition"
              style={{ backgroundColor: "var(--brand-blue)" }}>
              <Plus size={16} /> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
