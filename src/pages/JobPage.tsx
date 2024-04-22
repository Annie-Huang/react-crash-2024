// import { useEffect, useState } from 'react';
import { Job } from '../components/JobListing.tsx';
import {
  Link,
  LoaderFunctionArgs,
  useLoaderData,
  useNavigate,
  // useParams,
} from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { FC } from 'react';
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

export interface JobPageProps {
  deleteJob: (id: string) => void;
}

export const JobPage: FC<JobPageProps> = ({ deleteJob }) => {
  // const { id } = useParams();
  const navigate = useNavigate();

  // https://reactrouter.com/en/main/hooks/use-loader-data
  const job = useLoaderData() as Job;

  const onDeleteClick = (jobId: string) => {
    const confirm = window.confirm(
      'Are you sure you want to delete this job listing?'
    );
    if (!confirm) return;

    deleteJob(jobId);
    navigate('/jobs');
  };

  // Template in https://github.com/bradtraversy/react-crash-2024/blob/main/_theme_files/job.html
  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/jobs'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            {/*<i className='fas fa-arrow-left mr-2'></i> Back to Job Listings*/}
            <FaArrowLeft className='mr-2' /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{job.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  {/*<i className='fa-solid fa-location-dot text-lg text-orange-700 mr-2'></i>*/}
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{job.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  Job Description
                </h3>

                <p className='mb-4'>{job.description}</p>

                <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                  Salary
                </h3>

                <p className='mb-4'>{job.salary} / Year</p>
              </div>
            </main>

            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Company Info</h3>

                <h2 className='text-2xl'>{job.company.name}</h2>

                <p className='my-2'>{job.company.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.company.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {job.company.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
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
