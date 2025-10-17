import { Card } from "../ui/card";

interface NewsletterCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const NewsCard = ({
  title,
  description,
  imageUrl,
  link,
}: NewsletterCardProps) => {
  return (
    <Card className="flex flex-col sm:flex-row gap-4 p-4 items-start">
      <img
        className="w-full sm:w-48 h-32 sm:h-40 object-cover rounded-md"
        src={imageUrl}
        alt={title}
      />
      <div className="flex-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-end mt-auto">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-md text-yellow-400 font-medium underline hover:text-yellow-500 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 active:bg-yellow-100 text-base sm:text-sm"
              aria-label={`Leia mais sobre ${title}`}
              tabIndex={0}
            >
              <span className="mr-2">Leia mais</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
