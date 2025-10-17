import { menuFooter } from "../data/nav";

export default function Footer() {
  return (
    <div className="px-6">
      <hr className="p-2 text-neutral-300" />
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 text-sm text-neutral-700 font-semibold px-10 py-4">
        <p>© 2025 Nike, Inc. Todos los derechos reservados</p>
        <ul className="flex flex-col lg:flex-row gap-3">
          {menuFooter.map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
