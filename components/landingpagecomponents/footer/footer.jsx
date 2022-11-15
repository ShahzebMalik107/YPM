import React from "react";
import styles from "../../../styles/landingpagestyling/lp.footer.module.css";
const Footer = () => {
  return (
    <section className={styles.Footer}>
      <div className={styles.Footer_main}>
        {/* Section 1  */}
        <div className="center">
          <h3 className="subheading">Get In Touch</h3>
          <p className="paragraph">10 Oxford Street, London, UK, E1 1EC</p>
          <a href="mailto:the-office@square.co.uk">the-office@square.co.uk</a>
          <br />
          <a href="tel:+44 987 654 321">+44 987 654 321</a>
        </div>

        {/* Section 2  */}
        <div className={"center " + styles.center}>
          <h3 className="subheading">Get In Touch</h3>
          <p className="paragraph">10 Oxford Street, London, UK, E1 1EC</p>
          <a href="mailto:the-office@square.co.uk">the-office@square.co.uk</a>
          <br />
          <a href="tel:+44 987 654 321">+44 987 654 321</a>
        </div>

        {/* Section 3  */}
        <div className="center">
          <h3 className="subheading">Get In Touch</h3>
          <p className="paragraph">10 Oxford Street, London, UK, E1 1EC</p>
          <a href="mailto:the-office@square.co.uk">the-office@square.co.uk</a>
          <br />
          <a href="tel:+44 987 654 321">+44 987 654 321</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p className="center paragraph">©2022 YourProductMatters Inc All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
