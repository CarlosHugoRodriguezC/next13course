import { ProductGrid, Title } from "@/components";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";

const products: Product[] = initialData.products;

export default function HomePage() {
  return (
    <div className="">
      <Title title="Shop" subtitle="All products" className="mb-2" />
      <div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
