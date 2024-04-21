import { useEffect, useState } from 'react';
import { Job } from '../components/JobListing.tsx';
import { useParams } from 'react-router-dom';

export const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${id}`);
        const data = await response.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return <div>JobPage</div>;
};
