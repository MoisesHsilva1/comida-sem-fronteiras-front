import { useRef } from "react";
import BaseCardInformation from "../molecules/BaseCardInformation";
import { Button } from "../ui/button";
import DonationCard from "../molecules/DonationCard";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { GiTakeMyMoney, GiCook } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  const optionsCardsActions = [
    {
      icon: <TbBowlSpoonFilled size={70} color="#e70000" />,
      textButton: "Doar alimentos",
      onClickButton: () => console.log("Donate clicked"),
    },
    {
      icon: <GiTakeMyMoney size={70} color="#e70000" />,
      textButton: "Ajudar uma ONG",
      onClickButton: () => console.log("Donate clicked"),
    },
    {
      icon: <MdFoodBank size={70} color="#e70000" />,
      textButton: "Encontrar refeições",
      onClickButton: () => console.log("Donate clicked"),
    },
    {
      icon: <FaRegHandshake size={70} color="#e70000" />,
      textButton: "Conectar com instituições",
      onClickButton: () => console.log("Donate clicked"),
    },
    {
      icon: <GiCook size={70} color="#e70000" />,
      textButton: "Seja voluntário",
      onClickButton: () => console.log("Donate clicked"),
    },
  ];

  return (
    <>
      <main>
        <section>
          <article className="bg-yellow-300 w-full h-full p-8">
            <div className="flex justify-between gap-2 mb-4">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => scrollToCard(0)}
              >
                Anterior
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => scrollToCard(1)}
              >
                Próximo
              </Button>
            </div>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 scroll-snap-x scroll-snap-mandatory hide-scrollbar"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="min-w-[320px] max-w-full scroll-snap-align-start flex-shrink-0">
                <BaseCardInformation
                  title="Doe alimentos e seja o motivo de alguém ter um prato cheio hoje."
                  textButton="Doe"
                  description="Em 2023, 27,6% dos domicílios brasileiros — cerca de 21,6 milhões de lares — viviam algum grau de insegurança alimentar, segundo levantamento da PNAD Contínua (IBGE). Desses, 4,1% enfrentavam insegurança alimentar grave, situação em que adultos e crianças experimentam privação de alimentos."
                  image="https://curious-beige-rnu9zg8tuf.edgeone.app/Design%20sem%20nome.png"
                />
              </div>
              <div className="min-w-[320px] max-w-full scroll-snap-align-start flex-shrink-0">
                <BaseCardInformation
                  title="Um pequeno gesto, uma grande mudança. Doe alimentos e espalhe solidariedade. "
                  description="No Brasil, milhões ainda enfrentam a fome todos os dias. Segundo o IBGE, mais de 21 milhões de lares vivem em insegurança alimentar, e milhões de pessoas não têm o que comer. Sua doação pode levar esperança e dignidade a quem mais precisa."
                  image="https://muddy-bronze-jhnuacmdzt.edgeone.app/Design%20sem%20nome%20(1).png"
                />
              </div>
            </div>
          </article>
        </section>
        <section className="ml-8 m-4">
          <h1 className="text-xl font-bold mb-4">
            Descubra como você pode fazer a diferença
          </h1>
          <article className="flex flex-wrap gap-4 overflow-x-auto pb-4 hide-scrollbar">
            {optionsCardsActions.map((option, index) => (
              <DonationCard
                key={index}
                icon={option.icon}
                textButton={option.textButton}
                onClickButton={option.onClickButton}
              />
            ))}
          </article>
        </section>
        <section className="ml-8 m-4">
          <h1 className="text-xl font-bold mb-4">Ultimas noticias</h1>
        </section>
      </main>
    </>
  );
}
export default Home;
