import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'
export const Professional = () => {

  const [highestEducation , setHighesEducation] = useState('')
  const [employeIn , setemployedIn] = useState('')
  const [occupation, setOccupation] = useState('')
  const [annualIncome , setAnnuslIncome] = useState('')
  const [worklocation, setWorkLocation] = useState('')
  const [state, setState] = useState('')

  const navigate = useNavigate()
  const APIURL = useSelector(state=>state.APIURL.url)

  const handleProfessional = async (e)=>{

    e.preventDefault()


    try{

      const member = localStorage.getItem('member_id')

      const data = {
        member            : member,
        highest_education : highestEducation,
        employed_in       : employeIn,
        annual_income     : annualIncome,
        work_location     : worklocation,
        state             : state,
        occupation        : occupation,

      }

      console.log(data,"4th....................")
      
      const response = await axios.post(`${APIURL}/api/professional-register`, data);
      console.log('4th Registration successful', response.data);
      navigate('/r5')
      toast.success("80% completed")


    }catch(error){
      console.log("Registration failed.........")
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

            <h2 className='font-bold  absolute top-48 left-1/2 ml-40 text-10'>Professional details</h2>
            <form className='absolute left-1/2 ml-10  top-60'>
              <div className=''>
                <label className='font-bold '>Highest Education</label>
                <input type='text' placeholder='Education'  className='border-b ml-10  border-gray-400 focus:border-blue-500 outline-none w-32 '

                value={highestEducation}
                onChange={(e)=>setHighesEducation(e.target.value)}
                
                
                ></input>
              </div>

              <div className='mt-5'>
                <label className='font-bold'>Employed in</label>
                <select className='border-b ml-20 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={employeIn}
                onChange={(e)=>setemployedIn(e.target.value)}

                
                >
                  <option value=''>select option</option>
                  <option value='Government'>Government</option>
                  <option value='Private'>Private</option>
                  <option value='Business'>Business</option>
                  <option value='Defence'>Defence</option>
                  <option value='Self Employed'>self Employed</option>
                  <option value='Not Working'>Not Working</option>
                </select>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>Occupation</label>
                <input type='text' placeholder='Occupation'  className='border-b ml-24  border-gray-400 focus:border-blue-500 outline-none w-32 '
                
                value={occupation}
                onChange={(e)=>setOccupation(e.target.value)}
                
                ></input>
              </div>


              <div className='mt-5'>
                <label className='font-bold '>Annual Income</label>
                <select className='border-b ml-14 border-gray-400 focus:border-blue-500 outline-none w-32'

                value={annualIncome}
                onChange={(e)=>setAnnuslIncome(e.target.value)}
                
                
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

              <div className='mt-5'>
                <label className='font-bold '>Work Location</label>
                <input type='text' placeholder='Work Location'  className='border-b ml-16  border-gray-400 focus:border-blue-500 outline-none w-32 '

                value={worklocation}
                onChange={(e)=>setWorkLocation(e.target.value)}
                
                
                ></input>
              </div>

              <div className='mt-5'>
                <label className='font-bold '>State</label>
                <input type='text' placeholder='State'  className='border-b ml-32  border-gray-400 focus:border-blue-500 outline-none w-32 '

                value={state}
                onChange={(e)=>setState(e.target.value)}
                
                
                
                ></input>
              </div>
             
              <div className='bg-logo mt-9 rounded w-32 text-white font-bold ml-20'>
                <button onClick={handleProfessional}>Continue</button>
              </div>  

              
            </form>
          {/* <img src='/assets/1.webp' alt=' ' /> */}
    </div>
  )
}
