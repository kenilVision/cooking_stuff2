import React from 'react';
import bg from '../../assets/Home/HealthyRecepies/d8f7a451d6cd6119c6088e8449b39b1f.png';
import image1 from '../../assets/Home/HealthyRecepies/Card/Rectangle 11 (10).jpg';
import image2 from '../../assets/Home/HealthyRecepies/Card/Rectangle 11 (11).jpg';
import image3 from '../../assets/Home/HealthyRecepies/Card/Rectangle 11 (14).jpg';
import Card from '../../Component/Common/Card';
import OrangeButton from '../Common/OrangeButton';

function HealthyRecepies() {
  const items = [
    {
      image: image1,
      text: 'Variety of rice jeera',
      course:"Certified Course"
    },
    {
      image: image2,
      text: 'Healthy salad',
    },
    {
      image: image3,
      text: 'Soup and curry',
      course:"Free Course"
    }
  ];

  return (
    <>
      <div className="relative flex justify-center pt-15 pb-15 ">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        ></div>

        <div className="relative z-10 w-7xl flex flex-col items-center">
          <div className="text-4xl sm:text-5xl md:text-6xl text-black font-bold p-2">Healthy & Tasty Recipes</div>
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

export default HealthyRecepies;



