import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
