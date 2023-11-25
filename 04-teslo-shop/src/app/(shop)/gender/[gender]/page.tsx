export const revalidate = 60;

import { Pagination, ProductGrid, Title } from "@/components";
import type { Category } from "@/interfaces";
import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "../../../../actions/products/product-pagination";
import { type Gender } from "@prisma/client";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}

const titles: Record<Category, string> = {
  kid: "For kids",
  men: "For men",
  women: "For women",
  unisex: "For everyone",
};

const subtitles: Record<Category, string> = {
  kid: "Discover stylish and trendy clothes for your little ones.",
  men: "Explore the latest fashion trends for men.",
  women: "Find fashionable and elegant clothing options for women.",
  unisex: "Discover versatile and trendy clothing options for everyone.",
};

export default async function GenderPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, totalPages } = await getPaginatedProductsWithImages({
    page,
    gender: gender as Gender,
  });

  if (!products.length) {
    redirect(`/gender/${gender}`);
  }

  return (
    <>
      <Title
        title={titles[gender as Category]}
        subtitle={subtitles[gender as Category]}
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
