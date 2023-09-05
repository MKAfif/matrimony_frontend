import React , {useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import { FiHeart } from 'react-icons/fi';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const MemberDetails = () => {
    const APIURL = useSelector(state => state.APIURL.url);
    const memberinfo = useSelector((state) => state.memberinfo);
    const name = memberinfo.memberinfo.name


    const { memberId } = useParams();

    const [memberDetails, setMemberDetails] = useState(null);

    

    useEffect(() => {
        // Fetch member details using memberId
        axios.get(`${APIURL}/api/individual/${memberId}/`)
            .then(response => {
                setMemberDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching member details:', error);
            });
    }, [memberId]);

    const handleInterest = async (memberId) => {
        console.log(memberId, "....");
    
        try {
            const data = {
                memberid: memberId,
                name     : name
            };
    
            const response = await axios.post(`${APIURL}/api/showinterest`, data);
            console.log(response, ".....member id");
        } catch (error) {
            console.error(error, "error while getting data");
        }
    };



    
    return (
        <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554189097-ffe88e998a2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
            <Header />

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md hover:shadow-lg dark:bg-neutral-700 md:max-w-xl mx-4 md:mx-auto mt-8 transition duration-300 ease-in-out transform hover:-translate-y-1">
                <img
                    className="w-full h-96 md:w-1/3 md:h-auto md:!rounded-l-lg object-cover rounded-t-lg"
                    src={memberDetails?.image_url || "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"}
                    alt=""
                />
                <div className="flex flex-col justify-start p-6 md:w-2/3">
                {memberDetails ? (
                    <div>
                        <div className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            <div>
                                <strong>Name:</strong> {memberDetails.name}
                            </div>

                            <div>
                                <strong>DOB:</strong> {memberDetails.date_of_birth}
                            </div>

                            <div>
                                <strong>E-mail:</strong> {memberDetails.email_id}
                            </div>

                            <div>
                                <strong>Marital Status:</strong> {memberDetails.marital_status}
                            </div>

                            <div>
                                <strong>Occupation:</strong> {memberDetails.job}
                            </div>
                        </div>
                            <div className="mt-auto text-center">
                                <button 
                                
                                onClick={()=>handleInterest(memberDetails.member_id)}
                                
                                className="px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 transform hover:scale-105">
                                    <FiHeart className="inline-block mr-2" />
                                    Show Interest
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>
            </div>

            <div className="bg-gradient-to-br from-green-300 to-green-500 p-6 mt-6 mx-4 md:mx-auto md:max-w-xl rounded-lg shadow-md dark:bg-neutral-800">
            <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50 mb-2">
                Additional Details
            </h5>
            <p className="mb-4 text-base text-neutral-700 dark:text-neutral-300">
                <strong>About:</strong> {memberDetails?.about}
            </p>
            <p className="mb-4 text-base text-neutral-700 dark:text-neutral-300">
                <strong>Preference:</strong><br />
                Age Range: {memberDetails?.age_range_min} - {memberDetails?.age_range_max}<br />
                Location: {memberDetails?.location}<br /> 
                Education: {memberDetails?.education}<br />
                Occupation: {memberDetails?.occupation}
            </p>
        </div>




            <Footer />
        </div>
    );
};

export default MemberDetails;


