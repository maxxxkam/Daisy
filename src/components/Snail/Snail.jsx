import React, { useEffect } from 'react'
import s from './Snail.module.scss'

   import AOS from "aos";
   import "aos/dist/aos.css";

const Snail = () => {

   
      useEffect(() => {
            AOS.init({
              duration: 1000,
              once: true,
            });
          }, []);
  return (
   <>
   <section className={s.snail} >
      <div className="container">
         <div className={s.wrapper}>
            <div className={`${s.card} ${s.card_1}`} data-aos="zoom-in" data-aos-delay="200" >
               <h2>It all starts with the <span>seed</span> of an idea. </h2>
               <img src="/snail-img.png" alt="" />
            </div>

            <div className={`${s.card} ${s.card_2}`} data-aos="zoom-in" data-aos-delay="400" >
               <h2>Need a little help turning your good ideas into <span className={s.first_span} >great ones?</span> </h2>
               <h2>The way you cultivate your creativity can make all the difference. <span className={s.sec_span} >Nurture your ideas</span> from fleeting thoughts into full-fledged project plans with Daisy.</h2>
               <h2>Whatever sparks your passion or fuels your professional growth, Daisy is here to help. </h2>
               <h2>Let your thoughts take root and watch your creativity bloom. </h2>
            </div>
         </div>
      </div>
   </section>
   </>
  )
}

export default Snail