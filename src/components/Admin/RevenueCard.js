import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const RevenueCard = () => {

  const APIURL = useSelector((state)=>state.APIURL.url)

  const [revenue , setRevenue] = useState()


  useEffect(() => {
    axios
      .get(`${APIURL}/api/totalamount`)
      .then((response) => {
        setRevenue(response.data.total);
      })
      .catch((error) => toast.error("Error fetching data"));
  }, []);


  return (
    <div>
      <div>
        <div className="flex mt-10 border ml-4 max-w-md overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800">
          <div
            className="w-1/3 bg-cover"
            style={{
              backgroundImage:
                "url('https://imgs.search.brave.com/2nj7CfS43uUWAeNojrcRtWukL9oVXwWL68KzfSa518A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzA4NTU5L3Bob3Rv/L21vbmV5LXBpbGUt/MTAwLWRvbGxhci1i/aWxscy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Y3AzVFhU/V1YtN04tMnlab3Qz/SXNYZjF2MW1VV01s/RjFYelNlTkdaVVZO/UT0')",
            }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Revenue
            </h1>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Amount Collected from the Premium Members
            </p>

            
            <div className="flex justify-center mt-3 item-center">
              <h1 className="text-lg font-bold text-green-500 dark:text-gray-200 md:text-xl">
               Total: ₹ {revenue}
              </h1>
           
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RevenueCard
