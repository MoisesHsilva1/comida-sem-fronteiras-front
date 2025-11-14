import { Card } from "../ui/card";

interface CardBaseDonationProps {
  children?: React.ReactNode;
}

const CardBaseDonation = ({ children }: CardBaseDonationProps) => (
  <Card className="bg-transparent rounded-sm p-6 max-w-xl mx-auto shadow-lg">
    {children}
  </Card>
);

export default CardBaseDonation;
