import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import s from './Header.module.scss';

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    if (location.hash === '#join') {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  
 
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);


  return (
    <header>
      <div className="container">
        <div className={s.wrapper}  >
          <Link to={'/'}>
          <img src="/logo.png" alt="Logo" data-aos="fade-down" data-aos-delay="200" />
          </Link>
         <div className={s.btn} data-aos="fade-down" data-aos-delay="400" >
         <Link to="/#join">
            <button className={s.header_btn}>Join the waitlist</button>
          </Link>
         </div>

          <div className={`${s.menu} ${isMenuOpen ? s.active : ''}`}  >
            <button className={s.header_btn}>Join the waitlist</button>
          </div>

          <div
            className={`${s.burger} ${isMenuOpen ? s.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
