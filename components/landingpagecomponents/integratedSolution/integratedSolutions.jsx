import React, { Fragment } from 'react'
import styles from "../../../styles/landingpagestyling/lp.IntegratedSolutions.module.css";


const IntegratedSolutions = () => {
  return (
    <Fragment>
        <section className={`${styles.section_white} ${styles.section_top_border}`} id="about">
            <div className={`${styles.container}`}>
                <div className={`${styles.row}`}>
                    <div className={`${styles.col_md_12} ${styles.text_center}`}>
                        <h2 className={`subheading-2`}>Integrated solutions designed for small business</h2>
                        <p className={`${styles.section_subtitle}`}>Communicate with flexible tools that go where your team goes.</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.services_wrapper}`}>
                <div className={`${styles.container}`}>
                    <div className={`${styles.row}`}>
                        <div className={`${styles.col_md_4}`}>
                            <div className={`${styles.main_services}`}>
                                <img src="/lp2/services-icon1.png" alt="pic"/>
                                <h3>Designers</h3>
                                <p>Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius sed aliquam etsim vitae netsum.</p>
                            </div>
                        </div>
                        <div className={`${styles.col_md_4}`}>
                            <div className={`${styles.main_services}`}>
                                <img src="/lp2/services-icon2.png" alt="pic"/>
                                <h3>Marketers</h3>
                                <p>Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius sed aliquam etsim vitae netsum.</p>
                            </div>
                        </div>
                        <div className={`${styles.col_md_4}`}>
                            <div className={`${styles.main_services}`}>
                                <img src="/lp2/services-icon3.png" alt="pic" />
                                <h3>Agencies</h3>
                                <p>Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae etsum nisle varius sed aliquam etsim vitae netsum.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    </Fragment>
  )
}

export default IntegratedSolutions