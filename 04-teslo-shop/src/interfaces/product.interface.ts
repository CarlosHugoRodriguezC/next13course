export interface Product {
  id: string;
  description: string | null; 
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  // type: ProductType; // TODO: Uncomment this line
  gender: Category;
}

export type Category = "men" | "women" | "kid" | "unisex";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ProductType = "shirts" | "pants" | "hoodies" | "hats";
