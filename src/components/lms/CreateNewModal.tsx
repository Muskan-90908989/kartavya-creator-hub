import { X } from "lucide-react";

export function CreateNewModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95">
        <div className="flex items-center justify-between p-5 border-b">
          <h3 className="text-lg font-extrabold text-gray-900">Create New Course</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
            <X size={18} />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-700 mb-1.5 block">Course Name</label>
            <input placeholder="Enter course name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700 mb-1.5 block">Select Category</label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-600">
              <option>Select Category</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700 mb-1.5 block">Select Language</label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm text-gray-600">
              <option>Select Language</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700 mb-1.5 block">Description</label>
            <textarea rows={4} placeholder="Course description..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-200" />
          </div>
        </div>
        <div className="flex justify-end gap-3 p-5 border-t bg-gray-50 rounded-b-2xl">
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
            style={{ backgroundColor: "var(--brand-red)" }}>Cancel</button>
          <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-white text-sm font-bold hover:opacity-90"
            style={{ backgroundColor: "var(--brand-green)" }}>Save</button>
        </div>
      </div>
    </div>
  );
}
