import React from 'react'

const HeroSk = () => {
  return (
     <div className="w-full bg-gray-200 animate-pulse py-12 px-6 md:px-16">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="flex-1 space-y-4">
          {/* Title */}
          <div className="h-10 w-3/4 bg-gray-300 rounded"></div>
          <div className="h-10 w-1/2 bg-gray-300 rounded"></div>

          {/* Description */}
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>

          {/* Button */}
          <div className="h-10 w-32 bg-gray-400 rounded-lg mt-4"></div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="h-[300px] w-[250px] bg-gray-300 rounded-lg"></div>
        </div>
      </div>

      {/* BRANDS */}
      <div className="flex flex-wrap justify-center gap-10 mt-12">
        {Array(6).fill().map((_, i) => (
          <div key={i} className="h-6 w-20 bg-gray-300 rounded"></div>
        ))}
      </div>
    </div>
  )
}

export default HeroSk