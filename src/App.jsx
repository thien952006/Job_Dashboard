import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";

export default function App() {
    return (
      <BrowserRouter>
        <div className="flex bg-gray-100 min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
        </Routes>
        </div>
      </BrowserRouter>
  );
}