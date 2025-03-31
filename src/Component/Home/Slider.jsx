import React, { useState, useEffect } from 'react';
import image1 from '../../assets/Home/Slider/image1.png';
import image2 from '../../assets/Home/Slider/image2.png';
import image3 from '../../assets/Home/Slider/image3.png';
import live from '../../assets/Home/Slider/Group 4.png'
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);

  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const backgroundImages = [image1, image2, image3];

  return (
    <div className="relative w-full " >



      <div
        className="relative flex  justify-center min-h-[40.375rem]"
        style={{
          backgroundImage: `url(${backgroundImages[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >




       
       <div className={`w-[73.1875rem] p-5  flex flex-col justify-center ${currentIndex === 0 ? 'block' : 'hidden'}`}>
       <img
          src={live}
          className="h-[3.9375rem] w-[6.9375rem]"
          alt="Live"
        />
        <div className='font-Yeseva'>
        <div className='text-white text-[3.125rem] leading-[1.51] font-bold mt-[2.8125rem]'>
        Find Your <span className='text-[#ffbf00]'>Favorite<br/>
        Food & Make Better</span> <br/>Your Cooking</div>

        <div className='text-[#D7F315] text-[2.5rem] leading-[1.36] font-bold mt-[2.8125rem]'>
        10th - 20th May
        </div>
        <div className='flex text-[1.625rem] font-Yeseva font-bold leading-[1.41] tracking-normal text-white mt-5'>
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






       <div className={`w-[73.1875rem] p-5 flex flex-col justify-center ${currentIndex === 1 ? 'block' : 'hidden'}`}>
        <img src={live} 
        Width="111"
        Height="63"   
        />
        <div className='font-Yeseva'>
        <div className='text-white text-[3.125rem] font-bold leading-[1.41]'>
          <span className='text-[#faee21] '>Variety of Juice</span><br/>
        Workshop </div>
        <div className='text-black bg-white text-3xl font-bold px-[1.5rem] py-[0.5625rem] mt-[0.3125rem] w-fit rounded-md '>
        6th - 10th June 12:00PM
        </div>
      
        <div className='text-white flex items-center text-3xl font-bold mt-[2.1875rem] '>
            <span className='relative inline-block pe-5 text-[2.5rem] overflow-hidden '>
                <span className= " absolute w-[90%] top-1/2 transform rotate-13 border-t-[0.3125rem] border-[#FF0000] h-0"></span>
                $5000
            </span>
            $500 (Lifetime access)
         </div>


            <div className='text-white text-3xl lg:text-[2.5rem]  leading-[1.41] font-bold mt-[1.75rem]  '>
            10+ Recipes
            </div>


            <div className='flex text-[1.625rem]  font-bold leading-[1.41] tracking-normal text-white mt-5'>
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





       <div className={`w-[73.1875rem] p-5  flex flex-col justify-center ${currentIndex === 2 ? 'block' : 'hidden'}`}>
        <div>
        <div className='text-black text-[3.75rem] font-Yeseva font-bold leading-[1.41] '
        > <span className='text-[#B821FA] text-[3.125rem]'>Gaint Strawberry</span><br/>
        Workshop</div>
        <div className='text-white text-[3.125rem] font-Yeseva font-bold  leading-[1]  mt-[2.6875rem]  bg-[#F99106] rounded-md w-fit px-[1.75rem] py-4'>
        Coming Soon
        </div>
        <div className='text-[#FA2147] font-Yeseva font-bold text-[2.5rem] mt-[2.6875rem] leading-[1.41] tracking-normal  '>
            10+ Recipes
        </div>
        <div className='flex text-[1.625rem] font-Yeseva font-bold leading-[1.41] tracking-normal text-white mt-5'>
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





      <div className="absolute z-30 flex -translate-x-1/2 bottom-[2.1875rem] left-1/2 space-x-[0.8125rem] rtl:space-x-reverse">
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
