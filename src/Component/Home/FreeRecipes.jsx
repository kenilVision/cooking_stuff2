import React from 'react';
import bg from '../../assets/Home/sec2/ebc436ec0b58d5a5d4f5d94363fc5ad1.png';
import image1 from '../../assets/Home/FreeRecepies/Rectangle 11 (6).jpg';
import image2 from '../../assets/Home/FreeRecepies/Rectangle 11 (7).jpg';
import image3 from '../../assets/Home/FreeRecepies/Rectangle 11 (8).jpg';
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
  
          <div className="relative z-10 w-7xl flex flex-col items-center">
            <div className="text-4xl sm:text-5xl md:text-6xl text-black font-bold p-2">Free Recipes</div>
  
            <div className="grid grid-cols-1 sm:grid-cols-2    gap-x-10 gap-y-10 mt-10 lg:gap-x-5 lg:grid-cols-3">
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
  