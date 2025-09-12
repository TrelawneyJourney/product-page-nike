import { useState } from "react";

export default function ColorSelector({ product }) {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <p className="text-neutral-800 uppercase">Color</p>
      <div className="flex gap-2">
        {product.colores.map((color, ind) => (
          <div
            key={ind}
            className={`w-8 h-8 rounded-full border cursor-pointer ${
              selectedColor === color.codigo
                ? "border-2 border-neutral-500"
                : "border-neutral-300"
            }`}
            style={{ backgroundColor: color.codigo }}
            onClick={() => setSelectedColor(color.codigo)}
          ></div>
        ))}
      </div>
    </div>
  );
}
