import { IoMenu } from "react-icons/io5";
import { menu, menuCompleto } from "../data/nav";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function MenuDesplegable() {
  const [menuOpen, setmenuOpen] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => {
    setmenuOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  return (
    <div className="relative">
      {/*hamburger button */}
      <button onClick={toggleMenu}>
        <IoMenu className="lg:hidden nav-items" />
      </button>

      {/* menu desplegable mobile */}
      {menuOpen && (
        <div className="absolute right-0 top-full w-48 px-4 bg-white shadow-md">
          <ul className="flex flex-col">
            {menu.map((i) => (
              <li key={i} className="border-b border-gray-200">
                <button
                  onClick={() => handleItemClick(i)}
                  className="w-full flex justify-between items-center"
                >
                  {i}
                  <span>{activeItem === i ? "-" : "+"}</span>
                </button>

                {activeItem === i && menuCompleto[i] && (
                  <div className="pl-2 transition-all duration-300">
                    {Object.entries(menuCompleto[i]).map(([cat, links]) => (
                      <AccordionItem key={cat} title={cat} links={links} />
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
