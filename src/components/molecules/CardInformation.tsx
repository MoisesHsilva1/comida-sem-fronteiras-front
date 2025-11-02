import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

interface CardInformationProps {
  title: string;
  description?: string;
  textButton?: string;
  onClickButton?: () => void;
  image: string;
}

const CardInformation = ({
  title,
  description,
  textButton,
  onClickButton,
  image,
}: CardInformationProps) => {
  return (
    <Card className="flex flex-col md:flex-row justify-between md:h-60 shadow-lg gap-4">
      <CardContent className="flex flex-col gap-3 flex-1 justify-start">
        <CardTitle className="text-xl text-black font-bold break-words">
          {title}
        </CardTitle>
        {description && (
          <CardDescription
            className="text-gray-700 hidden md:block leading-relaxed"
            tabIndex={0}
          >
            {description}
          </CardDescription>
        )}
        {textButton && onClickButton && (
          <Button
            className="bg-yellow-300 font-bold w-full md:w-fit px-6 py-3 mt-2 text-base transition-colors duration-200 hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            onClick={onClickButton}
            type="button"
            aria-label={textButton}
          >
            {textButton}
          </Button>
        )}
      </CardContent>
      <CardContent className="flex-shrink-0 flex justify-start items-start w-full md:w-60">
        <img
          className="object-contain w-full max-h-48 md:h-full md:w-60 rounded"
          src={image}
          alt={`Imagem ilustrativa de ${title}`}
          role="img"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/assets/mockMaps.png";
          }}
        />
      </CardContent>
    </Card>
  );
};
export default CardInformation;
