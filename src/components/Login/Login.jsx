import React, { useState } from 'react';
import s from './Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSubmitted(true);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <>
      {submitted ? (
        <section className={`${s.thankYouSection} ${s.login}`}>
          <div className={s.wrap}>
            
          <h1>Thank You!</h1>
          <p>We appreciate your interest. Stay tuned for updates.</p>
          {/* Replace this div with your GIF */}
          <div className={s.gifPlaceholder}>
            <img src="/fridge-meme.gif" alt="" />
          </div>
          </div>

         
        </section>
      ) : (
        <section className={s.login}  id='join' >
          <div className="container">
            <div className={s.wrap}>
              <h1>Join the Waitlist</h1>
              <p>
                Sign up with your email address to receive product news and
                updates.
              </p>
              <div className={s.sign}>
                <input
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Sign Up</button>
              </div>
              <div className={s.title}>
                <p>We respect your privacy.</p>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
