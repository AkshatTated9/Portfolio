import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css"
import { getimageurl } from "/src/util.js";
function Navbar()
{
    const[menuopen,setmenuopen]=useState(false)
    return (
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuopen ? getimageurl("nav/closeIcon.png") : getimageurl("nav/menuIcon.png")} alt="" onClick={()=>setmenuopen(!menuopen)
                    
                }/>
                {console.log(menuopen)}
                <ul className={`${styles.menuitems}  ${menuopen && styles.menuopen}`} onClick={()=>setmenuopen(false)}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>         
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}


export default Navbar