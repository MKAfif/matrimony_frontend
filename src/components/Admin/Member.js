import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const Profileverification = () => {
  const [memberDetails, setMemberDetails] = useState([]);
  const APIURL = useSelector((state) => state.APIURL.url);

  useEffect(() => {
    axios
      .get(`${APIURL}/api/adminmember`)
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setMemberDetails(data);
      })
      .catch((error) => console.error("Error fetching member details", error));
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="my-10 mx-10 rounded-3xl py-8 bg-slate-200 shadow-2xl  w-fit h-fit">
        <div className="">
          <h1 className="font-bold text-3xl text-indigo-600 pt-5 ">
            Verified Members
          </h1>
        </div>

        <div className=" mt-5 flex flex-wrap ">
          {memberDetails.map((member) => (
            <div
              key={member.id}
              className="mb-4 p-2 md:p-4 w-full md:w-1/2 lg:w-1/3"
            >
              <div className="bg-gradient-to-tr from-blue-200 to-indigo-600 border border-gray-300 p-4 shadow-md rounded-2xl">
                <p className="text-white font-semibold">ID: {member.id}</p>
                <p className="text-white font-semibold">
                  Email: {member.email}
                </p>
                <p className="text-white font-semibold">
                  Dob: {member.date_of_birth}
                </p>

                <div className="flex mt-4">
                  <h1 className="text-green-700 font-bold mt-1 ">Verified</h1>
                  <div className="h-5 text-3xl  text-green-700">
                    <TiTick />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profileverification;
