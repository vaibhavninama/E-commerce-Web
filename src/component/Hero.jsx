import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getRandomProduct } from "../api/ProductApi"
import HeroSk from "./loadingSk/HeroSk"
import { addBuy } from "../redux/features/btnBuy/btnBuy"
import { useDispatch } from "react-redux"

const Hero = () => {
  const [Loading, setLoading] = useState(true)
  const [Data, setData] = useState([])

  const Navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    async function lode() {
      const result = await getRandomProduct()
      setData(Array.isArray(result) ? result : [result])
      setLoading(false)
    }

    lode()
  }, [])

  function hendalShop(item) {
    Navigate(`/checkout`)
    dispatch(addBuy(item))
  }

  if (Loading) return <HeroSk />

  return (
    <>
      {Array.isArray(Data) &&
        Data.map((item, idx) => (
          <section
            key={idx}
            className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-10 sm:py-12 lg:py-16"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
              <div className="order-2 text-center lg:order-1 lg:text-left">
                <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 sm:text-sm">
                  Trending Product
                </span>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
                  {item.title}
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg lg:mx-0">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <button
                    onClick={() => hendalShop(item)}
                    className="w-full rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 sm:w-auto sm:px-7 sm:text-base"
                  >
                    Shop Now
                  </button>

                  <button
                    onClick={() => Navigate(`/products/${item.id}`)}
                    className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 sm:w-auto sm:px-7 sm:text-base"
                  >
                    View Details
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur">
                    <h3 className="text-lg font-bold text-gray-900">
                      ₹{(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
                    </h3>
                    <p className="text-xs text-gray-500 sm:text-sm">Special Price</p>
                  </div>

                  <div className="rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.rating}
                    </h3>
                    <p className="text-xs text-gray-500 sm:text-sm">Top Rating</p>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-white/70 p-4 shadow-sm backdrop-blur sm:col-span-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {item.stock}
                    </h3>
                    <p className="text-xs text-gray-500 sm:text-sm">Items Left</p>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <div className="absolute inset-0 rounded-[2rem] bg-blue-200/40 blur-3xl"></div>

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-4 shadow-xl backdrop-blur sm:p-6">
                    <img
                      className="mx-auto h-[240px] w-full rounded-2xl object-contain sm:h-[320px] md:h-[380px] lg:h-[440px]"
                      loading="lazy"
                      src={item?.images?.[1] || item?.images?.[0]}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  )
}

export default Hero