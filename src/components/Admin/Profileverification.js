import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const Profileverification = () => {
  const [memberDetails, setMemberDetails] = useState([]);
  const APIURL = useSelector(state => state.APIURL.url);

  useEffect(() => {
    axios.get(`${APIURL}/api/profile-verification`) 
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

  const handleVerify = async (member_id) => {
    try {
      const response = await axios.post(`${APIURL}/api/verify-member/${member_id}`);
      toast.success("Verified Successfully");
    } catch (error) {
      console.error('An error occurred', error);
    }
  }

  return (
    <div>
      <AdminHeader/>
      <div className='flex justify-center'>
      <div className="my-10 mx-10 rounded-3xl py-8 px-10 bg-slate-200 shadow-2xl  w-fit h-fit">
      <div>
        <h1 className="font-bold text-3xl text-lime-500 ">
          Profile verification
        </h1>
      </div>
      <div className='flex-wrap flex'>
       {memberDetails.length === 0 ? (
          <div className='pt-5'>
            <p className='text-lg font-semibold text-gray-600'>
              No pending verification
            </p>
          </div>
        ) : (
          memberDetails.map((member) => (
            <div key={member.id} className='pt-5'>
              <div className='bg-white border border-gray-300 p-4  shadow-md rounded-md bg-gradient-to-b from-lime-200 '>
                <p className='text-gray-800 font-semibold'>ID: {member.id}</p>
                <p className='text-gray-800 font-semibold'>Email: {member.email}</p>
                <p className='text-gray-800 font-semibold'>Dob: {member.date_of_birth}</p>
                <div className='flex mt-2'>
                  <button
                    onClick={() => handleVerify(member.id)}
                    className='px-3 py-1 bg-green-500 text-white rounded-md mr-2'
                  >
                    Verify
                  </button>
                  <button className='px-3 py-1 bg-red-500 text-white rounded-md'>
                    Reject
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Profileverification;
