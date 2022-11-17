import React from "react";
import styles from "../../../styles/landingpagestyling/lp.footer.module.css";
const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.footer}>
          <img className={styles.logo} src="/logo.svg" alt="logo" />
          <hr className={styles.footer_hr} />
          <p className={styles.size_14}>
            ©2022 YourProductMatters Inc. All Rights Reserved
          </p>
        </div>
    </section>
  );
};

export default Footer;
