
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

const ArticleCard = ({ title, excerpt, date, image, href }: ArticleCardProps) => (
  <Card className="overflow-hidden">
    <div className="relative overflow-hidden h-48">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
      />
    </div>
    <CardHeader className="p-4 pb-2">
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <Link to={href} className="story-link">
        <h3 className="text-xl font-semibold">{title}</h3>
      </Link>
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={href} className="text-primary font-medium hover:underline">
        Читать далее
      </Link>
    </CardContent>
  </Card>
);

const LatestArticles = () => {
  const articles = [
    {
      title: "10 базовых техник для начинающих",
      excerpt: "Осваиваем основные приемы бисероплетения, которые станут фундаментом вашего творчества",
      date: "15 сентября 2023",
      image: "/placeholder.svg",
      href: "/blog/basic-techniques"
    },
    {
      title: "Как правильно выбирать бисер",
      excerpt: "Советы профессионалов по выбору материалов для ваших проектов",
      date: "28 августа 2023",
      image: "/placeholder.svg",
      href: "/blog/choosing-beads"
    },
    {
      title: "История бисероплетения в России",
      excerpt: "Культурные традиции и развитие бисероплетения в нашей стране",
      date: "5 июля 2023",
      image: "/placeholder.svg",
      href: "/blog/beading-history"
    }
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Последние статьи</h2>
            <p className="text-lg text-gray-600">Полезные советы, истории и вдохновение для творчества</p>
          </div>
          <Link to="/blog">
            <Button variant="outline">Все статьи</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
