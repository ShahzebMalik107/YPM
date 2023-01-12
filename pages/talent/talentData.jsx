import { Fragment, useState ,useEffect} from "react";
import styles from "../../styles/talentdata.module.css";
import Head from "next/head";
import PasswordProtected from "../../components/password_protected";
import React from 'react'
import profile  from "../profile.jpeg"
import Designation from "../../components/talentdatapagecomponents/Designation";
import SkillBadge from "../../components/talentdatapagecomponents/SkillBadge";
import Percentage from "../../components/talentdatapagecomponents/Percentage";
import Loader from "../../components/loader/loader";
import { useRouter } from 'next/router'
import axios from "axios";



const talentData = ({ hasReadPermission }) => {
  const [talent,setTalent]=useState('');
  const [loaded,setLoaded]=useState(false);
  const router = useRouter();
  const query = router.query;
  var id='';

  useEffect(()=>
  {
    if (!router.asPath.includes("?id=")) {
      router.push('/career')
    }
    else{
      id=router.asPath.substring(router.asPath.indexOf("=")+1);
      

      axios.get(`https://backend.gublootech.com/wp-json/wp/v2/talent/${id}`)
      .then(response => {
        setTalent(response.data)
        setLoaded(true)
      });
      
    }

  },[])

    const tempArr = ['UI/UX Design', 'Graphic Design', 'Video Editing', 'SAAS Design', 'Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Indesign', 'Adobe Illustrator', 'Adobe After Effects']
    
    if (!hasReadPermission) {
        return <PasswordProtected/>
    }

    return (
      <Fragment>
          { loaded ?

        <div className={styles.profile_content_cover}>
        <section className={styles.profile_content_main}>
            <section className={styles.profile_content_main_column}>
        <section className={styles.profile_wrapper}>
        <picture className={styles.profile_picture}>
        <img  src={talent.acf.talent_image} alt="img"></img>
        </picture>
        <div className={styles.talent_detail}>
        <h1>{talent.acf.talent_name}</h1>
        <h5>{talent.acf.talent_category}</h5>
        <p>{talent.acf.short_description}</p>
        </div>

      {/* hire me div */}
         </section>
         <section className={styles.hire_me}> 
         <h1>Hire Me!</h1>
         <div className={styles.hire_details}>
         <div className={styles.hire_details_hourly}>
        <h3>${talent.acf.hourly_rate}</h3>
        <p>Hourly Rate</p>    
        </div>


        <div className={styles.hire_hourly}>
          <h3>{talent.acf.jobs_done}+</h3>
          <p>Talents Done</p>
            
        </div>
        <div className={styles.hire_hourly}>
        <h3>{talent.acf.rehires}+</h3>
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
        <source src={talent.acf.video_url} type="video/mp"/>
        {/* <source src={talent.acf.video_url} type="video/ogg"/> */}
        </video>
        </div> 
        </div>
        </div>


   <section className={styles.skill_me}>
            <h1>My Skills</h1>
            <div className={styles.my_skill_badges_wrapper}>
            {talent.acf.skills.map(ele => 
                <SkillBadge skill={ele.skill} />    
            )}
           
            
        </div>
        <div className={styles.percentage_component_main}>
          <div className={styles.percentage_component}>
            <Percentage 
            skill={talent.acf.job_success}
            description="Job Sucess"
            />
            <Percentage 
            skill={talent.acf.recommendations}
            description="Recommendation"
            />
          
          </div>
          <div className={styles.percentage_component}>
            <Percentage 
            skill={talent.acf.on_time}
            description="On Time"
            />
            <Percentage 
            skill={talent.acf.on_budget}
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
            {talent.acf.my_experience.map(ele=>
            
              <Designation
              
              designation={ele.designation}
              company_name={ele.company_name_location}
              start_end_date={`${ele.start_date} - ${ele.end_date}`}
              detail={ele.description}
              />
            )}
            
            {/* <Designation
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
            /> */}
          </div>   
        </section>
        
        <div className={styles.download_btn}>
          <a href={talent.acf.cv==''? '#' : talent.acf.cv}>
            <button>Download CV</button>
          </a>
          </div>
            </section>
         </section>
         </div>
         : <section className={styles.contact_main}><Loader/></section> 
        }
      </Fragment>
         
      )
    }

export default talentData