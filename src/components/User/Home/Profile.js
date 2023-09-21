import React, { useState, useEffect } from "react";
import Header from "../Home/Header";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateImageUrl } from "../../../Redux/Actions/ImageInfoAction";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

const Profile = () => {
  const userinfo = useSelector((state) => state.userinfo);
  const memberinfo = useSelector((state) => state.memberinfo);
  const APIURL = useSelector((state) => state.APIURL.url);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const memberid = memberinfo.memberinfo.member_id;

  const isPlatinum = memberinfo.memberinfo.is_platinum;
  const isGold = memberinfo.memberinfo.is_gold;
  const isDiamond = memberinfo.memberinfo.is_diamond;
 

  const [selectedImage, setSelectedImage] = useState(null);

  const [membersData, setMembersData] = useState([]);

  const [imageFile, setImageFile] = useState({member_id: null, image: null})

  

  useEffect(() => {
    axios
      .get(`${APIURL}/api/allmemberdetails/?member_id=${memberid}`)
      .then((response) => {
       
        setMembersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching member details", error);
      });
  }, [memberid]);

  // Frontend code to handle image click

  const handleImageClick = (member_id) => {
    navigate(`/memberdetails/${member_id}`);
  };

  const updateData = async (imageData) => {
    // const formData = new FormData();
    // formData.append("image", imageData);
    // formData.append("member", memberid);
  

    setImageFile(prevState => ({
      ...prevState,
      member_id: memberid,
      image:imageData

    }));
    const formData = {
      "member":imageFile.member_id,
      "image":imageFile.image

    }

    
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post(`${APIURL}/api/imageupload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSelectedImage(response.data.image);
      

      dispatch(updateImageUrl(response.data.image));
    } catch (error) {
      console.error("An error occurred during image upload:", error);
      
    }
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    const file = files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result;
        setSelectedImage(result);
        updateData(result);
      };
    }
  };

  const handleVideoError = ()=>{
    toast.error("Upgrade to Diamond for unlocking this feature")
  }

  const handleChat = ()=>{
    toast.error("Upgrade to gold or diamond for unlocking this feature")
  }

  return (
    <>
      <Header />
      <div className="flex bg-gradient-to-t from-">
        <div className="left">
          <div className="w-72 border shadow-2xl  ml-6 h-96 mt-2 rounded-2xl bg-gradient-to-br from-pg1 to-pg2">
            <div className="bg-white border  rounded-3xl w-48 h-56 mt-5 ml-10">
              <div className="rounded-full ml-7 mt-2 w-32 h-32 bg-gray-400 relative">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full h-full opacity-0 cursor-pointer absolute top-0 left-0"
                  onChange={handleImageUpload}
                />

                {memberinfo.memberinfo.image_url ? (
                  <img
                    src={memberinfo.memberinfo.image_url}
                    alt="Profile"
                    className="object-cover w-full h-full rounded-full"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 110-18 9 9 0 010 18zm0-6a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0-7a2 2 0 100 4 2 2 0 000-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <h1 className="font-bold mt-2">
                {memberinfo.memberinfo ? memberinfo.memberinfo.name : ""}
              </h1>
              <h1 className="font-bold text-green-700">
                Id :{" "}
                {memberinfo.memberinfo
                  ? memberinfo.memberinfo.matrimony_id
                  : ""}{" "}
              </h1>
              <div className="font-bold text-logo">
                {isPlatinum && <span> Platinum member</span>}
                {isGold && <span> Gold member</span>}
                {isDiamond && <span> Diamond member</span>}
              </div>
            </div>
          </div>
          <div className="border shadow-2xl w-72 h-fit ml-6 mb-2 mt-2 rounded-3xl">
            <ul className="ml-2">
              <Link to="/UserProfile">
                <li className="font-bold w-32 mt-5 cursor-pointer flex">
                  <div>
                    <FiEdit className="text-red-500 mt-1" />
                  </div>
                  <div className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                    Profile
                  </div>
                </li>
              </Link>
              <Link to="/Preference">
                <li className="font-bold w-40 mt-4 cursor-pointer flex">
                  <div>
                    <AiOutlineAppstoreAdd className="text-blue-500 mt-1" />
                  </div>
                  <div className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                    Add Preferences
                  </div>
                </li>
              </Link>
              
              {isDiamond || isGold ?(
              <Link to={`/conversation/${memberid}`}>
                <li className="font-bold w-44 mt-4 cursor-pointer flex">
                  <div>
                    <BsFillChatRightDotsFill className="text- mt-1" />
                  </div>
                  <div className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                    Your Conversation
                  </div>
                </li>
              </Link>
              ):(
              <li className="font-bold w-44 mt-4 cursor-pointer flex">
                <div>
                  <BsFillChatRightDotsFill className="text- mt-1" />
                </div>
                <div 
                onClick={handleChat}
                className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                  Your Conversation
                </div>
              </li>
              )}

              { isDiamond ? (
              <Link to="/videocall">
                <li className="font-bold w-44 mt-4 cursor-pointer flex">
                  <div>
                    <FaVideo className="text- mt-1" />
                  </div>
                  <div className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                    Video Call
                  </div>
                </li>
              </Link>
              ):(
                <li className="font-bold w-44 mt-4 cursor-pointer flex">
                  <div>
                    <FaVideo className="text- mt-1" />
                  </div>
                  <div 
                  onClick={handleVideoError}
                  className="ml-3 hover:scale-125 duration-300 hover:text-green-600">
                    Video Call
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className=" right  lg:ml-96 md:ml-20  mt-4">
          <h1 className="font-semibold font-serif text-2xl ml-6 sm:mt-6 text-logo  ">
            Your Daily Recommendations
          </h1>
          <div>
            {membersData.members?.length > 0 ? (
              <div className=" rounded-3xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 sm:ml-6 ">
                {membersData.members?.map((member) => (
                  <div
                    key={member.id}
                    className=" rounded-3xl p-2 transform hover:scale-105 transition-transform duration-300 shadow-2xl"
                  >
                    <div className="flex flex-col items-center ">
                      <div
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => handleImageClick(member.id)}
                      >
                        <img
                          className="w-24 h-24 rounded-3xl mb-2 shadow-md hover:shadow-lg"
                          src={member.image_urls[0]}
                          alt="none"
                        />
                        <h1>{member.name}</h1>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No Matching Profiles</div>
            )}
          </div>
          <div>
            <h1 className="font-semibold text-2xl ml-6 sm:mt-8 text-logo font-serif">
              Matching Profiles
            </h1>
            {membersData.members?.length > 0 ? (
              <div className="shadow-2xl rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 sm:ml-6 ">
                {membersData.members?.map((member) => (
                  <div
                    key={member.id}
                    className=" rounded-3xl p-2 transform hover:scale-105 transition-transform duration-300 shadow-2xl"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                        onClick={() => handleImageClick(member.id)}
                      >
                        <img
                          className="w-24 h-24 rounded-3xl mb-2 shadow-md hover:shadow-lg"
                          src={member.image_urls[0]}
                          alt="none"
                        />
                      </div>
                      <h1>{member.name}</h1>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>No Matching Profiles</div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
