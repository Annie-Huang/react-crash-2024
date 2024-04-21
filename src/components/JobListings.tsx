// import jobs from '../jobs.json';
import { Job, JobListing } from './JobListing.tsx';
import { FC, useEffect, useState } from 'react';
import { Spinner } from './Spinner.tsx';

export interface JobListingsProps {
  isHome?: boolean;
}

export const JobListings: FC<JobListingsProps> = ({ isHome = false }) => {
  // console.log('jobs=', jobs);
  // const recentJobs = jobs.slice(0, 3);
  // const jobListings = isHome ? jobs.slice(0, 3) : jobs;

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      // If your app is created with create-react-app, then you do the proxy in package.json. Here you do it in vite.config.ts
      // const apiUrl = `http://localhost:5000/jobs${isHome ? '?_limit=3' : ''}`;
      const apiUrl = `/api/jobs${isHome ? '?_limit=3' : ''}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
