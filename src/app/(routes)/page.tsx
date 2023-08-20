import getBillboard from "@/actions/get_billboards";
import getProducts from "@/actions/get_products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product_list";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true })
  const billboard = await getBillboard("cll3p278u0001tvzw12ec9d8v")

  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Product" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage