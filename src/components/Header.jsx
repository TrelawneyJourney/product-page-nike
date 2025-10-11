import TopBar from "./TopBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <NavBar />
    </div>
  );
}
