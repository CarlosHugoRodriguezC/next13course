"use server";

import prisma from "@/lib/prisma";

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        slug: slug,
      },
      include: {
        productImages: {
          select: {
            url: true,
          },
          orderBy: {
            id: "desc",
          },
        },
      },
    });

    if (!product) return null;

    return {
      ...product,
      images: product.productImages.map((image) => image.url),
    };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting product by slug");
  }
};
