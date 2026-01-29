import MatchRing from "./MatchRing";
import { Link } from "react-router-dom";
import { useJobs } from "../context/JobsContext.jsx";

export default function JobCard({ job }) {
  const {toggleLikeJob,toggleApplyJob,likedJobs,appliedJobs,} = useJobs();


  const isLiked = likedJobs.some((j) => j.id === job.id);
  const isApplied = appliedJobs.some((j) => j.id === job.id);

  return (
    <div className="bg-white rounded-xl p-5 shadow flex gap-6">
      <MatchRing value={job.match} />

      <div className="flex-1">
        <Link
          to={`/jobs/${job.id}`}
          className="font-semibold text-lg text-purple-600 hover:underline"
        >
          {job.title}
        </Link>

        <p className="text-gray-500">{job.company}</p>
        <p className="text-gray-500">{job.location}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.type}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.level}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.salary}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.time}</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {job.applicants} applicants
          </span>
        </div>
      </div>


      <div className="flex flex-col gap-2 justify-center">
        <button
            onClick={() => toggleLikeJob(job)}
            className={`px-4 py-2 rounded-lg text-sm ${
                isLiked ? "bg-red-400 text-white" : "bg-white-100"
            }`}
        >
            {isLiked ? "Liked" : "Like"}
        </button>
        <button
            onClick={() => toggleApplyJob(job)}
            className={`px-4 py-2 rounded-lg text-sm ${
                isApplied
                    ? "bg-gray-500 text-white"
                    : "bg-gray-300 text-gray-800"
            }`}
        >
            {isApplied ? "Applied" : "Apply"}
        </button>


        <button className="px-4 py-2 rounded-lg text-sm bg-green-500 text-white hover:bg-green-600 transition">
          Mock Interview
        </button>
      </div>
    </div>
  );
}
