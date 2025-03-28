import React from 'react'
import banner  from '../../assets/ProductPage/506d953c945696ae3371ecf4634e64da.png'
function Banner() {
  return (
    <div className="relative w-full mt" >
      <div
        className="relative flex  justify-center min-h-[288px]"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`w-7xl h-auto flex flex-col  justify-center`}>
              
                <div className='text-black text-[42px] font-bold '>Course Details</div>
                <div className=' text-xl font-bold mb-5 '>
                Home //<span className='text-[#F99106]'>Courses</span> 
                </div>
              
               </div>
        </div>
    </div>
  )
}

export default Banner
