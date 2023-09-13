import React , {useState , useCallback} from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


const VideoCall = () => {

    const [value , setValue] = useState()
    const navigate = useNavigate()
    
    const handleJoinRoom = useCallback(()=>{
        navigate(`/videocallinterface/${value}`)
    },[navigate,value])


  return (
    <div>
        <Header />

        <div className='flex justify-center bg-gradient-to-t from-emerald-200'>
            <div className="my-32 rounded-2xl  bg-slate-200 shadow-2xl w-1/2 h-96 md:flex grid grid-rows-3">
                <div className="md:w-1/2 w-full row-span-1">
                    <img src="https://imgs.search.brave.com/9rGViGRgOQTL5GbBfMSm786X-4HboOH6FSeOieTIjBo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/NDE4MjAwOC9waG90/by9tYWtpbmctdmlk/ZW8tY2FsbC13aXRo/LWZhbWlseS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9aEJ6/SWUwajd4UnFSZlE4/cnBaZ1lyVkNobFFZ/ZUF5MVF2YTh0OEFr/bzdiVT0" alt="Image" 
                    className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl " 
                    />
                </div>
                <div className="md:w-1/2 w-full row-span-2 flex flex-col justify-center items-center">
                    <input
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
                        type="text"
                        placeholder="Enter the Matrimony id  "
                        className="w-3/5 h-14 text-center outline-none rounded-xl mb-4"
                    />
                    <button
                        onClick={handleJoinRoom}
                        className="w-3/5 h-14 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition duration-300"
                    >
                        Join
                    </button>
                </div>
                
            </div>
        </div>

        <Footer />
    </div>

  )
}

export default VideoCall
