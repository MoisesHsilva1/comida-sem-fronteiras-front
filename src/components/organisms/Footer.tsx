import { FaHeart, FaMapMarkedAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-lg">
      <nav className="flex justify-around py-2">
        <div
          onClick={() => navigate("/")}
          className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer"
        >
          <FaMapMarkedAlt size={20} />
          <p className="text-xs">Mapa</p>
        </div>
        <div className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <FaHeart size={20} />
          <p className="text-xs">Doar</p>
        </div>
        <div onClick={() => navigate("/login")} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <FaUser size={20} />
          <p className="text-xs">Conta</p>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
