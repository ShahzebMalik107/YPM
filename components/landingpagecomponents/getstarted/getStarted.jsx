import React, { Fragment } from 'react'
import styles from "../../../styles/landingpagestyling/lp.Getstarted.module.css";


const GetStarted = () => {
  return (
    <Fragment>

        <section className={`${styles.section_blue} `} id="newsletter_section">

            <div className={`${styles.container}`}>
                <div className={`${styles.row}`}>


                    {/* <div className={`${styles.col_md_12} ${styles.text_center} ${styles.padding_top_50} ${styles.padding_bottom_20}`} >
                        <h3 className={`${styles.section-title} ${styles.white_text} `}>Ready to make your sales team more productive?<br />
                            Please enter your email to get started.
                        </h3>
                    </div>
                    <div className={`${styles.col_md_12} ${styles.padding_bottom_40}`}>
                        <div className={`${styles.newsletter_form_wrapper}`}  data_wow_delay="0.25s">
                            <div className={`${styles.newsletter_form_box}`}>
                                <p className={`${styles.newsletter_success_box}`}  style={{display:'none'}}>We received your message and you'll hear from us soon. Thank You!</p>
                                <form id="newsletter_form" className={`${styles.newsletter_form}`} action="php/newsletter.php" method="post">
                                <form id="newsletter_form" className={`${styles.newsletter_form}`}>
                                    <input id="email_newsletter" className={styles.input_field} type="email" name="nf_email" placeholder="Enter Your Email Address" />  
                                    <input type="submit"  className={styles.submit_btn} value="GET STARTED!" id="submit-button-newsletter" />
                                </form>
                            </div>
                        </div>
                    </div> */}


                    <div className={`${styles.col_md_12} ${styles.text_center} ${styles.padding_bottom_10} `} >
                        <h3 className={`${styles.section_title} ${styles.white_text} `}>Ready for the next step?</h3>
                        <p className={`${styles.section_subtitle} ${styles.white} ${styles.margin_bottom_30} `}>Schedule a call with us and turn your idea into a reality!</p>
                        <a href="#" className={`${styles.links} ${styles.btn_white} ${styles.scrool} ${styles.margin_right_15} `} >Get Started</a>
                        {/* <a href="#" className={`${styles.links} ${styles.btn_white_border} ${styles.scrool} `}>Request Demo</a> */}
                    </div>

                </div>
            </div>






            

        </section>
    </Fragment>
  )
}

export default GetStarted