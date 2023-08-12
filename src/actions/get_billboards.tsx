import { Billboard } from "@/types"

const BillboardURL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${BillboardURL}/${id}`);

  return res.json()
}

export default getBillboard;