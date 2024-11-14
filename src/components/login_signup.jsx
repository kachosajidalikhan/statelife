import React, { useState } from 'react';
import LoginSignup1 from '../assets/images/login-signup1.png';
import LoginSignup2 from '../assets/images/login-signup2.png';
import Logo from "../assets/images/Logo.png";
import DashFooter from '../components/DashFooter';



const LoginSignup = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Left decoration */}
        <div className="hidden lg:block md:block relative right-[20px] top-[6rem]">
          <img
            src={LoginSignup1}
            alt="LoginSignup"
            className="opacity-50 w-60"
          />
        </div>



        {/* Main card */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-8">
            <img src={Logo} alt="Logo" className="mx-auto" />
          </div>


          <div className="text-center mb-6">
            <p className="text-gray-600">Already Have An Account? Log In</p>
          </div>

          <div className="space-y-4 mb-8">
            <label className="flex items-center p-3 border rounded-full cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="userType"
                value="broker"
                checked={selectedOption === 'broker'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">Broker</span>
            </label>

            <label className="flex items-center p-3 border rounded-full cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="userType"
                value="individual"
                checked={selectedOption === 'individual'}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mr-3"
              />
              <span className="text-gray-700">Individual</span>
            </label>
          </div>

          <button
            className="w-full bg-blue-600 text-white rounded-full py-3 hover:bg-blue-700 transition-colors"
            onClick={() => console.log('Next clicked')}
          >
            Next
          </button>
        </div>

        {/* Right decoration */}
        <div style={{ top: "-120px", left: "20px" }} className="hidden lg:block md:block relative  bottom-60">
          <img
            src={LoginSignup2}
            alt="LoginSignup"
            className="opacity-50 w-60"
          />
        </div>
      </div>
      <DashFooter/>
    </div>
  );
};

export default LoginSignup;
