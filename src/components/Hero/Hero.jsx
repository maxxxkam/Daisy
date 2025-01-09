import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
    <>
    <section>
      <div className="container">
         <div className={s.wrapper}>
            <div className={s.title}>
            <h1>Give your ideas a glow up. Meet your new <span>AI creative collaborator.</span></h1>
            <p>Capture, organize, and elevate your ideas across work, life, and leisure.</p>
            </div>

            <div className={s.image}>
               <div>Help me promote our hew neighbouthood book club</div>
               <div>Create blog post outline about dopamine decorating</div>
               <img src="/hero-gif.png" alt="" />
               <div>Help me create a tax season content calendar</div>
            </div>
         </div>
      </div>
    </section>
    </>
  )
}

export default Hero