import React from 'react'
import s from './Transform.module.scss'

const Transform = () => {
  return (
    <>
    <section className={s.section_mona} >
      <div className="container">
         <div className={s.wrapper}>
            <div className={s.wrap}>
               <h1>Transform chaos into creativity </h1>
               <div className={s.cards}>
                  <div className={s.card}>
                     <p>Throw your thoughts onto an infinite canvas and watch them evolve</p>
                  </div>

                  
                  <div className={s.card}>
                     <p>Turn scattered ideas into coherent plans with your AI collaborator</p>
                  </div>

                  <div className={s.card}>
                     <p>Save anything that sparks your creativity from across the web</p>
                  </div>

                  <div className={s.card}>
                     <p>Experience the blissful feeling of a perfectly organized junk drawer</p>
                  </div>


               </div>
            </div>

            <div className={s.images}>
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