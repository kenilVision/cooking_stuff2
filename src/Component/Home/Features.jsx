import React,{useRef} from 'react';
import bg from '../../assets/Home/sec2/ebc436ec0b58d5a5d4f5d94363fc5ad1.png';
import image1 from '../../assets/Home/sec2/card/36301c826df4b8bc7a409a49a4239e57.png';
import image2 from '../../assets/Home/sec2/card/732a7b0c5c8f99f65f1d585c8256c9b9.png';
import image3 from '../../assets/Home/sec2/card/0a482dfb6bcadd0d841c4f08923cea1c.jpg';
import image4 from '../../assets/Home/sec2/card/2157ea1a0f17d614a5d277d588a1c9b8.jpg';
import image5 from '../../assets/Home/sec2/card/9319f8917466c55717050d065975464d.jpg';
import image6 from '../../assets/Home/sec2/card/37705f0ac93ac69c2cae68ca14c4d092.jpg';
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

        <div className="relative  w-[1171px]  flex flex-col items-center">
          <div className="font-bold text-[60px] leading-none tracking-normal  font-Yeseva p-[10px]">Featured</div>
          <div className=" text-xl sm:text-2xl md:text-3xl text-[#00000080] text-center p-[10px] w-full md:w-1/2 font-poppin">
            We specialize in organizing professional training courses
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2    gap-x-10 gap-y-10 mt-10 lg:gap-x-20 lg:grid-cols-3">
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
