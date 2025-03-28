import React from 'react';
import { NavLink } from 'react-router-dom';
import Group from '../assets/Group.png'
import { useState } from 'react';

const navigation = [
  {
    to:"/",
    text:"Home",
    
    },
    {
    to:'/AllCourse',
    text:"All Course",
   
    },
    {
    to:'/ContactUs',
    text:"Contact us",
    
    },
    {
      to:'/Posts',
      text:"Posts",
    }
]  // data of nav bar 


function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
  
    <div className='w-full flex justify-center '
    style={{
      boxShadow: '0px 0px 10px 0px #00000040'
    }}
    >
    <div className="w-7xl ">
      <nav className="bg-white flex justify-between items-center w-full p-4">
        <div className="flex items-center">
          <a className="items-center space-x-3">
            <img src={Group} width="158" height="65" alt="Cooking Stuff Logo" />
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex md:space-x-0 lg:space-x-4 xl:space-x-8">
            {navigation.map((x) => (
              <li key={x.to} className='p-3'>
                <NavLink to={x.to} className="py-2 px-3 text-lg text-gray-700 hover:text-[#F99106] active:text-[#F99106]">
                  {x.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex">
        <div class="relative flex  flex-col justify-center overflow-hidden ">
          <div class="relative rounded-2xl bg-white  ">
            <div class="mx-auto max-w-md">
              <form  class="relative mx-auto w-max">
                <input type="search" 
                      class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border border-transparent bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#f99106] focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#f99106] peer-focus:stroke-[#f99106]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>


            </div>
          </div>
</div>
        <button 
            type="button" 
            className=" text-gray-700 font-medium hover:cursor-pointer hidden justify-center items-center lg:flex px-4">
            Sign In
          </button>
          <div className='flex justify-center items-center'>
          <NavLink to='/SignUp'
            type="button" 
            className=" flex items-center justify-center w-[100px] h-[30px] md:w-[200px] md:h-[60px] rounded-[44px]  hover:cursor-pointer bg-[#f99106] text-white font-medium ">
            Sign Up
          </NavLink>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:hidden bg-white`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((x) => (
              <li key={x.to} className="w-full hover:bg-[#F99106] text-center">
                <NavLink
                  to={x.to}
                  className="block py-2 text-lg text-gray-700 active:text-[#F99106]"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {x.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button type="button" className="text-gray-700 font-medium hover:cursor-pointer px-4">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
 
}

export default Navbar;
