import styles from "../../../styles/landingpagestyling/lp.GetStartedToday.module.css";
import { useState } from "react";

const GetStartedToday = () => {
  let innitalstate = 1;
  const [activetabs, setactivetabs] = useState(innitalstate);

  return (
    <section className={styles.element_main}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className="subheading-2">Some of our favorite tools and technologies</h2>
            {/* <p>
              Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
              etsum nisle varius sed aliquam etsim vitae netsum, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p> */}
            <div className={styles.card}>
              {/* carrd 1 */}
              <div
                className={
                  activetabs === 1
                    ? styles.card_item + " " + styles.active
                    : styles.card_item
                }
                onClick={() => setactivetabs(1)}
              >
                <div className={styles.card_img}>
                  <img src="/lp2/graphic-design.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Design</h3>
                  <p>
                  Photoshop, xD, Figma, AI, AE, Canva, PS 
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div
                className={
                  activetabs === 2
                    ? styles.card_item + " " + styles.active
                    : styles.card_item
                }
                onClick={() => setactivetabs(2)}
              >
                <div className={styles.card_img}>
                  <img src="/lp2/custom application development.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Development</h3>
                  <p>
                  WP, PHP, ReactJS, NodeJS, Next JS, HTML/CSS, Flutter, XCode, Android Studio
                  </p>
                </div>
              </div>
              {/* card 3 */}
              <div
                className={
                  activetabs === 3
                    ? styles.card_item + " " + styles.active
                    : styles.card_item
                }
                onClick={() => setactivetabs(3)}
              >
                <div className={styles.card_img}>
                  <img src="/lp2/content based websites.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Digital Marketing and SEO</h3>
                  <p>
                  Google Analytics, Google Ads, Facebook, Microsoft Clarity, Instagram, 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid_img}>
            <img
              src={
                activetabs === 1
                  ? "/lp2/graphics.png"
                  : activetabs === 2
                  ? "/lp2/development.png"
                  : activetabs === 3
                  ?  "/lp2/marketing.png"
                  : ""
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedToday;
