import React, { useState } from 'react';
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
const BaseRegister = () => {

  const [dateOfBirth, setDateOfBirth] = useState('')
  const [religion , setReligion]   = useState('')
  const [motherTongue , setMotherTongur] = useState('')
  const [emailId , setEmailId] = useState('')
  const [password, setPassword] = useState('')



  const navigate = useNavigate()
  const APIURL = useSelector(state=>state.APIURL.url)
  const handleBaseRegister = async(e) =>{
    e.preventDefault()

    try{

      const member = localStorage.getItem('member_id')
      console.log(member,"from fronted..............................")

      const data = {
        member          : member,
        date_of_birth   : dateOfBirth,
        religion        : religion,
        mother_tongue   : motherTongue,
        email_id        : emailId,
        password        : password,

      }
      console.log(data,"2nd..................")
      const response = await axios.post(`${APIURL}/api/basic-register/create`, data);
      console.log('2nd Registration successful', response.data);
      localStorage.setItem('email', emailId);
      navigate('/r3')
      toast.success("40% completed")
     



    }catch(error){

      console.error("Registration failed")

    }




  }




  return (
   
    <div className='bg-ashcolor w-screen h-screen'>
        <div className='flex items-center'>
            <img className='w-15 h-10 px-2 pt-2' src="/assets/logo.png"  alt='logo' />
            <p className='text-logo text-left font-bold '>Matrimony</p>
        </div>
            <div className='bg-green-700 w-80 h-96 absolute top-1/2 left-1/2  transform -translate-x-56 -translate-y-1/2 '></div>
            <div className='bg-white w-72 h-96 absolute top-1/2 left-1/2 ml-56  transform -translate-x-1/2 -translate-y-1/2 '></div>
            <img className='h-48 w-48 absolute top-1/2 left-1/2 transform -translate-x-60 ml-20  -translate-y-1/2  ' src='/assets/1.webp' alt='' />

            <h2 className='font-bold absolute top-48 left-1/2 ml-28'>Tell Us About Your Basic Details</h2>
            <form className='absolute left-1/2 ml-24 top-60'>
              <div className=''>
                <label className='font-bold '>Date of Birth</label>
                <input type='date' placeholder='DD/MM/YY' className='border-b ml-10 border-gray-400 focus:border-blue-500 outline-none w-32  '

                value={dateOfBirth}
                onChange={(e)=>setDateOfBirth(e.target.value)}
                
                ></input>
              </div>

              <div className='mt-5'>
                <label className='font-bold'>Religion</label>
                <select className='border-b ml-16 border-gray-400 focus:border-blue-500 outline-none w-32'
                value={religion}
                onChange={(e)=>setReligion(e.target.value)}
                
                >
                  <option value=''>select option</option>
                  <option value='hindu'>Hindu</option>
                  <option value='christian'>Christian</option>
                  <option value='muslim'>Muslim</option>
                </select>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>Mother-Tongue</label>
                <select className='border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32'
                value={motherTongue}
                onChange={(e)=>setMotherTongur(e.target.value)}
                
                
                >
                  <option value=''>select option</option>
                  <option value='Malayalam'>Malayalam</option>
                  <option value='Tamil'>Tamil</option>
                  <option value='Hindi'>Hindi</option>
                </select>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>E-mail id</label>
                <input type='email' placeholder='Enter your mail' className='border-b ml-16 border-gray-400 focus:border-blue-500 outline-none w-32 '

                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
                
                
                ></input>
              </div>

              <div className='mt-5'>
                <label className='font-bold '>Password</label>
                <input type='password' placeholder='Enter password' className='border-b ml-16  border-gray-400 focus:border-blue-500 outline-none w-32 '

                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                
                ></input>
              </div>

              <div className='bg-logo mt-9 rounded w-32 text-white font-bold ml-20'>
                <button onClick={handleBaseRegister}>Continue</button>
              </div>  

              
            </form>
          {/* <img src='/assets/1.webp' alt=' ' /> */}
    </div>
    



  );
};

export default BaseRegister