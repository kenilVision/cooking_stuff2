import React from 'react';
import Group from '../assets/Group.png';
import { NavLink } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  const navigation = [
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
      }]

      const Categories = [
        {
        to:'Feature',
        text:"Features",
       
        },
        {
        to:'FreeRecipes',
        text:"Free Recipes",
        
        },
        {
          to:'Posts',
          text:"Posts",
        }]

      const goto = (text) => {
        navigate(`/#${text}`)
        window.location.replace(`/#${text}`)
      };
      
      

  return (
    <>
    <div className='flex justify-center bg-[#FFF2F2]'>
        <div className="w-7xl p-10 flex flex-col items-center  ">
            <div className='w-fit text-4xl sm:text-5xl md:text-6xl font-bold pb-8' >
            Contact Us
            </div>
            <div className="w-full flex flex-col justify-center lg:flex-row lg:justify-between  gap-5 pb-8">
            <div className="flex justify-center ">
                <img
                src={Group}
                width="298"
                height="122.6"
                alt="Cooking Stuff Logo"
                className="w-[298px] h-[122.6px]"
                />
            </div>
            <div className="text-2xl flex justify-center w-full   text-gray-600 lg:max-w-3xl">
                <p className='text-center lg:text-start'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nisi tortor tellus sagittis donec id est, dolor, morbi. Id facilisis sem sit maecenas metus, lacinia non. Lorem congue est at ultrices suscipit at nulla neque volutpat. Porta proin hdhhhjff.
                </p>
            </div>
            </div>
            <div className="w-full grid grid-cols-1  gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
            <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Navigation</p>
          <ul className=" pt-10 text-center sm:text-start space-y-10">
            {
          navigation.map(a => {
              return  (<li className="text-xl text-gray-600 flex items-center">
              <NavLink to={a.to}>
                <span className="mr-2 text-[#f99106]">&#9656;</span>{a.text}
                </NavLink>
              </li>)
            } )
          } 
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Categories</p>
          <ul className="pt-10 space-y-10">
          {
          Categories.map(a => {
              return  (  <li className="text-xl text-gray-600 flex items-center hover:cursor-pointer" onClick={()=>{goto(`${a.to}`)}}>
              <span className="mr-2 text-[#f99106]">&#9656;</span>{a.text}
            </li>)
            } )

          }
          </ul>
        </div>
        <div>
          <p className="text-3xl font-bold underline underline-offset-10 decoration-[#f99106]">Get in touch</p>
          <div className="pt-10 space-y-5">
            <div className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-black">Phone:</span> +123 456 7890
            </div>
            <div className="text-xl text-gray-600  text-wrap">
            <span className="mr-2 text-black inline-block">Address:</span> Lumbung<br />Hidup St. Madiun<br />City East Java 63125
            </div>
            <div className="text-xl text-gray-600 flex items-center">
              <span className="mr-2 text-black">Email:</span> cookingstuff@gmail.com
            </div>
          </div>
        </div>
            </div>
        </div>
    </div>
     <div className='flex justify-center bg-[#F99106]'>
        <div className="w-7xl p-5  lg:flex flex-row justify-between text-white text-xl ">
                <div className=' flex justify-center items-center mb-2 lg:block lg:mb-0' >
                @ Copyright 2022. All Rights Reserved by Cooking Stuff
                </div>
                <div className='flex justify-center lg:block  space-x-10' >
                <a href='#'><span>Terms & Condition</span></a>
                <a href='#'><span>License</span></a>
                <a href='#'><span>Support</span></a>
                </div>
            </div>
        </div>

        </>
  )
}

export default Footer
