import React from 'react'

function Badge({text}) {
  return (
    
    <span className="py-1 text-[0.875rem] bg-[#F99106] text-white rounded-[0.3125rem] flex items-center justify-center  font-poppin"
    style={{
      minHeight:'1.875rem',
      minWidth:'8.3125rem'
    }}
    >{text}</span>

  )
}

export default Badge
