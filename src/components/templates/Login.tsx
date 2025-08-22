import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Login() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <section className="border-2 border-gray-100 p-2">
          <h1 className="text-xl font-bold text-center text-yellow-500">
            Login
          </h1>
          <form action="">
            <label htmlFor="">email</label>
            <Input />
            <label htmlFor="">Senha</label>
            <Input />
            <Button>
                Login
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}
export default Login;
