import { useState } from 'react';
import Logo from './Logo';
import { useNavigate, useLocation } from 'react-router-dom';
import { animateScroll as scroll, scroller } from 'react-scroll';
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateAndScroll = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='transition-transform duration-500'>
      <div className="flex flex-row justify-between items-center h-full p-3 relative">
        <div>
          <Logo />
        </div>
        <button className="md:hidden px-6 py-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <TbMenuDeep size={20} />
        </button>
        <nav
          className={`${isMenuOpen ? 'absolute z-10 backdrop-blur-lg' : 'hidden'}
          flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto md:bg-transparent py-4 md:py-0 `}>
          <ul className='flex flex-col gap-4 opacity-70 text-semi-bold md:flex-row p-4 '>
            <li className='hover:opacity-70 cursor-pointer' onClick={() => handleNavigateAndScroll('home')}>
              Home
            </li>
            <li className='hover:opacity-70 cursor-pointer' onClick={() => handleNavigateAndScroll('projects')}>
              Projects
            </li>
            <li className='hover:opacity-70 cursor-pointer' onClick={() => handleNavigateAndScroll('about')}>
              About
            </li>
            <li className='hover:opacity-70 cursor-pointer' onClick={() => handleNavigateAndScroll('contact')}>
              Contact
            </li>
          </ul>
        </nav>
        <button
          className={`border border-white rounded-md px-6 py-2 mt-4 md:mt-0 hidden md:block cursor-pointer ${isMenuOpen ? 'hidden' : ''}`}
          onClick={() => handleNavigateAndScroll('contact')}
        >
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
