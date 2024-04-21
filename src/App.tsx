import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';
import { JobsPage } from './pages/JobsPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
    </Route>
  )
);

const App = () => {
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
