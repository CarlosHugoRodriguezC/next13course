export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function HomePage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } =
    await getPaginatedProductsWithImages({
      page,
    });

  if (!products.length) {
    redirect("/");
  }

  return (
    <div className="">
      <Title title="Shop" subtitle="All products" className="mb-2" />
      <div className="mb-10">
        <ProductGrid products={products} />
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
