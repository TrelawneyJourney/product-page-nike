import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import { menu, menuCompleto } from "../data/nav";
import { useState } from "react";
import NikeSvg from "../assets/svg/NikeSvg";

export default function Header() {
  const [menuActive, setMenuActive] = useState(null);

  return (
    <div
      className="flex flex-col relative"
      onMouseLeave={() => setMenuActive(null)}
    >
      <TopBar />

      <nav className="w-full flex justify-between items-center px-4 md:px-10 ">
        <div className="logo">
          <a href="">
            <NikeSvg />
          </a>
        </div>

        {/* menu  */}
        <ul className="hidden md:flex">
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

        <div className="flex gap-2">
          <SearchBar />
          <a href="#">
            <IoSearch className="nav-items md:hidden" />
          </a>
          <a href="#">
            <LuUser className="nav-items" />
          </a>
          <a href="#">
            <RiShoppingBagLine className="nav-items" />
          </a>
          <IoMenu className="md:hidden" />
        </div>
      </nav>

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
    </div>
  );
}
