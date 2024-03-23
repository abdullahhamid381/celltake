
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import './scss/TopSell.scss';

import { SwiperNavButtons } from './SwiperNavButtons';
import { PriceRangedata, topsellbutton, topsellingmobiles } from './Data';



import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";



function App() {
  return (
<div className="topsell-parent">
  <div className="back">
    <div className="width">
  <div className="width-button-title">
  <div className="title">
  <h1>Top Selling mobile phones</h1>
      </div>
      <div className="slider-button">
    <Swiper
        slidesPerView={3}
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            topsellbutton.map((item)=>{
                return(
                    <SwiperSlide>
                     <button className={item.class}>{item.h1}</button>
                    </SwiperSlide>
                )
            })
        }
       
      </Swiper>
    </div>
  </div>
      <div className="App">
  
  <h1>
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
    topsellingmobiles.map((item)=>{
      return(
        <SwiperSlide>
          <div className='card-parent'>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="detail">
              <div className="icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="name">
                <p>{item.name}</p>
                <h1>{item.price}</h1>
              </div>
              <div className="compare">
             
                  <div className="call">
                  <div className="icon-call">
                  <IoIosCall />
                  </div>
                  <div className="envelope">
                  <FaEnvelope />
                  </div>
                  </div>
                <div className="butt">
                  <input type="button" value={"Compare"} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      )
    })
   }
   <SwiperNavButtons/>
       
      </Swiper>
  </h1>
</div>
    </div>
  </div>
</div>
  );
}

export default App;
