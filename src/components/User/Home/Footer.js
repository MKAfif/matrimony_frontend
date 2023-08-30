import React from 'react';

const Footer = () => {
  return (
    <div className='border h-40 mt-2 bg-pg2'>
      <div className='max-w-screen-xl mx-auto p-4'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h3 className='text-xl font-bold text-white'>Matrimony Services</h3>
            <p className='text-gray-300'>Find your perfect match with us.</p>
          </div>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-300 hover:text-white'>Terms of Use</a>
            <a href='#' className='text-gray-300 hover:text-white'>Privacy Policy</a>
            <a href='#' className='text-gray-300 hover:text-white'>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
