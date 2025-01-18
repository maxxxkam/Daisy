import React, { useEffect,useRef } from 'react';
import s from './Catalog.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Keyboard, Navigation, Scrollbar, Pagination } from 'swiper/modules';


const Catalog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className={s.catalog}>
        <div className="container">
          <div className={s.wrapper}>
          <Swiper
  slidesPerView={2} 
  slidesPerGroup={2}
  loop={true} 
  grabCursor={true}
  keyboard={{
    enabled: true,
  }}
  breakpoints={{
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  }}
  scrollbar={true}
  navigation={true} 
  pagination={{
    clickable: true,
  }}
  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
  className={s.mySwiper}
>
  <SwiperSlide>
    <div className={`${s.card} ${s.card_1}`} data-aos="fade-down" data-aos-delay="200">
      <h1> Get unblocked with a little help from AI </h1>
      <img src="/chat-img.png" alt="" />
      <p>
        Brainstorm ideas, create action plans, generate to-do lists
        and more. Organize your thoughts and keep your projects
        moving forward with Daisy.
      </p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={`${s.card} ${s.card_2}`} data-aos="fade-down" data-aos-delay="400">
      <h1>Save inspiration anytime, anywhere</h1>
      <img src="/catalog-img.png" alt="" />
      <p>
        Access all your inspiration in one place. Curate your
        personal creative library — images, videos, websites, and
        GIFS, at your fingertips. Drag and drop elements onto your
        canvas and watch your vision unfold.
      </p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={`${s.card} ${s.card_3}`} data-aos="fade-down" data-aos-delay="600">
      <h1>Achieve More Together with AI</h1>
      <img src="/catalog-img3.jpg" alt="" />
      <p>
      Collaborate seamlessly with your team to develop groundbreaking AI solutions. Share ideas, refine strategies, and turn innovation into impactful results.
      </p>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={`${s.card} ${s.card_4}`} data-aos="fade-down" data-aos-delay="800">
      <h1>Shaping the Future of Technology</h1>
      <img src="/catalog-gif.gif" alt="" />
      <p>
      Explore the limitless potential of abstract technologies. From dynamic designs to futuristic concepts, unleash creativity and push boundaries into the unknown.
      </p>
    </div>
  </SwiperSlide>
</Swiper>

          </div>
        </div>
      </section>
    </>
  );
};

export default Catalog;
