import { createContext, useContext, useState } from "react";

const JobsContext = createContext();

export function JobsProvider({ children }) {
  const [likedJobs, setLikedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  const toggleLikeJob = (job) => {
    setLikedJobs((prev) =>
      prev.some((j) => j.id === job.id)
        ? prev.filter((j) => j.id !== job.id) 
        : [...prev, job] 
    );
  };

 
  const toggleApplyJob = (job) => {
    setAppliedJobs((prev) =>
      prev.some((j) => j.id === job.id)
        ? prev.filter((j) => j.id !== job.id) 
        : [...prev, job] 
    );
  };

  return (
    <JobsContext.Provider
      value={{
        likedJobs,
        appliedJobs,
        toggleLikeJob,
        toggleApplyJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobsContext);
}
