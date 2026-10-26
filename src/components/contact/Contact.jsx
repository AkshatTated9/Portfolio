import React from "react";
import styles from "./Contact.module.css";
import { getimageurl } from "/src/util.js";
function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <p className={styles.eyebrow}>Have a project in mind?</p>
                <h2>Let’s build something great.</h2>
                <p className={styles.subtext}>I’m always open to interesting conversations and opportunities.</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getimageurl("contact/emailIcon.png")} alt="" aria-hidden="true"/>
                    <a href="mailto:akshattated99@gmail.com">akshattated99@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getimageurl("contact/linkedinIcon.png")} alt="" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/akshat-t-478789232">Akshat Tated</a>
                </li>
                <li className={styles.link}>
                    <img src={getimageurl("contact/githubIcon.png")} alt="" aria-hidden="true"/>
                    <a href="https://github.com/AkshatTated9" target="_blank" rel="noreferrer">GitHub profile</a>
                </li>
                
                
            </ul>
        </footer>
    )
}
export default Contact