import React, { useState,useEffect } from 'react';
import Header from '../Home/Header';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateImageUrl } from '../../../Redux/Actions/ImageInfoAction';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {

    const userinfo   = useSelector((state) => state.userinfo);
    const memberinfo = useSelector((state) => state.memberinfo);
    const APIURL     = useSelector(state=>state.APIURL.url)
    const navigate   = useNavigate()
    const dispatch   = useDispatch()
    console.log(userinfo,".....uuuuuuuuuuuu")
    console.log(memberinfo,"................mmmmmm")
    const memberid = memberinfo.memberinfo.member_id

    const [selectedImage, setSelectedImage] = useState(null);

    const [membersData, setMembersData] = useState([]);
    console.log(membersData,".......................")

    useEffect(() => {
        axios.get(`${APIURL}/api/allmemberdetails`)
            .then(response => {
                console.log(response.data,"data from frontend"); 
                setMembersData(response.data);
            })
            .catch(error => {
                console.error('Error fetching member details', error);
            });
    }, []);



    // Frontend code to handle image click

    const handleImageClick = (member_id) => {
        navigate(`/memberdetails/${member_id}`);
    };



    
    const updateData = async (imageData) => {
        const formData = new FormData();
        formData.append('image', imageData);
        formData.append('member', memberid);
         
       
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
    

        try {
            const response = await axios.post(`${APIURL}/api/imageupload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    
                },
            });

            setSelectedImage(response.data.image)
            console.log(response.data.image, '...imageee*****************');

            dispatch(updateImageUrl(response.data.image));




        } catch (error) {
            console.error('An error occurred during image upload:', error);
            console.log(error.response);
        }
    };
    

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const { files } = e.target;
        const file = files[0];
    
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader.result
                setSelectedImage(result);
                updateData(result);
            };
        }
    };
        

  
  return (
    <>
      <Header />
      <div className='flex'>
        <div className='left'>
        <div  className='w-72 border border-black ml-6 h-96 mt-10 rounded-2xl bg-gradient-to-br from-pg1 to-pg2'>
        
        <div className='bg-white border border-black rounded-3xl w-48 h-56 mt-5 ml-10'>
        <div className='rounded-full ml-7 mt-2 w-32 h-32 bg-gray-400 relative'>
            <input
                type='file'
                accept='image/*'
                className='w-full h-full opacity-0 cursor-pointer absolute top-0 left-0'
                onChange={handleImageUpload}
            />
            {/* < img src={memberinfo.memberinfo.image_url} alt='' /> */}

            {memberinfo.memberinfo.image_url ? (
                <img
                    src={memberinfo.memberinfo.image_url}
                    alt='Profile'
                    className='object-cover w-full h-full rounded-full'
                />
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-16 w-16 text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                >
                    <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 110-18 9 9 0 010 18zm0-6a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0-7a2 2 0 100 4 2 2 0 000-4z'
                        clipRule='evenodd'
                    />
                </svg>
            )}
        </div>



            <h1 className='font-bold mt-2'>{memberinfo.memberinfo?memberinfo.memberinfo.name:''}</h1>
        </div>


        </div>
        <div className='border border-black w-72 h-64 ml-6 rounded-3xl'>


            <ul className='ml-2'>
            <Link to="/UserProfile">
                <li className="font-bold w-24 mt-5 hover:text-green-700 cursor-pointer">
                    Edit Profile
                </li>
            </Link>

            <Link to = "/Preference">
            <li className='font-bold w-32 mt-4 hover:text-green-700 cursor-pointer'>
                Add Preferences
            </li>
            </Link>
            <li className='font-bold w-36 mt-4 hover:text-green-700 cursor-pointer'>
                Verify Your Profile
            </li>
            <Link to = "/chat">
                <li className='font-bold w-36 mt-4 hover:text-green-700 cursor-pointer'>
                    Your Conversation
                </li>
            </Link>
            <li className='font-bold w-20 mt-4 hover:text-green-700 cursor-pointer'>
                Your Calls
            </li>
            
            </ul>

        
        
        </div>

        
        </div>

        <div className='right mt-6 sm:ml-80'>
            <h1 className='font-semibold text-2xl ml-6 sm:mt-6 text-logo '>Your Daily Recommendations</h1>
            <div>
                {membersData.members?.length > 0 ? (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 sm:ml-6'>
                   {membersData.members?.map(member => (
                       <div key={member.id} className='border border-gray-400 rounded-3xl p-2 transform hover:scale-105 transition-transform duration-300 shadow-2xl'>
                           <div className='flex flex-col items-center'>
                               {/* Clickable container with image */}
                               <div
                                    className='cursor-pointer transform hover:scale-105 transition-transform duration-300'
                                    onClick={() => handleImageClick(member.id)}
                                >
                                    <img
                                        className='w-24 h-24 rounded-3xl mb-2 shadow-md hover:shadow-lg'
                                        src={member.image_urls[0]} // Display the first image for simplicity
                                        alt='none'
                                    />
                                </div>
                           </div>
                       </div>
                   ))}
               </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>



            <h1 className='font-semibold text-2xl ml-6 sm:mt-12 text-logo'>New Matches</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 sm:ml-6 cursor-pointer'>
                <div className='border border-gray-400 rounded-3xl w-32 h-32 mx-auto sm:mx-0'>
                <img src='' alt='' />
                </div>
                <div className='border border-gray-400 rounded-3xl w-32 h-32 mx-auto sm:mx-0'>
                <img src='' alt='' />
                </div>
                <div className='border border-gray-400 rounded-3xl w-32 h-32 mx-auto sm:mx-0'>
                <img src='' alt='' />
                </div>
                <div className='border border-gray-400 rounded-3xl w-32 h-32 mx-auto sm:mx-0'>
                <img src='' alt='' />
                </div>
            </div>
        </div>

      </div>
      <Footer/>
      

    </>
  );
};

export default Profile;
