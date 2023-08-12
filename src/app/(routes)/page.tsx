import getBillboard from "@/actions/get_billboards";
import Billboard from "@/components/billboard"
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("cll3p278u0001tvzw12ec9d8v")

  return (
    <Container>
      <div className=" space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage