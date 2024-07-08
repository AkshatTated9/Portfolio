import React from "react";
import styles from "./Project.module.css";
import projects from "../../projects.json"

import Projectcard from "./Projectcard";
function Project()
{
    return(
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>{
                projects.map((project,id)=>{
                    return (
                        <Projectcard key={id} project={project}></Projectcard>
                    )
                })
                }
            </div>
        </section>
    )
}
export default Project