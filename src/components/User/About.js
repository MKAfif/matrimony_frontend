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

    if (!about) {
      toast.error("Please fill out the About field.");
      return;
    }

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
                backgroundImage: 'url("https://i.pinimg.com/originals/18/45/de/1845debe688b5ab278b9d312a388291d.gif")',
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "100%",
                position:"relative",
                top:"5%",
                left:"-5%"
              }}
            ></div>
        </div>

        <div className="w-80 h-96 bg-white md:rounded-r-3xl ">

          <h2 className="font-bold left-1/2 pt-5 text-xl ">
              Tell Something Intresting About You
          </h2>

          <div>
            <textarea
            className="w-52 mt-5  border-blue-400 right-96 h-40 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={about}
            onChange={(e)=>setAbout(e.target.value)}
            placeholder=""
          />
         <div className='bg-logo mt-4 ml-24 rounded w-32 text-white font-bold '>
            <button onClick={handleAbout}>Continue</button>
          </div> 

          </div>
        </div>

      </div>

      </div> 

    </div>

    
  )
}
