import React from 'react'
import styles from "../styles/landingpage.module.css";
import Link from "next/link";



const landing_page = () => {
  return (
    <div id="landing-page" className={styles.landing_page}>
        <div className={styles.logo_nav}>
            <Link href="/">
                <img className={styles.logo} src="logo.svg" alt="logo" />
            </Link>
        </div>
        <div className={styles.banner_sec}>
            <div className={styles.banner_inner}>
                <div className={`${styles.white} ${styles.fb2} ${styles.text_sec}`}>
                    <h2 className={styles.size_58}>Book amazing meeting venues & Conference in minutes</h2>
                    <p className={styles.size_18}>Our stylish hotels offer small meeting rooms to large banquet sized function rooms. Book online today.</p>
                </div>
                <div className={styles.fb2}>
                    {/* <div class="calendly-inline-widget" style={{
                        "min-width":"320px",
                        "height": "700px"
                    }} data-auto-load="false">
                        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
                        <script src='calenderly.js' />
                    </div> */}

                </div>
            </div>
        </div>

        <div className={styles.landing_inner_content}>
                <div className={styles.fb3}>
                    <img className={styles.landing_inner_img} src="/landingpage/first.png" alt="logo" />
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
                    <img className={styles.landing_inner_img} src="/landingpage/second.png" alt="logo" />
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
                    <img className={styles.landing_inner_img} src="/landingpage/third.png" alt="logo" />
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
  )
}

export default landing_page