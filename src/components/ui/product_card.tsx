'use client'

import { Button } from "@/components/ui/button"
import Currency from "@/components/ui/currency"
import { Product } from "@/types"
import { Expand, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC } from "react"

interface ProductCardProps {
  data: Product
}

const ProductCard: FC<ProductCardProps> = ({
  data
}) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  return (
    <div onClick={handleClick} className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Button action */}
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0].url}
          fill
          alt="Product Image"
          className=" aspect-square object-cover rounded-md"
        />

        <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className=" flex gap-x-6 justify-center">
            <Button variant="outline" className=" rounded-full hover:scale-110 transition duration-300 ease-in-out">
              <Expand size={20} className=" text-gray-600" />
            </Button>
            <Button variant="outline" className=" rounded-full hover:scale-110 transition duration-300 ease-in-out">
              <ShoppingCart size={20} className=" text-gray-600" />
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className=" font-semibold text-lg">
          {data.name}
        </p>
        <p className=" text-sm text-gray-500">
          {data.category.name}
        </p>
      </div>

      {/* Price */}
      <div className=" flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}

export default ProductCard