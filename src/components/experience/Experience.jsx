import React from "react";
import styles from "./Experience.module.css";
import skills from "../../skills.json";
import history from "../../history.json"
import { getimageurl } from "/src/util.js";

function Experience()
{
    return(
        <section id="experience" className={styles.container}>
            <p className={styles.eyebrow}>How I work</p>
            <h2 className={styles.title}>Experience &amp; skills</h2>
            <div className={styles.content}>
                <div className={styles.skillsPanel}>
                    <h3 className={styles.subheading}></h3>
                    <div className={styles.skills}>{
                    skills.map((skill,id)=>
                    {
                        return(
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillimgcontainer}>
                                    {skill.imageSrc
                                        ? <img src={getimageurl(skill.imageSrc)} alt="" />
                                        : <span className={styles.skillInitials} aria-hidden="true">{skill.title.slice(0, 2)}</span>}
                                </div>
                                <p>{skill.title}</p>
                            </div>
                            
                        )
                    })
                    }</div>
                </div>
                <div className={styles.historyPanel}>
                    <h3 className={styles.subheading}>Career journey</h3>
                    <ul className={styles.history}>
                    {
                        history.map((historyitem) =>
                        {
                            return <li key={`${historyitem.organisation}-${historyitem.role}`} className={styles.historyitem}>
                                {historyitem.imageSrc
                                    ? <img src={getimageurl(historyitem.imageSrc)} alt="" aria-hidden="true"/>
                                    : <span className={styles.historyInitials} aria-hidden="true">{historyitem.organisation.slice(0, 2).toUpperCase()}</span>}
                                <div className={styles.historyitemdetails}>
                                    <div className={styles.historyHeading}>
                                        <h4>{`${historyitem.role}, ${historyitem.organisation}`}</h4>
                                        {historyitem.employmentType && <span className={styles.employmentType}>{historyitem.employmentType}</span>}
                                    </div>
                                    <p className={styles.date}>
                                        {`${historyitem.startDate} - ${historyitem.endDate}`}
                                        {historyitem.location && <span className={styles.location}>{historyitem.location}</span>}
                                    </p>
                                    <ul>
                                        {historyitem.experiences.map((experience) =>
                                        {
                                            return (
                                                <li key={experience}>
                                                    {experience}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </li>
                        })
                    }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Experience