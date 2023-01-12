import Link from 'next/link';
import React from 'react'
import styles from "../../styles/talents.module.css";


export const TalentCard = (props) => {
  console.log('user >>>>>>  ', props )
  return (
    <div className={styles.talent_item}>
        <img src={props.talent.acf.talent_image} alt="" />
        <div className="center">
            <h2>{props.talent.acf.talent_name}</h2>
            <h4>{props.talent.acf.talent_category}</h4>
        </div>
        
          <Link href={{
            pathname: "/talent/talentData",
            query: {'id':props.talent.id,
          }, // the data
          }}><a className={styles.button }>View Profile</a>
          </Link>
    </div>
  )
}

 
// "/talentpage/person.png"