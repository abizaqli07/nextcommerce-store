export const revalidate = 0;

import getCategory from "@/actions/get_category";
import getColors from "@/actions/get_colors";
import getProducts from "@/actions/get_products";
import getSizes from "@/actions/get_sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
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

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId)

  return (
    <div className=" bg-white">
      <Container>
        <Billboard
          data={category.billboard}
        />
        <div className=" px-4 sm:px-6 lg:px-8 pb-24">
          <div className=" lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add Mobile filters */}
            <div className=" hidden lg:block">
              {/* todo : Filter */}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage