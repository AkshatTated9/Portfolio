import React from "react";
import styles from "./Contact.module.css";
import { getimageurl } from "/src/util.js";
function Contact()
{
   return(
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact </h2>
            <p >Feel Free to Contact</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getimageurl("contact/emailIcon.png")} alt="" />
                <a href="mailto:akshattated01@gmail.com">akshattated01@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getimageurl("contact/linkedinIcon.png")} alt="" />
                <a href="https://www.linkedin.com/in/akshat-t-478789232">Akshat Tated</a>
            </li>
            <li className={styles.link}>
                <img src={getimageurl("contact/githubIcon.png")} alt="" />
                <a href="https://github.com/AkshatTated9">Akshattated01.git</a>
            </li>
        </ul>
    </footer>
   )
}
export default Contact