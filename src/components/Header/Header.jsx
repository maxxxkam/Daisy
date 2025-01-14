import React, { useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className={s.wrapper}>
            <img src="/public/logo.png" alt="Logo" />
           <a href="#join">
           <button className={s.header_btn}>Join the waitlist</button>
           </a>

            <div className={`${s.menu} ${isMenuOpen ? s.active : ''}`}>
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
    </>
  );
};

export default Header;
