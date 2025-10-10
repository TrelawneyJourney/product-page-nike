import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <form className="hidden md:flex">
      <label className="sr-only ">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoSearch className="nav-items" />
        </div>
        <input
          type="search"
          className="block w-44 p-2 ps-10 text-sm  rounded-full bg-gray-100"
          placeholder="Buscar"
          required
        />
      </div>
    </form>
  );
}
