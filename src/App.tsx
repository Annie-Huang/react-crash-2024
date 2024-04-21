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
import { HomePage } from './pages/HomePage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
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
