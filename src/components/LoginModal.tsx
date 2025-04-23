
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus, setLoginStatus] = useState<"idle" | "success" | "error">("idle");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Здесь должна быть логика проверки пароля
    // Для демонстрации используем простую проверку
    if (password === "бисер123") {
      setLoginStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        // Здесь можно добавить код для сохранения состояния авторизации
      }, 1500);
    } else {
      setLoginStatus("error");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Войти</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Вход в аккаунт</DialogTitle>
          <DialogDescription>
            Введите данные для входа в свой аккаунт БисерАрт
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleLogin} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Электронная почта</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {loginStatus === "error" && (
              <p className="text-sm text-red-500">Неверный пароль. Попробуйте снова.</p>
            )}
          </div>
          
          <div className="flex justify-between items-center pt-2">
            <Button
              variant="link"
              type="button"
              className="px-0 text-sm"
              onClick={() => alert("Функция восстановления пароля")}
            >
              Забыли пароль?
            </Button>
            
            <Button type="submit">
              {loginStatus === "success" ? "Успешно!" : "Войти"}
            </Button>
          </div>
        </form>
        
        {loginStatus === "success" && (
          <div className="bg-green-50 p-3 rounded-md mt-4 border border-green-200">
            <p className="text-green-700 text-sm font-medium">
              Вы успешно вошли в аккаунт!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
