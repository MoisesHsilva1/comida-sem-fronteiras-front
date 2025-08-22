import { PiForkKnifeFill } from "react-icons/pi";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-red-600 shadow-md z-50">
      <div className="flex items-center gap-2 p-4">
        <PiForkKnifeFill size={32} className="text-yellow-400" />
        <h1 className="text-lg sm:text-xl font-semibold text-white">
          Comida sem Fronteiras
        </h1>
      </div>
    </header>
  );
}

export default Header;
