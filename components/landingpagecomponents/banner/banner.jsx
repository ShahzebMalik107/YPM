import React from "react";
import styles from "../../../styles/landingpagestyling/lp.banner.module.css";
import Customform from "../../mailchimp/customform" 
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner_grid}>
          <div className={styles.banner_text}>
            <h2>Premium SaaS Software</h2>
            <p>
              Start using Square today and track all your data in one central
              location. There are no limits to how you can look at your data.
            </p>
            <Customform />
          </div>
          <div className={styles.banner_img}>
            <img src="" alt="bi" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
