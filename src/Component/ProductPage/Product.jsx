import React from 'react'
import image from '../../assets/ProductPage/Rectangle 11 (15).jpg'
import Profile from '../../assets/ProductPage/Ellipse 5.jpg'
function product() {

  const svg=(<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2_2591)">
    <path d="M19.9999 3.33325C29.1999 3.33325 36.6666 10.7999 36.6666 19.9999C36.6666 29.1999 29.1999 36.6666 19.9999 36.6666C10.7999 36.6666 3.33325 29.1999 3.33325 19.9999C3.33325 10.7999 10.7999 3.33325 19.9999 3.33325ZM19.9999 18.3333H13.3333V21.6666H19.9999V26.6666L26.6666 19.9999L19.9999 13.3333V18.3333Z" fill="#F99106"/>
    </g>
    <defs>
    <clipPath id="clip0_2_2591">
    <rect width="40" height="40" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    )
    const star =(<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.4209 7.10356C18.3501 6.88573 18.1606 6.72786 17.9335 6.69759L12.242 5.93898L9.7617 0.760409C9.66275 0.553819 9.45407 0.422363 9.22499 0.422363C8.99592 0.422363 8.78724 0.553819 8.68828 0.760409L6.20798 5.93894L0.516484 6.69756C0.289426 6.72783 0.0999173 6.88573 0.0291443 7.10353C-0.0416288 7.32132 0.0188742 7.56052 0.18478 7.71843L4.34342 11.6776L3.30615 17.325C3.26478 17.5503 3.35634 17.7793 3.54167 17.914C3.72693 18.0486 3.97301 18.0649 4.17456 17.9559L9.22506 15.2243L14.2756 17.9559C14.4769 18.0649 14.7231 18.0486 14.9085 17.914C15.0938 17.7793 15.1853 17.5503 15.144 17.325L14.1067 11.6776L18.2653 7.71847C18.4311 7.56056 18.4916 7.32143 18.4209 7.10356Z" fill="#F99106"/>
      </svg>
      )


      const data =[{
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2551)">
          <path d="M4 22C4 19.8783 4.84285 17.8434 6.34315 16.3431C7.84344 14.8429 9.87827 14 12 14C14.1217 14 16.1566 14.8429 17.6569 16.3431C19.1571 17.8434 20 19.8783 20 22H18C18 20.4087 17.3679 18.8826 16.2426 17.7574C15.1174 16.6321 13.5913 16 12 16C10.4087 16 8.88258 16.6321 7.75736 17.7574C6.63214 18.8826 6 20.4087 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2551">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Instructor:',
        text:'Zibiah Surya'
      },
      {
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2519)">
          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2519">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Duration:',
        text:'05 hr 15 mins'
      },
      {
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2527)">
          <path d="M14 10.25L17 8V14L14 11.75V14H7V8H14V10.25ZM5.763 17H20V5H4V18.385L5.763 17ZM6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2527">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Lectures:',
        text:'10'
      },
      {
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2535)">
          <path d="M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2535">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Level:',
        text:'Beginner'
      },
      {
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2543)">
          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2543">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Language:',
        text:'English'
      },
      {
        svg:(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2559)">
          <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2559">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          ),
        title:'Certificate:',
        text:'Yes'
      },]

const icon=[
        {svg:(<svg width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_2579)">
          <path d="M30.5583 30.565H26.1167V23.6033C26.1167 21.9433 26.0833 19.8067 23.8 19.8067C21.485 19.8067 21.1317 21.6133 21.1317 23.4817V30.565H16.6883V16.25H20.955V18.2H21.0133C21.61 17.0767 23.06 15.8883 25.2267 15.8883C29.7267 15.8883 30.56 18.8517 30.56 22.7067V30.565H30.5583ZM11.6717 14.2917C11.3326 14.2921 10.9968 14.2256 10.6834 14.096C10.3701 13.9664 10.0854 13.7762 9.84576 13.5364C9.60608 13.2966 9.41609 13.0118 9.28668 12.6984C9.15728 12.3849 9.09101 12.0491 9.09167 11.71C9.092 11.1997 9.24363 10.701 9.5274 10.2769C9.81117 9.85281 10.2143 9.52239 10.6859 9.32742C11.1574 9.13245 11.6762 9.08169 12.1766 9.18157C12.677 9.28144 13.1366 9.52746 13.4972 9.88851C13.8578 10.2496 14.1032 10.7094 14.2024 11.21C14.3016 11.7105 14.2502 12.2292 14.0546 12.7005C13.8591 13.1718 13.5281 13.5746 13.1037 13.8578C12.6792 14.141 12.1803 14.292 11.67 14.2917H11.6717ZM13.8983 30.565H9.44333V16.25H13.9V30.565H13.8983ZM32.7833 5H7.215C5.98833 5 5 5.96667 5 7.16167V32.8383C5 34.0333 5.99 35 7.21333 35H32.7767C34 35 35 34.0333 35 32.8383V7.16167C35 5.96667 34 5 32.7767 5H32.7817H32.7833Z" fill="black" fill-opacity="0.5"/>
          </g>
          <defs>
          <clipPath id="clip0_2_2579">
          <rect width="40" height="40" fill="white"/>
          </clipPath>
          </defs>
          </svg>)},
          {svg:( <svg width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2576)">
              <path d="M23.3334 22.4999H27.5001L29.1667 15.8333H23.3334V12.4999C23.3334 10.7833 23.3334 9.16659 26.6667 9.16659H29.1667V3.56659C28.6234 3.49492 26.5717 3.33325 24.4051 3.33325C19.8801 3.33325 16.6667 6.09492 16.6667 11.1666V15.8333H11.6667V22.4999H16.6667V36.6666H23.3334V22.4999Z" fill="black" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_2_2576">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>)},
          {svg:(<svg width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2573)">
              <path d="M19.9999 3.33325C24.5283 3.33325 25.0933 3.34992 26.8699 3.43325C28.6449 3.51659 29.8533 3.79492 30.9166 4.20825C32.0166 4.63159 32.9433 5.20492 33.8699 6.12992C34.7174 6.96308 35.3732 7.9709 35.7916 9.08325C36.2033 10.1449 36.4833 11.3549 36.5666 13.1299C36.6449 14.9066 36.6666 15.4716 36.6666 19.9999C36.6666 24.5283 36.6499 25.0933 36.5666 26.8699C36.4833 28.6449 36.2033 29.8533 35.7916 30.9166C35.3744 32.0295 34.7185 33.0376 33.8699 33.8699C33.0365 34.7171 32.0288 35.3728 30.9166 35.7916C29.8549 36.2033 28.6449 36.4833 26.8699 36.5666C25.0933 36.6449 24.5283 36.6666 19.9999 36.6666C15.4716 36.6666 14.9066 36.6499 13.1299 36.5666C11.3549 36.4833 10.1466 36.2033 9.08325 35.7916C7.97046 35.374 6.96246 34.7182 6.12992 33.8699C5.28226 33.0369 4.62647 32.029 4.20825 30.9166C3.79492 29.8549 3.51659 28.6449 3.43325 26.8699C3.35492 25.0933 3.33325 24.5283 3.33325 19.9999C3.33325 15.4716 3.34992 14.9066 3.43325 13.1299C3.51659 11.3533 3.79492 10.1466 4.20825 9.08325C4.62531 7.97022 5.28126 6.96212 6.12992 6.12992C6.9627 5.28197 7.97063 4.62613 9.08325 4.20825C10.1466 3.79492 11.3533 3.51659 13.1299 3.43325C14.9066 3.35492 15.4716 3.33325 19.9999 3.33325ZM19.9999 11.6666C17.7898 11.6666 15.6702 12.5446 14.1074 14.1074C12.5446 15.6702 11.6666 17.7898 11.6666 19.9999C11.6666 22.2101 12.5446 24.3297 14.1074 25.8925C15.6702 27.4553 17.7898 28.3333 19.9999 28.3333C22.2101 28.3333 24.3297 27.4553 25.8925 25.8925C27.4553 24.3297 28.3333 22.2101 28.3333 19.9999C28.3333 17.7898 27.4553 15.6702 25.8925 14.1074C24.3297 12.5446 22.2101 11.6666 19.9999 11.6666ZM30.8333 11.2499C30.8333 10.6974 30.6138 10.1675 30.2231 9.77678C29.8324 9.38608 29.3025 9.16659 28.7499 9.16659C28.1974 9.16659 27.6675 9.38608 27.2768 9.77678C26.8861 10.1675 26.6666 10.6974 26.6666 11.2499C26.6666 11.8025 26.8861 12.3324 27.2768 12.7231C27.6675 13.1138 28.1974 13.3333 28.7499 13.3333C29.3025 13.3333 29.8324 13.1138 30.2231 12.7231C30.6138 12.3324 30.8333 11.8025 30.8333 11.2499ZM19.9999 14.9999C21.326 14.9999 22.5978 15.5267 23.5355 16.4644C24.4731 17.4021 24.9999 18.6738 24.9999 19.9999C24.9999 21.326 24.4731 22.5978 23.5355 23.5355C22.5978 24.4731 21.326 24.9999 19.9999 24.9999C18.6738 24.9999 17.4021 24.4731 16.4644 23.5355C15.5267 22.5978 14.9999 21.326 14.9999 19.9999C14.9999 18.6738 15.5267 17.4021 16.4644 16.4644C17.4021 15.5267 18.6738 14.9999 19.9999 14.9999Z" fill="black" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_2_2573">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>)},
          {svg:(<svg width="2.5rem" height="2.5rem" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2_2570)">
              <path d="M22.1834 34C19.9795 34.3443 17.7255 34.1633 15.6049 33.4717C13.4842 32.7802 11.5568 31.5977 9.9796 30.0204C8.40236 28.4432 7.21985 26.5158 6.52831 24.3951C5.83678 22.2745 5.65577 20.0205 6.00002 17.8167C5.13124 16.1642 4.81378 14.2772 5.09403 12.4314C5.37429 10.5856 6.23757 8.87783 7.5577 7.5577C8.87783 6.23757 10.5856 5.37429 12.4314 5.09403C14.2772 4.81378 16.1642 5.13124 17.8167 6.00002C20.0205 5.65577 22.2745 5.83678 24.3951 6.52831C26.5158 7.21985 28.4432 8.40236 30.0204 9.9796C31.5977 11.5568 32.7802 13.4842 33.4717 15.6049C34.1633 17.7255 34.3443 19.9795 34 22.1834C34.8688 23.8358 35.1863 25.7229 34.906 27.5687C34.6257 29.4144 33.7625 31.1222 32.4423 32.4423C31.1222 33.7625 29.4144 34.6257 27.5687 34.906C25.7229 35.1863 23.8358 34.8688 22.1834 34ZM20.0867 28.5934H20.02C24.8067 28.5934 27.1917 26.2834 27.1917 23.1884C27.1917 21.1917 26.2734 19.07 22.6484 18.2584L19.3434 17.525C18.085 17.2384 16.64 16.8584 16.64 15.6667C16.64 14.475 17.6734 13.645 19.5134 13.645C23.23 13.645 22.8917 16.1917 24.7317 16.1917C25.6917 16.1917 26.5534 15.6217 26.5534 14.6417C26.5534 12.3584 22.8917 10.6417 19.7934 10.6417C16.425 10.6417 12.8384 12.0734 12.8384 15.8817C12.8384 17.7117 13.495 19.665 17.105 20.57L21.5867 21.6884C22.9467 22.025 23.2834 22.7867 23.2834 23.475C23.2834 24.62 22.1434 25.7384 20.0867 25.7384C16.0584 25.7384 16.6234 22.6434 14.4634 22.6434C13.4967 22.6434 12.7917 23.3067 12.7917 24.2617C12.7917 26.1184 15.045 28.5917 20.0867 28.5917V28.5934Z" fill="black" fill-opacity="0.5" />
            </g>
            <defs>
              <clipPath id="clip0_2_2570">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>)},
      ]




  return (
    <div className=" flex justify-center pt-15  pb-15 bg-[#FFF] ">
      <div className="w-[73.1875rem] px-5 mx-auto lg:flex  ">
        <div className=' w-full lg:w-1/3 lg:pe-[1.875rem]'>
          <div className=" p-6 rounded-lg  bg-[#FFF2F2]">
            <div className="text-2xl font-bold text-center p-5 border-b-[0.0625rem] border-[#F99106]">$420.38</div>
            <div className=" text-lg text-[#00000080] font-poppin">
              {
                data.map((a)=><div className="py-5 flex justify-between border-b-1 border-[#F99106]"><strong className='flex gap-3 text-black'> {a.svg}{a.title}</strong> {a.text}</div>)
              }
            </div>
            <button className=" hover:cursor-pointer mt-7 bg-[#F99106] text-2xl text-white  p-4 rounded-full   w-full">
              Enroll now
            </button>

          </div>
          <div className="my-5 lg:mt-6  flex items-center lg:block">
            <h3 className="font-bold  text-2xl sm:text-3xl md:text-4xl lg:mb-10 me-3 text-center md:text-start">Share Course:</h3>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              {
                icon.map((a)=><a href="#">{a.svg}</a>)
              }
            </div>
          </div>
        </div>
        <div className="flex  flex-col w-full lg:w-2/3">

          <div className="mb-5">
            <img
              className=" w-full max-h-[28rem]"
              src={image}
              alt="Course"
              width="770"
              height=" 449"
            />
          </div>
          <div className="mb-5   text-3xl font-bold font-Yeseva ">All in one Pack</div>
          <div className='flex mb-5'>
          <div className='md:flex justify-between'>
          <img src={Profile}  className="w-12 h-12 me-5 rounded-full" />
          </div>
          <div className="text-lg text-[#00000080] w-full  md:flex justify-between font-poppin">
            <div className='flex items-center gap-1 md:m-0'>By:<span className='text-black'> Zibiah Surya </span></div>
            <div className='flex items-center gap-1 my-2 md:m-0'><span className='text-[#f99106] '>300 </span> Enrolled Students</div>
            <div className='flex items-center  gap-2  md:m-0'><span className='text-[#f99106]'>4.2</span> {star}{star}{star}{star}{star} (2,002 Reviews)</div>
          </div>
          </div>

          <div className="bg-[#FFF2F2] p-3 mb-5  flex justify-center"
            style={{
              boxShadow: '0px 1px 3px 0px #00000040'
            }}
          >
            <h3 className="font-bold  text-[2.125rem] font-Yeseva ">Details</h3>
          </div>
          <div className=' text-lg md:text-xl lg:text-2xl font-normal font-poppin'>
         
            <div className='grid grid-cols-1 mb-0 md:mb-[1.875rem] md:grid-cols-2'>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0 ">
                <span className=" mr-8 ">{svg}</span>
                FREE Mix Veg with Fried Potato Course
              </li>
              </div>
              <div>
                <li className="flex min-h-[3.5rem] md:min-h-0">
                <span className=" mr-8 ">{svg}</span>
                100% Veg recipes
              </li>
              </div>
            </div>


            <div className='grid grid-cols-1  mb-0 md:mb-[1.875rem] md:grid-cols-2'>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0 ">
                <span className=" mr-8 ">{svg}</span>
                Step-by-step cooking video instructions + Detailed PDF notes
              </li>
              </div>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0 ">
                <span className=" mr-8 ">{svg}</span>
                Doubt solving over call
              </li>
              </div>
            </div>


            <div className='grid grid-cols-1  mb-0 md:mb-[1.875rem] md:grid-cols-2'>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0">
                <span className="mr-8">{svg}</span>
                Learn from Experts
              </li>
              </div>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0">
                <span className=" mr-8 ">{svg}</span>
                Explore new recipes every day
              </li>
              </div>
            </div>



            <div className='grid grid-cols-1  mb-0 md:mb-[1.875rem] md:grid-cols-2'>
              <div>
             
              <li className="flex min-h-[3.5rem] md:min-h-0">
                <span className=" mr-8 ">{svg}</span>
                2,00,000+ Trained students
              </li>
              </div>
              <div>
              <li className="flex min-h-[3.5rem] md:min-h-0 ">
                <span className="mr-8 ">{svg}</span>
                Free Lifetime Access
              </li>
              </div>
            </div>
              
              
             
            
          </div>
          <div>
            

              
              
              
              
          </div>
          </div>
        </div>
      </div>
    
  )
}

export default product
