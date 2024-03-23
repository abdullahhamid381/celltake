import React from 'react'
import Navbar from './Home/Navbar'
import Hero from './Home/Hero'
import SearchMobile from './Home/SearchMobile'
import WantSell from './Home/WantSell'
import TopSell from './Home/TopSell'
import Brand from './Home/Brand'
import PriceRange from './Home/PriceRange'
import Comparsion from './Home/Comparsion'
import Footer from './Home/Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SearchMobile/>
        <WantSell/>
        <TopSell/>
        <Brand/>
        <PriceRange/>
        <Comparsion/>
        <Footer/>
    </div>
  )
}

export default Home