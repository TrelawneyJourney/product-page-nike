import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function AccordionItem({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="
            w-full flex justify-between items-center py-3 text-lg font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span>{isOpen ? "-" : <MdKeyboardArrowDown />}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-2 pl-4 pb-2">
          {links.map((link) => (
            <li key={link} className="text-sm text-gray-600">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
