import { IoSearch } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { RiShoppingBagLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";

export default function MenuIcons() {
  return (
    <div className="flex items-center gap-2">
      <a href="#">
        <IoSearch className="nav-items md:hidden" />
      </a>
      <a href="#">
        <LuUser className="nav-items md:hidden" />
      </a>
      <a href="#" className="hidden md:flex">
        <MdFavoriteBorder className="nav-items" />
      </a>
      <a href="#">
        <RiShoppingBagLine className="nav-items" />
      </a>
    </div>
  );
}
