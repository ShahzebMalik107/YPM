import { Fragment, useState } from "react";
import styles from "../../styles/talents.module.css";
import Head from "next/head";
import PasswordProtected from "../../components/password_protected";
import { TalentCard } from '../../components/talent-card'

import React from 'react'

export default function talents ({ hasReadPermission ,data})  {
    console.log('data >>>>   ', data);
    if (!hasReadPermission) {
        return <PasswordProtected/>
    }
    const [search,setSearch]=useState(false);
    function handleClick() 
    {
        setSearch(!search)
    }
  return (
    <Fragment>
        <Head>
        <title>Talents at YPM</title>
        <meta name="description" content="We work as an extension of you. Let's go on an improvement journey, together." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

        <section className={styles.banner_section}>
            <div className={styles.banner_background}>
                <h2 className={styles.banner_text}>Hire Our Company Talent</h2>
                {search ? 
                < button 
                className={styles.button +" "+styles.banner_button_close}
                onClick={handleClick}
                >
                Close Search
            </button> 
                :
                < button 
                    className={styles.button +" "+styles.banner_button}
                    onClick={handleClick}
                    >
                    Search
                </button> 
                }
            </div>
        </section>

        
        <section className={styles.talent_section}>
            <div className={styles.talent_grid}>
            {search ? 
            <div className={styles.banner_filter}>
                <input type='text' placeholder="Search by Name" id="" className={styles.banner_filter_item +" "+styles.banner_filter_location}/>
                <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_cat}>
                    <option value="all">All Categories</option>
                </select>
                <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_tech}>
                    <option value="all">All Technologies</option>
                </select>
                <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_location}>
                    <option value="all">All Locations</option>
                </select>
            </div>:null
        }
                {/* row 1 */}
                {data.map((user) => (
                    <TalentCard talent={user}/>
                ))}
                
            </div>
        </section>

    </Fragment>
  )
}

export async function getServerSideProps() {
    const getJobs = await fetch(
      "https://backend.gublootech.com/wp-json/wp/v2/talent"
    );
    const data = await getJobs.json();
    return { props: { data } };
  }