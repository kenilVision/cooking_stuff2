import React from 'react'

function ReviewCard({image, text ,clientname ,jobTitle, headline}) {
  const svg= (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_670)">
    <path d="M23.9621 9.24031C23.8701 8.95695 23.6235 8.75159 23.3282 8.71221L15.9246 7.7254L12.6981 0.98905C12.5694 0.720316 12.298 0.549316 12 0.549316C11.702 0.549316 11.4306 0.720316 11.3018 0.98905L8.07543 7.72536L0.671849 8.71217C0.376489 8.75154 0.129974 8.95695 0.0379112 9.24026C-0.0541512 9.52357 0.0245519 9.83473 0.240364 10.0401L5.64997 15.1902L4.30068 22.5365C4.24686 22.8295 4.36597 23.1275 4.60705 23.3026C4.84804 23.4777 5.16815 23.499 5.43032 23.3572L12.0001 19.8038L18.5698 23.3572C18.8318 23.4989 19.1519 23.4778 19.3931 23.3026C19.6342 23.1275 19.7533 22.8295 19.6995 22.5365L18.3501 15.1903L23.7598 10.0402C23.9755 9.83478 24.0542 9.52371 23.9621 9.24031Z" fill="#F99106"/>
    </g>
    <defs>
    <clipPath id="clip0_2_670">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    )
  return (
    <div className='bg-white py-10 px-5  rounded-lg'
    style={{
        boxShadow: '0px 0px 7px 0px #00000040'
    }}>
      
      <div className="flex items-center space-x-4 ">
        <img src={image} alt={name} className="w-12 h-12 rounded-full" />
        <div>
          <h3 className="text-2xl font-bold">{clientname}</h3>
          <p className="text-lg  text-gray-500">{jobTitle}</p>
        </div>
      </div>

    
      <p className="font-semibold mt-4 text-lg ">{headline}</p>

    
      <p className="text-gray-600 mt-2 text-lg ">{text}</p>

   
      <div className="flex items-center   mt-5">
       
          <span className={`flex gap-2  text-xl`}>
              {svg} {svg} {svg} {svg} {svg}
          </span>
        
      </div>
    </div>
  )
}

export default ReviewCard
