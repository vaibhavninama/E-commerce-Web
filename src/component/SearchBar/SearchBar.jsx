import React from 'react'

const SearchBar = () => {
  return (
 <div className='w-full bg-gray-300'>
     <form className="flex items-center max-w-sm mx-auto space-x-2 pt-2 mt-4">
  <label htmlFor="simple-search" className="sr-only">
    Search
  </label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      
    </div>
    <input
      type="text"
      id="simple-search"
      className="px-3 py-2.5 bg-neutral-secondary-medium border bg-white rounded  outline-none border-default-medium rounded-base ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
      placeholder="Search branch name..."
      required=""
    />
  </div>
  <button
    type="submit"
    className="inline-flex items-center outline-none border-none justify-center shrink-0 text-black  bg-gray-100 rounded :hover:focus:ring-4 focus:ring-brand-medium shadow-xs rounded-base w-10 h-10 focus:outline-none"
  >
    <svg
      className="w-5 h-5"
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
        strokeWidth={2}
        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
    <span className="sr-only">Icon description</span>
  </button>
</form>
 </div>

  )
}

export default SearchBar