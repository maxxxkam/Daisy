import React, { useEffect } from 'react'
import s from './Transform.module.scss'


import AOS from "aos";
import "aos/dist/aos.css";

const Transform = () => {

     useEffect(() => {
         AOS.init({
           duration: 1000,
           once: true,
         });
       }, []);
       
  return (
    <>
    <section className={s.section_mona} >
      <div className="container">
         <div className={s.wrapper}>
            <div className={s.wrap} data-aos="fade-up" data-aos-delay="200" >
               <h1>Transform chaos into creativity </h1>
               <div className={s.cards}>
                  <div className={s.card} data-aos="fade-up" data-aos-delay="200" >
                     <p>Throw your thoughts onto an infinite canvas and watch them evolve</p>
                  </div>

                  
                  <div className={s.card} data-aos="fade-up" data-aos-delay="400" >
                     <p>Turn scattered ideas into coherent plans with your AI collaborator</p>
                  </div>

                  <div className={s.card} data-aos="fade-up" data-aos-delay="600" >
                     <p>Save anything that sparks your creativity from across the web</p>
                  </div>

                  <div className={s.card} data-aos="fade-up" data-aos-delay="800" >
                     <p>Experience the blissful feeling of a perfectly organized junk drawer</p>
                  </div>


               </div>
            </div>

            <div className={s.images} data-aos="zoom-in" data-aos-delay="600" >
               <div className={s.image_wrap}>
                  <div className={s.img_1} ></div>
                  <div className={s.img_2} ></div>
                  <div className={s.img_3} ></div>
                  <div className={s.img_4} ></div>
                  <div className={s.img_5} ></div>
               </div>
            </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Transform