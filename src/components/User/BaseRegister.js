import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const BaseRegister = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [motherTongue, setMotherTongur] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");


 

  const navigate = useNavigate();
  const APIURL = useSelector((state) => state.APIURL.url);


  const handleBaseRegister = async (e) => {
    e.preventDefault();

    if (!dateOfBirth || !religion || !motherTongue || !emailId ) {
      toast.error("All fields are required.");
      return;
    }

    const today = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    if (age < 21) {
      toast.error("You are under aged unable to register.");
      return;
    }

    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.{8,})/;

    if (!passwordPattern.test(password)) {
      toast.error(
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
      const member = localStorage.getItem("member_id");

      const data = {
        member: member,
        date_of_birth: dateOfBirth,
        religion: religion,
        mother_tongue: motherTongue,
        email: emailId,
        password: password,
      };
     
      const response = await axios.post(
        `${APIURL}/api/basic-register/create`,
        data
      );
      localStorage.setItem("email", emailId);
      navigate("/r3");
      toast.success("40% completed");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.email_id
      ) {
        toast.error(
          "This e-mail is already registered. Please choose a different one."
        );
      }
      toast.error("Registration failed", error);
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

      <div className="h-[92%] w-auto flex justify-center items-center  ">
        <div className="h-fit w-fit md:flex shadow-2xl  rounded-3xl">
          <div className="h-96 w-80 hidden md:flex bg-green-800 md:justify-center md:items-center rounded-l-3xl">
            <div
              className=""
              style={{
                backgroundImage: 'url("https://imgs.search.brave.com/2DN2xdRs0agLxgG0B3p5EzN7PdUI0MgLGUk2ehf8fAg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vMS5icC5i/bG9nc3BvdC5jb20v/LVFseFVyYkxuRmdF/L1gwYU1qOVlfbURJ/L0FBQUFBQUFBV1BZ/L2lVSE1rUUt4MnI4/WnlmQUZOMkpZcjl4/R2NfLXlocG9SZ0NM/Y0JHQXNZSFEvczMy/MC9jdXQtK2xvdmUt/Z2lmKyslMjgxNyUy/OS5naWY_dz04MjUm/c3NsPTE.gif")',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                position:"relative",
                top:"10%",
                left:"2%"
              }}
            ></div>
          </div>

          <div className="w-80 h-96 bg-white md:rounded-r-3xl ">

            <h2 className="font-bold left-1/2 pt-5 text-xl ">
              Tell Us About Your Basic Details
            </h2>

          <div>
            <form>
              <div>
                <div className="mt-2">
                  <label className=" ml-2 font-bold">
                    Date of birth
                  </label>
                  <input
                      type="date"
                      placeholder="DD/MM/YY"
                      className="border-b ml-10 border-grey-400 focus:border-blue-500 outline-none w-32  "
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    ></input>
                </div>
                <div className="mt-2">
                  <label className=" ml-1 font-bold">
                    Religion
                  </label>
                  <select
                    className="border-b ml-14 border-grey-400 focus:border-blue-500 outline-none w-32"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                  >
                    <option value="">select option</option>
                    <option value="hindu">Hindu</option>
                    <option value="christian">Christian</option>
                    <option value="muslim">Muslim</option>
                  </select>

                </div>

                <div className="mt-2">
                  <label className=" font-bold  ml-1">
                    Mother Tongue
                  </label>
                  <select
                    className="border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32"
                    value={motherTongue}
                    onChange={(e) => setMotherTongur(e.target.value)}
                  >
                    <option value="">select option</option>
                    <option value="Malayalam">Malayalam</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                </div>

                <div className="mt-2">

                  <label className=" font-bold ml-3">
                    E mail id
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your mail"
                    className="border-b ml-16 border-gray-400 focus:border-blue-500 outline-none w-32 "
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  ></input>

                </div>

                <div className="mt-2">

                  <label className="font-bold ml-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="border-b ml-16  border-gray-400  focus:border-blue-500 outline-none w-32 "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>

                </div>

                <div className="bg-logo mt-9 rounded w-32 text-white font-bold ml-20">
                  <button onClick={handleBaseRegister}>Continue</button>
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

export default BaseRegister;
