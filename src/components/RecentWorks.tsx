
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";

interface WorkCardProps {
  title: string;
  author: string;
  image: string;
  likes: number;
  href: string;
}

const WorkCard = ({ title, author, image, likes, href }: WorkCardProps) => (
  <Card className="overflow-hidden transition-all hover:shadow-md hover-scale">
    <div className="aspect-square relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
      />
    </div>
    <CardContent className="p-4">
      <Link to={href}>
        <h3 className="font-medium text-lg mb-1 hover:text-primary transition-colors">{title}</h3>
      </Link>
      <p className="text-sm text-gray-600 mb-3">Автор: {author}</p>
      <div className="flex items-center text-sm text-gray-500">
        <HeartIcon className="w-4 h-4 mr-1 text-red-500" /> {likes} лайков
      </div>
    </CardContent>
  </Card>
);

const RecentWorks = () => {
  const works = [
    {
      title: "Браслет 'Морская волна'",
      author: "Елена Петрова",
      image: "/placeholder.svg",
      likes: 128,
      href: "/gallery/bracelet-sea-wave"
    },
    {
      title: "Колье 'Цветочная фантазия'",
      author: "Ирина Смирнова",
      image: "/placeholder.svg",
      likes: 95,
      href: "/gallery/necklace-flower-fantasy"
    },
    {
      title: "Фигурка 'Милый лисёнок'",
      author: "Анна Козлова",
      image: "/placeholder.svg",
      likes: 215,
      href: "/gallery/figure-cute-fox"
    }
  ];
  
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Галерея работ сообщества</h2>
            <p className="text-lg text-gray-600">Вдохновляйтесь творчеством наших талантливых мастеров</p>
          </div>
          <Link to="/gallery">
            <Button variant="outline">Все работы</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
