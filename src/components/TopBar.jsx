import { useState } from "react";
import ConverseSvg from "../assets/svg/ConverseSvg";
import JordanSvg from "../assets/svg/JordanSvg";
import { topBar, topBarAyuda } from "../data/nav";

export default function TopBar() {
  const [topActive, setTopActive] = useState(null);

  return (
    <div className="hidden lg:flex justify-between bg-gray-100 py-2 px-10">
      <div className="flex gap-4">
        <a href="">
          <JordanSvg />
        </a>
        <a href="">
          <ConverseSvg />
        </a>
      </div>

      <div className="">
        <ul className="flex">
          {topBar.map((item) => (
            <div
              key={item}
              onMouseEnter={() => setTopActive(item)}
              onMouseLeave={() => setTopActive(null)}
              className="relative"
            >
              <li className="text-xs font-semibold px-2 hover:text-gray-500 cursor-pointer">
                {item}
              </li>

              {topActive === item && topBarAyuda[item] && (
                <div className="absolute right-0 top-full bg-white w-60 p-4 shadow-md z-60">
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-sm mb-2">{item}</h3>
                    <ul className="text-xs space-y-3">
                      {topBarAyuda[item].map((link) => (
                        <li
                          key={link}
                          className="hover:text-gray-500 cursor-pointer"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
