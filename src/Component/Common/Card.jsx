import React from 'react';
import Badge from './Badge';
import { useNavigate } from "react-router-dom";

const Card = ({ image, text , course}) => {
  let navigate = useNavigate(); 
  const star =(<svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.9621 9.24043C23.8701 8.95707 23.6235 8.75171 23.3282 8.71234L15.9246 7.72553L12.6981 0.989172C12.5694 0.720438 12.298 0.549438 12 0.549438C11.702 0.549438 11.4306 0.720438 11.3018 0.989172L8.07543 7.72548L0.671849 8.71229C0.376489 8.75167 0.129974 8.95707 0.0379112 9.24038C-0.0541512 9.52369 0.0245519 9.83485 0.240364 10.0403L5.64997 15.1904L4.30068 22.5366C4.24686 22.8297 4.36597 23.1276 4.60705 23.3027C4.84804 23.4779 5.16815 23.4991 5.43032 23.3573L12.0001 19.8039L18.5698 23.3573C18.8318 23.499 19.1519 23.4779 19.3931 23.3027C19.6342 23.1276 19.7533 22.8297 19.6995 22.5366L18.3501 15.1904L23.7598 10.0403C23.9755 9.8349 24.0542 9.52384 23.9621 9.24043Z" fill="#F99106"/>
    </svg>
    )

    const routeChange = () =>{ 
      navigate('/CourseDetail')
      window.scrollTo(0, 0);
    }
  return (
    <div className=" bg-white rounded-[0.625rem] w-full  hover:cursor-pointer font-poppin"
    style={{
      boxShadow:"0px 1px 4px 0px #00000040"
    }}
    onClick={routeChange}
    >

      {/* <div
        className="h-[15.5625rem] min-w-full overflow-hidden bg-cover bg-center bg-no-repeat rounded-t-[0.625rem]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div> */}

       {/* <div className="h-[15.5625rem] overflow-hidden">
        <img src={image}  className="w-full h-full object-cover  rounded-t-[0.625rem]" />
      </div> */}
      <div className="h-[15.5625rem] overflow-hidden">
        <img src={image}  className="w-full h-full object-cover  rounded-t-[0.625rem]" />
      </div>


      <div className="pt-[0.625rem] px-[1rem] pb-[0.9375rem]">
  
        <h3 className="text-[1.625rem] font-medium mb-4  ">
          {text} (Lifetime Access)
        </h3>


        <div className="flex items-center text-2xl  mt-[0.875rem] ">
          <span className="text-[#F99106] flex gap-2 items-center font-medium ">4.2 {star}{star}{star}{star}{star} </span>
          <span className="text-[#7B7B7B] font-normal ml-2">(2,002)</span>
        </div>

        
        <div className="flex items-center text-3xl  mt-[0.875rem]  ">
          <span className="font-normal text-black pe-1">₹500</span>
          <span className="text-[#7B7B7B] line-through ml-2">₹5,000</span>
        </div>
        <div className="flex items-center mt-[0.875rem] ">
          {course?<Badge text={course}/>:""}
         
        </div>
      </div>
    </div>
  );
};

export default Card;
