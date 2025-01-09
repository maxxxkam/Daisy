import React, { useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className={s.wrapper}>
            <img src="/public/logo.png" alt="Logo" />
            <button className={s.header_btn}>Join the waitlist</button>

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
      </section>
    </>
  );
};

export default Header;
