import React from 'react'
import styles from "../../styles/Percentage.module.css";

function Percentage(props) {
    const {skill,box,description} = props
  return (
    <div className={styles.percentage_wrap_content}>
    <div className={styles.percentage_main_content} >
    <h3>{skill}</h3>
    <div className={styles.percentage_box_wrapper}>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box}></span>
        <span className={styles.percentage_box_empty}></span>
        <span className={styles.percentage_box_empty}></span>
        
        
    </div>
    <p>{description}</p>

  </div>
  </div>
  )
}

export default Percentage