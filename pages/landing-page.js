import React, { Fragment } from 'react'
import styles from "../styles/landingpage.module.css";
import Link from "next/link";
import Script from 'next/script';
import Head from 'next/head';



const landing_page = () => {
  return (
    <Fragment>
        <Head>
        <meta
          name="description"
          content="YourProductMatters specializes in offering services to medium-sized and large businesses all across the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
        <div id="landing-page" className={styles.landing_page}>
            <div className={styles.logo_nav}>
                <Link href="/">
                    <img className={styles.logo} src="logo.svg" alt="logo" />
                </Link>
            </div>
            <div className={styles.banner_sec}>
                <div className={styles.banner_inner}>
                    <div className={`${styles.white} ${styles.fb2} ${styles.text_sec}`}>
                        <h2 className={`${styles.size_58} ${styles.banner_h2}`}>Schedule a free appointment with <br/>our Experts</h2>
                        <p className={`${styles.size_18} ${styles.banner_p}`}>You're not just another client, <strong className={styles.banner_blue}>YOU MATTER.</strong><br/>
                            Your Product Matters</p>
                    </div>
                    <div className={styles.fb2}>
                    <div
                    className={"calendly-inline-widget"}
                    data-url="https://calendly.com/yourproductmatters/consultation?hide_event_type_details=1"
                    style={{ "min-width": "320px", height: "600px" }}
                ></div>
                <Script
                    type="text/javascript"
                    src="https://assets.calendly.com/assets/external/widget.js"
                    async
                ></Script>

                    </div>
                </div>
            </div>

            <div className={styles.landing_inner_content}>
                    <div className={styles.fb3}>
                        <div className={styles.list_img}>
                            <img className={styles.landing_inner_img} src="/landingpage/first.png" alt="logo" />
                        </div>
                        <h3 className={`${styles.size_24} ${styles.purple}`}>
                            Web Application Development
                        </h3>
                        <p className={styles.size_18}>
                        From initial analysis to design, prototyping, and implementation, followed by support and maintenance, we provide custom end-to-end web development services.
                        </p>
                        <ul className={styles.list_style}>
                            <li>Software architecture</li>
                            <li>Software integration</li>
                            <li>Software modernisation</li>
                            <li>API development</li>
                            <li>Maintenance and support</li>
                        </ul>

                    </div>
                    <div className={styles.fb3}>
                        <div className={styles.list_img}>
                            <img className={styles.landing_inner_img} src="/landingpage/second.png" alt="logo" />
                        </div>
                        <h3 className={`${styles.size_24} ${styles.purple}`}>
                        Mobile Applications Development
                        </h3>
                        <p className={styles.size_18}>
                        Our development team is made up of experienced professionals. They're passionate about developing quality native mobile applications for all platforms, Android devices, and mobile cross-platform solutions.
                        </p>
                        <ul className={styles.list_style}>
                            <li>iPhone and iPad</li>
                            <li>Android smartphones</li>
                            <li>Cross-platform solutions (such as, React Native, Unity 3D, Flutter, etc.)</li>
                        </ul>

                    </div>
                    <div className={styles.fb3}>
                        <div className={styles.list_img}>
                            <img className={styles.landing_inner_img} src="/landingpage/third.png" alt="logo" />
                        </div>
                        <h3 className={`${styles.size_24} ${styles.purple}`}>
                        UI/UX Design
                        </h3>
                        <p className={styles.size_18}>
                        We aspire to create effective UX/UI design solutions. Focused on the end-user experience, we use design to improve how people interact with products and how they engage with businesses.
                        </p>
                        <ul className={styles.list_style}>
                            <li>User research and personas description</li>
                            <li>UX/UI design for web and mobile apps</li>
                            <li>Software wireframing and prototyping</li>
                            <li>Data-driven design</li>
                            <li>Data visualisation</li>
                            <li>Usability, responsiveness, and accessibility</li>
                            <li>Design quality control and testing</li>
                        </ul>

                    </div>
            </div>

            <div className={styles.footer}>
                <Link href="/">
                    <img className={styles.logo} src="logo.svg" alt="logo" />
                </Link>
                <hr className={styles.footer_hr}/>
                <p className={styles.size_14}>
                MeetingRooms @ 2015 copyrights all reserved
                </p>
            </div>
        </div>
    </Fragment>
  )
}

export default landing_page