import React, { useEffect } from 'react'
import s from './Midnight.module.scss'

import AOS from "aos";
import "aos/dist/aos.css";

const Midnight = () => {

     useEffect(() => {
         AOS.init({
           duration: 1000,
           once: true,
         });
       }, []);

  return (
   <>
   <section className={s.mid}>
   <div className="container">
   <div className={s.wrapper}>
   <div className={s.title} data-aos="zoom-in" data-aos-delay="200" >
   <h1>Turn midnight musings into morning action plans</h1>
   </div>
      <div className={s.wrap} data-aos="fade-down" data-aos-delay="400" >
         <div className={s.card_1}>
            <h1>Wide open spaces</h1>
            <p>Daisy's infinite canvas brings your scattered thoughts to life. Transform fragmented  ideas into fully developed plans and projects, all in one visual, expansive space.</p>
         </div>
         
         <div className={s.card_2}>
            <img src="/mid-img.png" alt="" />
         </div>

      </div>
   </div>
   </div>
   </section>
   </>
   )
}

export default Midnight