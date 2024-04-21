import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { HomeCards } from './components/HomeCards.tsx';
import { JobListings } from './components/JobListings.tsx';
import { ViewAllJobs } from './components/ViewAllJobs.tsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My App</h1>} />)
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
