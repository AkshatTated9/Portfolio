import React from "react";
import styles from "./Project.module.css";
import projects from "../../projects.json"

import Projectcard from "./Projectcard";
function Project()
{
    return(
        <section className={styles.container} id="projects">
            <p className={styles.eyebrow}>Selected work</p>
            <div className={styles.heading}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.description}>Systems and products designed to solve real-world problems.</p>
            </div>
            <div className={styles.projects}>
                {projects.map((project, index) => (
                    <Projectcard key={project.title} project={project} index={index} />
                ))}
            </div>
        </section>
    )
}
export default Project