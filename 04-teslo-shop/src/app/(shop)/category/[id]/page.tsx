import { ProductGrid, Title } from "@/components";
import { Product, Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
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

const products: Product[] = initialData.products;

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (!["men", "women", "kid"].includes(id)) {
    return notFound();
  }

  const filteredProducts = products.filter((product) => product.gender === id);

  return (
    <>
      <Title
        title={titles[id as Category]}
        subtitle={subtitles[id as Category]}
      />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
