import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FiHeart } from "react-icons/fi";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {AiFillEye} from "react-icons/ai"

const MemberDetails = () => {
  const APIURL = useSelector((state) => state.APIURL.url);
  const memberinfo = useSelector((state) => state.memberinfo);
  const name = memberinfo.memberinfo.name;

  const { memberId } = useParams();

  const [memberDetails, setMemberDetails] = useState(null);

  const isPlatinum = memberinfo.memberinfo.is_platinum;
  const isGold = memberinfo.memberinfo.is_gold;
  const isDiamond = memberinfo.memberinfo.is_diamond;


  useEffect(() => {
   
    axios
      .get(`${APIURL}/api/individual/${memberId}/`)
      .then((response) => {
        setMemberDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching member details:", error);
      });
  }, [memberId]);

  const handleInterest = async (memberId) => {
  

    try {
      const data = {
        memberid: memberId,
        name: name,
      };

      const response = await axios.post(`${APIURL}/api/showinterest`, data);
      toast.success("Intrest sent successfully");
     
    } catch (error) {
      console.error(error, "error while getting data");
    }
  };

  const handleNumber = ()=>{
    toast.error("Upgrade to premium to see the number")
  }

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-t from-emerald-200">
        <div className="border border-red-950 flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-neutral-700 md:max-w-xl mx-4 md:mx-auto mt-8 transition duration-300 ease-in-out transform hover:-translate-y-1">
          <img
            className="w-full h-96 md:w-1/3 md:h-auto md:!rounded-l-lg object-cover rounded-t-lg"
            src={
              memberDetails?.image_url ||
              "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
            }
            alt=""
          />

          <div className="flex flex-col justify-start p-6 md:w-2/3">
            {memberDetails ? (
              <div>
                <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  <div>
                    <strong>Name:</strong> {memberDetails.name}
                  </div>
                { isDiamond || isGold || isPlatinum? (
                  <div>
                    <strong>Number:</strong> {memberDetails.number}
                  </div>

                ):(
          
                    <div className="cursor-pointer" onClick={handleNumber}>
                      <strong>Number:</strong> 91******** 
                    </div>
                    
                  
                )
              }

                  <div>
                    <strong>DOB:</strong> {memberDetails.date_of_birth}
                  </div>

                  <div>
                    <strong>E-mail:</strong> {memberDetails.email_id}
                  </div>

                  <div>
                    <strong>Marital Status:</strong>{" "}
                    {memberDetails.marital_status}
                  </div>

                  <div>
                    <strong>Occupation:</strong> {memberDetails.job}
                  </div>
                </div>
                <div className="mt-auto text-center">
                  <button
                    onClick={() => handleInterest(memberDetails.member_id)}
                    className="px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 transform hover:scale-105 "
                  >
                    <FiHeart className="inline-block mr-2 animate-bounce" />
                    Show Interest
                  </button>
                </div>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 border border-black  bg-gradient-to-br from-green-300 to-green-500 p-6 mt-6 mx-4 md:mx-auto md:max-w-xl rounded-lg shadow-2xl dark:bg-neutral-800">
          <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 mb-2">
            Additional Details
          </h5>
          <p className="mb-4 text-base text-neutral-700 dark:text-neutral-300">
            <strong>About:</strong> {memberDetails?.about}
          </p>
          {memberDetails && (
            <div>
              <p className="mb-4 text-base text-neutral-700 dark:text-neutral-300">
                <strong>Preference:</strong>
                <br />
                {memberDetails.age_range_min && memberDetails.age_range_max ? (
                  <span>
                    Age Range: {memberDetails.age_range_min} -{" "}
                    {memberDetails.age_range_max}
                    <br />
                  </span>
                ) : (
                  <span className="font-extrabold text-red-700">
                    Preferences not added
                    <br />
                  </span>
                )}
                {memberDetails.location && (
                  <span>
                    Location: {memberDetails.location}
                    <br />
                  </span>
                )}
                {memberDetails.education && (
                  <span>
                    Education: {memberDetails.education}
                    <br />
                  </span>
                )}
                {memberDetails.occupation && (
                  <span>
                    Occupation: {memberDetails.occupation}
                    <br />
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MemberDetails;
