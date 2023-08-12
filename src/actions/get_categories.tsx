import { Category } from "@/types"

const CategoryURL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(CategoryURL);

  return res.json()
}

export default getCategories;