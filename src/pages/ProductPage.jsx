import SizeSelector from "../components/SizeSelector";
import ColorSelector from "../components/ColorSelector";
import { useEffect, useState } from "react";
import { getAssetUrl } from "../utils/getAssetUrl";
import { formatPrice } from "../utils/formatPrice";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelecteImage] = useState(null);

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
    setSelecteImage(product.img[color][0]);
  };

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/products.json`)
      .then((res) => res.json())
      .then((data) => {
        const prod = data[0];
        setProduct(prod);

        const color = prod.colores[0].nombre;
        setSelectedColor(color);
        setSelecteImage(prod.img[color][0]);
      })
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

  if (!product)
    return <p className="text-neutral-500 text-center p-6">Cargando...</p>;

  return (
    <div className="layout-product-page p-12">
      {product && (
        <>
          {/**col-1 */}
          <div className="col1 flex flex-col gap-4">
            <p className="font-bold text-sm uppercase hidden md:block">
              {product.marca}
            </p>
            <h1 className="text-xl hidden md:block">{product.name}</h1>
            <p className="text-neutral-500 hidden md:block">
              {product.descripcion}
            </p>
            <div className="flex flex-wrap xl:flex-nowrap gap-1 md:py-4 justify-center md:justify-start">
              {product.img[selectedColor].map((img, i) => (
                <img
                  key={i}
                  src={getAssetUrl(img)}
                  alt={product.name}
                  className={`w-[100px] cursor-pointer border-2 ${
                    selectedImage === img
                      ? "border-neutral-500 brightness-75"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelecteImage(img)}
                />
              ))}
            </div>
          </div>

          {/**col-2 */}
          {/** src={getAssetUrl(product.img.negro[0])}*/}
          <div className="col2 flex flex-col gap-2">
            <p className="font-bold text-sm uppercase md:hidden">
              {product.marca}
            </p>
            <p className="text-xl md:hidden">{product.name}</p>
            <p className="font-extrabold md:hidden">
              {formatPrice(product.precio)}
            </p>
            <div className="flex justify-center items-center w-full h-auto">
              <img
                src={getAssetUrl(selectedImage)}
                alt={product.name}
                className="w-[500px]"
              />
            </div>
          </div>

          {/**col-3 */}
          <div className="col3">
            <div className="flex justify-center mb-6 md:hidden">
              <ColorSelector
                product={product}
                selectedColor={selectedColor}
                setSelectedColor={handleSelectedColor}
              />
            </div>
            <SizeSelector product={product} />
            <div className="flex justify-between">
              <p className="text-neutral-800 uppercase hidden md:block">
                precio
              </p>
              <p className="font-extrabold hidden md:block">
                {formatPrice(product.precio)}
              </p>
            </div>
            <div className="hidden md:block">
              <ColorSelector
                product={product}
                selectedColor={selectedColor}
                setSelectedColor={handleSelectedColor}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
