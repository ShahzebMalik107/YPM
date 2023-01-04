import { Fragment, useState } from "react";
import styles from "../styles/talentdata.module.css";
import Head from "next/head";
import PasswordProtected from "../components/password_protected";
import React from 'react'
import profile  from "./profile.jpeg" 



const talentData = ({ hasReadPermission }) => {
    console.log(profile)
    if (!hasReadPermission) {
        return <PasswordProtected/>
    }

    return (
        <section className={styles.profile_content_main}>
        <section className={styles.profile_wrapper}>
        <picture className={styles.profile_picture}>
        <img  src={profile.src} alt="img"></img>
        </picture>
    <div className={styles.talent_detail}>
        <h1>Talent Name</h1>
        <h5>UI/UX Field</h5>
        <p>Lorem ipsum dolor sit amet consectetur. Tellus arcu scelerisque diam parturient elementum egestas sem eu nec. Etiam eget ornare scelerisque orci venenatis sapien in. Commodo ante at viverra lectus dolor. Ipsum vitae consectetur augue a. Nulla nunc quis pellentesque amet odio massa eleifend. </p>
        </div>

        <section className={styles.hire_me}> 
        <h1>Hire Me!</h1>
        <div className={styles.hire_details}>
        <div>
            <h3>$15</h3>
            <p>Hourly Rate</p>
            
        </div>
        <div>
            <h3>20+</h3>
            <p>Jobs Done</p>
            
        </div>
        <div>
            <h3>14+</h3>
            <p>Rehires</p>
            
        </div>
        </div>
        <button>Contact Me!</button>
        
        </section>
       
        
        
         </section>
    <div className={styles.my_expertise_content}>
    <div className={styles.my_expertise}>
        <h1>My Expertise/Featured Projects</h1>
        <video width="721" height="329" controls>
        <source src="movie.mp4" type="video/mp"/>
        <source src="movie.ogg" type="video/ogg"/>
        </video>

        </div>

        <section className={styles.my_skill_content}>
            <h1>My Skills</h1>
            <div className={styles.my_skill_badges_wrapper}>
            <div className={styles.my_skill_badge}>
                <h6>UI/UX Design</h6>
            </div>
            <div className={styles.my_skill_badge}>
                <h6>Graphic Design</h6>
            </div>
            <div className={styles.my_skill_badge}>
                <h6>Video Editing</h6>
            </div>
            
            </div>

            <div className={styles.my_skill_badges_wrapper}>
            <div className={styles.my_skill_badge}>
                <h6>SAAS Design</h6>
            </div>
            <div className={styles.my_skill_badge}>
                <h6>Figma</h6>
            </div>
            <div className={styles.my_skill_badge}>
                <h6>Adobe XD</h6>
            </div>
            
            </div>
            <div className={styles.my_skill_badges_wrapper}>
            <div className={styles.my_skill_badge_one}>
                <h6>Adobe Photoshop</h6>
            </div>
            <div className={styles.my_skill_badge_one}>
                <h6>Adobe Indesign</h6>
            </div>
            </div>
            <div className={styles.my_skill_badges_wrapper}>
            <div className={styles.my_skill_badge_one}>
                <h6>Adobe Illustrator</h6>
            </div>
            <div className={styles.my_skill_badge_one}>
                <h6>Adobe After Effects</h6>
            </div>
            
            
            
        </div>
        </section>
        </div>
        <section className={styles.my_experience}>
            <h1>My Experience</h1>
            
        </section>
        
         </section>
      )
    }

export default talentData