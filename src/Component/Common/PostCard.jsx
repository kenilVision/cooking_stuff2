import React from 'react'

function PostCard({image,title,text,date}) {
  return (
    <div className="max-w-sm">
    <img src={image} alt={title} className="w-full h-48 rounded-tl-3xl rounded-br-3xl object-cover " />


    <h3 className="text-[28px] font-semibold mt-10">{title}</h3>


    <p className="text-gray-500 text-xl mt-2">
      {date} 
    </p>


    <p className="text-gray-700 text-lg mt-2">{text}</p>


    <button
      className="text-[#F99106] text-xl font-bold mt-5 hover:cursor-pointer"
      
    >
      READ MORE »
    </button>
  </div>
  )
}

export default PostCard
