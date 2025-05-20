
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="krx-gradient-bg min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4 krx-gradient-text">404</h1>
          <p className="text-xl text-white/80 mb-8">
            Ой! Эта страница находится в разработке или не существует.
          </p>
          <p className="text-white/60 mb-8">
            Эта секция сайта будет доступна в следующем обновлении. Возвращайтесь скоро!
          </p>
          <Link 
            to="/" 
            className="krx-button-primary px-8 py-3"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
