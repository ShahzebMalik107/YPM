import React, { Fragment } from 'react'
import styles from "../../../styles/landingpagestyling/lp.amazingFeatures.module.css";


const AmazingFeatures = () => {
  return (
    <Fragment >


<section className={`${styles.section_grey} ${styles.section_bottom_border}`} id="features">
        <div className={`${styles.container}`}>
            <div className={`${styles.row}`}>
                <div className={`${styles.col_md_12} ${styles.text_center} ${styles.padding_bottom_10}`}>
                    <h2 className={`${styles.section_title}`}>Amazing Services</h2>
                    <p className={`${styles.section_subtitle}`}>We work as an extension of you. Let's go on an improvement journey, together.</p>
                </div>
            </div>
            <div className={`${styles.row}`}>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="0.25s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fas fa-tachometer-alt"></i>
                        <img src="/lp2/content based websites.png" alt="" />
                        <h4>Content-based Website </h4>
                        <p>Business, Portfolio, Blogs and eCommerce website built on a CMS like WordPress, WebFlow etc.</p>
                    </div>
                </div>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="0.5s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fas fa-chart-line"></i>
                        <img src="/lp2/custom application development.png" alt="" />
                        <h4>Custom Application Development</h4>
                        <p>We will create Customized Mobile or Web applications for your company’s specific needs and streamline your company’s internal or customer-facing processes.</p>
                    </div>
                </div>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="0.75s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fas fa-bell"></i>
                        <img src="/lp2/graphic-design.png" alt="" />
                        <h4>Design</h4>
                        <p>We follow industry-standard UI/UX practices to create user-friendly Logos, Websites & Mobile Application designs.</p>
                    </div>
                </div>
            </div>

            {/* <div className={`${styles.row}`}>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="1s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fas fa-hand-holding-usd"></i>
                        <h4>Cost Control</h4>
                        <p>Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle consequat nihis etim.</p>
                    </div>
                </div>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="1.25s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fas fa-rocket"></i>
                        <h4>Unique Features</h4>
                        <p>Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle consequat nihis etim.</p>
                    </div>
                </div>
                <div className={`${styles.col_md_4}`}>
                    <div className={`${styles.feature_box} ${styles.wow} ${styles.fadeIn}`} data-wow-delay="1.5s" style={{visibility: "visible", animationDelay: "0.25s", animationName: "fadeIn"}}>
                        <i className="fab fa-rocketchat"></i>
                        <h4>Support 24/7</h4>
                        <p>Utise wisi enim minim veniam, quis et stationes ullamcorper suscipit ets lobotis nisle consequat nihis etim.</p>
                    </div>
                </div>
            </div> */}
        </div>
    </section>





    </Fragment>
  )
}

export default AmazingFeatures