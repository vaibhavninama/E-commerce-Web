import { lazy ,Suspense } from 'react'
import Nav from '../component/nav/Nav'
import Hero from '../component/Hero'
import CardsCategory from '../component/cardsCategory/CardsCategory'
import SearchBar from '../component/SearchBar/SearchBar'


const Home = () => {

  return (
    <div>
    
        <Hero/>
        <CardsCategory/>
      

    </div>
  )
}

export default Home    