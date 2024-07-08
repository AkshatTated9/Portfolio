import React from "react";
import styles from "./Projectcard.module.css";
import { getimageurl } from "/src/util.js";
function Projectcard({project})
{
    return(
        <div className={styles.container}>
                              <img src={getimageurl(project.imageSrc)} alt="" className={styles.image}/> 
                               <h3 className={styles.title}>{project.title}</h3>
                               <p className={styles.description}>{project.description}</p>
                               <ul className={styles.skills}>{
                                    project.skills.map((skill,id)=>
                                    { return(
                                        <li key={id} className={styles.skill}>
                                            {
                                                skill
                                            }
                                        </li>
                                    )
                                    })
                                }</ul>
                                <div className={styles.links}>
                                    <a href={project.demo} className={styles.link}>Demo</a>
                                    <a href={project.source} className={styles.link}>Source Code</a>
                                </div>
                        </div>
    )

}
export default Projectcard