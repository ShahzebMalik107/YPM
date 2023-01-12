import React from 'react'
import styles from "../../styles/Percentage.module.css";

function Percentage(props) {
    const {skill,box,description} = props
    const intNum=(parseInt(skill))/10;
    console.log(typeof(intNum))
  return (
    <div className={styles.percentage_wrap_content}>
    <div className={styles.percentage_main_content} >
    <h3>{skill}%</h3>
    <div className={styles.percentage_box_wrapper}>
    {Array.apply(null, { length: intNum }).map((e, i) => (
      <span className={styles.percentage_box1}></span>
    ))}

    {Array.apply(null, { length: (10-intNum) }).map((e, i) => (
        <span className={styles.percentage_box_empty3}></span>
      ))}
        {/* <span className={styles.percentage_box1}></span>
        <span className={styles.percentage_box1}></span>
        <span className={styles.percentage_box1}></span>
        <span className={styles.percentage_box1}></span>
        <span className={styles.percentage_box2}></span>
        <span className={styles.percentage_box2}></span>
        <span className={styles.percentage_box2}></span>
        <span className={styles.percentage_box2}></span>
        <span className={styles.percentage_box_empty3}></span>
         <span className={styles.percentage_box_empty4}></span> */}
       
        
        
    </div>
    <p>{description}</p>

  </div>
  </div>
  )
}

export default Percentage