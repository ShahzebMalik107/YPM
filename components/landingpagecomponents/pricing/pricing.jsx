import React from "react";
import styles from "../../../styles/landingpagestyling/lp.pricing.module.css";
const Pricing = () => {
  return (
    <section id="pricing" className={styles.Pricing}>
      <div className="container">
        <h2 className="subheading center">
          {/* Pricing for every business, at any stage */}
          Pricing to suit individuals and businesses of all sizes.
        </h2>
        <p className="paragraph center">
          {/* All pricing packages are backed up by a 30-day money back guarantee. */}
        </p>
        <div className={styles.pricing_card}>
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">Content-Based Website</h3>
              <h2 className="heading">$1,000</h2>
              <p>Starting at</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>Business Websites</li>
                <li>Portfolio Website</li>
                <li>Ecommerce</li>
                {/* <li>Access to all APIs</li> */}
              </ul>
              <button class="btn btn-light">
                <a href="#call">Get in touch</a>
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">Development</h3>
              <h2 className="heading">$50</h2>
              <p>Per Hour</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>Maintenance/Debugging</li>
              </ul>
              <button class="btn btn-light">
                <a href="#call">Get in touch</a>
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">Design</h3>
              <h2 className="heading">$35</h2>
              <p>Per Hour</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>UI/UX</li>
                <li>Social Media Content</li>
                <li>Branding</li>
              </ul>
              <button class="btn btn-light">
                <a href="#call">Get in touch</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
