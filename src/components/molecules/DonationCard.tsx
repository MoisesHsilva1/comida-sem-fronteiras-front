import { Card } from "../ui/card";
import { Button } from "../ui/button";

interface DonationCardProps {
  icon: string | React.ReactNode;
  iconAlt?: string;
  textButton?: string;
  onClickButton?: () => void;
  children?: React.ReactNode;
  className?: string;
}

const DonationCard = ({
  icon,
  iconAlt = "Ícone de doação",
  textButton = "Doar",
  onClickButton,
  children,
  className = "",
}: DonationCardProps) => {
  return (
    <Card
      className={`border border-red-600 w-56 h-40 flex flex-col items-center justify-center p-6 shadow-md rounded-2xl gap-4 ${className}`}
    >
      {typeof icon === "string" ? (
        <img className="w-16 h-16" src={icon} alt={iconAlt} loading="lazy" />
      ) : (
        <div>
          {icon}
        </div>
      )}
      {children}
      {textButton && (
        <Button onClick={onClickButton} className="bg-red-600 hover:bg-red-700 font-bold px-4 py-2">
          {textButton}
        </Button>
      )}
    </Card>
  );
};

export default DonationCard;
