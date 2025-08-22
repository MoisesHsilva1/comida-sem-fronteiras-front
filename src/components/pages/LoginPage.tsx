import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Login from "../templates/Login";

function LoginPage() {
  return (
    <>
      <div className="pt-16 pb-16">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}
export default LoginPage;
