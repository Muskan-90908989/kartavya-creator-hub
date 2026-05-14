import { ArrowLeft, GraduationCap, ListChecks, Image as ImageIcon, Eye, Clock } from "lucide-react";
import { useState } from "react";
import { CreateNewModal } from "./CreateNewModal";

const tabs = [
  { label: "Basic Information", Icon: GraduationCap },
  { label: "Curriculum", Icon: ListChecks },
  { label: "Cover Page", Icon: ImageIcon },
  { label: "Preview & Submit", Icon: Eye },
];

function Select({ placeholder }: { placeholder: string }) {
  return (
    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-200">
      <option>{placeholder}</option>
    </select>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-xs font-bold text-gray-700 mb-1.5 block">{label}</label>
      {children}
    </div>
  );
}

export function CreateCourse({ onBack }: { onBack: () => void }) {
  const [activeTab] = useState(0);
  const [showCreateNew, setShowCreateNew] = useState(false);
  const [takeSuggestions, setTakeSuggestions] = useState("yes");

  return (
    <div className="p-8">
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="flex items-center gap-4 px-6 py-5 border-b">
          <button onClick={onBack} className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <ArrowLeft size={18} />
          </button>
          <h2 className="text-lg font-extrabold text-gray-900">Create Course</h2>
        </div>

        {/* Tabs */}
        <div className="flex border-b overflow-x-auto">
          {tabs.map((t, i) => {
            const active = i === activeTab;
            return (
              <button key={t.label}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-bold whitespace-nowrap border-b-2 transition ${active ? "" : "border-transparent text-gray-500"}`}
                style={active ? { color: "var(--brand-yellow)", borderColor: "var(--brand-yellow)" } : {}}>
                <t.Icon size={16} /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Business Segment"><Select placeholder="Select Business Segment" /></Field>
            <Field label="Department"><Select placeholder="Select Department" /></Field>
            <Field label="Client"><Select placeholder="Select Program" /></Field>
            <Field label="Program"><Select placeholder="Select Client" /></Field>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
              style={{ backgroundColor: "var(--brand-red)" }}>
              View Related Courses
            </button>
            <button onClick={() => setShowCreateNew(true)}
              className="px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
              style={{ backgroundColor: "var(--brand-green)" }}>
              Create New
            </button>
          </div>

          <Field label="Course Title">
            <input placeholder="Enter course name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
          </Field>

          <div className="grid md:grid-cols-3 gap-5">
            <Field label="Course Language"><Select placeholder="Select Language" /></Field>
            <Field label="Course Level"><Select placeholder="Select Level" /></Field>
            <Field label="Learning Flow"><Select placeholder="Select Flow" /></Field>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Field label="What learning you gain from course?"><Select placeholder="Select Learning" /></Field>
            <Field label="Certificate"><Select placeholder="Select Certificate" /></Field>
            <Field label="Duration">
              <div className="relative">
                <Select placeholder="Select Duration" />
                <Clock size={16} className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </Field>
          </div>

          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Do you want to take suggestions?</p>
            <div className="flex gap-6">
              {["yes", "no"].map((v) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="suggestions" checked={takeSuggestions === v}
                    onChange={() => setTakeSuggestions(v)}
                    className="w-4 h-4 accent-orange-500" />
                  <span className="text-sm font-semibold capitalize text-gray-700">{v}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex gap-3">
              <button onClick={onBack} className="px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
                style={{ backgroundColor: "var(--brand-red)" }}>Cancel</button>
              <button className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 text-sm font-bold hover:bg-gray-50">Save Draft</button>
            </div>
            <button className="px-8 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
              style={{ backgroundColor: "var(--brand-green)" }}>Next</button>
          </div>
        </div>
      </div>

      {showCreateNew && <CreateNewModal onClose={() => setShowCreateNew(false)} />}
    </div>
  );
}
