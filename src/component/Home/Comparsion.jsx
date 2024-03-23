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



// MATERIAL UI================

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Comparsion = () => {



    // MATERIL UI MULTIPLE SELECT



    const [agetwo, setAgetwo] = React.useState('');

    const handleChangetwo = (event) => {
        setAgetwo(event.target.value);
    };
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <div className="comparsion-parent">
            <div className="background">
                <div className="width">

                    {/* TITLE============= */}


                    <div className="title">
                        <h1>Popular comparisons</h1>
                    </div>


                    {/* CARDS SLIDER=========== */}


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
                                comparisondata.map((item) => {
                                    return (
                                        <SwiperSlide>
                                            <div className="padding-inner">
                                                <div className='card-parent'>
                                                    <div className="name-img">
                                                        <div className="name">
                                                            <div className="img samsungss">
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


                    <div className="compare">
                        <div className="grid">
                        <div className="first">
                        <Box className="box">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select model</InputLabel>
                                    <Select 
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10} style={{paddingTop:'50px'}}>Samsung</MenuItem>
                                        <MenuItem value={10}>Apple</MenuItem>
                                        <MenuItem value={10}>Vivo</MenuItem>
                                     
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="vs">
                            <img src="./images/vs.png" alt="" className='hide'/>
                            <img src="./images/vstwo.png" alt="" />
                        </div>

                        <div className="first">
                        <Box className="box">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Select model</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={agetwo}
                                        label="Age"
                                        onChange={handleChangetwo}
                                    >
                                      <MenuItem value={10} style={{paddingTop:'50px'}}>Samsung</MenuItem>
                                        <MenuItem value={10}>Apple</MenuItem>
                                        <MenuItem value={10}>Vivo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div className="button">
                            <input type="button" value={"Compare"} />
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Comparsion