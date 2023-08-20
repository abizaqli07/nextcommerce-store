import { Product } from "@/types";
import qs from 'query-string';

const ProductURL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: ProductURL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured
    }
  });
  
  const res = await fetch(url);

  return res.json()
}

export default getProducts;