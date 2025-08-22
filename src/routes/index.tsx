import { Routes, Route } from "react-router";
import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}
export default AppRoutes;
