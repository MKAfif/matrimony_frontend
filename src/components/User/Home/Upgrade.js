import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


const Upgrade = () => {

  const APIURL   = useSelector(state =>state.APIURL.url)
  const navigate = useNavigate()

  const [premiumPackege , setPremiumPackage] = useState([])

  console.log(premiumPackege)

  useEffect(() => {

    axios.get(`${APIURL}/api/premium-packages`)
      .then(response => {
        
        setPremiumPackage(response.data);
      })
      .catch(error => {
        console.error('Error fetching premium packages:', error);
      });
  }, []);


  const handlePremiumClick = (premium_id) =>{
    navigate(`/billing/${premium_id}`)
  }
 

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-96 cursor-pointer mt-24  ">
       
        {premiumPackege.map((packages, index) => (
          
          <div key={index} className="bg-white rounded-lg  shadow-lg p-6 w-96 mx-4 transition duration-300 transform hover:scale-105 ">
            {/* Content of the card */}
            <h2 className="text-xl font-semibold mb-4">{packages.plan_name}</h2>
            <p className="text-gray-700">{packages.description}</p>


            <button 
            className='mt-4   text-white py-2 px-4 rounded-full bg-green-600 hover:bg-green-800'
            onClick={() => handlePremiumClick(packages.id)}
            
            >
              Upgrade Now
            </button>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Upgrade;
