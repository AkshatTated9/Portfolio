import React from "react";
import { getimageurl } from "/src/util.js";
import styles from "./About.module.css"
function About()
{
    return(
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Building useful things for the web.</h2>
            <div className={styles.content}>
                <img src={getimageurl("about/aboutImage.png")} alt="" className={styles.aboutimg} aria-hidden="true"/>
                <ul className={styles.aboutitems}>
                    <li className={styles.aboutitem}> <img src={getimageurl("about/cursorIcon.png")} alt="" aria-hidden="true"/>
                    <div className={styles.aboutitemtext}>
                        <h3>Frontend Developer</h3>
                        <p>Bringing websites to life with polished visuals and smooth, accessible interactions.</p>
                        </div></li>

                    <li className={styles.aboutitem}> <img src={getimageurl("about/uiIcon.png")} alt="" aria-hidden="true"/>
                    <div className={styles.aboutitemtext}>
                        <h3>UI Designer</h3>
                        <p>Turning ideas into clear, considered digital experiences that feel effortless to use.</p>
                    </div>
                    </li>
                    <li className={styles.aboutitem}> <img src={getimageurl("about/serverIcon.png")} alt="" aria-hidden="true"/>
                    <div className={styles.aboutitemtext}>
                        <h3>Backend Developer</h3>
                        <p>Building the dependable APIs and systems that power applications behind the scenes.</p>
                    </div>
                    </li>
                </ul>
            </div>
        </section>
    )

}
export default About