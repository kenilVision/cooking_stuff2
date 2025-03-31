import React from 'react'

function PostCard({image,title,text,date}) {
  return (
    <div className=" w-full font-poppin">
       {/* <div className="p-0 ">
    <img src={image} alt={title} className="w-full h-48 rounded-tl-3xl rounded-br-3xl object-cover " />
    </div> */}
    <div className="h-[14.9rem] overflow-hidden">
        <img src={image}  className="w-full h-full rounded-tl-3xl rounded-br-3xl object-cover" />
      </div>


    <div className=" mt-10 ">
    <h3 className="text-[1.75rem] font-medium ">{title}</h3>


    <p className="text-[#00000080] text-xl mt-[0.1875rem]">
      {date} 
    </p>


    <p className=" text-lg mt-[0.625rem]">{text}</p>


    <button
      className="text-[#F99106] text-xl font-bold mt-5 hover:cursor-pointer font-Yeseva"
      
    >
      READ MORE »
    </button>
  </div>
  </div>
  )
}

export default PostCard
