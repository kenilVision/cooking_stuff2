import React from 'react'

function Badge({text}) {
  return (
    <div  >
    <span className="p-1 text-xs bg-[#F99106]  text-white rounded-sm"
    style={{
      minHeight:'30px',
      minWidth:'133px'
    }}
    >{text}</span>
  </div>
  )
}

export default Badge
