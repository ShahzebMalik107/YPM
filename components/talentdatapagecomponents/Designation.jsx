import React from 'react'
import styles from "../../styles/talentdata.module.css";



function Designation(props) {
    const { designation,company_name,start_end_date,detail } = props
    console.log('props  >>>>>    ',props);

  return (
    <div className={styles.my_experience_designation}>
                <h3>{designation}</h3>
                <h5>{company_name}</h5>
                <h6>{start_end_date}</h6>
                <p>{detail }</p>
            </div>
  )
}

export default Designation