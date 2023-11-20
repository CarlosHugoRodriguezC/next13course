import {
  ProductMobileSlideShow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  Title,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2 ">
        {/* Mobile */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />
        {/* Desktop */}
        <ProductSlideshow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      {/* Details */}
      <div className="cols-span-1 px-5">
        <h1 className={`${titleFont} antialiased text-xl font-bold`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>
        {/* size selector */}
        <SizeSelector
          selectedSize={product.sizes.at(0)!}
          availableSizes={product.sizes}
        />
        {/* quantity selector */}
        <QuantitySelector quantity={1} />
        {/* add to cart button */}
        <button className="btn-primary my-5 w-full">Add to cart</button>
        <h3 className="text-sm font-bold">Description</h3>
        <p className="text-sm">{product.description}</p>
      </div>
    </div>
  );
}
