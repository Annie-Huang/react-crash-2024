import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const linkClassDefault =
    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `bg-black ${linkClassDefault}` : linkClassDefault;

  return (
    <nav className='bg-indigo-700 border-b border-indigo-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            {/* <a> will do a whole page refresh
            <a
              className='flex flex-shrink-0 items-center mr-4'
              href='/index.html'
            >
            <Link> cannot detect whether the current link is active or not.
            <Link className='flex flex-shrink-0 items-center mr-4' to='/'>*/}
            <NavLink className='flex flex-shrink-0 items-center mr-4' to='/'>
              <img className='h-10 w-auto' src={logo} alt='React Jobs' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                React Jobs
              </span>
            </NavLink>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                {/* <a> will do a whole page refresh
                <a
                  href='/'
                  className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                >
                <Link> cannot detect whether the current link is active or not.
                <Link
                  to='/'
                  className='text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                >*/}
                <NavLink to='/' className={linkClass}>
                  Home
                </NavLink>
                <NavLink to='/jobs' className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to='/add-job' className={linkClass}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
