import React from 'react'
import Rating from './Rating'

const Reviews = ({rev}) => {
  return (
    <>
     <figure className="max-w-screen-md mt-4 border-b-2 pb-3 bg-gray-100 px-5 py-3 rounded">
  <div className="flex items-center space-x-1 mb-4">
     <Rating rating={rev.rating } />
  </div>
  <blockquote>
    <p className="text-2xl font-semibold text-heading tracking-tight">
      {rev.comment}
    </p>
  </blockquote>
  <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
   
    <div className="flex items-center divide-x rtl:divide-x-reverse divide-default">
      <cite className="pe-3 font-medium text-heading">{rev.reviewerName}</cite>
      <cite className="ps-3 text-sm text-body">{rev.date}</cite>
    </div>
  </figcaption>
</figure>
    </>
  )
}

export default Reviews