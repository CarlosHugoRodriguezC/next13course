import { type Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Available sizes</h3>
      <div className="flex gap-1">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx(
              "px-2 py-1 min-h-[2rem] min-w-[2.5rem] rounded-lg hover:bg-blue-200 text-base",
              {
                "bg-blue-500 text-white": size === selectedSize,
              }
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
