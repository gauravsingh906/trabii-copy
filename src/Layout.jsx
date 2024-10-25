import { Outlet } from 'react-router-dom';
import Navbar from './Components/Common/Navbar'
import Footer from './Components/Common/Footer';

function Layout() {
  return (
    <div className='h-screen w-screen pt-18'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
