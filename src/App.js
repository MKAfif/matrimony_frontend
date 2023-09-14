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
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<RegisterPage1 />} />
            <Route path="/r2" element={<RegisterPage2 />} />
            <Route path="/r3" element={<RegisterPage3 />} />
            <Route path="/r4" element={<RegisterPage4 />} />
            <Route path="/r5" element={<RegisterPage5 />} />
            <Route path="/otp" element={<OtpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/Admin" element={<AdminHomePage />} />
            <Route path="/AdminProfile" element={<AdminProfilePage />} />
            <Route path="/Adminlogin" element={<AdminLoginPage />} />
            <Route path="/Adminmember" element={<AdminMemberPage />} />
            <Route path="/Upgrade" element={<UpgradePage />} />
            <Route path="/Preference" element={<PreferencePage />} />
            <Route path="/UserProfile" element={<UserProfilePage />} />
            <Route path="/memberdetails/:memberId" element={<MemberDetailsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/billing/:premium_id" element={<BillingPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/conversation/:memberId" element={<ConversationPage />} />
            <Route path="/premiummembers" element={<PremiumMembershipPage />} />
            <Route path="/videocall" element={<VideoCallPage />} />
            <Route path="/videocallinterface/:roomId" element={<VideoCallInterfacePage />} />
            <Route path="*" element={<NotFoundPage/>} />
          
           
           
          </Routes>
        </BrowserRouter>

   
     
     
    </div>
  );
}

export default App;
