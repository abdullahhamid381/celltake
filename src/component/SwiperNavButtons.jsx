import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoCaretForwardOutline,IoCaretBack  } from "react-icons/io5";
export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
   <div>
    <span onClick={() => swiper.slidePrev()}>Next</span>
   <button ><IoCaretForwardOutline /></button>
   </div>
      <span>View more</span>
      <div>
        <span onClick={() => swiper.slideNext()}>back</span>
      <button ><IoCaretBack /></button>
      </div>
    </div>
  );
};
