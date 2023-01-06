import React from 'react'
import styles from "../../styles/talentdata.module.css";


function Designation(props) {
    const { Designation,company_name,start_end_date,detail } = props

  return (
    <div className={styles.my_experience_designation}>
                <h3>{Designation}</h3>
                <h5>{company_name}</h5>
                <h6>{start_end_date}</h6>
                <p>{detail }</p>
            </div>
  )
}

export default Designation