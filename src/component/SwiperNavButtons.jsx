import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>Prev</button>
      <span>View more</span>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
