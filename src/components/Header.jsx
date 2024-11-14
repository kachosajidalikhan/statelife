import React, { useState } from 'react';
import Logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const nav = useNavigate()
  return (
    <div className='w-full shadow-md'>
      <div className="w-[90%] lg:w-[85%] mx-auto p-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Menu for Large Screens */}
        <div className="hidden md:flex w-[50%] justify-between">
          <ul className="flex space-x-6">
            <li onClick={()=>{nav("/")}} className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Property</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Review</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button onClick={()=>{ nav("/loginsignup")}} className='border px-4 py-2 rounded hover:bg-gray-100'>Sign in</button>
          <button onClick={()=>{ nav("/individualprofile")}} className='border px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600'>Sign up</button>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full">
          <ul className="flex flex-col space-y-4 items-center py-4">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">Property</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Review</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col space-y-2 items-center py-4">
            <button className='border px-4 py-2 w-[80%] rounded hover:bg-gray-100'>Sign in</button>
            <button className='border px-4 py-2 w-[80%] rounded bg-blue-500 text-white hover:bg-blue-600'>Sign up</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
