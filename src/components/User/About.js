import React, { useState } from 'react';
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export const About = () => {

  const [about , setAbout] = useState('')
  const navigate = useNavigate()
  const APIURL   = useSelector(state =>state.APIURL.url)


  const handleAbout= async (e)=>{

    e.preventDefault()

    try{

      const member = localStorage.getItem('member_id')
      const email  = localStorage.getItem('email')
      console.log(email,"...................local")
      const data = {
        email     : email,
        member    : member,
        about_you : about


      }

      console.log(data,"5th......................")
      const response = await axios.post(`${APIURL}/api/about-register`,data)

      console.log('5th registration successfull', response.data)
      navigate('/otp')
      toast.success("100% completed")

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
        <div className='bg-white w-96 h-96 absolute top-1/2 left-1/2 ml-56  transform -translate-x-1/2 -translate-y-1/2 '></div>
        <img className='h-48 w-48 absolute top-1/2 left-1/2 transform -translate-x-60 ml-14  -translate-y-1/2  ' src='/assets/3.webp' alt='' />

        <h2 className='font-bold  absolute top-48 left-1/2 ml-14 '> Let the world know about your awesomeness</h2>
        <h1 className='absolute top-60 left-1/2 ml-20 '>About You</h1>

        <textarea
          className="w-52 absolute top-60  border-blue-400 right-96 h-40 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          value={about}
          onChange={(e)=>setAbout(e.target.value)}
          placeholder=""
        />
         <div className='bg-logo mt-20 ml-40 rounded w-32 text-white font-bold  absolute top-1/2 left-1/2 '>
            <button onClick={handleAbout}>Continue</button>
          </div>  
       
       
      {/* <img src='/assets/1.webp' alt=' ' /> */}

    </div>
  )
}
