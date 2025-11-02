import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center w-full min-h-screen pt-16 pb-14">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
