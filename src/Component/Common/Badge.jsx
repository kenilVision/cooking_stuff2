import React from 'react'

function Badge({text}) {
  return (
    
    <span className="py-1 text-[14px] bg-[#F99106] text-white rounded-[5px] flex items-center justify-center  font-poppin"
    style={{
      minHeight:'30px',
      minWidth:'133px'
    }}
    >{text}</span>

  )
}

export default Badge
