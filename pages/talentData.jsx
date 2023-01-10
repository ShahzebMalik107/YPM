import { Fragment, useState } from "react";
import styles from "../styles/talentdata.module.css";
import Head from "next/head";
import PasswordProtected from "../components/password_protected";
import React from 'react'
import profile  from "./profile.jpeg" 
import Designation from "../components/talentdatapagecomponents/Designation";
import SkillBadge from "../components/talentdatapagecomponents/SkillBadge";
import Percentage from "../components/talentdatapagecomponents/Percentage";



const talentData = ({ hasReadPermission }) => {

    const tempArr = ['UI/UX Design', 'Graphic Design', 'Video Editing', 'SAAS Design', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Indesign', 'Adobe Illustrator', 'Adobe After Effects']
    
    if (!hasReadPermission) {
        return <PasswordProtected/>
    }

    return (
        <div className={styles.profile_content_cover}>
        <section className={styles.profile_content_main}>
            <section className={styles.profile_content_main_column}>
        <section className={styles.profile_wrapper}>
        <picture className={styles.profile_picture}>
        <img  src={profile.src} alt="img"></img>
        </picture>
        <div className={styles.talent_detail}>
        <h1>Talent Name</h1>
        <h5>UI/UX Field</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Tellus arcu scelerisque diam parturient elementum egestas sem eu nec. Etiam eget ornare scelerisque orci venenatis sapien in. Commodo ante at viverra lectus dolor. Ipsum vitae consectetur augue a. Nulla nunc quis pellentesque amet odio massa eleifend. </p>
        </div>

      {/* hire me div */}
         </section>
         <section className={styles.hire_me}> 
         <h1>Hire Me!</h1>
         <div className={styles.hire_details}>
         <div className={styles.hire_details_hourly}>
        <h3>$15</h3>
        <p>Hourly Rate</p>    
        </div>


        <div className={styles.hire_hourly}>
          <h3>20+</h3>
          <p>Jobs Done</p>
            
        </div>
        <div className={styles.hire_hourly}>
        <h3>14+</h3>
         <p>Rehires</p>  
        </div>
        </div>
        <button>Contact Me!</button>
        
        </section> 
       
          </section>
          
          <section className={styles.profile_content_main_column2}>
            

            {/* video */}
          <div className={styles.my_expertise}>
            <div className={styles.line}>
        <h1>My Expertise/Featured Projects</h1>
        <div className={styles.my_expertise_video}>
        
        <video  controls>
        <source src="movie.mp4" type="video/mp"/>
        <source src="movie.ogg" type="video/ogg"/>
        </video>
        </div> 
        </div>
        </div>


   <section className={styles.skill_me}>
            <h1>My Skills</h1>
            <div className={styles.my_skill_badges_wrapper}>
            {tempArr.map(ele => 
                <SkillBadge skill={ele} />    
            )}
           
            
        </div>
        <div className={styles.percentage_component_main}>
        <div className={styles.percentage_component}>
        <Percentage 
        skill="80%"
        description="Job Sucess"
        />
        <Percentage 
        skill="100%"
        description="Recommendation"
        />
        
        </div>
        <div className={styles.percentage_component}>
        <Percentage 
        skill="100%"
        description="On Time"
        />
        <Percentage 
        skill="100%"
        description="On Budget"
        />
        </div>
        </div>
        </section>  
        <div className={styles.download_btn2}>
          <button>Download CV</button>
          </div>

        </section> 
        
        <section className={styles.profile_content_main_column3}>
        
 <section className={styles.my_experience}>
 <div className={styles.linecircule}>
            <h1>My Experience</h1>
            <Designation
            designation="Designation"
            company_name="Company Name, Location"
            start_end_date="Start Date - End Date"
            detail="Lorem ipsum dolor sit amet consectetur. Ut nam posuere ut eget posuere mi a urna ornare. Morbi est tellus lectus netus at lacus purus neque."
            />
            <Designation
            designation="Designation"
            company_name="Company Name, Location"
            start_end_date="Start Date - End Date"
            detail="Lorem ipsum dolor sit amet consectetur. Ut nam posuere ut eget posuere mi a urna ornare. Morbi est tellus lectus netus at lacus purus neque."
            />
            <Designation
            designation="Designation"
            company_name="Company Name, Location"
            start_end_date="Start Date - End Date"
            detail="Lorem ipsum dolor sit amet consectetur. Ut nam posuere ut eget posuere mi a urna ornare. Morbi est tellus lectus netus at lacus purus neque."
            />
          </div>   
        </section>
        
        <div className={styles.download_btn}>
          <button>Download CV</button>
          </div>
            </section>
         </section>
         </div>
        
         
      )
    }

export default talentData