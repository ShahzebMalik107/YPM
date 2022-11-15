import React from "react";

import styles from "../../../styles/landingpagestyling/lp.testimonals.module.css";

const Testimonals = () => {
  return (
    <section id="showcase" className={styles.main}>
      <div className="container">
        <div className={styles.main_heading}>
          <h2 className="subheading">The Team Behind Square</h2>
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
              src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
          </div>
          {/* 02 */}
          <div className={styles.inner}>
            <img
              src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
          </div>
          {/* 03 */}
          <div className={styles.inner}>
            <img
              src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
            <h3>CHRISTINA HAWKINS</h3>
            <p>Head of SEO</p>
            <span className={styles.small_bar}></span>
            <p className="paragraph">
              Johnathan is our co-founder and has developed search strategies
              for a variety of clients for over 5 years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
