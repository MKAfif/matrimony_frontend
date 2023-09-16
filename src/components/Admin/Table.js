import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Table = () => {
  const [premiumMembers, setPremiumMembers] = useState([]);
  const APIURL = useSelector((state) => state.APIURL.url);

 

  const getMembershipType = (member) => {
    if (member.is_diamond) return "Diamond";
    if (member.is_platinum) return "Platinum";
    if (member.is_gold) return "Gold";
    return "Regular"; 
  };

  useEffect(() => {
    axios
      .get(`${APIURL}/api/dashboard`)
      .then((response) => {
        setPremiumMembers(response.data);
      })
      .catch((error) => {
        toast.error("Error fetching data");
      });
  }, [APIURL]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-2xl sm:rounded-lg mt-10 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Membership
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Expiry Date
              </th>
            </tr>
          </thead>
          <tbody>
            {premiumMembers.map((member, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="">
                    <div className="text-base font-semibold">{member.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{getMembershipType(member)}</td>
                <td className="px-6 py-4">{member.amount}</td>
                <td className="px-6 py-4">{member.ending_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
