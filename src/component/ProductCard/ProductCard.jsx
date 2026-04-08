import { useEffect, useState } from 'react'
import { getAllProduct } from '../../api/ProductApi'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import Skeleton from '../loadingSk/ProductCardSkeleton'
import ProductDetails from '../../pages/ProductDetails'

const ProductCard = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      const response = await getAllProduct()
      console.log(response)
      setData(Array.isArray(response) ? response : [response])
      setLoading(false)
    }

    getData()
  }, [])

  return (
    <>
      {(loading ? [...Array(6)] : data).map((item, index) =>
        loading ? (
          <Skeleton key={index} />
        ) : (
          <div
            key={index}
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-sm bg-neutral-primary-soft p-4 sm:p-5 md:p-6 border bg-gray-300 border-gray-200 rounded-lg shadow-xs"
          >
            <Link to={`/products/${item.id}`}>
              <img
                className="rounded-base mb-4 sm:mb-6 object-cover w-full h-40 sm:h-44 md:h-48 lg:h-52"
                loading='lazy'
                src={item.thumbnail}
                alt="product image"
              />
            </Link>

            <div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  <Rating rating={item.rating} key={item.id || index} />
                </div>

                <span className="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-[10px] sm:text-xs font-medium px-1.5 py-0.5 rounded-sm">
                  {item.rating} out of 5
                </span>
              </div>

              <Link to={`/products/${item.id}`}>
                <h3 className='text-base sm:text-lg text-indigo-500 text-heading font-semibold tracking-tight'>
                  {item.brand}
                </h3>

                <h5 className="text-xs sm:text-sm text-heading font-semibold tracking-tight line-clamp-2 sm:line-clamp-3">
                  {item.description}
                </h5>
              </Link>

              <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
                <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-heading">
                  ₹{item.price * 2}
                </span>

                <h5
                  className={`text-xs sm:text-sm text-heading font-semibold tracking-tight ${
                    item.availabilityStatus === 'Low Stock' ? 'text-red-500' : 'text-black'
                  }`}
                >
                  {item.availabilityStatus}
                </h5>

                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center bg-blue-500 rounded-xl text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 text-xs sm:text-sm px-3 py-2 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 me-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                    />
                  </svg>

                  <Link to={`/products/${item.id}`}>more Details</Link>
                </button>
              </div>

              <div className="mt-3 sm:mt-4 text-xs sm:text-sm">
                {item.warrantyInformation}
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default ProductCard