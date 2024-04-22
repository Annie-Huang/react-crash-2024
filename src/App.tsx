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
import { AddJobPage, DraftJob } from './pages/AddJobPage.tsx';

const App = () => {
  const addJob = (newJob: DraftJob) => {};

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs/:id' element={<JobPage />} loader={jobLoader} />
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
