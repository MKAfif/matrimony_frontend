import React from 'react';
import Header from './Header'
import Footer from './Footer';
import { useSelector } from 'react-redux';
const UserProfile = () => {
    const userinfo   = useSelector((state) => state.userinfo);
    const memberinfo = useSelector((state) => state.memberinfo);




    const FormSection = ({ title,colorClass, children }) => {
        return (
            <div className="bg-white p-6 rounded-md shadow-md mb-6">
                <h2 className={`text-xl font-semibold mb-4 ${colorClass}`}>{title}</h2>
                <form>
                    {children}
                </form>
            </div>
        );
    };

    

    

    

    
    return (
        <div className="">
           <Header/>
            
           <div className="right mt-6 ">
             
                <div className="flex justify-center items-center mb-6">
                    <img
                        src={memberinfo.memberinfo.image_url}
                        alt="Profile"
                        className="w-24 h-24 rounded-full border border-gray-300"
                    />
                </div>
            <FormSection title="Basic Details " colorClass="text-blue-600">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <p className="mt-1">{memberinfo.memberinfo.date_of_birth}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Religion</label>
                <p className="mt-1">{memberinfo.memberinfo.religion}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mother Tongue</label>
                <p className="mt-1">{memberinfo.memberinfo.mother_tongue}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email ID</label>
                <p className="mt-1">{userinfo.userinfo.email_id}</p>
            </div>
            </FormSection>

            <FormSection title="Personal Details"colorClass="text-green-600">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Marital Status</label>
                <p className="mt-1">{memberinfo.memberinfo.marital_status}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Height</label>
                <p className="mt-1">{memberinfo.memberinfo.height}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Family Status</label>
                <p className="mt-1">{memberinfo.memberinfo.family_status}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Family Type</label>
                <p className="mt-1">{memberinfo.memberinfo.family_type}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Family Values</label>
                <p className="mt-1">{memberinfo.memberinfo.family_values}</p>
            </div>
            </FormSection>

            <FormSection title="Professional Details" colorClass="text-purple-600">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Highest Education</label>
                <p className="mt-1">{memberinfo.memberinfo.highest_education}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Employed In</label>
                <p className="mt-1">{memberinfo.memberinfo.employed_in}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Annual Income</label>
                <p className="mt-1">{memberinfo.memberinfo.annual_income}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Work Location</label>
                <p className="mt-1">{memberinfo.memberinfo.work_location}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">State</label>
                <p className="mt-1">{memberinfo.memberinfo.state}</p>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <p className="mt-1">{memberinfo.memberinfo.occupation}</p>
            </div>
            </FormSection>

            <FormSection title="About" colorClass="text-red-600">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">About You</label>
                    <p className="mt-1">{memberinfo.memberinfo.about_you}</p>
                </div>
            </FormSection>

        </div>
            <Footer/>
        </div>
    );
};

export default UserProfile;
