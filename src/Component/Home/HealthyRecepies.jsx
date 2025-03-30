import React from 'react';
import bg from '../../assets/Home/HealthyRecepies/d8f7a451d6cd6119c6088e8449b39b1f.png';
import image1 from '../../assets/Home/HealthyRecepies/Card/91d13509fc2aa564c3a19e0a36555bc7.png';
import image2 from '../../assets/Home/HealthyRecepies/Card/a42b95f0ad42ced51062b98b1faab86a.png';
import image3 from '../../assets/Home/HealthyRecepies/Card/490bb823a7988ff32f82aa4b5b92e0d9.png';
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

        <div className="relative z-10 w-[1171px] flex flex-col items-center">
          <div className="font-bold text-[60px] leading-none tracking-normal  font-Yeseva p-[10px]">Healthy & Tasty Recipes</div>
          <div className="grid grid-cols-1 sm:grid-cols-2    gap-x-10 gap-y-10 mt-10 lg:gap-x-[80px] lg:grid-cols-3">
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



