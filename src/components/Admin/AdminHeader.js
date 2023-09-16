import React, { useState } from 'react';
import { Link,useLocation,Navigate, useNavigate} from 'react-router-dom';

function AdminHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout =()=>{
    localStorage.removeItem('adminJwtToken')
    navigate('/adminlogin')
    
  }

  return (
    <header className=" border-b border-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <img className="h-8 " src="/assets/logo.png" alt="matrimony" />
          <h1 className='text-logo font-mono'>matrimony</h1>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} type="button" className="block">
            <svg className={`h-6 w-6 fill-current ${isOpen ? '' : 'hidden'}`} viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            </svg>
            <svg className={`h-6 w-6 fill-current ${isOpen ? 'hidden' : ''}`} viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          to="/Admin"
          className={
            location.pathname === "/Admin"
              ? "block px-2 py-1 font-semibold rounded text-green-500"
              : "block px-2 py-1 font-semibold rounded hover:text-green-500"
          }
        >
          Dashboard
        </Link>


        <Link 
        to='/Adminprofile' 
        className={location.pathname==="/Adminprofile"
        ?"block px-2 py-1 font-semibold rounded text-green-500"
        : "block px-2 py-1 font-semibold rounded hover:text-green-500"
        }
        >
        Profile Verification
        </Link>


        <Link 
        to='/Adminmember' 
        className= {location.pathname === "/Adminmember"
        ? "mt-1 block px-2 py-1 font-semibold rounded text-green-500 sm:mt-0 sm:ml-2"
        : "mt-1 block px-2 py-1 font-semibold rounded hover:text-green-500 sm:mt-0 sm:ml-2"
        }
        >Members
        </Link>


        <Link 
        to='/premiummembers' 
        className= {location.pathname==='/premiummembers'
        ?"mt-1 block px-2 py-1 font-semibold rounded text-green-500 sm:mt-0 sm:ml-2"
        :"mt-1 block px-2 py-1 font-semibold rounded hover:text-green-500 sm:mt-0 sm:ml-2"
       }
        >Premium Members
        </Link>

        {/* <Link to='' className="mt-1 block px-2 py-1 font-semibold rounded hover:text-green-500 sm:mt-0 sm:ml-2">Rejected</Link> */}

        <Link
          to="/membership"
          className={
            location.pathname === "/membership"
              ? "mt-1 block px-2 py-1 font-semibold rounded text-green-500 sm:mt-0 sm:ml-2"
              : "mt-1 block px-2 py-1 font-semibold rounded hover:text-green-500 sm:mt-0 sm:ml-2"
          }
        >
          Premium Plans
        </Link>

        <div className="mt-1 block px-2 py-1 font-semibold rounded hover:text-red-800 sm:mt-0 sm:ml-2 text-red-500">
          <Link onClick={handleLogout} to='/Adminlogin' className="ml-2">Logout</Link>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
