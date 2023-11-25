"use client";

import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import {
  IoChevronBack,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { generatePaginationNumbers } from "@/utils";

interface Props {
  totalPages: number;
}

export const Pagination = (props: Props) => {
  const { totalPages } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? "1";

  let currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const pages = generatePaginationNumbers(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (pageNumber === 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex text-center items-center justify-center mt-10 mb-32">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center list-style-none">
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 rounded-lg  border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <IoChevronBackOutline size={30} />
            </Link>
          </li>
          {pages.map((page, index) => (
            <li key={page} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 bg-transparent px-3 rounded-lg border-0 outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    "!bg-blue-500 text-white hover:!bg-blue-400 hover:text-white":
                      currentPage === page,
                  }
                )}
                href={createPageUrl(page === "..." ? currentPage + 1 : page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link relative block py-1.5 px-3 rounded-lg border-0 bg-transparent outline-none transition-all duration-300  text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
