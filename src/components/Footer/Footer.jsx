import React, { useState, useEffect } from 'react';
import s from './Footer.module.scss';
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    performance: false,
    advertising: false,
  });

  useEffect(() => {
    const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences'));
    if (savedPreferences) {
      setPreferences(savedPreferences);
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCheckboxChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    toggleModal();
  };

    useEffect(() => {
          AOS.init({
            duration: 500,
            once: true,
          });
        }, []);
  

  return (
    <>
      <footer>
        <div className="container">
          <div className={s.wrapper}>
            <div className={s.card1} data-aos="fade-down" data-aos-delay="200" >
              <img src="/daisy-logo-white.png" alt="" />
              <button onClick={toggleModal}>Cookie Preferences</button>
            </div>
            <div className={s.card2} data-aos="fade-down" data-aos-delay="400" >
              <a href="">info@hidaisy.ai</a>
            </div>
            <div className={s.card3} data-aos="fade-down" data-aos-delay="600" >
              <div className={s.images}>
                <img src="/profile-img1.png" alt="" />
                <img src="/profile-img2.png" alt="" />
                <img src="/profile-img3.png" alt="" />
                <img src="/profile-img4.png" alt="" />
              </div>
              <Link to={'/policy'} >
              Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div className={s.modalOverlay} onClick={toggleModal}>
          <div className={s.modal} onClick={(e) => e.stopPropagation()}>
            <button className={s.closeButton} onClick={toggleModal}>
              &times;
            </button>
            <h2>Manage Cookies</h2>
            <div className={s.cookieSection}>
              <div className={s.cookieCategory}>
                <div className={s.titles}>
                  <h3>Necessary</h3>
                  <p>
                    Required to enable core site functionality and to remember
                    user preferences and choices, such as language preferences
                    or customized settings.
                  </p>
                </div>
                <span>Always on</span>
              </div>
              <hr />
              <div className={s.cookieCategory}>
                <div className={s.titles}>
                  <h3>Performance and Analytics</h3>
                  <p>
                    These cookies provide quantitative measures of website
                    visitors. With the usage of these cookies we are able to
                    count visits and traffic sources to improve the performance
                    of our site.
                  </p>
                </div>
                <div className={s.inputs}>
                  <label className={s.toggleSwitch}>
                    <input
                      type="checkbox"
                      checked={preferences.performance}
                      onChange={() => handleCheckboxChange('performance')}
                    />
                    <span className={s.slider}></span>
                  </label>
                </div>
              </div>
              <hr />
              <div className={s.cookieCategory}>
                <div className={s.titles}>
                  <h3>Advertising</h3>
                  <p>
                    These cookies are used by advertising companies to serve ads
                    that are relevant to your interests.
                  </p>
                </div>
                <label className={s.toggleSwitch}>
                  <input
                    type="checkbox"
                    checked={preferences.advertising}
                    onChange={() => handleCheckboxChange('advertising')}
                  />
                  <span className={s.slider}></span>
                </label>
              </div>
            </div>
            <button className={s.saveButton} onClick={savePreferences}>
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
