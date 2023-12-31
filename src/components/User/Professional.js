import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';


const jobLocations = [
  { location: 'Kochi', state: 'Kerala' },
  { location: 'Banglore', state: 'Karnataka' },
  { location: 'Chennai', state: 'Tamilnadu' },
  { location: 'Manglore', state: 'Karnataka' },
  { location: 'Thalassery', state: 'Kerala' },

];

export const Professional = () => {
  const [highestEducation, setHighesEducation] = useState('');
  const [employeIn, setemployedIn] = useState('');
  const [occupation, setOccupation] = useState('');
  const [annualIncome, setAnnuslIncome] = useState('');
  const [worklocation, setWorkLocation] = useState('');
  const [state, setState] = useState('');

  const navigate = useNavigate();
  const APIURL = useSelector((state) => state.APIURL.url);

  const handleProfessional = async (e) => {
    e.preventDefault();

    if (!highestEducation || !employeIn || !occupation || !annualIncome || !worklocation || !state) {
      toast.error('All fields are required.');
      return;
    }

    try {
      const member = localStorage.getItem('member_id');

      const data = {
        member: member,
        highest_education: highestEducation,
        employed_in: employeIn,
        annual_income: annualIncome,
        work_location: worklocation,
        state: state,
        occupation: occupation,
      };


      const response = await axios.post(
        `${APIURL}/api/professional-register`,
        data
      );

      navigate('/r5');
      toast.success('80% completed');
    } catch (error) {
      toast.error('Registration failed')
    }
  };

  const handleWorkLocationChange = (e) => {
    const newWorkLocation = e.target.value;
    setWorkLocation(newWorkLocation);


    const matchingJobLocation = jobLocations.find(
      (job) =>
        job.location.toLowerCase() === newWorkLocation.toLowerCase()
    );

    if (matchingJobLocation) {
      setState(matchingJobLocation.state);
    } else {
      setState('');
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

        <div className="h-96 w-80 hidden md:flex bg-green-800 md:justify-center md:items-center rounded-l-3xl">

          <div
              className=""
              style={{
                backgroundImage: 'url("https://media4.giphy.com/media/8Aji4dfeauBi0gy2Xl/giphy.gif?cid=6c09b952i8xd1oayt2edwefeigguogvnz6ltd8z4yklip1ls&ep=v1_stickers_related&rid=giphy.gif&ct=s")',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                position:"relative",
                top:"10%",
                left:"-5%"
              }}
            ></div>
          </div>

          <div className="w-80 h-96 bg-white md:rounded-r-3xl ">

            <h2 className="font-bold left-1/2 pt-5 text-xl ">
             Professional details
            </h2>

            <div>

              <form>

              <div>

                <div className="pt-2">
                  <label className="font-bold ">Highest Education</label>
                  <input
                    type="text"
                    placeholder="Education"
                    className="border-b ml-16  border-gray-400 focus:border-blue-500 outline-none w-32"
                    value={highestEducation}
                    onChange={(e) => setHighesEducation(e.target.value)}
                  />
                </div>


              <div className="mt-2">
                <label className="font-bold">Employed in</label>
                <select
                  className="border-b ml-24 border-gray-400 focus:border-blue-500 outline-none w-32"
                  value={employeIn}
                  onChange={(e) => setemployedIn(e.target.value)}
                >
                  <option value="">select option</option>
                  <option value="Government">Government</option>
                  <option value="Private">Private</option>
                  <option value="Business">Business</option>
                  <option value="Defence">Defence</option>
                  <option value="Self Employed">self Employed</option>
                  <option value="Not Working">Not Working</option>
                </select>
              </div>

              <div className="mt-2">
                <label className="font-bold ">Occupation</label>
                <input
                  type="text"
                  placeholder="Occupation"
                  className="border-b ml-24  border-gray-400 focus:border-blue-500 outline-none w-32"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <label className="font-bold ">Annual Income</label>
                <select
                  className="border-b ml-20 border-gray-400 focus:border-blue-500 outline-none w-32"
                  value={annualIncome}
                  onChange={(e) => setAnnuslIncome(e.target.value)}
                >
                  <option value=''>select option</option>
                    <option value='Below 1 lakh'>Below 1lakh</option> 
                    <option value='1 - 2 lakh'>1-2lakh</option>
                    <option value='2 - 3 lakh'>2-3lakh</option>
                    <option value='3 - 4 lakh'>3-4lakh</option>
                    <option value='4 - 5 lakh'>4-5lakh</option>
                    <option value='5 - 6 lakh'>5-6lakh</option>
                    <option value='7 - 8 lakh'>7-8lakh</option>
                    <option value='8 - 9 lakh'>8-9lakh</option>
                    <option value='9 - 10 lakh'>9-10lakh</option>
                    <option value='Above 10 lakh'>Above 10lakh</option>
                  
                </select>
              </div>

              <div className="mt-2">
                <label className="font-bold ">Work Location</label>
                <input
                  type="text"
                  placeholder="Work Location"
                  className="border-b ml-20  border-gray-400 focus:border-blue-500 outline-none w-32"
                  value={worklocation}
                  onChange={handleWorkLocationChange}
                />
              </div>

              <div className="mt-2">
                <label className="font-bold ">State</label>
                <input
                  type="text"
                  placeholder="State"
                  className="border-b ml-32  border-gray-400 focus:border-blue-500 outline-none w-32"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>

              <div className="bg-logo mt-5 rounded w-32 text-white font-bold ml-20">
                <button onClick={handleProfessional}>Continue</button>
              </div>





            </div>


              </form>



            </div>


          </div>

      </div>



    </div>


  )

    
};
