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
            <h2 className="subheading-2">Get Started Today</h2>
            <p>
              Curabitur quam etsum lacus net netsum nulat iaculis etsimun vitae
              etsum nisle varius sed aliquam etsim vitae netsum, eaque ipsa quae
              ab illo inventore veritatis et quasi architecto.
            </p>
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
                  <img src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Customize your workflow.</h3>
                  <p>
                    Manage any process and be ready to address any challenge
                    with total ease.
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
                  <img src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Easy onboarding, fast adoption.</h3>
                  <p>
                    With Square getting your team on board is as simple as
                    sending an email.
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
                  <img src="https://cdn-icons-png.flaticon.com/512/739/739249.png" alt="" />
                </div>
                <div className={styles.card_text}>
                  <h3>Improve subscriber retention.</h3>
                  <p>
                    Analyze customers by region, discounts and more and put a
                    plan in place.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid_img}>
            <img
              src={
                activetabs === 1
                  ? "https://images.unsplash.com/photo-1667210621904-bb7cfa4b42bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                  : activetabs === 2
                  ? "https://images.unsplash.com/photo-1664218018556-0bf1297c7653?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                  : activetabs === 3
                  ? "https://images.unsplash.com/photo-1665757690769-5235ad0ee95b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
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
