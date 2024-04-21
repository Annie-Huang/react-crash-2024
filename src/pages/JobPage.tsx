// import { useEffect, useState } from 'react';
import { Job } from '../components/JobListing.tsx';
import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
// import { Spinner } from '../components/Spinner.tsx';

export type JobLoaderParams = { params: { id: string } };
// (args: LoaderFunctionArgs<any>) => DataFunctionValue | Promise<DataFunctionValue>
/*export const jobLoader = async ({
  params,
}: LoaderFunctionArgs<JobLoaderParams>) => {*/

// https://reactrouter.com/en/main/route/loader
export const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  const data: Job = await response.json();
  return data;
};

export const JobPage = () => {
  // const { id } = useParams();
  // https://reactrouter.com/en/main/hooks/use-loader-data
  const job = useLoaderData() as Job;

  return <h1>{job?.title}</h1>;
};

/*export const JobPage = () => {
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
};*/

// export {JobPage as default, jobLoader}
