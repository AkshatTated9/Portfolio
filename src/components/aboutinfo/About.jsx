import React from "react";
import { getimageurl } from "/src/util.js";
import styles from "./About.module.css"
function About()
{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getimageurl("about/aboutImage.png")} alt="" className={styles.aboutimg}/>
                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}> <img src={getimageurl("about/cursorIcon.png")} alt="" />
                    <div className={styles.aboutitemtext}>
                        <h3>Frontend Developer</h3>
                        <p>Specialized in bring websites to life with stunning visuals and seamless interactions</p>
                        </div></li>

                    <li className={styles.aboutitem}> <img src={getimageurl("about/uiIcon.png")} alt="" />
                    <div className={styles.aboutitemtext}>
                        <h3>Ui Designer</h3>
                        <p>Specialized in seamless translation of concepts into captivating digital experiences</p>
                    </div>
                    </li>
                    <li className={styles.aboutitem}> <img src={getimageurl("about/serverIcon.png")} alt="" />
                    <div className={styles.aboutitemtext}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in creating the foundational systems that power websites and applications.</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )

}
export default About