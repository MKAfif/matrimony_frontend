import axios from 'axios';
import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const Otp = () => {

  const [otp,setOtp] = useState('')
  
  const navigate = useNavigate()
  const APIURL   = useSelector(state =>state.APIURL.url)

  const handleOtp = async (e) =>{
    e.preventDefault()

    try{

      const member = localStorage.getItem('member_id')
      const data = {
        member : member ,
        otp    : otp
      }

      const response = await axios.post(`${APIURL}/api/otp-verification`,data)

      console.log('otp verification successfull', response.data)
      navigate('/')
      toast.success("Otp Verification Successfull After 10min your account has been being acivated") 
      localStorage.removeItem('member_id');
      localStorage.removeItem('email');
      


    }catch(error){
      console.error("Otp registration failed")
    }
  }
  


  return (
    <div className='bg-ashcolor h-screen w-screen'>
      <div className='flex flex-col items-center justify-center h-full'>
        <img
          className='w-15 h-10 px-2 pt-2'
          src="/assets/logo.png" 
          alt='logo'
        />
        <p className='text-logo text-left font-bold'>Matrimony</p>
        <div className='font-bold mt-10 text-lightblack'>
          <h1>You Have Successfully Registered with Matrimony</h1>
          <h1>Your Matrimony Id is : #456gsgvb</h1>
        </div>
        <div className='pt-6'>
          <h1 className='font-semibold text-2xl text-logo'>Verify Your Mail</h1>
        </div>
        <div className='mt-3'>
          <div className='rounded-md bg-white w-52 h-16 flex items-center mx-auto'>
            <input
              autoFocus
              className='ml-2 w-28 outline-none border border-white'
              placeholder='Enter the Otp'
              value={otp}
              onChange={(e)=>setOtp(e.target.value)}
            />
            <button onClick={handleOtp} className='text-logo text-xl font-bold ml-2 bg-slate-300 rounded-md w-16'>Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
