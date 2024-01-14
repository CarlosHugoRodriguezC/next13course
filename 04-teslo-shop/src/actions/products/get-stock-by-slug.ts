"use server";

import prisma from "@/lib/prisma";
import { sleep } from "@/utils";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findUniqueOrThrow({
      where: {
        slug: slug,
      },
    });

    // await sleep(3);

    return product.inStock;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
