import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-gray-300 p-6 shadow-xs animate-pulse">
      <div className="mb-6 h-[260px] w-full rounded-xl bg-gray-200" />

      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-5 w-5 rounded-full bg-gray-200" />
          ))}
        </div>

        <div className="h-8 w-24 rounded-md bg-gray-200" />
      </div>

      <div className="space-y-3">
        <div className="h-5 w-full rounded bg-gray-200" />
        <div className="h-5 w-11/12 rounded bg-gray-200" />
        <div className="h-5 w-10/12 rounded bg-gray-200" />
        <div className="h-5 w-8/12 rounded bg-gray-200" />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="h-10 w-24 rounded bg-gray-200" />
        <div className="h-11 w-36 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;