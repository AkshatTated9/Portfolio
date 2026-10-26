import React from "react";
import { getimageurl } from "/src/util.js";
import styles from "./Intro.module.css";
function Intro()
{
    return (
        <section className={styles.container} id="home">
        <div className={styles.content}>
           <p className={styles.eyebrow}><span className={styles.statusDot}></span> Backend developer · Full-stack builder</p>
           <h1 className={styles.title}>Hi, I’m Akshat<span className={styles.titleAccent}>.</span></h1>
           <p className={styles.description}>I build thoughtful digital experiences, from polished interfaces to reliable backend systems.</p>
           <div className={styles.actions}>
               <a href="#projects" className={styles.primaryBtn}>Explore my work <span aria-hidden="true">→</span></a>
               <a href="mailto:akshattated99@gmail.com" className={styles.secondaryBtn}>Get in touch</a>
           </div>
           <p className={styles.location}>Currently building scalable APIs at GoKhana</p>
         </div>
         <div className={styles.visual}>
            <div className={styles.imageFrame}>
                <img src={getimageurl("hero/heroImage.jpg")} alt="Akshat Tated" className={styles.heroimg}/>
            </div>
            <div className={styles.visualLabel}><span>01</span> Crafting for the web</div>
         </div>
         </section>
         
    )
}
export default Intro 