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
      boxShadow: '0rem 0rem 0.625rem 0rem #00000040'
    }}
    >
    <div className="w-[73.1875rem] p-5 ">
      <nav className="bg-white flex justify-between items-center w-full ">
        <div className="flex items-center">
          <a className="items-center space-x-3  ">
            <img src={Group} 
            
            
            className="w-[9.875rem] h-[4.0625rem]" alt="Cooking Stuff Logo"  />
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center">
          <ul className="flex md:space-x-0 lg:space-x-4 xl:space-x-8  font-bold font-Yeseva ">
            {navigation.map((x) => (
              <li key={x.to} >
                <NavLink to={x.to} className= {({ isActive }) =>
                                                   `p-[0.625rem] text-lg hover:text-[#F99106] ${
                                                     isActive ? "text-[#F99106]" : "text-[#00000080]"
                                                          }`
                                                        }>
                  {x.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex font-Yeseva ">
        <div class="relative flex   flex-col justify-center overflow-hidden ">
          <div class="relative rounded-2xl bg-white pe-1 ">
            <div class="mx-auto max-w-md">
              <form  class="relative mx-auto w-max">
                <input type="search" 
                      class="peer  cursor-pointer relative z-10 h-12 w-5 rounded-full border border-transparent bg-transparent pl-12 outline-none focus:w-48 focus:cursor-text focus:border-[#f99106] focus:pl-16 focus:pr-4" />
                <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-[#f99106] peer-focus:stroke-[#f99106]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </form>


            </div>
          </div>
</div>
        <NavLink
            to='/Signin'
            type="button" 
            className={({ isActive }) =>
              `text-lg font-bold hover:cursor-pointer hidden justify-center items-center mr-5 lg:flex p-[0.625rem] hover:text-[#F99106] ${
                isActive ? "text-[#F99106]" : "text-[#00000080]"
              }`
            }
>            
            Sign In
          </NavLink>
          <div className='flex justify-center items-center'>
          <NavLink to='/SignUp'
            type="button" 
            className=" flex items-center justify-center  w-[12.5rem] h-[3.75rem] rounded-[2.75rem]  hover:cursor-pointer bg-[#f99106] text-white text-lg font-bold ">
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
                className="h-[2rem] w-[2rem]"
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
          <ul className="flex flex-col items-center space-y-4 py-4 font-Yeseva">
            {navigation.map((x) => (
              <li key={x.to} className="w-full hover:bg-[#F99106] text-center">
                <NavLink
                  to={x.to}
                  className="block py-[0.5rem] text-lg font-medium  text-[#00000080] "
                  onClick={() => setIsMenuOpen(false)} 
                >
                  {x.text}
                </NavLink>
              </li>
            ))}
            <li>
              <button type="button" className="text-[#00000080] py-[0.5rem] text-lg font-medium hover:cursor-pointer px-[1rem]">
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
