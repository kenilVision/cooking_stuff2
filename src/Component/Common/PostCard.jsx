import React from 'react'

function PostCard({image,title,text,date}) {
  return (
    <div className="max-w-sm font-poppin">
    <img src={image} alt={title} className="w-full h-48 rounded-tl-3xl rounded-br-3xl object-cover " />


    <h3 className="text-[28px] font-medium  mt-10">{title}</h3>


    <p className="text-[#00000080] text-xl mt-[3px]">
      {date} 
    </p>


    <p className=" text-lg mt-[10px]">{text}</p>


    <button
      className="text-[#F99106] text-xl font-bold mt-5 hover:cursor-pointer"
      
    >
      READ MORE »
    </button>
  </div>
  )
}

export default PostCard
