import React, { useState } from 'react';
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { userinfo } from '../../Redux/Actions/UserInfoAction';
import { memberinfo } from '../../Redux/Actions/MemberInfoAction';
const Register = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [profileFor , setProfilefor] = useState('')
  const [name , setName] = useState('')
  const [number , setNumber] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const APIURL = useSelector(state=>state.APIURL.url)
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRegsiter = async (e) => {
    e.preventDefault();

    if (!profileFor || !name || !number) {
      toast.error('All fields are required.'); 
      return; 
    }
    if (number.length !== 10) {
      toast.error('Mobile number should be 10 digits.');
      return;
    }
   
    try {
      const selectedProfile = profileFor.toLowerCase();
      const isMaleProfile = selectedProfile.includes('my-self(male)') || 
      selectedProfile.includes('son') || 
      selectedProfile.includes('brother');
      const selectedGender = isMaleProfile ? 'male' : 'female';
      const matrimonyId = String(Math.floor(100000 + Math.random() * 900000));
      const data = {
        matrimony_profile_for: profileFor,
        name: name,
        mobile_number: number,
        gender: selectedGender,
        matrimony_id : matrimonyId
      };
      
      console.log(APIURL,"api url.........")
      const response = await axios.post(`http://43.204.112.143/api/register`, data);

      localStorage.setItem('member_id',response.data.member_id)


   
      navigate('/r2')
      toast.success('20% completed');


    } catch (error) {
      if (error.response && error.response.data && error.response.data.mobile_number){
        toast.error('This mobile number is already registered. Please choose a different one.');
      }
      console.log(error,"errorrrrrrrrr")
      toast.error('Registration failed', error);
    }
  };

  const [email,setEmail]       = useState('')
  const [password,setPassword] = useState('')

  const userLogin = async (e) =>{
    e.preventDefault() 

    try{
      const userdata = {
        email    : email,
        password : password
      }
      const response = await axios.post(`${APIURL}/api/memberlogin`,userdata)
     

      const userInfo = response.data.userinfo
      dispatch(userinfo(userInfo))

      const memberInfo = response.data.memberinfo
      dispatch(memberinfo(memberInfo))



      const tokenString = JSON.stringify(response.data.token);
      localStorage.setItem('jwtToken', tokenString);
      navigate('/home')
      toast.success("Login successfull")


    }catch(error){
     
      toast.error("Login Failed")
    }
  }


  return (
    <div className='bg-custom md:h-screen h-screen'>
      
      <div className='flex items-center px-4 py-2'>
        <img className='w-15 h-10' src="/assets/logo.png" alt='logo' />
        <p className='text-logo font-bold ml-2'>Matrimony</p>
      </div>
      <div className='text-center py-4'>
        <p className='font-bold'>Already a Member?</p>
        <button onClick={togglePopup} className='text-logo font-bold rounded shadow-sm mt-2'>Login</button>
      </div>
      <div className='px-4 py-2'>
        <p className='mt-8 text-center font-bold'>Your search for the perfect match ends here!<br />#BeChoosy with Biggest Matrimony Service for Malayalis</p>
      </div>
        <div className='px-4 md:py-2 py-6 bg-white rounded-3xl mt-5 w-5/6 sm:w-2/3 mx-auto md:flex'>
          <div className='flex-1 md:p-4'>
            <p className='font-bold  w-44'>Matrimony profile for</p>

            <select className='bg-white px-4 py-2 rounded-3xl w-full cursor-pointer focus:outline-none' 

            value={profileFor}
            onChange={(e) =>setProfilefor(e.target.value)}
            
            >

              <option className='hidden'>Select Profile</option>
              <option className='cursor-pointer hover:bg-gray-100'>My-self(male)</option>
              <option className='cursor-pointer hover:bg-gray-100'>My-self(female)</option>
              <option className='cursor-pointer hover:bg-gray-100'>Daughter</option>
              <option className='cursor-pointer hover:bg-gray-100'>Son</option>
              <option className='cursor-pointer hover:bg-gray-100'>Sister</option>
              <option className='cursor-pointer hover:bg-gray-100'>Brother</option>
            </select>
          </div>
          <div className='flex-1 p-4'>
            <p className='font-bold  w-12'>Name</p>
            <input
              maxLength={30}
              autoFocus
              type='text'
              className='outline-none w-full'
              placeholder='Enter your name'
              value={name}
              onChange={(e) => {
                const inputValue = e.target.value;
                const onlyLetters = inputValue.replace(/[^A-Za-z]/g, '');
                setName(onlyLetters);
              }}
            />
          </div>
          <div className='flex-1 p-4'>
            <p className='font-bold w-32'>Mobile Number</p>
            <input maxLength={10} className='outline-none w-full' placeholder='Enter your phone number'

            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            
            ></input>
            
          </div>
        
          <div className='flex items-center justify-center p-4'>
            <button className='text-white px-6 py-2 font-bold bg-logo rounded-full' onClick={handleRegsiter}>Register</button>
          </div>
        </div>

      
      {showPopup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg p-8'>
              <div className='flex justify-end'>
                <button
                  onClick={togglePopup}
                  className='text-gray-500 hover:text-gray-700'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.293 5.293a1 1 0 111.414-1.414L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 11-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
              <h2 className='text-2xl font-bold mb-4'>Login Form</h2>
              <form>
                <div className='mb-4'>
                  <label className='block font-bold'>Email</label>
                  <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                   type='email' className='w-full p-2 border rounded' />
                </div>
                <div className='mb-4'>
                  <label className='block font-bold'>Password</label>
                  <input
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  
                  type='password' className='w-full p-2 border rounded' />
                </div>
                <div className='text-center'>
                  <button onClick={userLogin} type='submit' className='bg-logo text-white py-2 px-4 rounded font-bold'>
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>
  );
};

export default Register;
