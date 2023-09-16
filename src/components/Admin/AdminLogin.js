import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios'
import { adminInfo } from '../../Redux/Actions/AdminInfoAcion';

const AdminLogin = () => {

    const [email , setEmail]     = useState('')
    const [password,setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const APIURL = useSelector(state=>state.APIURL.url)


    const adminLoginHandle = async (e)=>{
        e.preventDefault()

        try{

            const data = {

                email    : email , 
                password : password
    
            }
           
            const response = await axios.post(`${APIURL}/api/adminlogin`, data);
           

            const tokenString = JSON.stringify(response.data.token);
            localStorage.setItem('adminJwtToken', tokenString);
            navigate('/Admin')
            toast.success("Login Successfully")
          

        }catch(error){
            toast.error("login failed")
        }

       




    }



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="Email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={adminLoginHandle}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
