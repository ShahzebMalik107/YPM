import React from "react";

import styles from "../../../styles/landingpagestyling/lp.testimonals.module.css";

const Testimonals = () => {
  return (
    <section id="showcase" className={styles.main}>
      <div className="container">
        <div className={styles.main_heading}>
          <h2 className="subheading">Projects we’re proud of</h2>
          <p className="paragraph">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration, by injected humour, or new
            randomised words.
          </p>
        </div>
        <div className={styles.testimonals_main}>
          {/* 01 */}
          <div className={styles.inner}>
            <img
              src="/lp2/logoSkinsee.png"
              alt=""
            />
            {/* <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p> */}
          </div>
          {/* 02 */}
          <div className={styles.inner}>
            <img
              src="/lp2/cropped.png"
              alt=""
            />
            {/* <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p> */}
          </div>
          {/* 03 */}
          <div className={styles.inner}>
            <img
              src="/lp2/art cavity.png"
              alt=""
            />
            {/* <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p> */}
          </div>
          
          
          
         
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
