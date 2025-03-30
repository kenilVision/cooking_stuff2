import React from 'react'

function OrangeButton({text,onClick}) {
  const arrow =(<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.25 16.25H21.075L16.5375 21.7C16.4324 21.8264 16.3533 21.9722 16.3046 22.1292C16.2559 22.2862 16.2386 22.4512 16.2537 22.6149C16.2842 22.9454 16.4447 23.2503 16.7 23.4625C16.9553 23.6747 17.2844 23.7768 17.6149 23.7463C17.9454 23.7158 18.2503 23.5553 18.4625 23.3L24.7125 15.8C24.7545 15.7403 24.7922 15.6777 24.825 15.6125C24.825 15.55 24.8875 15.5125 24.9125 15.45C24.9692 15.3067 24.9988 15.1541 25 15C24.9988 14.8459 24.9692 14.6933 24.9125 14.55C24.9125 14.4875 24.85 14.45 24.825 14.3875C24.7922 14.3223 24.7545 14.2597 24.7125 14.2L18.4625 6.7C18.345 6.5589 18.1978 6.44542 18.0314 6.36765C17.8651 6.28987 17.6836 6.2497 17.5 6.25C17.2079 6.24943 16.9249 6.35115 16.7 6.5375C16.5734 6.64244 16.4688 6.77131 16.3921 6.91675C16.3154 7.06218 16.2682 7.22132 16.2531 7.38504C16.238 7.54876 16.2553 7.71385 16.3041 7.87085C16.3529 8.02786 16.4322 8.17369 16.5375 8.3L21.075 13.75H6.25C5.91848 13.75 5.60054 13.8817 5.36612 14.1161C5.1317 14.3505 5 14.6685 5 15C5 15.3315 5.1317 15.6495 5.36612 15.8839C5.60054 16.1183 5.91848 16.25 6.25 16.25Z" fill="white"/>
    </svg>
    )
  return (
    <button
    className=" hover:cursor-pointer min-h-[74px] min-w-[194px] text-3xl gap-3 bg-[#F99106] text-white p-[15px] rounded-md flex items-center justify-between font-poppin "
    onClick={onClick}
    style={
      {
        boxShadow: '0px 0px 20px 0px #00000040'

      }
    }
  >
    {text}
    <span className="ml-2">{arrow}</span> 
  </button>
  )
}

export default OrangeButton
