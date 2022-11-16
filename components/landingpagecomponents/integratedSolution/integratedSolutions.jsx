import React, { Fragment } from 'react'
import styles from "../../../styles/landingpagestyling/lp.IntegratedSolutions.module.css";


const IntegratedSolutions = () => {
  return (
    <Fragment>
        <section className={`${styles.section_white} ${styles.section_top_border}`} id="about">
            <div className={`${styles.container}`}>
                <div className={`${styles.row}`}>
                    <div className={`${styles.col_md_12} ${styles.text_center}`}>
                        <h2 className={`subheading-2`}>What you can expect from us</h2>
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
                                <h3>Technical expertise</h3>
                                <p>Our technical team is divided into multiple departments based on the technology they work on. These departments are led by individuals that are veterans of their craft.</p>
                            </div>
                        </div>
                        <div className={`${styles.col_md_4}`}>
                            <div className={`${styles.main_services}`}>
                                <img src="/lp2/services-icon2.png" alt="pic"/>
                                <h3>Clear communication</h3>
                                <p>We believe that a clear channel of communication is as important as your knowledge. Your project manager will keep you in the loop every step of the way to view website/app progress, provide input, and allow you to voice any comments or concerns.</p>
                            </div>
                        </div>
                        <div className={`${styles.col_md_4}`}>
                            <div className={`${styles.main_services}`}>
                                <img src="/lp2/services-icon3.png" alt="pic" />
                                <h3>Commitment </h3>
                                <p>OUR WORD IS OUR BOND! We stick to the budget and the time that we have quoted!</p>
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