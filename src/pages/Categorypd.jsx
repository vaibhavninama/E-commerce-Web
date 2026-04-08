import React from 'react'
import { useSelector } from 'react-redux'
import ProductCards from '../component/ProductCard/ProductCards'

const Category = () => {
  const category = useSelector((state) => state.category.category)

  console.log('Category:', category)
  console.log('categrory', category)

  if (!category || category.length === 0) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center px-4">
        <h1 className="text-center text-lg font-semibold text-gray-600 sm:text-xl">
          No category products found
        </h1>
      </div>
    )
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 md:px-8 lg:px-10 xl:px-14">
      <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {category.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Category