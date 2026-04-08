import { useDispatch } from "react-redux";
import { deecresQuleity, inncerssQuleity } from "../../redux/features/cart/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="mt-4 w-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-300 p-4 shadow-xs sm:mt-6 sm:max-w-sm sm:p-5 md:p-6">
    <div className="mb-4 flex h-40 sm:h-44 md:h-48 lg:h-52 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3 sm:p-4">
  <img
    className="h-full w-full object-contain"
    loading="lazy"
    src={item.thumbnail}
    alt="product image"
  />
</div>

      <div>
        <a href="#">
          <h3 className="text-base font-semibold tracking-tight text-indigo-500 sm:text-lg">
            {product.brand}
          </h3>

          <h5 className="mt-1 line-clamp-2 text-xs font-semibold tracking-tight text-heading sm:text-sm">
            {product.description}
          </h5>
        </a>

        <div className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-2xl font-extrabold text-heading sm:text-3xl">
            ₹{product.price * 2}
          </span>

          <div className="flex w-max items-center gap-3 border border-gray-300 bg-white px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5">
            <button
              onClick={() => dispatch(deecresQuleity(product.id))}
              type="button"
              className="cursor-pointer border-0 outline-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                viewBox="0 0 121.805 121.804"
              >
                <path
                  d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                  data-original="#000000"
                />
              </svg>
            </button>

            <span className="block px-4 text-sm font-semibold text-slate-900 sm:px-6">
              {product.quality}
            </span>

            <button
              onClick={() => dispatch(inncerssQuleity(product.id))}
              type="button"
              className="cursor-pointer border-0 outline-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                  data-original="#000000"
                />
                <path
                  d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                  data-original="#000000"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-700 sm:mt-4 sm:text-sm">
          {product.warrantyInformation}
        </div>
      </div>
    </div>
  );
};

export default CartCard;