import { Routes, Route } from "react-router";
import HomePage from "../components/pages/HomePage";
import MapsPage from "../components/pages/MapsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/mapa" element={<MapsPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
