import { useEffect, useState } from 'react';
import { Job } from '../components/JobListing.tsx';
import { LoaderFunctionArgs, useParams } from 'react-router-dom';
import { Spinner } from '../components/Spinner.tsx';

// export type JobLoaderParams = { params: { id: string } };
// (args: LoaderFunctionArgs<any>) => DataFunctionValue | Promise<DataFunctionValue>
/*export const jobLoader = async ({
  params,
}: LoaderFunctionArgs<JobLoaderParams>) => {*/

export const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data = await response.json();
  return data;
};

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

  return loading ? <Spinner loading={loading} /> : <h1>{job?.title}</h1>;
};

// export {JobPage as default, jobLoader}
