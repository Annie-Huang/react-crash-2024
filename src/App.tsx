import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { JobsPage } from './pages/JobsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { jobLoader, JobPage } from './pages/JobPage.tsx';
import { AddJobPage } from './pages/AddJobPage.tsx';
import { EditJobPage } from './pages/EditJobPage.tsx';
import { Job } from './components/JobListing.tsx';

const App = () => {
  // Add New Job
  const addJob = async (job: Job) => {
    // const response = await fetch('/api/jobs', {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  // Delete Job
  const deleteJob = async (id: string) => {
    // const response = await fetch(`/api/jobs/${id}`, {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  // Update Job
  const updateJob = async (job: Job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path='/jobs/:id'
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
  /*  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );*/
};

export default App;
