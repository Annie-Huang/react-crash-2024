import { useLoaderData } from 'react-router-dom';
import { Job } from '../components/JobListing.tsx';

export const EditJobPage = () => {
  const job = useLoaderData() as Job;

  return <div>{job.title}</div>;
};
