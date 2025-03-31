import React from 'react'
import image from '../../assets/Signup/image 1.jpg'
import image2 from '../../assets/Signup/Group.jpg'
import google from '../../assets/Signup/395f93b4cff610fb1b675dcc70e362d2.png'
// import facebook from '../../assets/Signup/facebook-svgrepo-com (5) 1.jpg'
function SignupDetail() {



  return (
    <div className=" flex  justify-center z-0 ">
      <div className="max-w-[1440px] w-full h-full lg:flex ">
  
        <div className=" w-full  p-10 md:p-12 h-full flex items-center  justify-center relative">
         
           
              <div className="flex flex-col items-center ">
              <img src={image2} alt="Cutlery Illustration" className=" mb-10 md:mb-30 " height="57.21" width="260.52" />
                <img src={image} alt="Cutlery Illustration"  height="556" width="562" className="" />
              </div>
            
        </div>
        {/* Right Section: Signup Form */}
        <div className="w-full  p-10 md:p-[91px] flex flex-col border-l-2 border-l-[#ECECEC] justify-center items-center font-poppin">
          <h2 className="text-[48px] font-semibold text-[#043133] mb-6 text-center ">Welcome to Jammy</h2>
          <form className='w-full flex flex-col justify-center '>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F99106]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email here"
                className="mt-1 block w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F99106]"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your Password"
                className="mt-1 block w-full p-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#F99106]"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-1/2 py-2 bg-[#F99106] text-[26px]  text-white mx-auto font-medium mt-[50px] focus:outline-none focus:ring-2 hover:cursor-pointer"
            >
              Create Account
            </button>
          </form>
          <p className="mt-[24px] text-sm ">
            Already have an account? <a href="#" className="text-[#F99106] hover:underline">Log in</a>
          </p>
          <div className="mt-[34px] flex items-center justify-between">
            <span className="text-[#043133] font-medium">OR</span>
          </div>
          <div className="mt-[24px] sm:flex sm:space-x-[24px] w-full">
            <button className="w-full flex  items-center justify-evenly text-[#043133] text-[16px] p-[6px] leading-[1] mb-[24px] sm:mb-0 bg-white border  border-[#D2D2D2] hover:cursor-pointer">
              <img src={google} alt="Google"  /> Sign up with Google
            </button>
            <button className="w-full text-base flex items-center justify-evenly text-[#043133]  p-[6px] bg-white border leading-[1] border-[#D2D2D2] hover:cursor-pointer ">
              {/* <img src={facebook} alt="Facebook"  heigth="50" width="50"/> Sign up with Facebook */}
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.9999 0C38.8078 0 50 11.1937 50 25.0001C50 38.808 38.8078 50 24.9999 50C11.192 50 0 38.8078 0 25.0001C0 11.1937 11.1922 0 24.9999 0Z" fill="#3B5998"/>
                <path d="M28.0439 17.2108H31.2658V12.4514H27.4784V12.4686C22.8893 12.6311 21.9487 15.2108 21.8658 17.9202H21.8564V20.2968H18.7314V24.9576H21.8564V37.4513H26.5658V24.9576H30.4236L31.1688 20.2968H26.5674V18.8609C26.5674 17.9452 27.1767 17.2108 28.0439 17.2108Z" fill="white"/>
                </svg>
                Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupDetail


