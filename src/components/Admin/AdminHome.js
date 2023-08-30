import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Profileverification = () => {

  const APIURL = useSelector(state => state.APIURL.url);

 

  return (
    <div className='bg-white w-screen h-screen border border-black flex'>
    <div className='bg-slate-300 w-44 h-screen flex flex-col border border-black'>
        <img
          className='h-10 w-16 px-2 pt-2 mt-5'
          src="/assets/logo.png"
          alt='Logo'
        />
        <p className='text-logo text-left font-bold mt-'>Matrimony</p>
        <div className='left-menu flex flex-col'>
            <h1 className='w-full font-bold py-2 text-green-700 cursor-pointer border-b border-black'>
            <Link to='/admin'>Dashboard</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/Adminprofile'>Profile Verification</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/AdminMember'>Members</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='Adminpremium'>Premium members</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/rejected'>Rejected</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/membership'>Membership package</Link>
            </h1>
            <button className='text-red-600'>
            <Link to='/logout'>Logout</Link>
            </button>
        </div>
      </div>
      <div className='pt-28  flex '>
       
          <div className='mb-4 pl-10'>
            <div className='bg-white border border-gray-300 p-4 shadow-md rounded-md'>
              <h1>Dashboard</h1>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Profileverification;
