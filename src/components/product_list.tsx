import { Product } from "@/types";
import { FC } from "react";
import NoResult from "@/components/ui/no_result";
import ProductCard from "@/components/ui/product_card";

interface ProductListProps {
  title: string;
  items: Product[]
}

const ProductList: FC<ProductListProps> = ({
  title,
  items
}) => {
  return (
    <div className=" spacr-y-4">
      <div className=" font-bold text-3xl">{title}</div>
      {items.length === 0 && <NoResult />}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ProductList