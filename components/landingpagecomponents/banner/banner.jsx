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
            
          </div>
          <div className={styles.banner_img}>
            {/* <img
              src="/lp2/marketing.png"
              alt="bi"
            /> */}
            <div id="call" className={styles.lp_form}>
              <Customform />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
