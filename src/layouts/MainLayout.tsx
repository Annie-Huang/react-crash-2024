import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* You can put the ToastifyContainer anywhere as it will absolute position it.*/}
      <ToastContainer />
    </>
  );
};
