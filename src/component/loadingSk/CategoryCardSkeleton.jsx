import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-5 shadow-sm animate-pulse">
      <div className="h-52 w-full rounded-xl bg-gray-200"></div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1">
          <div className="h-5 w-5 rounded bg-gray-200"></div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
        </div>

        <div className="h-8 w-16 rounded-md bg-gray-200"></div>
      </div>

      <div className="mt-5 h-8 w-32 rounded bg-gray-200"></div>
      <div className="mt-3 h-4 w-full rounded bg-gray-200"></div>
      <div className="mt-2 h-4 w-3/4 rounded bg-gray-200"></div>

      <div className="mt-6 h-11 w-36 rounded-lg bg-gray-200"></div>
    </div>
  );
};

export default CategorySkeleton;