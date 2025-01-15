import React, { useEffect } from 'react';
import s from './Policy.module.scss';

import AOS from "aos";
import "aos/dist/aos.css";

const Policy = () => {

     useEffect(() => {
         AOS.init({
           duration: 500,
           once: true,
         });
       }, []);
  return (
    <>
      <section className={s.policy}>
        <div className="container">
          <div className={s.wrapper}  data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000" >
            <h1>Privacy policy</h1>
            <p>
              <b>Effective Date:</b>December 16, 2024
            </p>
            <div
              className={s.title}>
              <p>
                Welcome to www.hidaisy.ai (“we,” “our,” or “us”). We are
                committed to protecting your privacy and ensuring your personal
                information is handled responsibly. This Privacy Policy explains
                how we collect, use, and share your information when you visit
                our website or sign up for our waitlist.
              </p>
              <p>
                By using our website, you agree to the terms of this Privacy
                Policy.
              </p>
              <b>1. Information We Collect</b>
              <p>
                When you visit our website or sign up for our waitlist, we
                collect the following types of information:
              </p>
              <b>a. Personal Information</b>
              <ul>
                <li>
                  {' '}
                  Your email address, or any other details you provide when you
                  sign up for updates via our waitlist form.
                </li>
              </ul>
              <b>b. Automatic Information</b>
              <p>
                We use<b> Squarespace’s built-in analytics tools </b>to collect
                non-personal information automatically. This includes:
              </p>
              <ul>
                <li>IP address, browser type, device information.</li>
                <li>Pages visited, time spent on pages, and referring URLs.</li>
                <li>General site usage data.</li>
                <b>c. Cookies</b>
                <p>
                  Squarespace uses cookies to operate the website and provide
                  analytics. Cookies help us understand user behaviour and
                  improve site performance.
                </p>
              </ul>
              <b>2. How We Use Your Information</b>
              <p>We use the information we collect to:</p>
              <ul>
                <li>
                  Add you to our waitlist and send updates about our product
                  launch via <b>Squarespace Email Campaigns.</b>
                </li>
                <li>
                  Analyze site performance and improve user experience using{' '}
                  <b>Squarespace Analytics.</b>
                </li>
                <li>
                  Respond to inquiries or communicate with you when necessary.
                </li>
              </ul>
              <p>
                We will <b>never sell or share</b> your personal information
                with third parties for their direct marketing purposes.
              </p>
              <b>3. Squarespace as a Service Provider</b>
              <p>
                Our website is hosted on <b> Squarespace, </b>which may process
                data on our behalf. Squarespace’s privacy and security practices
                comply with industry standards. You can learn more by reviewing
                their Privacy Policy.
              </p>
              <b>4. Your Rights</b>
              <p>
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>

              <ul>
                <li>Access: Request to know what personal data we hold.</li>
                <li>Correction: Update or rectify your personal information</li>
                <li>Erasure: Request that we delete your personal data.</li>
                <li>
                  Opt-out: Unsubscribe from marketing communications using the
                  link in any email.
                </li>
              </ul>
              <p>
                To exercise any of these rights, contact us at{' '}
                <a href="">info@daisy.ai</a>.
              </p>

              <b>5. Cookies and Tracking Technologies</b>

              <p>
                We use Squarespace’s built-in cookies for essential site
                operations and analytics.
              </p>
              <ul>
                <li>
                  Cookies track information like page views, session durations,
                  and device/browser data.
                </li>
                <li>
                  You can manage or disable cookies in your browser settings.
                </li>
              </ul>
              <p>
                To manage your cookie settings, scroll to the bottom of
                www.hidaisy.ai and select “Cookie Preferences”.
              </p>

              <b> 6. Data Security </b>
              <p>
                We rely on Squarespace’s secure hosting and built-in safeguards
                to protect your data. While we strive for robust security, no
                method of transmission over the internet is 100% secure.
              </p>

              <b>7. Data Retention</b>
              <p>
                We will retain your personal information for as long as
                necessary to:
              </p>

              <ul>
                <li>Send you updates or waitlist communications.</li>
                <li>Comply with legal obligations or resolve disputes.</li>
              </ul>

              <b>8. International Users</b>
              <p>
                If you access our site outside your region, your data may be
                transferred to Squarespace servers, which may be located in
                different jurisdictions. Squarespace complies with applicable
                privacy laws regarding international data transfers.
              </p>

              <b>9. Changes to This Privacy Policy</b>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated Effective Date.
              </p>
              <b>10. Contact Us</b>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <b>
                Email:<a href="">info@daisy.ai</a>
              </b>
              <b>
                Website:<a href="">www.hidaisy.ai</a>
              </b>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;
