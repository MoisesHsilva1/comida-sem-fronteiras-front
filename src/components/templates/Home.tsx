import { OngCard } from "../molecules/OngCard";

function Home() {
  return (
    <>
      <main>
        <article className="bg-gray-200 w-full h-full p-50">
          <p>Vai ter um mapa</p>
        </article>
        <section className="bg-gray-100 p-4">
          <span className="flex justify-between mb-4">
            <h1 className="font-bold text-lg">Pontos Próximos</h1>
            <h1 className="text-lg font-bold text-yellow-500">Ver todos</h1>
          </span>
          <OngCard
            title="ONG Alimentar Esperança"
            address="Rua das Flores, 123 - Centro"
            description="Distribuição de cestas básicas e refeições quentes"
          />
        </section>
      </main>
    </>
  );
}
export default Home;
