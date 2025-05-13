import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E20] text-white py-6 mt-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Лого */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Навігація */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm opacity-80">
          <Link to="/support" className="hover:text-primary transition duration-300">Support</Link>
          <Link to="/privacy-policy" className="hover:text-primary transition duration-300">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="hover:text-primary transition duration-300">Terms & Conditions</Link>
        </div>

        {/* Копірайт */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} Andrii Vlasiuk. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
