
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kalra-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Kalra Inno Tech Logo" className="h-14 w-auto" />
            </Link>
            <h3 className="text-xl font-semibold mt-4 mb-1">Kalra Inno Tech Pvt Ltd</h3>
            <p className="text-yellow-400 mb-4">Kuch nya ho jaye</p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-kalra-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-kalra-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-kalra-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-kalra-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kalra-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kalra-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-kalra-gold transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-kalra-gold transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-kalra-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Expertise</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Product Design</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Product Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Paper Products</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Printing Services</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kalra-gold transition-colors">Media Reproduction</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-kalra-gold flex-shrink-0" />
                <span className="text-gray-300">
                  Khasra No. 16/12/1/1 Nariangarh Road Near Orion Banquet Hall, Village Barnala, Dhankaur, Ambala, Haryana, India, 134007
                </span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-kalra-gold flex-shrink-0" />
                <a href="tel:+919988467178" className="text-gray-300 hover:text-kalra-gold transition-colors">+91 9988467178</a>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-kalra-gold flex-shrink-0" />
                <a href="mailto:kalrainnotech@gmail.com" className="text-gray-300 hover:text-kalra-gold transition-colors">kalrainnotech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {currentYear} Kalra Inno Tech Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
