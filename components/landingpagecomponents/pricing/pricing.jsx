import React from "react";
import styles from "../../../styles/landingpagestyling/lp.pricing.module.css";
const Pricing = () => {
  return (
    <section id="pricing" className={styles.Pricing}>
      <div className="container">
        <h2 className="subheading center">
          Pricing for every business, at any stage
        </h2>
        <p className="paragraph center">
          All pricing packages are backed up by a 30-day money back guarantee.
        </p>
        <div className={styles.pricing_card}>
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">BASIC</h3>
              <h2 className="heading">$25</h2>
              <p>Per Month</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>Custom Charts</li>
                <li>5 Mailboxes, 10 Gb Storage</li>
                <li>Unlimited Free Dashboards</li>
                <li>Access to all APIs</li>
              </ul>
              <button class="btn btn-light">
                <a href="#call">Get in touch</a>
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">BASIC</h3>
              <h2 className="heading">$25</h2>
              <p>Per Month</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>Custom Charts</li>
                <li>5 Mailboxes, 10 Gb Storage</li>
                <li>Unlimited Free Dashboards</li>
                <li>Access to all APIs</li>
              </ul>
              <button class="btn btn-light">
                <a href="#call">Get in touch</a>
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className={styles.card}>
            <div className={styles.card_package_type}>
              <h3 className="subheading">BASIC</h3>
              <h2 className="heading">$25</h2>
              <p>Per Month</p>
            </div>
            <div className={styles.card_package_benifits}>
              <ul>
                <li>Custom Charts</li>
                <li>5 Mailboxes, 10 Gb Storage</li>
                <li>Unlimited Free Dashboards</li>
                <li>Access to all APIs</li>
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
