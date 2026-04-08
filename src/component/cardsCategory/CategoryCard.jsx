import React from "react";
import { getProductByCategory } from "../../api/ProductApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryAdd } from "../../redux/features/filters/filtersSlice";

const CategoryCard = ({ item }) => {
  const dispatch = useDispatch();

  async function hendalCategory(name) {
    let result = await getProductByCategory(name);
    dispatch(categoryAdd(result));
  }

  return (
    <div className="w-full max-w-full sm:max-w-sm rounded-2xl border border-gray-300 bg-white p-4 sm:p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <a
        href="#"
        className="flex h-40 sm:h-44 md:h-48 lg:h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-gray-300"
      >
        <img
          className="h-full w-full object-co"
          src={`/imgs/${item.slug}.jpg`}
          alt={item.name}
          onError={(e) => {
            e.target.src = "/imgs/default.jpg";
          }}
        />
      </a>

      <div className="mt-3 sm:mt-4">
        <h5 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-gray-900">
          {item.name}
        </h5>

        <p className="mt-2 text-xs sm:text-sm text-gray-500">
          Explore top quality {item.name.toLowerCase()} products.
        </p>

        <Link to={`/category/${item.name}`} className="mt-4 sm:mt-5 flex items-center justify-between">
          <button
            onClick={() => {
              hendalCategory(item.name);
            }}
            type="button"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-black px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
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
            Explore more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;