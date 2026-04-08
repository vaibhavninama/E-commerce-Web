import React from 'react'
import ProductCard from '../component/ProductCard/ProductCard'

const Products = () => {
  return (
    <div className='px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-10 flex flex-wrap gap-4 sm:gap-5 md:gap-6 justify-center'>
      <ProductCard />
    </div>
  )
}

export default Products