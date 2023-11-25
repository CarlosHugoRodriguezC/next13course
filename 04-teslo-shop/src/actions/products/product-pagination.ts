"use server";

import prisma from "@/lib/prisma";
import { type Gender } from "@prisma/client";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender;
}

export const getPaginatedProductsWithImages = async (
  options: PaginationOptions
) => {
  let { page: currentPage = 1, take = 12 } = options;
  const { gender } = options;
  if (isNaN(currentPage) || currentPage < 1) currentPage = 1;

  if (isNaN(take) || take < 1) take = 12;

  try {
    const products = await prisma.product.findMany({
      take,
      skip: (currentPage - 1) * take,
      where: {
        gender: gender ? gender : undefined,
      },
      include: {
        productImages: {
          take: 2,
          select: { url: true },
          orderBy: { id: "desc" },
        },
      },
    });

    const totalPages = Math.ceil(
      (await prisma.product.count({
        where: {
          gender: gender
            ? {
                equals: gender as Gender,
              }
            : undefined,
        },
      })) / take
    );

    return {
      currentPage,
      totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.productImages.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Error getting paginated products with images");
  }
};
