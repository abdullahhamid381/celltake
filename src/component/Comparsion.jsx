import React from 'react'
import './scss/Comparison.scss'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { PriceRangedata, comparisondata, exploreimg } from './Data';

const Comparsion = () => {
    return (
        <div className="comparsion-parent">
            <div className="background">
                <div className="width">
                    <div className="title">
                        <h1>Popular comparisons</h1>
                    </div>
                    <div className="card">


                    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1800: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          comparisondata.map((item)=>{
            return(
            <SwiperSlide>
                    <div className="padding-inner">
                <div className='card-parent'>
                    <div className="name-img">
                        <div className="name">
                            <div className="img">
                                <img src="./images/samsungtext.png" alt="" />
                            </div>
                            <p>Samsung Galaxy S24 Ultra</p>
                        </div>
                        <div className="mobile-img">
                            <img src="./images/samsungmobile.png" alt="" />
                        </div>
                    </div>
                    <div className="vs-img">
                        <img src="./images/vs.png" alt="" />
                    </div>

                    <div className="name-img">
                        <div className="name">
                            <div className="img">
                                <img src="./images/vivotext.png" alt="" style={{ width: '100%' }} />
                            </div>
                            <p>Vivo V23 Pro</p>
                        </div>
                        <div className="mobile-img">
                            <img src="./images/vivomobile.png" alt="" />
                        </div>
                    </div>

                    <div className="compare-button">
                        <input type="button" value={"Compare"} />
                    </div>
                </div>
            </div>
            </SwiperSlide>
            )
          })
        }
       
      </Swiper>



                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comparsion