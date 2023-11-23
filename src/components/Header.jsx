import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/react.svg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="sm:hidden">
        <button
          className="bg-slate-100 p-2"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      <nav className={`w-full sm:w-64 bg-slate-100 p-5 ${isSidebarOpen ? 'block' : 'hidden'}`}>
        <div className="logo mb-4">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <Link to='/' onClick={toggleSidebar}>Home</Link>
          <Link to='/about' onClick={toggleSidebar}>About</Link>
          <Link to='/contact' onClick={toggleSidebar}>Contact</Link>
          <Link to='/service' onClick={toggleSidebar}>Service</Link>
        </div>
        <div className="mt-4">
          <Link to='/login' onClick={toggleSidebar}>Login</Link>
        </div>
      </nav>

      <div className="hidden sm:flex justify-between items-center bg-slate-100 p-5">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-10">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/service'>Service</Link>
        </div>
        <div>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
