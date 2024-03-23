import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import SearchMobile from './component/SearchMobile'
import WantSell from './component/WantSell'
import Brand from './component/Brand'
import PriceRange from './component/PriceRange'
import Comparsion from './component/Comparsion'
import Footer from './component/Footer'
import TopSell from './component/TopSell'




const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SearchMobile/>
   
 <TopSell/>
      <WantSell/>
      <Brand/>
      <PriceRange/>
      <Comparsion/>
      <Footer/>
    </div>
  )
}

export default App