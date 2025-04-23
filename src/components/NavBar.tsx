
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  text: string;
  href: string;
  hasSubmenu?: boolean;
}

const NavItem = ({ text, href, hasSubmenu }: NavItemProps) => (
  <li className="relative group">
    <Link 
      to={href}
      className="flex items-center gap-1 px-3 py-2 font-medium text-gray-700 hover:text-primary transition-colors"
    >
      {text}
      {hasSubmenu && <ChevronDown className="w-4 h-4" />}
    </Link>
  </li>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-semibold text-primary">БисерАрт</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-2">
              <NavItem text="Главная" href="/" />
              <NavItem text="Учебные материалы" href="/tutorials" hasSubmenu />
              <NavItem text="Галерея работ" href="/gallery" />
              <NavItem text="Блог" href="/blog" />
              <NavItem text="Форум" href="/forum" />
              <NavItem text="Чаты" href="/chats" />
              <NavItem text="Справочник" href="/reference" />
            </ul>
            <div className="ml-6 flex items-center">
              <Button variant="outline" className="mr-2">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Главная
            </Link>
            <Link to="/tutorials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Учебные материалы
            </Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Галерея работ
            </Link>
            <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Блог
            </Link>
            <Link to="/forum" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Форум
            </Link>
            <Link to="/chats" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Чаты
            </Link>
            <Link to="/reference" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              Справочник
            </Link>
          </div>
          <div className="px-4 py-3 space-y-2">
            <Button variant="outline" className="w-full">Войти</Button>
            <Button className="w-full">Регистрация</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
