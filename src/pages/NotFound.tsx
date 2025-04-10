
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container-custom text-center py-20">
        <div className="max-w-xl mx-auto">
          <div className="text-kalra-gold text-9xl font-bold mb-4">404</div>
          <h1 className="heading-lg text-kalra-navy mb-6">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            We're sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary inline-flex items-center justify-center">
            <ArrowLeft size={16} className="mr-2" /> Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
