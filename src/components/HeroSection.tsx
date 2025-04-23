
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                Откройте для себя мир <span className="text-primary">бисероплетения</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Учебные материалы, мастер-классы, вдохновляющая галерея работ и дружное сообщество мастеров. Начните свой творческий путь сегодня!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="animate-fade-in">
                  Начать обучение
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Присоединиться к сообществу
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-all hover:scale-105 duration-300">
                <img 
                  src="/placeholder.svg" 
                  alt="Красочные изделия из бисера" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg rotate-3 hidden md:block">
                <p className="text-sm font-medium text-gray-900">✨ Более 500 схем и мастер-классов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
