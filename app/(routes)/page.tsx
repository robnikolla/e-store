import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {
  const billboard = await getBillboard("1852227b-2a8e-47e9-8645-405f2a4a772d");
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />

        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8 ">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
