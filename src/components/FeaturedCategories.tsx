
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

const CategoryCard = ({ title, description, icon, href }: CategoryCardProps) => (
  <Link to={href} className="hover-scale">
    <Card className="h-full transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Для начинающих",
      description: "Базовые техники и простые схемы для новичков",
      icon: "🔰",
      href: "/tutorials/beginners"
    },
    {
      title: "Украшения",
      description: "Браслеты, колье, серьги и другие аксессуары",
      icon: "💎",
      href: "/tutorials/jewelry"
    },
    {
      title: "Фигурки",
      description: "Объемные фигурки животных, цветов и персонажей",
      icon: "🦊",
      href: "/tutorials/figures"
    }
  ];
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные категории</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Изучите различные техники бисероплетения и найдите интересные проекты для любого уровня мастерства
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
