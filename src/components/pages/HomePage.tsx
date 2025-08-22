import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Home from "../templates/Home";

function HomePage() {
  return (
    <>
      <div className="pt-16 pb-16">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
