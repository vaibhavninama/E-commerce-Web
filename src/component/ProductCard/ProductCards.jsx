import Rating from './Rating'
import { Link } from 'react-router-dom'

const ProductCard = ({ item, loading = false }) => {
  if (loading) {
    return null
  }

  return (
    <div className="mt-4 w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-gray-300 p-3 sm:p-4 md:p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      <Link to={`/products/${item.id}`} className="block">
        <div className="overflow-hidden rounded-xl bg-white">
          <img
            className="h-40 w-full object-cover sm:h-48 md:h-56 lg:h-60"
            loading="lazy"
            src={item.thumbnail}
            alt={item.title}
          />
        </div>
      </Link>

      <div className="mt-3 sm:mt-4">
        
        <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <Rating rating={item.rating} />
          </div>

          <span className="rounded-md border border-brand-subtle bg-brand-softer px-2 py-1 text-[10px] sm:text-xs font-medium text-fg-brand-strong">
            {item.rating} out of 5
          </span>
        </div>

        <Link to={`/products/${item.id}`} className="block">
          <h3 className="line-clamp-1 text-sm sm:text-base font-semibold tracking-tight text-indigo-500">
            {item.brand}
          </h3>

          <h5 className="mt-1 sm:mt-2 line-clamp-2 sm:line-clamp-3 text-xs sm:text-sm font-medium tracking-tight text-heading">
            {item.description}
          </h5>
        </Link>

        <div className="mt-4 sm:mt-5 flex flex-col gap-3 sm:gap-4">
          
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-heading">
              ₹{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
            </span>

            <h5
              className={`text-xs sm:text-sm font-semibold tracking-tight ${
                item.availabilityStatus === 'Low Stock'
                  ? 'text-red-500'
                  : 'text-black'
              }`}
            >
              {item.availabilityStatus}
            </h5>
          </div>

          <Link
            to={`/products/${item.id}`}
            className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-blue-500 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-white shadow-xs transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-brand-medium"
          >
            <svg
              className="me-1.5 h-3 w-3 sm:h-4 sm:w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth={2}
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
              />
            </svg>
            Buy Now
          </Link>
        </div>

        <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-700">
          {item.warrantyInformation}
        </div>
      </div>
    </div>
  )
}

export default ProductCard