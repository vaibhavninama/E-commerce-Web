import { useDispatch } from "react-redux";
import { deecresQuleity, inncerssQuleity } from "../../redux/features/cart/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="mt-4 w-full max-w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-300 p-4 shadow-xs sm:mt-6 sm:max-w-sm sm:p-5 md:p-6">
      <a href="#">
        <img
          className="mb-4 h-40 w-full rounded-base object-contain bg-white sm:mb-5 sm:h-44 md:mb-6 md:h-48"
          loading="lazy"
          src={product?.thumbnail || '/imgs/default.jpg'}
          alt="product image"
        />
      </a>

      <div>
        <a href="#">
          <h3 className="text-base font-semibold tracking-tight text-indigo-500 sm:text-lg">
            {product?.brand || 'No brand'}
          </h3>

          <h5 className="mt-1 line-clamp-2 text-xs font-semibold tracking-tight text-heading sm:text-sm">
            {product?.description || 'No description'}
          </h5>
        </a>

        <div className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-2xl font-extrabold text-heading sm:text-3xl">
            ₹{Number(product?.price || 0).toFixed(2)}
          </span>

          <div className="flex w-max items-center gap-3 border border-gray-300 bg-white px-3 py-2 sm:gap-4 sm:px-4 sm:py-2.5">
            <button
              onClick={() => dispatch(deecresQuleity(product.id))}
              type="button"
              className="cursor-pointer border-0 outline-0"
            >
              -
            </button>

            <span className="block px-4 text-sm font-semibold text-slate-900 sm:px-6">
              {product?.quality || 1}
            </span>

            <button
              onClick={() => dispatch(inncerssQuleity(product.id))}
              type="button"
              className="cursor-pointer border-0 outline-0"
            >
              +
            </button>
          </div>
        </div>

        <div className="mt-3 text-xs text-gray-700 sm:mt-4 sm:text-sm">
          {product?.warrantyInformation || ''}
        </div>
      </div>
    </div>
  );
};

export default CartCard;