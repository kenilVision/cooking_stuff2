import React from 'react'
import image from '../../assets/Signup/image 1.jpg'
import image2 from '../../assets/Signup/Group.jpg'
import google from '../../assets/Signup/Google.jpg'
import facebook from '../../assets/Signup/facebook-svgrepo-com (5) 1.jpg'
function SignupDetail() {



  return (
    <div className=" flex  justify-center z-0 ">
      <div className="max-w-7xl w-full md:flex ">
  
        <div className=" w-full md:w-1/2 p-10 md:p-22 flex items-center justify-center relative">
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
        <div className="w-full md:w-1/2 p-10 md:p-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 ">Welcome to Jammy</h2>
          <form className='w-full flex flex-col justify-center '>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <button
              type="submit"
              className="w-1/2 py-2 bg-orange-500 text-white mx-auto text-2xly
               hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Already have an account? <a href="#" className="text-orange-500 hover:underline">Log in</a>
          </p>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-gray-500">OR</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="w-full flex items-center justify-center p-2 bg-white border border-[#D2D2D2] ">
              <img src={google} alt="Google" className=" mr-2" /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center p-2 bg-white border border-[#D2D2D2] ">
              <img src={facebook} alt="Facebook" className=" mr-2" /> Sign up with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupDetail
