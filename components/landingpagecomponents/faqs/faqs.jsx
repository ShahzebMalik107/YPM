import { useState } from "react";
import Styles from "../../../styles/landingpagestyling/lp.faq.module.css";
const Faqs = () => {
  let faq_count = 0;
  const [faq, setfaq] = useState(faq_count);
  return (
    <section id="faq" className={Styles.main}>
      <div className={Styles.faq_main}>
        <div className={Styles.faq_main_img}>
          <img
            src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div>
          <h2 className={Styles.faqs_heading + " subheading"}>Frequently Asked Questions</h2>
          <div className={Styles.faqs_container}>
            <div
              className={
                faq === 0
                  ? Styles.faqs_items + " " + Styles.faqs_items_active
                  : Styles.faqs_items
              }
              onClick={() => setfaq(0)}
            >
              <h2 className="subheading">Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                et assumenda possimus ullam debitis dolorem, enim amet provident
                tempore magnam pariatur ex ut fuga, ea perferendis voluptates
                saepe! Ea harum tempora, unde aliquam voluptas ullam commodi,
                eos, aspernatur suscipit magnam perspiciatis est vel corporis
                excepturi aperiam repellendus. Odio, modi ab?
              </p>
            </div>

            <div
              className={
                faq === 1
                  ? Styles.faqs_items + " " + Styles.faqs_items_active
                  : Styles.faqs_items
              }
              onClick={() => setfaq(1)}
            >
              <h2 className="subheading">Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                et assumenda possimus ullam debitis dolorem, enim amet provident
                tempore magnam pariatur ex ut fuga, ea perferendis voluptates
                saepe! Ea harum tempora, unde aliquam voluptas ullam commodi,
                eos, aspernatur suscipit magnam perspiciatis est vel corporis
                excepturi aperiam repellendus. Odio, modi ab?
              </p>
            </div>

            <div
              className={
                faq === 2
                  ? Styles.faqs_items + " " + Styles.faqs_items_active
                  : Styles.faqs_items
              }
              onClick={() => setfaq(2)}
            >
              <h2 className="subheading">Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                et assumenda possimus ullam debitis dolorem, enim amet provident
                tempore magnam pariatur ex ut fuga, ea perferendis voluptates
                saepe! Ea harum tempora, unde aliquam voluptas ullam commodi,
                eos, aspernatur suscipit magnam perspiciatis est vel corporis
                excepturi aperiam repellendus. Odio, modi ab?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
