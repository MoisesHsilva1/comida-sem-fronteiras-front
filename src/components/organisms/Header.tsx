import { PiForkKnifeFill } from "react-icons/pi";
import { ItemContent, ItemGroup, ItemHeader, ItemTitle } from "../ui/item";
import { useNavigate, useLocation } from "react-router";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Mapa",
      path: "/maps",
    },
    {
      label: "Doar",
      path: "/doar",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div
        className="flex items-center justify-center gap-2 p-4"
        onClick={() => navigate("/home")}
      >
        <PiForkKnifeFill size={30} className="text-[#FF9F0D]" />
        <h1 className="text-md font-semibold text-white">
          Comidas sem Fronteiras
        </h1>
      </div>
      <ItemGroup className="flex items-center">
        <ItemHeader>
          <ItemContent className="flex flex-row gap-4 text-white mb-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <ItemTitle
                  key={item.label}
                  className={`flex flex-col items-center cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "border-b-2 text-[#FF9F0D] border-[#FF9F0D] font-bold"
                      : "text-white hover:border-b-2 hover:border-[#FF9F0D]"
                  }`}
                  onClick={() => navigate(item.path)}
                  aria-current={isActive ? "page" : undefined}
                  tabIndex={0}
                  role="link"
                >
                  {item.label}
                </ItemTitle>
              );
            })}
          </ItemContent>
        </ItemHeader>
      </ItemGroup>
    </header>
  );
}

export default Header;
