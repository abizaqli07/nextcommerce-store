export const revalidate = 0;

import getProducts from "@/actions/get_products";
import { FC } from "react";

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  });

  return (
    <div>CategoryPage</div>
  )
}

export default CategoryPage