import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import SearchMobile from './component/SearchMobile'
import WantSell from './component/WantSell'
import Brand from './component/Brand'
import PriceRange from './component/PriceRange'
import Comparsion from './component/Comparsion'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SearchMobile/>
      <WantSell/>
      <Brand/>
      <PriceRange/>
      <Comparsion/>
      <Footer/>
    </div>
  )
}

export default App