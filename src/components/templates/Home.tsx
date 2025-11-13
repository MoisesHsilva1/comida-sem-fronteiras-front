import { PiForkKnifeFill } from "react-icons/pi";
import { FaPeopleCarry, FaHeart } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { Card, CardContent, CardTitle } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import NewsCard from "../molecules/NewsCard";
import MoralValuesCard from "../molecules/moralValuesCard";
import CardInformation from "../molecules/CardInformation";

function Home() {
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
      textButton: "Doar agora",
      description:
        "Em 2023, 27,6% dos domicílios brasileiros — cerca de 21,6 milhões de lares — viviam algum grau de insegurança alimentar, segundo levantamento da PNAD Contínua (IBGE). Desses, 4,1% enfrentavam insegurança alimentar grave, situação em que adultos e crianças experimentam privação de alimentos.",
      image:
        "https://curious-beige-rnu9zg8tuf.edgeone.app/Design%20sem%20nome.png",
    },
    {
      title:
        "Um pequeno gesto, uma grande mudança. Doe alimentos e espalhe solidariedade. ",
      textButton: "Seja contribuidor",
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
      imageUrl:
        "https://www.desenvolvimentosocial.sp.gov.br/wp-content/uploads/2025/10/seds____seds--9-800x533.jpg",
      link: "https://www.desenvolvimentosocial.sp.gov.br/bom-prato-e-reconhecido-como-a-melhor-politica-publica-estadual-de-combate-a-fome-pelo-premio-josue-de-castro",
    },
    {
      title:
        "Inquérito de Segurança Alimentar revela que metade dos paulistanos vive com algum grau de insegurança alimentar",
      imageUrl:
        "https://www.saopaulo.sp.leg.br/wp-content/uploads/2024/12/2024-12-11-Inquerito-Seguranca-Alimentar-richard-lourenco-Abre-05028.jpg",
      link: "https://www.saopaulo.sp.leg.br/blog/inquerito-de-seguranca-alimentar-revela-que-metade-dos-paulistanos-vive-com-algum-grau-de-inseguranca-alimentar",
    },
    {
      title:
        "Em São Paulo, dois milhões passam fome e mais da metade vive em insegurança alimentar",
      imageUrl:
        "https://assets.brasildefato.com.br/2024/09/image_processing20240920-340869-7nbjp6.webp",
      link: "https://www.brasildefato.com.br/2024/09/20/em-sao-paulo-dois-milhoes-passam-fome-e-mais-da-metade-vive-em-inseguranca-alimentar",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-transparent flex flex-col items-center px-2 sm:px-4 md:px-8">
      <section className="w-full flex justify-center">
        <Carousel className="w-full max-w-6xl">
          <CarouselContent>
            {optionsCardSpotlight.map((option, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <CardInformation
                  title={option.title}
                  description={option.description}
                  textButton={option.textButton}
                  image={option.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className="w-full flex justify-center">
        <Card className="w-full max-w-6xl mt-8 mb-10 border-0 shadow-none bg-transparent text-white px-2 sm:px-4">
          <CardTitle className="text-xl font-bold mb-4 text-center">Nossos valores</CardTitle>
          <CardContent
            className="flex flex-nowrap sm:flex-wrap justify-center gap-4 overflow-x-auto scroll-snap-x scroll-snap-mandatory hide-scrollbar"
            aria-label="Lista de valores morais"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {optionsMoralValues.map((value, index) => (
              <div
                key={index}
                className={`min-w-[220px] flex-shrink-0 scroll-snap-align-start ${value.classname ?? ''}`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <MoralValuesCard
                  title={value.title}
                  icon={value.icon ?? value.Icon}
                  className={value.classname}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
      <section className="w-full flex justify-center">
        <Card className="w-full max-w-6xl m-4 mt-8 border-0 shadow-none bg-transparent text-white px-2 sm:px-4">
          <CardTitle className="text-xl font-bold mb-4 text-center">Últimas notícias</CardTitle>
          <CardContent
            className="flex justify-center flex-wrap gap-4"
            aria-label="Lista de notícias"
          >
            {optionNews.map((news, index) => (
              <NewsCard
                key={index}
                title={news.title}
                imageUrl={news.imageUrl}
                link={news.link}
              />
            ))}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
export default Home;
