import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar} aria-label="Main navigation">
            <a href="#home" className={styles.title} aria-label="Akshat Tated, home">
                <span className={styles.name}>AKSHAT TATED<span>.</span></span>
                <span className={styles.role}>SOFTWARE DEVELOPER</span>
            </a>
            <div className={styles.menu}>
                <button
                    className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span aria-hidden="true" />
                </button>
                <ul
                    id="primary-navigation"
                    className={`${styles.menuitems} ${menuOpen ? styles.menuopen : ""}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#home">Home</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li className={styles.menuCta}><a href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
