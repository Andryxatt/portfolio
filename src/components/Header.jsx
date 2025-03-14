import { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className='transition-transform duration-500'>
      <div className="flex flex-row justify-between items-center h-full px-3 py-2 relative">
        <div>
          <Logo />
        </div>
        <button className="md:hidden px-6 py-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <TbMenuDeep size={20} />
        </button>
        <nav
          className={`${isMenuOpen ? 'absolute z-10 backdrop-blur-lg' : 'hidden' }
          flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto md:bg-transparent py-4 md:py-0 `}>
          <ul className='flex flex-col gap-4 opacity-70 text-semi-bold md:flex-row p-4 '>
            <li className='hover:opacity-70 cursor-pointer'>
              <Link to="home" smooth={true} duration={750}>
                Home
              </Link>
            </li>
            <li className='hover:opacity-70 cursor-pointer'>
              <Link to="projects" smooth={true} duration={1000}>
                Projects
              </Link>
            </li>
            <li className='hover:opacity-70 cursor-pointer'>
              <Link to="about" smooth={true} duration={1250}>
                About
              </Link>
            </li>
            <li className='hover:opacity-70 cursor-pointer'>
              <Link to="contact" smooth={true} duration={1500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Link to="contact" className={`border border-white rounded-md px-6 py-2 mt-4 md:mt-0 hidden md:block cursor-pointer ${isMenuOpen ? 'hidden' : ''}`}>Contact Me</Link>
      </div>
    </header>
  );
};

export default Header;
