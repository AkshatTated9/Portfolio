import React from "react";
import styles from "./Projectcard.module.css";

function Projectcard({ project, index }) {
    return (
        <article className={styles.container}>
            <div className={styles.cardTopline}>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.category}>Featured project</span>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.highlights}>
                {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
            <ul className={styles.skills} aria-label="Technologies used">
                {project.skills.map((skill) => (
                    <li key={skill} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <a href={project.source} className={styles.link} target="_blank" rel="noreferrer">
                View on GitHub
                <span className={styles.linkIcon} aria-hidden="true"></span>
            </a>
        </article>
    );
}

export default Projectcard;
