import { useRef, useState } from "react";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaPeopleCarry, FaHeart } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Button } from "../ui/button";

import BaseCardInformation from "../molecules/BaseCardInformation";
import NewsCard from "../molecules/NewsCard";
import MoralValuesCard from "../molecules/moralValuesCard";

function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const card = scrollRef.current.children[index] as HTMLElement;
      card.scrollIntoView({ behavior: "smooth", inline: "center" });
      setActiveCard(index);
    }
  };

  const optionsMoralValues = [
    {
      Icon: <PiForkKnifeFill size={50} color="#fcd01fff" />,
      title: "Combater a insegurança alimentar",
      classname: "w-80",
    },
    {
      icon: <FaPeopleCarry size={50} color="#f9c806" />,
      title: "Apoiar a comunidade",
    },
    {
      icon: <BiSolidDonateHeart size={50} color="#f9c806" />,
      title: "Divulgar projetos sociais",
      classname: "w-58",
    },
    {
      icon: <FaHeart size={50} color="#f9c806" />,
      title: "Promover a solidariedade",
      classname: "w-58",
    },
  ];

  const optionsCardSpotlight = [
    {
      title: "Doe alimentos e seja o motivo de alguém ter um prato cheio hoje.",
      textButton: "Doe",
      description:
        "Em 2023, 27,6% dos domicílios brasileiros — cerca de 21,6 milhões de lares — viviam algum grau de insegurança alimentar, segundo levantamento da PNAD Contínua (IBGE). Desses, 4,1% enfrentavam insegurança alimentar grave, situação em que adultos e crianças experimentam privação de alimentos.",
      image:
        "https://curious-beige-rnu9zg8tuf.edgeone.app/Design%20sem%20nome.png",
    },
    {
      title:
        "Um pequeno gesto, uma grande mudança. Doe alimentos e espalhe solidariedade. ",
      description:
        "No Brasil, milhões ainda enfrentam a fome todos os dias. Segundo o IBGE, mais de 21 milhões de lares vivem em insegurança alimentar, e milhões de pessoas não têm o que comer. Sua doação pode levar esperança e dignidade a quem mais precisa.",
      image:
        "https://muddy-bronze-jhnuacmdzt.edgeone.app/Design%20sem%20nome%20(1).png",
    },
  ];

  const optionNews = [
    {
      title:
        "Bom Prato é reconhecido como a melhor política pública estadual de combate à fome pelo Prêmio Josué de Castro",
      description:
        "O Programa Bom Prato foi premiado como a política pública estadual mais eficaz no combate à fome em São Paulo, destacando-se por suas ações de segurança alimentar.",
      imageUrl:
        "https://www.desenvolvimentosocial.sp.gov.br/wp-content/uploads/2025/10/seds____seds--9-800x533.jpg",
      link: "https://www.desenvolvimentosocial.sp.gov.br/bom-prato-e-reconhecido-como-a-melhor-politica-publica-estadual-de-combate-a-fome-pelo-premio-josue-de-castro",
    },
    {
      title:
        "Inquérito de Segurança Alimentar revela que metade dos paulistanos vive com algum grau de insegurança alimentar",
      description:
        "O 1º Inquérito de Segurança Alimentar mostrou que mais da metade dos paulistanos vive com algum grau de insegurança alimentar. Cerca de 12,5% estão em situação de fome, e o problema é mais grave nas periferias. O estudo destaca a necessidade de políticas públicas para garantir acesso a alimentos e combater a fome na cidade.",
      imageUrl:
        "https://www.saopaulo.sp.leg.br/wp-content/uploads/2024/12/2024-12-11-Inquerito-Seguranca-Alimentar-richard-lourenco-Abre-05028.jpg",
      link: "https://www.saopaulo.sp.leg.br/blog/inquerito-de-seguranca-alimentar-revela-que-metade-dos-paulistanos-vive-com-algum-grau-de-inseguranca-alimentar",
    },
    {
      title:
        "Em São Paulo, dois milhões passam fome e mais da metade vive em insegurança alimentar",
      description:
        "Na Vila São José, no Grajaú, a comunidade enfrentou aumento da fome durante a pandemia, com alta demanda por cestas básicas e dificuldades de acesso a políticas públicas. Mais de 70% das famílias são chefiadas por mães solo, muitas sem trabalho fixo, o que agrava a insegurança alimentar. O Inquérito de Segurança Alimentar mostra que metade dos paulistanos vive com algum grau de insegurança alimentar, sendo o problema mais grave nas periferias e entre mulheres negras. Muitas famílias precisam escolher entre comprar comida ou pagar contas e transporte, e o acesso a programas sociais ainda é insuficiente para atender toda a demanda.",
      imageUrl:
        "https://assets.brasildefato.com.br/2024/09/image_processing20240920-340869-7nbjp6.webp",
      link: "https://www.brasildefato.com.br/2024/09/20/em-sao-paulo-dois-milhoes-passam-fome-e-mais-da-metade-vive-em-inseguranca-alimentar",
    },
  ];

  return (
    <main>
      <section>
        <article className="bg-[#fcd01fff] w-full h-full p-8">
          <div
            className="flex justify-between gap-2 mb-4 hidden sm:flex"
            role="navigation"
            aria-label="Navegação de cards"
          >
            <Button
              className={`bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 ${
                activeCard === 0 ? "invisible" : ""
              }`}
              aria-label="Ver card anterior"
              tabIndex={0}
              onClick={() => scrollToCard(0)}
              disabled={activeCard === 0}
            >
              Anterior
            </Button>
            <Button
              className={`bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400 ${
                activeCard === 1 ? "invisible" : ""
              }`}
              aria-label="Ver próximo card"
              tabIndex={0}
              onClick={() => scrollToCard(1)}
              disabled={activeCard === 1}
            >
              Próximo
            </Button>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scroll-snap-x scroll-snap-mandatory hide-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
            tabIndex={0}
            aria-label="Cards em destaque"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight")
                scrollToCard(
                  Math.min(activeCard + 1, optionsCardSpotlight.length - 1)
                );
              if (e.key === "ArrowLeft")
                scrollToCard(Math.max(activeCard - 1, 0));
            }}
          >
            {optionsCardSpotlight.map((card, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-full scroll-snap-align-start flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <BaseCardInformation
                  title={card.title}
                  textButton={card.textButton}
                  description={card.description}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="ml-8 mt-8 mb-10 hide-scrollbar">
        <h1 className="text-xl font-bold mb-4 text-center">Nossos valores</h1>
        <article
          className="flex flex-nowrap sm:flex-wrap justify-center gap-4 overflow-x-auto scroll-snap-x scroll-snap-mandatory hide-scrollbar"
          aria-label="Lista de valores morais"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {optionsMoralValues.map((value, index) => (
            <div
              key={index}
              className={`min-w-[220px] flex-shrink-0 scroll-snap-align-start ${
                value.classname ?? ""
              }`}
              style={{ scrollSnapAlign: "start" }}
            >
              <MoralValuesCard
                title={value.title}
                icon={value.icon ?? value.Icon}
                className={value.classname}
              />
            </div>
          ))}
        </article>
      </section>
      <section className="ml-8 m-4 mt-8 hide-scrollbar">
        <h1 className="text-xl font-bold mb-4 text-center">Últimas notícias</h1>
        <article
          className="flex flex-wrap gap-2"
          aria-label="Lista de notícias"
        >
          {optionNews.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title}
              description={news.description}
              imageUrl={news.imageUrl}
              link={news.link}
            />
          ))}
        </article>
      </section>
    </main>
  );
}
export default Home;
