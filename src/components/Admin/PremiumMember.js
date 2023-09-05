import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { TiTick } from 'react-icons/ti';
import { SlBadge } from 'react-icons/sl';
import AdminHeader from './AdminHeader';

const PremiumMember = () => {
  const [memberDetails, setMemberDetails] = useState([]);
  const APIURL = useSelector((state) => state.APIURL.url);

  useEffect(() => {
    axios
      .get(`${APIURL}/api/premiummembers`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setMemberDetails(data);
      })
      .catch((error) => console.error('Error fetching member details', error));
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className='flex justify-center'>
      <div className="my-10 mx-10 rounded-3xl py-8 bg-slate-200 shadow-2xl  w-fit h-fit">
        <div className="">
          <h1 className="font-bold text-3xl text-yellow-500">
            Premium Members
          </h1>
        </div>
      <div className="mt-2 lg:grid-cols-3 grid-cols-1 grid gap-4 w-full  ">
        {memberDetails.map((member) => (
          <div
            key={member.id}
            className=" mb-4 p-2 md:p-4 w-full"
          >
            <div className=" bg-gradient-to-tr from-amber-200 to-yellow-500 border border-gray-300 p-4 shadow-md rounded-2xl ">
              <p className="text-black font-semibold">ID: {member.id}</p>
              <p className="text-black font-bold">Email: {member.email}</p>
              <p className="text-black font-semibold">
                Dob: {member.date_of_birth}
              </p>

              <div className="flex  mt-4">
                <h1 className="text-green-700 font-bold">Verified</h1>
                <div className="h-5 text-3xl text-green-700">
                  <TiTick />
                </div>
              </div>

              <div className="flex  mt-2">
                <h1 className=" drop-shadow-2xl font-bold">Premium</h1>
                <div className="h-5 text-3xl text-yellow-500">
                  <SlBadge />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default PremiumMember;
