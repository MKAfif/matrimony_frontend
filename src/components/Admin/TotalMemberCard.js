import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const TotalMemberCard = () => {

  const [totalmember , setTotalmember] = useState()
  const APIURL  = useSelector((state)=>state.APIURL.url)

  useEffect (()=>{

    axios.get( `${APIURL}/api/totalmember`)
    .then((response)=>{

      setTotalmember(response.data.total)

    })
    .catch((error)=>toast.error("Error fetching in data"))

  },[])




  return (
    <div className="flex mt-10 border ml-4 max-w-md overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
      <div
        className="w-1/3 bg-cover"
        style={{
          backgroundImage:
            "url('https://imgs.search.brave.com/aB_i7eQbs43qoBTn3_LWEBsz7X8m0fPgXHcBrBICrdI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MDMwMDM2NS9waG90/by9zZWxlY3Rpbmct/cGVyc29uLWFuZC1i/dWlsZGluZy10ZWFt/LWJ1c2luZXNzLXBl/b3BsZS1yZWxhdGlv/bnNoaXAtY29uY2Vw/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bS1SNkx5ZW50/WkJQeFdja3BqUmlv/aVdGNGNHVGk2c0ND/cExNR0RHT21TMD0')",
        }}
      ></div>

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Total Members
        </h1>

        <div className="flex justify-center mt-3 item-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
            Count:{totalmember}
          </h1>
         
        </div>
      </div>
    </div>
  
  )
}

export default TotalMemberCard