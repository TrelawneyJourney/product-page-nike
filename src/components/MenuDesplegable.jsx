import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { menu, menuCompleto } from "../data/nav";
import { useEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";

export default function MenuDesplegable() {
  const [menuOpen, setmenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef();

  const toggleMenu = () => {
    setmenuOpen((prev) => !prev);
  };

  const handleItemClick = (item) => {
    setActiveItem((prev) => (prev === item ? null : item));
  };

  useEffect(() => {
    const handleClickOut = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setmenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOut);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      {/*hamburger button */}
      <button onClick={toggleMenu}>
        <IoMenu className="lg:hidden nav-items" />
      </button>

      {/* menu desplegable mobile */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full w-60 px-4 py-6 bg-white shadow-md"
        >
          <ul className="flex flex-col gap-3">
            {menu.map((i) => (
              <li key={i} className="px-3 py-1 font-semibold cursor-pointer">
                <button
                  onClick={() => handleItemClick(i)}
                  className="w-full flex justify-between items-center"
                >
                  {i}
                  <span>
                    {activeItem === i ? <RxCross2 /> : <MdKeyboardArrowDown />}
                  </span>
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
