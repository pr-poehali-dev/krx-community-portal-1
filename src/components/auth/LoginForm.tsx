import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm = ({ onSwitchToRegister }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[hsl(var(--krx-dark-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-md focus:outline-none focus:border-[hsl(var(--krx-blue))] transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Пароль
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[hsl(var(--krx-dark-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-md focus:outline-none focus:border-[hsl(var(--krx-blue))] transition-colors"
          placeholder="••••••••"
        />
      </div>

      <Button type="submit" className="w-full krx-button-primary">
        Войти
      </Button>

      <div className="text-center space-y-2">
        <button
          type="button"
          className="text-sm text-gray-300 hover:text-white transition-colors"
        >
          Забыли пароль?
        </button>
        <div className="text-sm text-gray-300">
          Нет аккаунта?{" "}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
