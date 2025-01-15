import React, { useEffect } from 'react'
import s from './Catalog.module.scss'


import AOS from "aos";
import "aos/dist/aos.css";

const Catalog = () => {

   useEffect(() => {
         AOS.init({
           duration: 1000,
           once: true,
         });
       }, []);

  return (
    <>
    <section className={s.catalog} >
      <div className="container">
         <div className={s.wrapper}>
            <div className={`${s.card} ${s.card_1}`} data-aos="fade-down" data-aos-delay="200" >
               <h1> Get unblocked with a little help from AI </h1>
               <img src="/chat-img.png" alt="" />
               <p>Brainstorm ideas, create action plans, generate to-do lists and more. Organize your thoughts and keep your projects moving forward with Daisy. </p>
            </div>
            <div className={`${s.card} ${s.card_2}`} data-aos="fade-down" data-aos-delay="400" >
               <h1>
               Save inspiration anytime, anywhere</h1>
               <img src="/catalog-img.png" alt="" />
               <p>Access all your inspiration in one place. Curate your personal creative library — images, videos, websites, and GIFS, at your fingertips. Drag and drop elements onto your canvas and watch your vision unfold. </p>
            </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Catalog