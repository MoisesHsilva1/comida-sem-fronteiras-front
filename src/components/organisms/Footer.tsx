import { FaMapMarkedAlt } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { PiHouseSimple } from "react-icons/pi";
import { useNavigate, useLocation } from "react-router";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      label: "Home",
      icon: <PiHouseSimple size={20} />,
      path: "/",
    },
    {
      label: "Mapa",
      icon: <FaMapMarkedAlt size={20} />,
      path: "/mapa",
    },
    {
      label: "Doar",
      icon: <LuHeartHandshake size={20} />,
      path: "/doar",
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <nav className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center cursor-pointer ${
                isActive
                  ? "text-yellow-500"
                  : "text-gray-600 hover:text-yellow-500"
              }`}
            >
              {item.icon}
              <p className="text-xs">{item.label}</p>
            </div>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;
