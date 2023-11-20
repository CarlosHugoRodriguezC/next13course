import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="grid place-content-center h-[75dvh]">
      <div className="flex justify-center items-start p-5">
        <IoCartOutline size={80} className="mx-5" />
        <div>
          <h1 className="text-3xl font-bold">Your cart is empty</h1>
          <p className="text-gray-500 mb-5">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href={"/"} className="text-blue-500">
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
