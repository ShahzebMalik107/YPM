import React from "react";
import styles from "../../styles/talentdata.module.css";

function SkillBadge(props) {
  const { skill } = props;
  return (
    <div className={styles.my_skill_badge}>
      <p style={{fontSize:'12px'}}>{skill}</p>
    </div>
  );
}

export default SkillBadge;
