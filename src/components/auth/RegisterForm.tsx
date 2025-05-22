import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    // TODO: Implement registration logic
    console.log("Registration attempt:", formData);
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
          htmlFor="username"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Имя пользователя
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[hsl(var(--krx-dark-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-md focus:outline-none focus:border-[hsl(var(--krx-blue))] transition-colors"
          placeholder="ваше_имя"
        />
      </div>

      <div>
        <label
          htmlFor="reg-email"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="reg-email"
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
          htmlFor="reg-password"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Пароль
        </label>
        <input
          type="password"
          id="reg-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[hsl(var(--krx-dark-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-md focus:outline-none focus:border-[hsl(var(--krx-blue))] transition-colors"
          placeholder="••••••••"
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-200 mb-1"
        >
          Подтвердите пароль
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-3 bg-[hsl(var(--krx-dark-blue))] border border-[hsl(var(--krx-blue)/0.3)] text-white rounded-md focus:outline-none focus:border-[hsl(var(--krx-blue))] transition-colors"
          placeholder="••••••••"
        />
      </div>

      <Button type="submit" className="w-full krx-button-primary">
        Создать аккаунт
      </Button>

      <div className="text-center">
        <div className="text-sm text-gray-300">
          Уже есть аккаунт?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Войти
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
