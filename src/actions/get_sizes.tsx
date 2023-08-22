import { Size } from "@/types"

const SizeURL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(SizeURL);

  return res.json()
}

export default getSizes;