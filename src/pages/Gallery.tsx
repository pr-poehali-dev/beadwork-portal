
import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  author: string;
  technique: string;
  category: string;
  likes: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Колье 'Весенний цветок'",
    image: "/placeholder.svg",
    author: "Елена Иванова",
    technique: "Мозаичное плетение",
    category: "Украшения",
    likes: 24
  },
  {
    id: 2,
    title: "Брошь 'Бабочка'",
    image: "/placeholder.svg",
    author: "Ольга Петрова",
    technique: "Кирпичное плетение",
    category: "Украшения",
    likes: 18
  },
  {
    id: 3,
    title: "Фигурка 'Дракон'",
    image: "/placeholder.svg",
    author: "Николай Смирнов",
    technique: "Объемное плетение",
    category: "Фигурки",
    likes: 32
  },
  {
    id: 4,
    title: "Браслет 'Морская волна'",
    image: "/placeholder.svg",
    author: "Татьяна Соколова",
    technique: "Французское плетение",
    category: "Украшения",
    likes: 15
  },
  {
    id: 5,
    title: "Сережки 'Капельки'",
    image: "/placeholder.svg",
    author: "Марина Козлова",
    technique: "Ндебеле",
    category: "Украшения",
    likes: 29
  },
  {
    id: 6,
    title: "Фигурка 'Лисичка'",
    image: "/placeholder.svg",
    author: "Сергей Васильев",
    technique: "Параллельное плетение",
    category: "Фигурки",
    likes: 21
  }
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [items, setItems] = useState(galleryItems);
  
  const filterItems = (category: string) => {
    setActiveFilter(category);
    if (category === "all") {
      setItems(galleryItems);
    } else {
      setItems(galleryItems.filter(item => item.category === category));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Галерея работ</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Вдохновляйтесь работами наших талантливых мастеров или поделитесь своими собственными творениями из бисера с нашим сообществом.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all" onClick={() => filterItems("all")}>Все работы</TabsTrigger>
                <TabsTrigger value="jewelry" onClick={() => filterItems("Украшения")}>Украшения</TabsTrigger>
                <TabsTrigger value="figures" onClick={() => filterItems("Фигурки")}>Фигурки</TabsTrigger>
                <TabsTrigger value="accessories" onClick={() => filterItems("Аксессуары")}>Аксессуары</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">Автор: {item.author}</p>
                      <p className="text-gray-600 mb-4">Техника: {item.technique}</p>
                      <div className="flex justify-between items-center">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{item.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="jewelry">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">Автор: {item.author}</p>
                      <p className="text-gray-600 mb-4">Техника: {item.technique}</p>
                      <div className="flex justify-between items-center">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{item.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="figures">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">Автор: {item.author}</p>
                      <p className="text-gray-600 mb-4">Техника: {item.technique}</p>
                      <div className="flex justify-between items-center">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{item.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="accessories">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-2">Автор: {item.author}</p>
                      <p className="text-gray-600 mb-4">Техника: {item.technique}</p>
                      <div className="flex justify-between items-center">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {item.category}
                        </span>
                        <button className="flex items-center gap-1 text-gray-500 hover:text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                          <span>{item.likes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Загрузить свою работу
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GalleryPage;
