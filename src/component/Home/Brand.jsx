import React from 'react'
import './scss/Brand.scss'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { exploreimg } from './Data';
const Brand = () => {
  return (
   <div className="explore-parent">
    <div className="explore-width">
    <div className="title">
        <h1>Explore from brands</h1>
    </div>
    <div className="img">
        <img src="./images/brand.png" alt="" />
    </div>

    {/* <div className="slider">
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            exploreimg.map((item)=>{
                return(
                    <SwiperSlide>
                        <img src={item.img} alt="" />
                    </SwiperSlide>
                )
            })
        }
       
      </Swiper>
    </div> */}
    </div>
   </div>
  )
}

export default Brand