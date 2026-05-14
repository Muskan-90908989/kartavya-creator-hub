import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/lms/Sidebar";
import { Topbar } from "@/components/lms/Topbar";
import { Dashboard } from "@/components/lms/Dashboard";
import { CreateCourseModal } from "@/components/lms/CreateCourseModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: "#f5f7fb" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1">
          <Dashboard onCreateCourse={() => setShowCreate(true)} />
        </main>
      </div>
      {showCreate && <CreateCourseModal onClose={() => setShowCreate(false)} />}
    </div>
  );
}
