import React from 'react';
import {useNavigate,useLocation,Link} from 'react-router-dom'
import { clearuserinfo } from '../../../Redux/Actions/ClearUserinfoAction';
import {useDispatch } from 'react-redux';
import { memberinfo } from '../../../Redux/Actions/MemberInfoAction';
const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    const headerClassName = location.pathname === '/Upgrade'?'text-green-700':'text-balck  hover:text-green-700'
    const headerHome = location.pathname === '/home'?'text-green-700':'text-balck  hover:text-green-700'

    const handleLogout = () => {
        dispatch(clearuserinfo())
        dispatch(memberinfo())
        localStorage.removeItem('jwtToken','member','email');
        navigate('/');
      };

  return (
    <div>
        <nav className='border-b border-green-700'>
            <div className='container mx-auto flex items-center justify-between py-4'>
                <div className='flex items-center'>
                <img className='h-10 w-auto px-2 pt-2' src='/assets/logo.png' alt='Logo' />
                {/* <img src='/assets/1.webp' alt=' ' /> */}
                <p className='text-logo text-left font-bold'>Matrimony</p>
                </div>

                <div className='md:hidden'>
                <button className='text-black'>
                    <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                    </svg>
                </button>
                </div>

                <div className='hidden md:flex space-x-4 mr-10 font-bold flex-items'>
                    <Link to='/home' className={headerHome}>
                    My Home
                    </Link>
                    <a href='#' className='text-balck  hover:text-green-700'>
                        Search
                    </a>
                    <a href='#' className='text-black  hover:text-green-700'>
                        Matches
                    </a>
                    
                    <Link to='/Upgrade' className={headerClassName}>
                    Upgrade Now
                    </Link>
                    <a onClick={handleLogout} href='#' className='text-black  hover:text-green-700'>
                        Logout
                    </a>
                    
                </div>
            </div>
        </nav>

    </div>
    
  );
};

export default Navbar;
