import { useParams, Link } from "react-router-dom";
import { ALL_JOBS } from "../pages/Jobs.jsx";
export default function JobDetails() {
    const { id } = useParams();
    const job = ALL_JOBS.find((j) => j.id === Number(id));
    if (!job) {
        return <div className="p-10">Job not found</div>;
    }
    return (
        <main className="flex-1 p-10">
            <Link to="/" className="text-purple-600 hover:underline">← Back to jobs</Link>
            <div className="bg-white rounded-xl shadow p-8 mt-4 max-w-3xl">
                <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
                <p className="text-gray-500 mb-4">{job.company}</p>
                <div className="flex gap-3 mb-6">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.level}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.salary}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.time}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.applicants} applicants</span>
                </div>
                <h2 className="font-semibold text-lg mb-2">Job Description</h2>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
                <button className="bg-gray-400 px-4 py-2 rounded-lg font-medium">Apply Now</button>
            </div>
        </main>
    );
}