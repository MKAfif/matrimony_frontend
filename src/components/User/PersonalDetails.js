import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PersonalDetails = () => {
  const [maritalStatus, setMaritalStatus] = useState("");
  const [height, setHeight] = useState("");
  const [familyStatus, setFamilyStauts] = useState("");
  const [familyType, setFamilyType] = useState("");
  const [familyValues, setFamilyValues] = useState("");

  const navigate = useNavigate();
  const APIURL = useSelector((state) => state.APIURL.url);

  const handlePersonalRegister = async (e) => {
    e.preventDefault();

    if (!maritalStatus || !height || !familyStatus || !familyType || !familyValues) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const member = localStorage.getItem("member_id");

      const data = {
        member: member,
        marital_status: maritalStatus,
        height: height,
        family_status: familyStatus,
        family_type: familyType,
        family_values: familyValues,
      };

    
      const response = await axios.post(
        `${APIURL}/api/personal-register`,
        data
      );

     
      navigate("/r4");
      toast.success("60% completed");
    } catch (error) {
      toast.error("registration failed");
    }
  };

  return (
    <div className="bg-ashcolor w-screen h-screen bg-gradient-to-t from-teal-400 to-teal-100 ">
      <div className="flex items-center">
        <img
          className="w-15 h-10 px-2 pt-2"
          src="/assets/logo.png"
          alt="logo"
        />
        <p className="text-logo text-left font-bold ">Matrimony</p>
      </div>

      <div className="h-[92%] w-auto flex justify-center items-center">
        <div className="h-fit w-fit md:flex shadow-2xl  rounded-3xl">
          <div className="h-96 w-80 hidden md:flex bg-green-800 md:justify-center md:items-center rounded-l-3xl">
            <div
              className=""
              style={{
                backgroundImage: 'url("https://media.tenor.com/AP-cZxHQElEAAAAi/cute-love.gif")',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                position: "relative",
                top: "10%",
                left: "-2%",
              }}
            ></div>
          </div>

          <div className="w-80 h-96 bg-white md:rounded-r-3xl ">
            <h2 className="font-bold left-1/2 pt-5  text-xl ">
              Tell Us About Your Personal Details
            </h2>

            <div>
              <form>
                <div>
                  <div className="mt-2">
                    <label className=" ml-2 font-bold">Marital Status</label>
                    <select
                      className="border-b ml-9 border-gray-400 focus:border-blue-500 outline-none w-32"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="">select option</option>
                      <option value="Never Married">Never married</option>
                      <option value="Divorced">Divorced</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="font-bold">
                      Height
                    </label>

                    <select
                      className="border-b ml-16 border-gray-400 focus:border-blue-500 outline-none w-32"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    >
                      <option value="">select option</option>
                      <option value="4ft">4ft</option>
                      <option value="4.5ft">4.5ft</option>
                      <option value="5ft">5ft</option>
                      <option value="5.5ft">5.5ft</option>
                      <option value="6ft">6ft</option>
                      <option value="6.5ft">6.5ft</option>
                      <option value="7ft">7ft</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="font-bold ">Family Status</label>
                    <select
                      className="border-b ml-8 border-gray-400 focus:border-blue-500 outline-none w-32"
                      value={familyStatus}
                      onChange={(e) => setFamilyStauts(e.target.value)}
                    >
                      <option value="">select option</option>
                      <option value="Middle Class">Middle class</option>
                      <option value="Upper Middle Class">
                        Upper Middle Class
                      </option>
                      <option value="Rich">Rich</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="font-bold ">Family Type</label>
                    <select
                      className="border-b ml-8 border-gray-400 focus:border-blue-500 outline-none w-32"
                      value={familyType}
                      onChange={(e) => setFamilyType(e.target.value)}
                    >
                      <option value="">select option</option>
                      <option value="Joint">Joint</option>
                      <option value="Nuclear">Nuclear</option>
                    </select>
                  </div>

                  <div className="mt-2">
                    <label className="font-bold ">Family Values</label>
                    <select
                      className="border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32"
                      value={familyValues}
                      onChange={(e) => setFamilyValues(e.target.value)}
                    >
                      <option value="">select option</option>
                      <option value="Orthdox">Orthodox</option>
                      <option value="Traditional">Traditional</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Liberal">Liberal</option>
                    </select>
                  </div>

                  <div className="bg-logo mt-5 rounded w-32 text-white font-bold ml-24">
                    <button onClick={handlePersonalRegister}>Continue</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
