import React from 'react'
import s from './Midnight.module.scss'

const Midnight = () => {
  return (
   <>
   <section className={s.mid}>
   <div className="container">
   <div className={s.wrapper}>
   <h1>Turn midnight musings into morning action plans</h1>
      <div className={s.wrap}>
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