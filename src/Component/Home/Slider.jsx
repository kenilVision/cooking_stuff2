import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Home/Slider/image1.png';
import image2 from '../../assets/Home/Slider/image2.png';
import image3 from '../../assets/Home/Slider/image3.png';
import live from '../../assets/Home/Slider/Group 4.png'
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 1;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);

  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const backgroundImages = [image1, image2, image3];

  return (
    <div className="relative w-full" >



      <div
        className="relative flex  justify-center min-h-[646px]"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >




       
       <div className={`w-[1171px] flex flex-col justify-center ${currentIndex === 0 ? 'block' : 'hidden'}`}>
        <img src={live} 
        Width="111"
        Height="63px"
        />
        <div className='font-Yeseva'>
        <div className='text-white text-4xl sm:text-5xl leading-[1.51] font-bold mt-[45px]'>
        Find Your <span className='text-[#ffbf00]'>Favorite<br/>
        Food & Make Better</span> <br/>Your Cooking</div>

        <div className='text-[#D7F315] text-4xl sm:text-[40px] leading-[1.36] font-bold mt-[45px]'>
        10th - 20th May
        </div>
        <div className='flex text-[26px] font-Yeseva font-bold leading-[1.41] tracking-normal text-white mt-5'>
            <div className='bg-black p-2'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-2'>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-2 text-black'>
                    PDF
            </div>
        </div>

        </div>
       </div>






       <div className={`w-[1171px]  flex flex-col justify-center ${currentIndex === 1 ? 'block' : 'hidden'}`}>
        <img src={live} 
        Width="111"
        Height="63px"   
        />
        <div className='font-Yeseva'>
        <div className='text-white text-4xl sm:text-5xl font-bold leading-[1.41]'>
          <span className='text-[#faee21] '>Variety of Juice</span><br/>
        Workshop </div>
        <div className='text-black bg-white text-2xl sm:text-3xl font-bold px-[24px] py-[9px] mt-[5px] w-fit rounded-md '>
        6th - 10th June 12:00PM
        </div>
      
        <div className='text-white flex items-center text-2xl sm:text-3xl font-bold mt-[35px] '>
            <span className='relative inline-block pe-3 text-[40px] '>
                <span className='absolute left-0 right-0 top-1/2  transform rotate-15 border-t-5 border-red-500 w-full h-0'></span>
                $5000
            </span>
            $500 (Lifetime access)
         </div>


            <div className='text-white text-3xl lg:text-[40px]  leading-[1.41] font-bold mt-[28px]  '>
            10+ Recipes
            </div>


            <div className='flex text-[26px]  font-bold leading-[1.41] tracking-normal text-white mt-5'>
            <div className='bg-black p-2'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-2'>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-2 text-black'>
                    PDF
            </div>
        </div>

        </div>
       </div>





       <div className={`w-[1171px]  flex flex-col justify-center ${currentIndex === 2 ? 'block' : 'hidden'}`}>
        <div>
        <div className='text-black text-5xl sm:text-6xl font-Yeseva font-bold leading-[1.41] '
         style={{
          lineHeight:'141%'
        }}
        > <span className='text-[#B821FA] text-[50px]'>Gaint Strawberry</span><br/>
        Workshop</div>
        <div className='text-white text-[50px] font-Yeseva font-bold  leading-[1]  mt-[43px]  bg-[#F99106] rounded-md w-fit px-[28px] py-4'>
        Coming Soon
        </div>
        <div className='text-[#FA2147] font-Yeseva font-bold text-[40px] mt-[43px] leading-[1.41] tracking-normal  '>
            10+ Recipes
        </div>
        <div className='flex text-[26px] font-Yeseva font-bold leading-[1.41] tracking-normal text-white mt-5'>
            <div className='bg-black p-2'>
                Lifetime access
            </div>
            <div className='bg-[#F99106] p-2'>
                 Videos
            </div>
            <div className='bg-[#FAEE21] p-2 text-black'>
                    PDF
            </div>
        </div>

       </div>


       </div>
      </div>





      <div className="absolute z-30 flex -translate-x-1/2 bottom-[35px] left-1/2 space-x-[13px] rtl:space-x-reverse">
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 0 ? 'bg-[#F99106]' : 'bg-white'}`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 1 ? 'bg-[#F99106]' : 'bg-white'}`}
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 2 ? 'bg-[#F99106]' : 'bg-white'}`}
          onClick={() => setCurrentIndex(2)}
        ></button>
      </div>
    </div>
  );
}

export default Slider;
