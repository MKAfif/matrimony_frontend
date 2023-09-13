import React, { useState } from 'react';
import Header from '../Home/Header';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'

const Preference = () => {

    const [ageRange, setAgeRange] = useState({ min: '', max: '' });
    const [location, setLocation] = useState('');
    const [education, setEducation] = useState('');
    const [occupation, setOccupation] = useState('');
    const [height, setHeight] = useState('');
    const [eyeColor, setEyeColor] = useState('');
    const [skinTone, setSkinTone] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [hobbies, setHobbies] = useState('');

    const userinfo   = useSelector((state) => state.userinfo);
    const memberinfo = useSelector((state) => state.memberinfo);
    const APIURL     = useSelector(state=>state.APIURL.url)
    const dispatch   = useDispatch()
    const navigate   = useNavigate()

    const handleAgeRangeChange = (e) => {
        const { name, value } = e.target;
        setAgeRange((prevRange) => ({
            ...prevRange,
            [name]: value,
        }));
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleEducationChange = (e) => {
        setEducation(e.target.value);
    };

    const handleOccupationChange = (e) => {
        setOccupation(e.target.value);
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    };

    const handleEyeColorChange = (e) => {
        setEyeColor(e.target.value);
    };

    const handleSkinToneChange = (e) => {
        setSkinTone(e.target.value);
    };

    const handleBodyTypeChange = (e) => {
        setBodyType(e.target.value);
    };

    const handleHobbiesChange = (e) => {
        setHobbies(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const memberid = memberinfo.memberinfo.member_id
        console.log(memberid,"............")

        if (!height || !eyeColor || !skinTone || !bodyType ||!occupation ||!ageRange ||!education ||!location ||!hobbies) {
            toast.error("Please fill in all required fields");
            return;
        }


        try {
            const data = {
                member                : memberid,
                age_range_min         : ageRange.min,
                age_range_max         : ageRange.max,
                education             : education,
                occupation            : occupation,
                location              : location,
                height                : height,
                eye_color             : eyeColor,
                skin_tone             : skinTone,
                body_type             : bodyType,
                hobbies               : hobbies,
            };
            console.log(data,"Prefernce.......")
            const response = await axios.post(`${APIURL}/api/references`,data)
            navigate('/home')
            toast.success("Preferences added successfully")
            
           

        } catch (error) {
            console.error("Failed",error)
        }

       
    };
    


    return (
      <div>
        <Header />
        <div className='bg-gradient-to-t from-emerald-200'>
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-bold text-logo ">Add Preference</h2>
  
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div >
                <label className="text-gray-700 dark:text-gray-200 " htmlFor="ageRange">Age Range</label>
                <div className="flex space-x-2">
                <div>
                    <input
                    placeholder='min'
                    value={ageRange.min}
                    onChange={(e) => setAgeRange({ ...ageRange, min: e.target.value })}
                    id="minAge"
                    type="number" 
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>

                <div>
                    <input
                    placeholder='max'
                    value={ageRange.max}
                    onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
                    id="maxAge"
                    type="number" 
                    className=" block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                </div>


                 
                </div>
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200 " htmlFor="location">Location</label>
                <input
                  placeholder='Location'
                  id="location"
                  value={location}
                  onChange={handleLocationChange}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="height">Height</label>
                <select
                  value={height}
                  onChange={handleHeightChange}
                  id="height"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Option</option>
                  <option value="No Prefernce">No preference</option>
                  <option value="short">Short</option>
                  <option value="average">Average</option>
                  <option value="tall">Tall</option>
               
                </select>
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="eyeColor">Eye Colour</label>
                <select
                  value={eyeColor}
                  onChange={handleEyeColorChange}
                  id="eyeColor"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Option</option>
                  <option value="No preference">No preference</option>
                  <option value="Blue">Blue</option>
                  <option value="Brown">Brown</option>
                  <option value="Green">Green</option>
              
                </select>
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="skinTone">Skin Tone</label>
                <select
                  value={skinTone}
                  onChange={handleSkinToneChange}
                  id="skinTone"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Option</option>
                  <option value="No preference">No preference</option>
                  <option value="Fair">Fair</option>
                  <option value="Fedium">Medium</option>
                  <option value="Dark">Dark</option>
              
                </select>
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="bodyType">Body Type</label>
                <select
                  value={bodyType}
                  onChange={handleBodyTypeChange}
                  id="bodyType"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                >
                  <option value="">Select Option</option>
                  <option value="No preference">No preference</option>
                  <option value="Slim">Slim</option>
                  <option value="Average">Average</option>
                  <option value="Athletic">Athletic</option>
                </select>
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="education">Education</label>
                <input
                 onChange={handleEducationChange}
                  placeholder='Education'
                  id="education"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="education">Occupation</label>
                <input
                 placeholder='Occupation'
                  id="occupation"
                  onChange={handleOccupationChange}
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
  
              <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="hobbies">Hobbies</label>
                <input
                 placeholder='Hobbies'
                  value={hobbies}
                  onChange={handleHobbiesChange}
                  id="hobbies"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>
  
            <div className="flex justify-end mt-6">
              <button
               onClick={handleSubmit}
               className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-800 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>
        <Footer />
      </div>
      </div>
    );
  };
  
  export default Preference;
  