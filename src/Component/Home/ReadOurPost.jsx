import React from 'react';
import image1 from '../../assets/Home/ReadOurPost/Card/Rectangle 18.jpg';
import image2 from '../../assets/Home/ReadOurPost/Card/Rectangle 19.jpg';
import image3 from '../../assets/Home/ReadOurPost/Card/Rectangle 20.jpg';
import PostCard from '../../Component/Common/PostCard';

function ReadOurPost() {

    const items = [
        {
          image: image1,
          title: 'Chef Cooking Life',
          date:"March 11, 2022  No Comments",
          text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            image: image2,
            title: 'Cool way to cook food',
            date:"March 11, 2022  No Comments",
            text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        },
        {
            image: image3,
            title: 'Make Spicy Food',
            date:"March 11, 2022  No Comments",
            text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
        }
      ];
  return (

        <>
          <div id="Posts" className="relative flex justify-center pt-15 pb-15 bg-[#FFF2F2] ">
    
            <div className="relative z-10 w-[1171px]  flex flex-col items-center">
              <div className=" font-bold text-[60px] leading-none tracking-normal  font-Yeseva p-[10px]">Read Our Post</div>
              <div className="text-xl sm:text-2xl md:text-3xl text-[#00000080] text-center p-[10px] w-full  font-poppin2 w-2/3">
              We Specialise in organising Professional Traning Courses
          </div>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[53px] gap-y-10 mt-10">
                {items.map((x, index) => (
                  <PostCard key={index} image={x.image} text={x.text} title={x.title} date={x.date} />
                ))}
              </div>
            </div>
          </div>
        </>
      );

}

export default ReadOurPost




  