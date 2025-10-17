interface MoralValuesCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const MoralValuesCard = ({ title, icon, className }: MoralValuesCardProps) => {
  return (
    <section
      className={`flex flex-col items-center justify-center w-50 p-4 ${className}`}
    >
      <div className="flex items-center justify-center mb-2">{icon}</div>
      <h1 className="font-bold">{title}</h1>
    </section>
  );
};
export default MoralValuesCard;
