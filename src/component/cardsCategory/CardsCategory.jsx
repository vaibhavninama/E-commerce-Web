import { useEffect, useState } from "react"
import { getCategory } from "../../api/ProductApi"
import CategoryCard from "./categoryCard"
import CategorySkeleton from "../loadingSk/CategoryCardSkeleton"

const CardsCategory = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    async function Category() {
      const response = await getCategory()
      setData(response)
      setLoading(false)
      console.log(response)
    }

    Category()
  }, [])

  console.log(typeof data)

  return (
    <section className="w-full bg-gray-300 py-6 sm:py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? [...Array(4)].map((_, index) => (
                <CategorySkeleton key={index} />
              ))
            : data.slice(0, 4).map((item, index) => (
                <CategoryCard
                  key={typeof item === "string" ? item : item.slug || index}
                  item={item}
                />
              ))}
        </div>
      </div>
    </section>
  )
}

export default CardsCategory