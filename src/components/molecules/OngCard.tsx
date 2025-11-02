import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";

interface IOngCardProps {
  title: string;
  address: string;
  description: string;
}

export const OngCard = ({ title, address, description }: IOngCardProps) => {
  return (
    <>
      <Card className="bg-white p-4 border-l-4 border-l-yellow-500 cursor-pointer w-full">
        <CardTitle className="font-bold text-gray-900 text-sm">
          {title}
        </CardTitle>
        <CardContent className="text-xs p-0 text-gray-700 ">
          <CardDescription>{address}</CardDescription>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardContent className="flex flex-row gap-2 p-0">
          <CardAction className="flex flex-row gap-1 items-center mt-4">
            <BsFillTelephoneFill size={13} />
            <CardDescription className="text-xs text-gray-700">
              Ligar
            </CardDescription>
          </CardAction>
          <CardAction className="flex flex-row gap-1 items-center mt-4">
            <BiMessageRoundedDetail size={13} />
            <CardDescription className="text-xs text-gray-700">
              Detalhes
            </CardDescription>
          </CardAction>
        </CardContent>
      </Card>
    </>
  );
};
