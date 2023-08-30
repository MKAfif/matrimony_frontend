import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Profileverification = () => {
    const [memberDetails, setMemberDetails] = useState([]);
  const APIURL = useSelector(state => state.APIURL.url);


  useEffect(() => {
    axios.get(`${APIURL}/api/adminmember`) 
      .then(response => {
        console.log(response); 
        return response.data;
      })
      .then(data => {
        console.log(data); 
        setMemberDetails(data);
      })
      .catch(error => console.error('Error fetching member details', error));
  }, []);

 

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
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/admin'>Dashboard</Link>
            </h1>
            <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/Adminprofile'>Profile Verification</Link>
            </h1>
            <h1 className='w-full font-bold py-2 text-green-700 cursor-pointer border-b border-black'>
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
        {memberDetails.map((member) => (
          <div  key={member.id} className='mb-4 pl-10'>
            <div className='bg-white border border-gray-300 p-4 shadow-md rounded-md'>
              {/* <h2 className='text-lg font-semibold mb-4'>Member Information</h2> */}
              <p className='text-gray-800 font-semibold'>ID: {member.id}</p>
              <p className='text-gray-800 font-semibold'>Email: {member.email}</p>
              <p className='text-gray-800 font-semibold'>Dob: {member.date_of_birth}</p>
              
              <div className='flex'>
                 <h1 className='text-green-700 font-bold  w-16 ml-16 flex mt-1 '>Verified  </h1>
                 <div className=' h-5 text-3xl text-green-700'>

                 <TiTick/>
                    
                 </div>
                 

              </div>
                
             
              
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profileverification;
