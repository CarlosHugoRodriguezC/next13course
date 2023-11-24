import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  await prisma.productImage.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // categories

  const { products, categories } = initialData;

  await prisma.category.createMany({
    data: categories.map((category) => ({
      name: category,
    })),
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  products.forEach(async (product) => {
    const { images, type, ...productData } = product;
    const dbProduct = await prisma.product.create({
      data: { ...productData, categoryId: categoriesMap[type] },
    });

    await prisma.productImage.createMany({
      data: images.map((image) => ({
        url: image,
        productId: dbProduct.id,
      })),
    });
  });

  console.log(categoriesMap);

  // products

  // await prisma.product.createMany({
  //   data: initialData.products.map((product) => ({
  //     title: product.title,
  //     description: product.description,
  //     price: product.price,
  //     slug: product.slug,
  //     gender: product.gender,
  //     inStock: product.inStock,
  //     sizes: product.sizes,
  //     tags: product.tags,
  //   })),
  // });

  console.log("database seeded successfully");
}

(() => {
  if (process.env.NODE_ENV !== "development") {
    console.log(process.env.NODE_ENV);
    console.error("This script can only be run in development mode.");
    process.exit(1);
  }
  main();
})();
