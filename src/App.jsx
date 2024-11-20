import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Points from "./components/Points";
import Property_deals from "./components/Property_deals";
import Property_types from "./components/Property_types";
import PropertyCarousel from "./components/PropertyCarousel";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Chats from "./Pages/Chats";
import Dashboard from "./Pages/Dashoard";
import Home from "./Pages/Home";
import LoadMore from "./Pages/LoadMore";
import Login from "./Pages/Login";
import ChatWindow from "./components/ChatWindow";
import DashboardLoad from "./components/DashboardLoad";
import LoginSignup from "./components/signup";
import BuyerSellerProfile from "./components/BuyerSellerProfile"
import IndividualProfile from "./components/IndividualProfile"
import BrokerSignup from "./components/BrokerSignup";
import BrokerPostAd from "./components/BrokerPostAd";
import AdsPage from "./components/AdsPage"
import { Route, Routes, BrowserRouter } from 'react-router-dom';


export default function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/adspage' element={<AdsPage />} />
   <Route path='/brokerpostad' element={<BrokerPostAd />} />
   <Route path='/brokersignup' element={<BrokerSignup />} />
   <Route path='/individualprofile' element={<IndividualProfile />} />
   <Route path='/buyersellerprofile' element={<BuyerSellerProfile />} />
   <Route path='/signup' element={<LoginSignup />} />
   </Routes>
   </BrowserRouter>
{/* <Home /> */}
{/* <ChatWindow/> */}
{/* <DashboardLoad/> */}
{/* <Login /> */}
{/* <Dashboard /> */}
{/* <LoadMore /> */}
{/* <Chats /> */}
   </>

  )
}