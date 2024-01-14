"use server";

import prisma from "@/lib/prisma";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: {
        slug: slug,
      },
    });

    return product.inStock;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong when getting stock by slug");
  }
};
