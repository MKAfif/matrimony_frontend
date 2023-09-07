import React , {useState} from 'react';
import {useNavigate,useLocation,Link} from 'react-router-dom'
import { clearuserinfo } from '../../../Redux/Actions/ClearUserinfoAction';
import {useDispatch } from 'react-redux';
import { memberinfo } from '../../../Redux/Actions/MemberInfoAction';
const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    const handleLogout = () => {
        dispatch(clearuserinfo())
        dispatch(memberinfo())
        localStorage.removeItem('jwtToken','member','email');
        navigate('/');
      };

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
              to="/home"
              className={
                location.pathname === "/home"
                  ? "block px-2 py-1 font-semibold rounded text-green-500"
                  : "block px-2 py-1 font-semibold rounded hover:scale-125 duration-300 hover:text-green-500"
              }
            >
              My Home
            </Link>
    
            <Link 
            to='/Upgrade' 
            className={location.pathname==="/Upgrade"
            ?"block px-2 py-1 font-semibold rounded text-green-500"
            : "block px-2 py-1 font-semibold rounded hover:scale-125 duration-300 hover:text-green-500"
            }
            >
            Upgrade Now
            </Link>

            <Link 
            to='/search' 
            className={location.pathname==="/search"
            ?"block px-2 py-1 font-semibold rounded text-green-500"
            : "block px-2 py-1 font-semibold rounded hover:scale-125 duration-300 hover:text-green-500"
            }
            >
            Search
            </Link>


            <Link 
            onClick={handleLogout}
            to='/' 
            className={location.pathname==="/"
            ?"block px-2 py-1 font-semibold rounded text-red-500"
            : "block px-2 py-1 font-semibold rounded hover:scale-125 duration-300 hover:text-red-500"
            }
            >
            Logout
            </Link>

            
            
    
            

          </div>
        </header>
      );
      
};

export default Navbar;
