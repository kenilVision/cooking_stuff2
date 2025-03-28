import React,{useRef} from 'react';
import bg from '../../assets/Home/sec2/ebc436ec0b58d5a5d4f5d94363fc5ad1.png';
import image1 from '../../assets/Home/sec2/card/Rectangle 11.jpg';
import image2 from '../../assets/Home/sec2/card/Rectangle 11 (1).jpg';
import image3 from '../../assets/Home/sec2/card/Rectangle 11 (2).jpg';
import image4 from '../../assets/Home/sec2/card/Rectangle 11 (3).jpg';
import image5 from '../../assets/Home/sec2/card/Rectangle 11 (4).jpg';
import image6 from '../../assets/Home/sec2/card/Rectangle 11 (5).jpg';
import Card from '../../Component/Common/Card';


function Features() {
  const items = [
    {
      image: image1,
      text: 'All in one Pack',
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
    },
    {
      image: image4,
      text: 'Noodles with Veggies',
    },
    {
      image: image5,
      text: 'Pancake with Banana',
      course:"Certified Course"
    },
    {
      image: image6,
      text: 'Variety of Mixed Nuts',
    },
  ];

  return (
    <>
      <div id="Feature" className="relative flex justify-center pt-15 pb-15 ">
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

        <div className="relative z-10 w-7xl  flex flex-col items-center">
          <div className=" text-4xl sm:text-5xl  md:text-6xl text-black font-bold p-2">Featured</div>
          <div className=" text-xl sm:text-2xl md:text-3xl text-gray-600 text-center p-2 w-full md:w-1/2">
            We specialize in organizing professional training courses
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2    gap-x-10 gap-y-10 mt-10 lg:gap-x-5 lg:grid-cols-3">
            {items.map((x, index) => (
              <Card key={index} image={x.image} text={x.text} course={x.course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
