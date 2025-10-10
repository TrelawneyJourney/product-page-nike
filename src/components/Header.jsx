import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import { menu, menuCompleto } from "../data/nav";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(null);
  // const [timeout, setTimeout] = useState(null);

  // function handleMouseEnter(item) {
  //   if (timeout) clearTimeout(timeout);
  //   setMenuActive(item);
  // }

  // function handleMouseLeave() {
  //   const id = setTimeout(() => setMenuActive(null), 150);
  //   setTimeout(id);
  // }

  return (
    <div
      className="flex flex-col relative"
      onMouseLeave={() => setMenuActive(null)}
    >
      <TopBar />
      <nav className="w-full flex justify-between items-center px-10 ">
        <div className="logo">
          <a href="">
            <svg
              aria-hidden="true"
              focusable="false"
              width="74px"
              height="74px"
              viewBox="0 0 24 24"
              role="img"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        {/* menu  */}
        <ul className="hidden md:flex">
          {menu.map((item) => (
            <li
              key={item}
              onMouseEnter={() => setMenuActive(item)}
              className="px-3 py-1 font-semibold hover:border-b-2"
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
        <div className="absolute left-0 top-full w-full bg-white shadow-lg p-8 grid grid-cols-4 gap-8 z-50">
          {Object.entries(menuCompleto[menuActive]).map(([cat, links]) => (
            <div key={cat} className="text-sm">
              <h3 className="font-semibold mb-2">{cat}</h3>
              <ul className="">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-gray-600 hover:text-black mb-2"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
