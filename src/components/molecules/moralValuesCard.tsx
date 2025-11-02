import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

interface MoralValuesCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const MoralValuesCard = ({ title, icon, className }: MoralValuesCardProps) => {
  return (
    <Item
      className={`flex flex-col items-center justify-center w-50 p-4 gap-0 ${className}`}
    >
      <ItemContent>
        <ItemMedia className="flex items-center justify-center mb-2">
          {icon}
        </ItemMedia>
        <ItemTitle className="font-bold">{title}</ItemTitle>
      </ItemContent>
    </Item>
  );
};
export default MoralValuesCard;
