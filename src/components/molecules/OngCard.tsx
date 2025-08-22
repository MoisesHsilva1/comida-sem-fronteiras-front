import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

interface IOngCardProps {
  title: string;
  address: string;
  description: string;
}

export const OngCard = ({ title, address, description }: IOngCardProps) => {
  return (
    <>
      <section className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-l-yellow-500 cursor-pointer">
        <h1 className="font-semibold text-gray-900 text-sm">{title}</h1>
        <span className="text-xs text-gray-700">
          <p>{address}</p>
          <p>{description}</p>
        </span>
        <div className="flex flex-row gap-2">
          <span className="flex flex-row gap-1 items-center mt-4">
            <BsFillTelephoneFill size={13} />
            <p className="text-xs text-gray-700">Ligar</p>
          </span>
          <span className="flex flex-row gap-1 items-center mt-4">
            <BiMessageRoundedDetail size={13} />
            <p className="text-xs text-gray-700">Detalhes</p>
          </span>
        </div>
      </section>
    </>
  );
};
