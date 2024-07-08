import React from "react";
import styles from "./Experience.module.css";
import skills from "../../skills.json";
import history from "../../history.json"
import { getimageurl } from "/src/util.js";

function Experience()
{
    return(
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>
                Experience
            </h2>
            <div className={styles.content}>
                <div className={styles.skills}>{
                    skills.map((skill,id)=>
                    {
                        return(
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillimgcontainer}><img src={getimageurl(skill.imageSrc)} alt={skill.title} /></div>
                                <p>{skill.title}</p>
                            </div>
                            
                        )
                    })
                        
                    }</div>
                <ul className={styles.history}>
                    {
                        history.map((historyitem,id)=>
                        {
                            return <li key={id} className={styles.historyitem}>
                                <img src={getimageurl(historyitem.imageSrc)}  />
                                <div className={styles.historyitemdetails}>
                                    <h3>{`${historyitem.role},${historyitem.organisation}`}</h3>
                                    <p>{`${historyitem.startDate}-${historyitem.endDate}`}</p>
                                    <ul>
                                        {historyitem.experiences.map((Experience,id)=>
                                        {
                                            return (
                                                <li key={id}>
                                                    {Experience}
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
        </section>
    )
}
export default Experience