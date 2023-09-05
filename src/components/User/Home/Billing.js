import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams , useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Billing = () => {
    const APIURL = useSelector(state => state.APIURL.url);
    const memberinfo = useSelector((state) => state.memberinfo);
    const navigate = useNavigate()
    const { premium_id } = useParams();
    const [billing, setBilling] = useState(null);

    const memberid = memberinfo.memberinfo.member_id

    useEffect(() => {

        
        axios.get(`${APIURL}/api/billing/${premium_id}/`)
            .then(response => {
                setBilling(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, [premium_id]);


    const handleSubscribe = async (planprice ,planname)=>{

        const options = {
            key: "rzp_test_rYrAv3FDSspvNd", 
            // key_secrets       :  'V9XtHrLqsJu7cJRwtZXk4Dox',
            amount: planprice * 100,
            currency: 'INR',
            name: 'Matrimony',
            description: 'Subscription Payment',
            handler: function(response) {
                
                // toast.success('Payment successful! Payment ID: ' + response.razorpay_payment_id);

                const data = {

                    plan_name : planname,
                    member_id : memberid
     
                }
                
                console.log(data,"frontend")

                axios
                .post(`${APIURL}/api/updatepremiumprofile`, data)
                .then((response) => {

                    navigate('/home')
                    toast.success("Thank you for subscribing , now you can freely enjoy the premium benefits")
                    console.log('Success:', response);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                
                

            },

        }

        // try {
            // const data = {

            //     plan_name : planname,
            //     member_id : memberid
 
            // }

        //     console.log(data,"...................")
            // const response = await axios.post(`${APIURL}/api/updatepremiumprofile`,data)
            // console.log(response,"successfullllll")

        // }catch(error){
        //     console.error(error,"error in fetching data")
        // }

        

        const pay  = new window.Razorpay(options)
        pay.open()







    }

    return (
        <div>
            <Header />

            <div className='flex justify-center items-center h-screen'>
                <div className='border border-black w-1/2 h-5/6 flex items-center mt-6 rounded-lg shadow-lg'>
                    {billing ? (
                        <div className='left bg-white h-full w-72 p-4 rounded-l-lg'>
                            <h2 className='text-2xl font-semibold mb-6'>{billing.plan_name} Membership</h2>
                            <div className='mb-4'>
                                <h3 className='text-lg font-semibold mb-2'>Benefits:</h3>
                                
                                <p className='text-'>{billing.description}</p>
                            </div>
                            <div className='mb-2'>
                                
                                <p className='text-xl text-green-700 font-semibold'>{billing.plan_price}<br/>({billing.time_period} month Package)</p>
                            </div>
                            <button
                             onClick={() => handleSubscribe(billing.plan_price,billing.plan_name)}
                             className='bg-green-700 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none'>
                                Subscribe
                            </button>
                        </div>
                    ) : (
                        <div>No data</div>
                    )}

                    <div className='right bg-gray-100 p-4 rounded-r-lg'>
                        <img src='https://m.economictimes.com/thumb/msid-84203769,width-1200,height-900,resizemode-4,imgsize-208253/wedd.jpg' alt='Platinum Membership' className='w-48 h-48 object-cover mb-4' />
                        <div className='text-gray-600'>
                            <h1 className='text-lg font-semibold mb-2'>Unlock Premium Benefits</h1>
                            <p className='text-sm'>Upgrade to Platinum Membership to enjoy all the exclusive benefits.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Billing;
