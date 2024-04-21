import { Hero } from '../components/Hero.tsx';
import { HomeCards } from '../components/HomeCards.tsx';
import { JobListings } from '../components/JobListings.tsx';
import { ViewAllJobs } from '../components/ViewAllJobs.tsx';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};
