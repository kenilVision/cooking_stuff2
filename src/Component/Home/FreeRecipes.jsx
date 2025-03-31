import React from 'react';
import image1 from '../../assets/Home/FreeRecepies/d50d5e0980213923ad2536f80ce4f134.png';
import image2 from  '../../assets/Home/FreeRecepies/732a7b0c5c8f99f65f1d585c8256c9b9.png' ;
import image3 from "../../assets/Home/FreeRecepies/0a482dfb6bcadd0d841c4f08923cea1c.jpg" ;
import OrangeButton from '../Common/OrangeButton';
import Card from '../../Component/Common/Card';



  function FreeRecepies() {
    const items = [
        {
          image: image1,
          text: 'Matar Paneer Veg',
          course:"Certified Course"
        },
        {
          image: image2,
          text: 'Variety of Juice',
        },
        {
          image: image3,
          text: 'Variety of Pork Bar',
          course:"Free Course"
        }
      ];
    return (
      <>
        <div id="FreeRecipes" className="relative flex justify-center pt-15 pb-15 bg-[#FFF2F2] ">
  
          <div className="relative z-10 w-[1171px] flex flex-col items-center">
            <div className="text-center font-bold text-4xl sm:text-5xl md:text-[60px] leading-none tracking-normal    font-Yeseva p-[10px]">Free Recipes</div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2    gap-x-10 gap-y-10 mt-10 lg:gap-x-20 lg:grid-cols-3">
              {items.map((x, index) => (
                <Card key={index} image={x.image} text={x.text} course={x.course} />
              ))}   
            </div>
            <div className='mt-10'>
                <OrangeButton text='View All' />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default FreeRecepies;
  