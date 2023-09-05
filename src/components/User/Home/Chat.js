import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { AiOutlineMessage } from 'react-icons/ai';
import { BsFillSendFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chat = () => {
    return (
        <div>
            <Header />

            <div className='flex justify-center items-center h-screen'>
                <div className='border border-black w-1/2 h-5/6 flex items-center mt-6 rounded-lg shadow-lg'>
                    <div className='left bg-green-700 h-full w-72 p-4 rounded-l-lg'>
                        <h2 className='text-2xl font-semibold text-white mb-6'>Chat Options</h2>
                        
                        <div className='flex items-center mb-4 cursor-pointer'>
                            <AiOutlineMessage className='text-white text-xl mr-2' />
                            <h1 className='text-xl font-semibold text-white'>INBOX</h1>
                        </div>

                        <div className='flex items-center mb-4 cursor-pointer'>
                            <BsFillSendFill className='text-white text-xl mr-2' />
                            <h1 className='text-xl font-semibold text-white'>SENT</h1>
                        </div>

                        <div className='flex items-center mb-4 cursor-pointer'>
                            <FaWhatsapp className='text-white text-xl mr-2' />
                            <Link to='/conversation'>
                                <h1 className='text-xl font-semibold text-white'>MY CHATS</h1>
                            </Link>  
                        </div>

                    </div>

                    <div className='right  p-4 rounded-r-lg ml-16'>
                        <img src='/assets/chat.webp' alt='chat' className='w-48 h-48 object-cover mb-4 ml-20' />
                        <div className='text-gray-600'>
                            <h1 className='text-lg font-semibold mb-2'>You don't have any chats to display here</h1>
                            <p className='text-sm'>Start a conversation to see your messages.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Chat;
