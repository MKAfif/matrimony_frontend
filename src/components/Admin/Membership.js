import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AdminHeader from './AdminHeader';
import {GoPlusCircle} from 'react-icons/go'

const Membership = () => {

  const [showForm, setShowForm] = useState(false);

  const [planName, setPlanName] = useState('');
  const [description, setDescription] = useState('');
  const [planprice, setPlanPrice] = useState('');
  const [timeperiod, setTimePeriod] = useState('');

  const [membershipPackage, setMemberShipPackage] = useState([]);
  useEffect(() => {
    axios
      .get(`${APIURL}/api/adminpremium`)
      .then((response) => {
        setMemberShipPackage(response.data);
      })
      .catch((error) => {
        console.error('error in fetching data', error);
      });
  }, []);

  const navigate = useNavigate();
  const APIURL = useSelector((state) => state.APIURL.url);

  const handlePremium = async (e) => {
    e.preventDefault();

    try {
      const data = {
        plan_name: planName,
        description: description,
        plan_price: planprice,
        time_period: timeperiod,
      };

      console.log(data, 'from frontend');
      const response = await axios.post(`${APIURL}/api/adminpremium`, data);
      setShowForm(false);
      navigate('/membership');
      toast.success('Package added successfully');

      setPlanName('');
      setDescription('');
      setPlanPrice('');
      setTimePeriod('');
    } catch (error) {
      console.error(error, 'error');
    }
  };



  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const cancelForm = ()=>{
    setShowForm(false)
  }


  return (

   <div >
    <AdminHeader/>
    <div
    onClick={toggleForm}
    style={{width:"94%"}} className=' m-auto mt-5  flex justify-end cursor-pointer '>
      <GoPlusCircle className='text-3xl hover:text-green-700 text-green-600 '/>
    </div>
    <div className="mx-10 rounded-3xl py-8 bg-slate-200 shadow-2xl  w-fit h-fit">
      <div >
        <h1 className="font-bold text-3xl text-indigo-600 ">
          Membership Packages
        </h1>
      </div>
      <div className='flex flex-wrap '>
          {membershipPackage.map((pk) => (
            <div
              key={pk.id}
              className='rounded-lg shadow-md p-4 mx-2 mb-4 bg-gradient-to-b from-cyan-200 relative mt-4'
              style={{
                flexBasis: 'calc(50% - 1rem)', 
              }}
            >
              <h3 className='text-lg font-semibold mb-2 text-black'>
                {pk.plan_name} membership
              </h3>
              <p className='text-black mb-2 '>{pk.description}</p>
              <p className='text-green-500 font-semibold'>{`₹${pk.plan_price} for ${pk.time_period} Month`}</p>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%)',
                  animation: 'shimmer 1.5s infinite',
                  zIndex: -1,
                }}
              ></div>
            </div>
          ))}
        </div>
    </div>
      
    {showForm && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="flex justify-center bg-black bg-opacity-40 fixed top-0 mt-24  left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full "
        >
          <div className="relative w-full max-w-md max-h-full rounded-3xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type='button'
              className='absolute top-3 right-2.5 text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-hide='authentication-modal'
              onClick={cancelForm}
            >
              <svg
                className='w-3 h-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                />
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
              <div className="px-6 py-6 lg:px-8  rounded-2xl  ">
                <h3 className="mb-4 text-xl font-bold text-orange-400 dark:text-white">Add Membership Package</h3>
                <form className="space-y-6 " action="#">
                  <div>
                    <label htmlFor="planType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan Name</label>
                    <input
                      type="text"
                      name="planName"
                      id="planName"
                      value={planName}
                      onChange={(e)=>setPlanName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="planPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan Price</label>
                    <input
                      type="number"
                      name="planPrice"
                      id="planPrice"
                      value={planprice}
                      onChange={(e)=>setPlanPrice(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="planValidity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plan Validity</label>
                    <select
                      type="number"
                      name="planValidity"
                      id="planValidity"
                      value={timeperiod}
                      onChange={(e)=>setTimePeriod(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    >
                      <option value='select'>Select</option>
                      <option value='1'> 1 month</option>
                      <option value='2'> 2 month</option>
                      <option value='3'> 3 month</option>
                      <option value='4'> 4 month</option>
                      <option value='5'> 5 month</option>
                      <option value='6'> 6 month</option>
                      <option value='7'> 7 month</option>
                      <option value='8'> 8 month</option>
                      <option value='9'> 9 month</option>
                      <option value='10'>10 month</option>
                      <option value='11'>11 month</option>
                      <option value='12'>12 month</option>
                    </select>
                  </div>

                  
                  
                  <button
                    onClick={handlePremium}
                    className=" text-white hover:bg-green-800 bg-green-600 from-vil w-full text-whitefocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                  >
                    Add Package
                  </button>
                 
                
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
   </div>
  );
};

export default Membership;


 