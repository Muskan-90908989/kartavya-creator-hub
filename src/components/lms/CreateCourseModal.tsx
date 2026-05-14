import { ArrowLeft, GraduationCap, ListChecks, Image as ImageIcon, Eye, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { CreateNewModal } from "./CreateNewModal";

const tabs = [
  { label: "Basic Information", Icon: GraduationCap },
  { label: "Curriculum", Icon: ListChecks },
  { label: "Cover Page", Icon: ImageIcon },
  { label: "Preview & Submit", Icon: Eye },
];

function Select({ placeholder, icon }: { placeholder: string; icon?: React.ReactNode }) {
  return (
    <div className="relative">
      <select
        className="w-full appearance-none bg-white text-[13px] text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
        style={{ border: "1px solid #e0e0e0", borderRadius: 6, height: 38, padding: "8px 32px 8px 12px" }}
        defaultValue=""
      >
        <option value="" disabled>{placeholder}</option>
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 text-gray-400">
        {icon}
        <ChevronDown size={14} />
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block" style={{ fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 6 }}>{label}</label>
      {children}
    </div>
  );
}

export function CreateCourseModal({ onClose }: { onClose: () => void }) {
  const [activeTab] = useState(0);
  const [showCreateNew, setShowCreateNew] = useState(false);
  const [takeSuggestions, setTakeSuggestions] = useState("yes");

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", animation: "fadeIn 0.25s ease-out" }}
    >
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes modalIn { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
      <div
        className="bg-white w-full relative"
        style={{
          maxWidth: 620,
          borderRadius: 12,
          padding: 30,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          animation: "modalIn 0.3s ease-out",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600"
          aria-label="Close"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b" style={{ marginBottom: 22 }}>
          {tabs.map((t, i) => {
            const active = i === activeTab;
            return (
              <button
                key={t.label}
                className="flex items-center gap-1.5 px-3 pb-3 -mb-px whitespace-nowrap"
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: active ? "#f4a261" : "#9ca3af",
                  borderBottom: active ? "2px solid #f4a261" : "2px solid transparent",
                }}
              >
                <t.Icon size={15} /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="flex flex-col" style={{ gap: 18 }}>
          <div className="grid grid-cols-2" style={{ gap: 18 }}>
            <Field label="Business Segment"><Select placeholder="Select Business Segment" /></Field>
            <Field label="Department"><Select placeholder="Select Department" /></Field>
          </div>

          <div className="grid grid-cols-2" style={{ gap: 18 }}>
            <Field label="Client"><Select placeholder="Select Program" /></Field>
            <Field label="Program"><Select placeholder="Select Client" /></Field>
          </div>

          <div className="flex justify-end gap-3">
            <button
              className="text-white text-[13px] font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#e63946", padding: "8px 16px", borderRadius: 6 }}
            >
              View Related Courses
            </button>
            <button
              onClick={() => setShowCreateNew(true)}
              className="text-white text-[13px] font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#2dc653", padding: "8px 16px", borderRadius: 6 }}
            >
              Create New
            </button>
          </div>

          <Field label="Course Title">
            <input
              placeholder="Enter course name"
              className="w-full bg-white text-[13px] focus:outline-none focus:ring-2 focus:ring-orange-200"
              style={{ border: "1px solid #e0e0e0", borderRadius: 6, height: 38, padding: "8px 12px" }}
            />
          </Field>

          <div className="grid grid-cols-3" style={{ gap: 18 }}>
            <Field label="Course Language"><Select placeholder="Select course language" /></Field>
            <Field label="Course Level"><Select placeholder="Select course level" /></Field>
            <Field label="Learning Flow"><Select placeholder="Select learning flow" /></Field>
          </div>

          <div className="grid grid-cols-3" style={{ gap: 18 }}>
            <Field label="What learning you gain from course?"><Select placeholder="Select learning gain" /></Field>
            <Field label="Certificate"><Select placeholder="Select certificate" /></Field>
            <Field label="Duration"><Select placeholder="Select duration" icon={<Clock size={14} />} /></Field>
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "#333", marginBottom: 8 }}>
              Do you want to take suggestions?
            </p>
            <div className="flex gap-6">
              {["yes", "no"].map((v) => (
                <label key={v} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="suggestions"
                    checked={takeSuggestions === v}
                    onChange={() => setTakeSuggestions(v)}
                    className="w-4 h-4 accent-orange-500"
                  />
                  <span className="text-[13px] font-semibold capitalize text-gray-700">{v}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t mt-2">
            <button
              onClick={onClose}
              className="text-white text-[13px] font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#e63946", padding: "9px 22px", borderRadius: 999 }}
            >
              Cancel
            </button>
            <button
              className="text-white text-[13px] font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#4361ee", padding: "9px 22px", borderRadius: 999 }}
            >
              Save Draft
            </button>
            <button
              className="text-white text-[13px] font-bold hover:opacity-90 transition"
              style={{ backgroundColor: "#3a86ff", padding: "9px 22px", borderRadius: 999 }}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {showCreateNew && <CreateNewModal onClose={() => setShowCreateNew(false)} />}
    </div>
  );
}
