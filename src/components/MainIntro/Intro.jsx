import React from "react";
import { getimageurl } from "/src/util.js";
import styles from "./Intro.module.css";
function Intro()
{
    return (
        <section className={styles.container}>
        <div className={styles.content}>
           <h1 className={styles.title}> Hi I Am Akshat</h1>
           <p className={styles.description}>I am a <span className={styles.prof}>full stack developer</span>.<br/>From captivating front end designs to robust back end solutions , I bring digital version to life.<br/><br/> Reach out if you'd like to learn more! </p>
            <a href="mailto:akshattated01@gmail.com" className={styles.contactBtn}>Contact Me</a>
         </div>
         <img src={getimageurl("hero/heroImage.png")} alt="Hero Image" className={styles.heroimg}/>
         <div className={styles.topblur}></div>
         <div className={styles.bottomblur}></div>
         
         </section>
         
    )
}
export default Intro 