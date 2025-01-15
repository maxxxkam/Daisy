import React, { useEffect, useState } from 'react';
import s from './Login.module.scss';
import { Link } from 'react-router-dom';


import AOS from "aos";
import "aos/dist/aos.css";


const Login = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {

      try {
        const botToken = '7470531059:AAGgOVT10QDxjxhikdCdL6pNRtmBT_gnAMo';
        const chatId = '-4771815732'; 
        const message = `Новая заявка на waitlist: ${email}`;

        const response = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: message,
            }),
          }
        );

        if (response.ok) {
          setSubmitted(true);
        } else {
          alert('Не удалось отправить данные. Попробуйте позже.');
        }
      } catch (error) {
        console.error('Ошибка при отправке:', error);
        alert('Произошла ошибка. Попробуйте позже.');
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  useEffect(() => {
        AOS.init({
          duration: 500,
          once: true,
        });
      }, []);

  return (
    <>
      {submitted ? (
        <section className={`${s.thankYouSection} ${s.login}`}>
          <div className={s.wrap}>
            <h1>Thank You!</h1>
            <p>We appreciate your interest. Stay tuned for updates.</p>
            <div className={s.gifPlaceholder}>
              <img src="/fridge-meme.gif" alt="" />
            </div>
          </div>
        </section>
      ) : (
        <section className={s.login} id="join">
          <div className="container">
            <div className={s.wrap}>
              <div className={s.title_1} data-aos="zoom-in" data-aos-delay="200"  >
              <h1>Join the Waitlist</h1>
              <p>
                Sign up with your email address to receive product news and
                updates.
              </p>
              </div>
              <div className={s.sign} data-aos="zoom-in" data-aos-delay="400" >
                <input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
              <div className={s.title_2} data-aos="zoom-in" data-aos-delay="600" >
                <p>We respect your privacy.</p>
                <Link to={'/policy'} >
              Privacy Policy
              </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
