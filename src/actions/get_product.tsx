import { Product } from "@/types";


const ProductURL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${ProductURL}/${id}`);

  return res.json()
}

export default getProduct;