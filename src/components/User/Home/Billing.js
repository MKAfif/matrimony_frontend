import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Billing = () => {
    return (
        <div>
            <Header />

            <div className='flex justify-center items-center h-screen'>
                <div className='border border-black w-1/2 h-5/6 flex items-center mt-6 rounded-lg shadow-lg'>
                    <div className='left bg-white h-full w-72 p-4 rounded-l-lg'>
                        <h2 className='text-2xl font-semibold mb-6'>Platinum Membership</h2>
                        
                        <div className='mb-4'>
                            <h3 className='text-lg font-semibold mb-2'>Benefits:</h3>
                            <ul className='list-disc list-inside text-gray-600'>
                                <li>Access to premium features</li>
                                <li>Exclusive content and offers</li>
                                <li>Priority customer support</li>
                                <li>Early access to new features</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <h3 className='text-lg font-semibold mb-2'>Price:</h3>
                            <p className='text-xl text-green-700 font-semibold'>$99/month</p>
                        </div>

                        <button className='bg-green-700 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none'>
                            Subscribe
                        </button>
                    </div>

                    <div className='right bg-gray-100 p-4 rounded-r-lg'>
                        <img src='/assets/platinum_membership.png' alt='Platinum Membership' className='w-48 h-48 object-cover mb-4' />
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
