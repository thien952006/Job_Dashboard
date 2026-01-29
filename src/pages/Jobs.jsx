import JobCard from "../components/JobCard";
import {useState} from "react";
import {useJobs} from "../context/JobsContext.jsx";
export const ALL_JOBS = [
    {
        id: 1,
        title: "Web Application Developer",
        company: "Backed Business Funding",
        location: "⚲Austin, Texas Metropolitan Area",
        match: 64,
        level: "Mid Level",
        type: "Full Time",
        salary: "$65k/yr-$70k/yr",
        time: "1 hours ago",
        applicants: 25,
        description: "We are looking for a Web Application Developer to build and maintain modern web applications using React and Node.js. You will collaborate with designers and backend engineers to deliver scalable solutions."
    },
    {
        id: 2,
        title: "Software Engineer, Network Infrastructure",
        company: "Cursor AI",
        location: "⚲Sunnyvale,CA",
        match: 93,
        level: "Senior",
        type: "Full Time",
        salary: "$161k/yr-$239k/yr",
        time: "2 hours ago",
        applicants: 25,
        description: "Design, build, and maintain network infrastructure software. You will work on distributed systems and high-performance networking tools."
    },
    {
        id: 3,
        title: "Full-Stack Software Engineer (Web Developer)",
        company: "Simons Foundation",
        location: "⚲New York, NY",
        match: 82,
        level: "Mid Level",
        type: "Full Time",
        salary: "$125k/yr-$140k/yr",
        time: "3 hours ago",
        applicants: 10,
        description: "Join our team to develop and maintain web applications that support scientific research. You will work with a variety of technologies including React, Node.js, and databases."
    }
];
export default function Jobs() {
    const [jobs]=useState(ALL_JOBS);
    const [filter, setFilter] = useState("all");
    const {likedJobs, appliedJobs} = useJobs();
    const filteredJobs =
        filter === "liked"
            ? likedJobs
            : filter === "applied"
            ? appliedJobs
            : jobs;
    return (
        <main className="flex-1 p-10 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Matched Jobs</h2>
            <div className="flex gap-3">
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("liked")}>Liked</button>
                <button onClick={() => setFilter("applied")}>Applied</button>
            </div>
            {filteredJobs.length === 0 && (
                <p className="text-gray-500">No jobs to display</p>
            )}

            {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </main>
    );
}