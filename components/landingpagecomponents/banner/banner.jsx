import { useState } from "react";
import styles from "../../../styles/landingpagestyling/lp.banner.module.css";
import Customform from "../../mailchimp/customform";

const Banner = () => {
  let innitalstate = 1;
  const [activeslide, setactiveslide] = useState(innitalstate);

  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner_grid}>
          <div className={styles.banner_text}>
            <h2>Book a free consultation</h2>
            <p>
            Whether your idea is about design or development, we’ll connect you with an expert so you can talk about your project. We’ll also share a quote with you. Here’s the best part, IT’S FREE!
            </p>
            <div id="call" className={styles.lp_form}>
              <Customform />
            </div>
          </div>
          <div className={styles.banner_img}>
            <img
              src="https://images.unsplash.com/photo-1665891098760-01d45ddb0e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="bi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
