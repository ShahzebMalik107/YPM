import React from "react";
import styles from "../../../styles/landingpagestyling/lp.benefits.module.css";

const Banifits = () => {
  return (
    <section className="container">
      <div className={styles.grid}>
        <div>
          <h2 className="subheading">
            Get ready to discover all the benefits and secrets of our amazing
            software.
          </h2>
          <p className="paragraph">
            Velis demo enim ipsam voluptatem quia voluptas sit aspernatur netsum
            lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt
            neque et poris ratione sequi enim quia tempor magni.
          </p>
          <ul>
            <li>Quia magni netsum eos qui ratione sequi.</li>
            <li> Venis ratione sequi enim quia tempor magni.</li>
            <li> Enim ipsam voluptatem quia voluptas.</li>
          </ul>
          <button class="btn btn-light">
            <a href="/consultation">Get in touch</a>
          </button>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1666812175508-5e22a0a6e91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banifits;
