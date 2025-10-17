import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface BaseCardInformationProps {
  title: string;
  description?: string;
  textButton?: string;
  onClickButton?: () => void;
  image: string;
}

const BaseCardInformation = ({
  title,
  description,
  textButton,
  onClickButton,
  image,
}: BaseCardInformationProps) => {
  return (
    <Card className="flex flex-col md:flex-row justify-between p-4 w-full h-auto md:h-60 shadow-lg gap-4">
      <section className="flex flex-col gap-3 flex-1 justify-start">
        <h1 className="text-xl text-black font-bold">{title}</h1>
        {description && (
          <p className="text-gray-700 hidden md:block">{description}</p>
        )}
        {textButton && (
          <Button
            className="bg-yellow-300 font-bold w-full md:w-fit px-6 py-3 mt-2 text-base"
            onClick={onClickButton}
            type="button"
          >
            {textButton}
          </Button>
        )}
      </section>
      <div className="flex-shrink-0 flex justify-start items-start w-full md:w-60">
        <img
          className="object-contain w-full max-h-48 md:h-full md:w-60 rounded"
          src={image}
          alt={`Imagem ilustrativa de ${title}`}
        />
      </div>
    </Card>
  );
};
export default BaseCardInformation;
