import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoCaretForwardOutline,IoCaretBack  } from "react-icons/io5";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <div className='icon'>
        <span onClick={() => swiper.slideNext()}><IoCaretBack /></span>
    
      </div>
   
   <div>
   <div className="view">
   <h3>View more</h3>
   </div>
   </div>
      <div className='icon'>
    <span onClick={() => swiper.slidePrev()}><IoCaretForwardOutline /></span>

   </div>
    </div>
  );
};
