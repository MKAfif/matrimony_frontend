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
        <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566305977571-5666677c6e98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Header />
            <div className="flex flex-col justify-center items-center min-h-screen mt-3">
                <div className="bg-white p-6 rounded-md shadow-md w-full sm:w-96">
                    <h2 className="text-2xl font-semibold mb-4">Add Preference</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Age Range:</label>
                            <div className="flex space-x-2">
                                <input
                                    type="number"
                                    name="min"
                                    placeholder="Min"
                                    value={ageRange.min}
                                    onChange={handleAgeRangeChange}
                                    className="w-1/2 p-2 border rounded-md"
                                />
                                <input
                                    type="number"
                                    name="max"
                                    placeholder="Max"
                                    value={ageRange.max}
                                    onChange={handleAgeRangeChange}
                                    className="w-1/2 p-2 border rounded-md"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Location:</label>
                            <input
                                type="text"
                                value={location}
                                onChange={handleLocationChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Education:</label>
                            <input
                                type="text"
                                value={education}
                                onChange={handleEducationChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Occupation:</label>
                            <input
                                type="text"
                                value={occupation}
                                onChange={handleOccupationChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Height:</label>
                            <select
                                value={height}
                                onChange={handleHeightChange}
                                className="w-full p-2 border rounded-md"
                            >
                               
                                <option value="">Select Height</option>
                                <option value="No Preference">No Preference</option>
                                <option value="short">Short</option>
                                <option value="average">Average</option>
                                <option value="tall">Tall</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Eye Color:</label>
                            <select
                                value={eyeColor}
                                onChange={handleEyeColorChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Select Eye Color</option>
                                <option value="No Preference">No Preference</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="brown">Brown</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Skin Tone:</label>
                            <select
                                value={skinTone}
                                onChange={handleSkinToneChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Select Skin Tone</option>
                                <option value="No Preference">No Preference</option>
                                <option value="fair">Fair</option>
                                <option value="medium">Medium</option>
                                <option value="dark">Dark</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Body Type:</label>
                            <select
                                value={bodyType}
                                onChange={handleBodyTypeChange}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Select Body Type</option>
                                <option value="No Preference">No Preference</option>
                                <option value="slim">Slim</option>
                                <option value="athletic">Athletic</option>
                                <option value="curvy">Curvy</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Hobbies:</label>
                            <input
                                type="text"
                                value={hobbies}
                                onChange={handleHobbiesChange}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Add Preference
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Preference;
