import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
