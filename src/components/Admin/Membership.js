import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Membership = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='bg-white h-screen flex flex-col md:flex-row'>
      {/* Hamburger Menu */}
      <div
        className={`md:hidden absolute top-4 left-4 cursor-pointer z-20 ${
          menuOpen ? 'transform rotate-45' : ''
        }`}
        onClick={toggleMenu}
      >
        <div className='w-6 h-0.5 bg-black my-1'></div>
        <div className='w-6 h-0.5 bg-black my-1'></div>
        <div className='w-6 h-0.5 bg-black my-1'></div>
      </div>

      {/* Left Menu */}
      <div
        className={`bg-slate-300 w-full md:w-44 h-16 md:h-screen ${
          menuOpen ? 'block' : 'hidden'
        } md:block flex flex-col border border-black`}
        style={{ zIndex: 10 }}
      >
        <img
          className='h-10 w-16 px-2 pt-2 mt-5'
          src='/assets/logo.png'
          alt='Logo'
        />
        <p className='text-logo text-left font-bold '>Matrimony</p>
        <div className='left-menu flex flex-col'>
          <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/admin'>Dashboard</Link>
          </h1>
          <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/Adminprofile'>Profile Verification</Link>
          </h1>
          <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/AdminMember'>Members</Link>
          </h1>
          <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/Adminpremium'>Premium members</Link>
          </h1>
          <h1 className='w-full font-bold py-2 hover:text-green-700 cursor-pointer border-b border-black'>
            <Link to='/rejected'>Rejected</Link>
          </h1>
          <h1 className='w-full font-bold py-2 text-green-700 cursor-pointer border-b border-black'>
            <Link to='/membership'>Membership package</Link>
          </h1>
          <button className='text-red-600'>
            <Link to='/logout'>Logout</Link>
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className='flex-grow p-5'>
        <h2 className='text-xl font-semibold mb-4'>Membership Packages</h2>


        <button
          onClick={toggleForm}
          className='bg-green-500 text-white py-2 px-4 rounded mb-4'
        >
          Add Membership Package
        </button>

        {/* Membership Package Form */}
        {showForm && (
          <div className='mb-4'>
            <div className='bg-white p-6 rounded w-96'>
              <h3 className='text-lg font-semibold mb-2'>
                Add Membership Package
              </h3>
              <form>
                <div className='mb-4'>
                  <label
                    htmlFor='planType'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    Plan Name
                  </label>
                  <input
                    type='text'
                    id='planType'
                    name='planType'
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
                    value={planName}
                    onChange={(e) => setPlanName(e.target.value)}
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='description'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    Description
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='planPrice'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    Plan Price (₹)
                  </label>
                  <div className='relative'>
                    <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                      ₹
                    </span>
                    <input
                      value={planprice}
                      onChange={(e) => setPlanPrice(e.target.value)}
                      type='number'
                      id='planPrice'
                      name='planPrice'
                      className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
                    />
                  </div>
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='planValidity'
                    className='block text-gray-700 font-semibold mb-2'
                  >
                    Time Period
                  </label>
                  <select
                    value={timeperiod}
                    onChange={(e) => setTimePeriod(e.target.value)}
                    id='planValidity'
                    name='planValidity'
                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300'
                  >
                    <option value='select'>Select</option>
                    <option value='1'>1 month</option>
                    <option value='2'>2 months</option>
                    <option value='3'>3 months</option>
                    <option value='4'>4 months</option>
                    <option value='5'>5 months</option>
                    <option value='6'>6 months</option>
                    <option value='7'>7 months</option>
                    <option value='8'>8 months</option>
                    <option value='9'>9 months</option>
                    <option value='10'>10 months</option>
                    <option value='11'>11 months</option>
                    <option value='12'>12 months</option>
                  </select>
                </div>

                <div className='flex justify-end mt-4'>
                  <button
                    onClick={handlePremium}
                    type='submit'
                    className='bg-green-500 text-white py-2 px-4 rounded'
                  >
                    Add Package
                  </button>
                  <button
                    onClick={toggleForm}
                    className='ml-2 bg-red-500 text-white py-2 px-4 rounded'
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className='flex flex-wrap'>
          {membershipPackage.map((pk) => (
            <div
              key={pk.id}
              className='rounded-lg shadow-md p-4 mx-2 mb-4 bg-amber-200 relative '
              style={{
                flexBasis: 'calc(50% - 1rem)', // Adjust the width of each card to fit 2 cards in a row
              }}
            >
              <h3 className='text-lg font-semibold mb-2 text-black'>
                {pk.plan_name} membership
              </h3>
              <p className='text-gray-700 mb-2 max-w-lg '>{pk.description}</p>
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
    </div>
  );
};

export default Membership;
