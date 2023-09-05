import React, { useState } from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

const PersonalDetails = () => {

  const [maritalStatus , setMaritalStatus] = useState('')
  const [height , setHeight] = useState('')
  const [familyStatus ,setFamilyStauts ] = useState('')
  const [familyType ,setFamilyType ] = useState('')
  const [familyValues , setFamilyValues] = useState ('')


  const navigate = useNavigate()
  const APIURL   = useSelector(state =>state.APIURL.url)

  const handlePersonalRegister = async(e) =>{
    e.preventDefault()

    try{

      const member = localStorage.getItem('member_id')

      const data = {

        member            : member,
        marital_status    : maritalStatus,
        height            : height,
        family_status     : familyStatus,
        family_type       : familyType,
        family_values     : familyValues

      }

      console.log(data,"3rd......................")
      const response = await axios.post(`${APIURL}/api/personal-register`,data)

      console.log('3rd registration successfull', response.data)
      navigate('/r4')
      toast.success("60% completed")

    }catch(error){

      console.error("registration failed")
    }

     

  }


  return (
    <div className='bg-ashcolor w-screen h-screen '>
        <div className='flex items-center'>
            <img className='w-15 h-10 px-2 pt-2' src="/assets/logo.png"  alt='logo' />
            <p className='text-logo text-left font-bold '>Matrimony</p>
        </div>
            <div className='bg-green-700 w-80 h-96 absolute top-1/2 left-1/2  transform -translate-x-56 -translate-y-1/2 '></div>
            <div className='bg-white w-72 h-96 absolute top-1/2 left-1/2 ml-56  transform -translate-x-1/2 -translate-y-1/2 '></div>
            <img className='h-48 w-48 absolute top-1/2 left-1/2 transform -translate-x-60 ml-20  -translate-y-1/2  ' src='/assets/2.webp' alt='' />

            <h2 className='font-bold absolute top-48 left-1/2 ml-24'>Tell Us About Your Personal Details</h2>
            <form className='absolute left-1/2 ml-24 top-60'>
              <div className=''>
                <label className='font-bold '>Marital Status</label>
                <select className='border-b ml-5 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={maritalStatus}
                onChange={(e)=>setMaritalStatus(e.target.value)}
              
                >
                  <option value=''>select option</option>
                  <option value='Never Married'>Never married</option>
                  <option value='Divorced'>Divorced</option>
                </select>
              </div>

              <div className='mt-5'>
                <label className='font-bold'>Height</label>
                <select className='border-b ml-16 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={height}
                onChange={(e)=>setHeight(e.target.value)}
                
                
                >
                  <option value=''>select option</option>
                  <option value='4ft'>4ft</option>
                  <option value='4.5ft'>4.5ft</option>
                  <option value='5ft'>5ft</option>
                  <option value='5.5ft'>5.5ft</option>
                  <option value='6ft'>6ft</option>
                  <option value='6.5ft'>6.5ft</option>
                  <option value='7ft'>7ft</option>
                </select>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>Family Status</label>
                <select className='border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={familyStatus}
                onChange={(e)=>setFamilyStauts(e.target.value)}
                
                >
                  <option value=''>select option</option>
                  <option value='Middle Class'>Middle class</option>
                  <option value='Upper Middle Class'>Upper Middle Class</option>
                  <option value='Rich'>Rich</option>
                </select>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>Family Type</label>
                <select className='border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={familyType}
                onChange={(e)=>setFamilyType(e.target.value)}
                
                >
                  <option value=''>select option</option>
                  <option value='Joint'>Joint</option>
                  <option value='Nuclear'>Nuclear</option>
                </select>
              </div>

              <div className='mt-5'>
                <label className='font-bold '>Family Values</label>
                <select className='border-b ml-6 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={familyValues}
                onChange={(e)=>setFamilyValues(e.target.value)}
                
              
                >
                  <option value=''>select option</option>
                  <option value='Orthdox'>Orthodox</option>
                  <option value='Traditional'>Traditional</option>
                  <option value='Moderate'>Moderate</option>
                  <option value='Liberal'>Liberal</option>
                </select>
              </div>


              <div className='bg-logo mt-9 rounded w-32 text-white font-bold ml-20'>
                <button onClick={handlePersonalRegister}>Continue</button>
              </div>  

              
            </form>
          {/* <img src='/assets/1.webp' alt=' ' /> */}
    </div>
  )
}

export default PersonalDetails
