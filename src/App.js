import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterPage1 } from './pages/RegisterPage1';
import RegisterPage2 from './pages/RegisterPage2';
import RegisterPage3 from './pages/RegisterPage3';
import RegisterPage4 from './pages/RegisterPage4';
import RegisterPage5 from './pages/RegisterPage5';
import OtpPage from './pages/OtpPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';
import AdminProfilePage from './pages/AdminProfilePage';
import AdminLoginPage from './pages/AdminLoginPage';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AdminMemberPage from './pages/AdminMemberPage';
import UpgradePage from './pages/UpgradePage';
import PreferencePage from './pages/PreferencePage';
import UserProfilePage from './pages/UserProfilePage';
import MemberDetailsPage from './pages/MemberDetailsPage';
import ChatPage from './pages/ChatPage';
import BillingPage from './pages/BillingPage';
import MembershipPage from './pages/MembershipPage';
import ConversationPage from './pages/ConversationPage';
import PremiumMembershipPage from './pages/PremiumMembershipPage';
import VideoCallPage from './pages/VideoCallPage';
import VideoCallInterfacePage from './pages/VideoCallInterfacePage';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('jwtToken');
  return token ? element : <Navigate to="/" />;
};

const AdminPrivateRoute = ({element})=>{
  const token = localStorage.getItem('adminJwtToken');
  return token ? element : <Navigate to="/adminlogin" />;
}

function App() {
  return (

    <div className="App">
      <ToastContainer />
      <BrowserRouter>
         <Routes>

            {/* publicRoute */}
            <Route path="/" element={<RegisterPage1 />} />
            <Route path="/r2" element={<RegisterPage2 />} />
            <Route path="/r3" element={<RegisterPage3 />} />
            <Route path="/r4" element={<RegisterPage4 />} />
            <Route path="/r5" element={<RegisterPage5 />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/Adminlogin" element={<AdminLoginPage />} />
            <Route path="*" element={<NotFoundPage/>} />



            {/* PrivateRoute */}
          
            <Route path="/Admin" element = { <AdminPrivateRoute  element={<AdminHomePage />}/>}/>
            <Route path="/AdminProfile" element = {<AdminPrivateRoute element={<AdminProfilePage/>} /> } />
            <Route path="/Adminmember" element = {<AdminPrivateRoute element={<AdminMemberPage />} />} />
            <Route path='/premiummembers' element = {<AdminPrivateRoute element={<PremiumMembershipPage/>} />} />
            <Route path = '/membership' element = {<AdminPrivateRoute element={<MembershipPage/>} />} />

           

            <Route path="/home" element={ <PrivateRoute element={<HomePage />}/>}/>
            <Route path="/Upgrade" element = {<PrivateRoute element={<UpgradePage />} />} />
            <Route path="/Preference" element = {<PrivateRoute element={<PreferencePage />} />} />
            <Route path="/UserProfile" element = {<PrivateRoute element={<UserProfilePage />} />} />
            <Route path="/memberdetails/:memberId" element = {<PrivateRoute element={<MemberDetailsPage />} />} />
            <Route path="/billing/:premium_id" element = {<PrivateRoute element={<BillingPage />} />} />
            <Route path="/conversation/:memberId" element = {<PrivateRoute element={<ConversationPage />} />} />
            <Route path="/videocall" element = {<PrivateRoute element={<VideoCallPage />} />} />
            <Route path="/videocallinterface/:roomId" element = {<PrivateRoute element={<VideoCallInterfacePage />} />} />

            
          
           
          </Routes>
        </BrowserRouter>

   
     
     
    </div>
  );
}

export default App;
