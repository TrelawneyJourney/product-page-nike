import SizeSelector from "../components/SizeSelector";
import ColorSelector from "../components/ColorSelector";
import { useEffect, useState } from "react";
import { getAssetUrl } from "../utils/getAssetUrl";

export default function ProductPage() {
  const [product, setProduct] = useState(null);

  const formatPrice = (precio) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(precio);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then((res) => res.json())
      .then((data) => setProduct(data[0]))
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

  if (!product)
    return <p className="text-neutral-500 text-center p-6">Cargando...</p>;

  return (
    <div className="layout-product-page p-12">
      {product && (
        <>
          {/**col-1 */}
          <div className="flex flex-col gap-4">
            <p className="font-bold text-sm uppercase">{product.marca}</p>
            <h1 className="text-xl">{product.name}</h1>
            <p className="text-neutral-500">{product.descripcion}</p>
            <div className="flex gap-1 py-4">
              {product.img.negro.map((img, i) => (
                <img
                  key={i}
                  src={getAssetUrl(img)}
                  alt={product.name}
                  className="w-[100px]"
                />
              ))}
            </div>
          </div>

          {/**col-2 */}
          <div className="overflow-hidden">
            <div className="flex justify-center items-center w-full h-auto">
              <img
                src={getAssetUrl(product.img.negro[0])}
                alt={product.name}
                className="w-[500px]"
              />
            </div>
          </div>

          {/**col-3 */}
          <div className="">
            <SizeSelector product={product} />
            <div className="flex justify-between">
              <p className="text-neutral-800 uppercase">precio</p>
              <p className="font-extrabold">{formatPrice(product.precio)}</p>
            </div>
            <ColorSelector product={product} />
          </div>
        </>
      )}
    </div>
  );
}
