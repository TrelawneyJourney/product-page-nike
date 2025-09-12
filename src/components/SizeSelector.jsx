import { TbRulerMeasure } from "react-icons/tb";

export default function SizeSelector({ product }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-4">
        <p className="text-neutral-800 uppercase">selecciona tu talle</p>
        <div className="flex justify-center items-center gap-1 text-sm text-neutral-600">
          <TbRulerMeasure />
          <p>guía de talles</p>{" "}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2">
        {product.talle.map((size, ind) => (
          <div
            key={ind}
            className="text-xs w-32 p-2 flex justify-center items-center border border-neutral-500 rounded-xs cursor-pointer hover:bg-neutral-200"
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
}
