import { Fragment, useState } from "react";
import styles from "../styles/talents.module.css";
import Head from "next/head";

import React from 'react'

const talents = () => {
    const [search,setSearch]=useState(false);
    function handleClick() 
    {
        setSearch(true)
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
                <div className={styles.banner_filter}>
                    <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_cat}>
                        <option value="all">All Categories</option>
                    </select>
                    <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_tech}>
                        <option value="all">All Technologies</option>
                    </select>
                    <select name="" id="" className={styles.banner_filter_item +" "+styles.banner_filter_location}>
                        <option value="all">All Locations</option>
                    </select>
                </div>
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
                {/* row 1 */}
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                {/* row 2 */}
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                {/* row 3 */}
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
                <div className={styles.talent_item}>
                    <img src="/talentpage/person.png" alt="" />
                    <div className="center">
                        <h2>Talents Name</h2>
                        <h4>UI/ UX Field</h4>
                    </div>
                    <button className={styles.button }>
                        View Profile
                    </button>
                </div>
            </div>
        </section>

    </Fragment>
  )
}

export default talents