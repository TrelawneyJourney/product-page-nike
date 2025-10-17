import { IoMenu } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { menu, menuCompleto, menuMobile } from "../data/nav";
import { useEffect, useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
import { SiJordan } from "react-icons/si";
import ConverseSvg from "../assets/svg/ConverseSvg";

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
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [menuOpen]);

  return (
    <div className="relative">
      {/*hamburger button */}
      <button onClick={toggleMenu} className="flex items-center">
        <IoMenu className="lg:hidden nav-items" />
      </button>

      {/* menu desplegable mobile */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40" />
          <div
            ref={menuRef}
            className="fixed top-0 right-0 w-72 max-h-screen bg-white px-6 py-6 shadow-md z-50 transform transition-transform duration-300 overflow-y-auto flex flex-col"
          >
            <button onClick={toggleMenu} className="self-end mb-4">
              <RxCross2 className="nav-items" />
            </button>
            <ul className="flex flex-col gap-3 mb-10">
              {menu.map((i) => (
                <li
                  key={i}
                  className="px-3 py-1 font-semibold cursor-pointer hover:text-neutral-400"
                >
                  <button
                    onClick={() => handleItemClick(i)}
                    className="w-full flex justify-between items-center"
                  >
                    {i}
                    <span>
                      {activeItem === i ? (
                        <RxCross2 />
                      ) : (
                        <MdKeyboardArrowDown />
                      )}
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

            {/* jordan & converse */}
            <div className="flex flex-col gap-2 mb-10">
              <div className="flex justify-start items-baseline gap-2 text-lg font-semibold cursor-pointer hover:text-neutral-400">
                <SiJordan className="w-6 h-6" />
                <p>Jordan</p>
              </div>
              <div className="flex justify-start items-center gap-2 text-lg font-semibold cursor-pointer hover:text-neutral-400">
                <ConverseSvg />
                <p>Converse</p>
              </div>
            </div>

            {/* member */}
            <div className="flex flex-col gap-8 py-12 ">
              <p className="text-neutral-600 text-xl">
                Hazte Nike Member para descubrir los mejores productos, la
                motivación que necesitas e historias del deporte.{" "}
                <span className="text-black font-bold cursor-pointer">
                  Más información.
                </span>
              </p>
              <div className="flex gap-2 font-bold">
                <button className="bg-black text-white rounded-full p-2 hover:bg-neutral-600">
                  Únete a nosotros
                </button>
                <button className="bg-white border border-neutral-400 rounded-full p-2 hover:bg-neutral-500">
                  Iniciar sesión
                </button>
              </div>
            </div>
            <div className="flex">
              <ul>
                {menuMobile.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li className="flex items-center gap-3 mb-3 font-semibold cursor-pointer">
                      <Icon className="text-lg" />
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
