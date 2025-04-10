
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-2"
      }`}
    >
      <div className="container-custom mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo_no_bg.png"
            alt="Kalra Inno Tech Logo"
            className="h-12 w-auto"
          />
          <div className="ml-3 text-kalra-navy font-bold text-xl hidden sm:block">
            KALRA INNO TECH
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-kalra-navy hover:text-kalra-blue font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-secondary"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="lg:hidden text-kalra-navy focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 px-4 text-kalra-navy hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block py-2 px-4 mt-2 text-center bg-kalra-gold text-kalra-navy rounded-md mx-4"
              onClick={() => setIsOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
