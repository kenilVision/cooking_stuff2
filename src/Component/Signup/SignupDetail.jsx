import React from 'react'
import image from '../../assets/Signup/image 1.jpg'
import image2 from '../../assets/Signup/Group.jpg'
import google from '../../assets/Signup/Google.jpg'
import facebook from '../../assets/Signup/facebook-svgrepo-com (5) 1.jpg'
function SignupDetail() {



  return (
    <div className=" flex  justify-center z-0 ">
      <div className="max-w-[1440px] w-full h-full md:flex ">
  
        <div className=" w-full md:w-1/2 p-10 md:p-12 h-max flex items-center border-r-2 border-r-[#ECECEC] justify-center relative">
          <div className="  flex items-center justify-center">
            <div className="flex flex-wrap justify-center">
           
              <div className="flex flex-col items-center ">
              <img src={image2} alt="Cutlery Illustration" className=" mb-10 md:mb-30 " height="57.21" width="260.52" />
                <img src={image} alt="Cutlery Illustration"  height="556" width="562" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Signup Form */}
        <div className="w-full md:w-1/2 p-10 md:p-[91px] flex flex-col justify-center items-center font-poppin">
          <h2 className="text-[48px] font-semibold text-[#043133] mb-6 ">Welcome to Jammy</h2>
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
              className="w-1/2 py-2 bg-[#F99106] text-[26px]  text-white mx-auto font-medium mt-[50px] focus:outline-none focus:ring-2 hover:cursor-pointer"
            >
              Create Account
            </button>
          </form>
          <p className="mt-[24px] text-sm ">
            Already have an account? <a href="#" className="text-[#F99106] hover:underline">Log in</a>
          </p>
          <div className="mt-[34px] flex items-center justify-between">
            <span className="text-gray-500">OR</span>
          </div>
          <div className="mt-[24px] flex space-x-[24px] w-full">
            <button className="w-full flex text-base items-center justify-evenly p-[6px] bg-white border border-[#D2D2D2] hover:cursor-pointer">
              <img src={google} alt="Google"  /> Sign up with Google
            </button>
            <button className="w-full text-base flex items-center justify-evenly   p-[6px] bg-white border border-[#D2D2D2] hover:cursor-pointer ">
              <img src={facebook} alt="Facebook"  heigth="50" width="50"/> Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupDetail
