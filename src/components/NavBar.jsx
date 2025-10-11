import SearchBar from "./SearchBar";
import { menu, menuCompleto } from "../data/nav";
import { useState } from "react";
import NikeSvg from "../assets/svg/NikeSvg";
import MenuIcons from "./MenuIcons";
import MenuDesplegable from "./MenuDesplegable";

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(null);

  return (
    <nav className="relative" onMouseLeave={() => setMenuActive(null)}>
      <div className="w-full flex justify-between items-center px-4 md:px-10">
        {/* logo */}
        <div className="logo">
          <a href="">
            <NikeSvg />
          </a>
        </div>

        {/* menu  */}
        <ul className="hidden lg:flex">
          {menu.map((item) => (
            <li
              key={item}
              onMouseEnter={() => setMenuActive(item)}
              className="px-3 py-1 font-semibold hover:underline hover:decoration-2 hover:underline-offset-4 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* buscador inicio */}
        <div className="flex items-center gap-2">
          <SearchBar />
          <MenuIcons />
          <MenuDesplegable />
        </div>
      </div>

      {/* menu desplegable desktop */}
      {menuActive && menuCompleto[menuActive] && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg flex justify-center py-6 z-50">
          <div className="flex gap-8 max-w-6xl w-full justify-center">
            {Object.entries(menuCompleto[menuActive]).map(([cat, links]) => (
              <div
                key={cat}
                className="text-sm flex flex-col basis-[180px] max-w-[220px] shrink-0"
              >
                <h3 className="font-semibold mb-2">{cat}</h3>
                <ul className="">
                  {links.map((link) => (
                    <li
                      key={link}
                      className="text-gray-600 hover:text-black mb-2 leading-snug break-words whitespace-normal cursor-pointer"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
