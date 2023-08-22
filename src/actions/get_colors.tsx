import { Color } from "@/types"

const ColorURL = `${process.env.NEXT_PUBLIC_API_URL}/colors`

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(ColorURL);

  return res.json()
}

export default getColors;