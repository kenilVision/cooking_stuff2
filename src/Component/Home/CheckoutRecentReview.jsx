import React,{useState, useEffect} from 'react';
import bg from '../../assets/Home/CheckoutRecentReview/c26178c70f3091d8026b3a1fd176f998.png';
import image1 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4 (1).jpg';
import image2 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4 (2).jpg';
import image3 from '../../assets/Home/CheckoutRecentReview/Card/Ellipse 4.jpg';
import ReviewCard from '../Common/ReviewCard';



function CheckoutRecentReview() {


  const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;
  
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  

    const items = [[{
      image: image1,
      clientname:"Clay Jhonson",
      jobTitle:"Digital Marketer",
      headline:"Perfection! went above!",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
  },
  {
    image: image2,
    clientname:"Nina Sin",
    jobTitle:"Film Maker",
    headline:"Perfection! went above!",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
  },
  {
      image: image3,
      clientname:"Rose Merry",
      jobTitle:"Developer",
      headline:"Perfection! went above!",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
  }],
  [
{
  image: image2,
  clientname:"Nina Sin",
  jobTitle:"Film Maker",
  headline:"Perfection! went above!",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
},
{
    image: image3,
    clientname:"Rose Merry",
    jobTitle:"Developer",
    headline:"Perfection! went above!",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
},
{
  image: image1,
  clientname:"Clay Jhonson",
  jobTitle:"Digital Marketer",
  headline:"Perfection! went above!",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
}],[
{
    image: image3,
    clientname:"Rose Merry",
    jobTitle:"Developer",
    headline:"Perfection! went above!",
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
},
{
  image: image1,
  clientname:"Clay Jhonson",
  jobTitle:"Digital Marketer",
  headline:"Perfection! went above!",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
},
{
  image: image2,
  clientname:"Nina Sin",
  jobTitle:"Film Maker",
  headline:"Perfection! went above!",
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.',
}] ];
  return (
    <>
      <div className="relative flex justify-center pt-15 pb-15 ">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        ></div>

        <div className="relative z-10 w-7xl  flex flex-col items-center">
          <div className=" text-4xl sm:text-5xl md:text-6xl text-black font-bold p-2">Check out Recent Review</div>
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 text-center p-2 w-full md:w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan neque pellentesque lorem eu sollicitudin congue ut amet. 
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-13 gap-y-10 mt-10 mb-15">
            {items[currentIndex].map((x, index) => (
              <ReviewCard key={index} image={x.image} text={x.text} clientname={x.clientname} jobTitle={x.jobTitle} headline={x.headline}/>
            ))}
          </div>

          <div className=" z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse ">
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 0 ? 'bg-[#F99106]' : 'bg-[#FFE1E1]'}`}
          onClick={() => setCurrentIndex(0)}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 1 ? 'bg-[#F99106]' : 'bg-[#FFE1E1]'}`}
          onClick={() => setCurrentIndex(1)}
        ></button>
        <button
          type="button"
          className={`w-5 h-5 rounded-full ${currentIndex === 2 ? 'bg-[#F99106]' : 'bg-[#FFE1E1]'}`}
          onClick={() => setCurrentIndex(2)}
        ></button>
      </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutRecentReview