import React, { Fragment, useState } from "react";
import style from "../styles/contact.module.css";
import Line from "../components/utils/line";
import axios from "axios";
import Head from "next/head";
import Script from "next/script";

const Contact_us = () => {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [services, setservices] = useState("");
  const [message, setmessage] = useState("");
  const [Loadingstate, setLoadingstate] = useState(false);
  const [MessageSend, setMessageSend] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoadingstate(true);
    let formData = new FormData();
    formData.set("full-name", FullName);
    formData.set("email", email);
    formData.set("phone-no", phoneno);
    formData.set("services", services);
    formData.set("message", message);
    console.log(FormData);
    axios
      .post(
        "https://backend.gublootechnologies.com/wp-json/contact-form-7/v1/contact-forms/217/feedback/",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=<calculated when request is sent>",
            "Accept-Encoding": "gzip, deflate, br",
            Accept: "*/*"
          }
        }
      )
      .then((res) => {
        console.warn(res.data.message);
        setLoadingstate(false);
        setMessageSend(true);
        resetform();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const resetform = () => {
    document.getElementById("form").reset();
  };
  
  return (
    <Fragment>
      <section className={style.contact_main}>
        <Head>
          <title>Contact Gublootech</title>
          <meta
            name="description"
            content="As a full-service digital agency with a passion for ingenuity and innovation in every medium, Gubloo Technologies will continue to focus on expanding its digital expertise to bring you the best solutions."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <div className={style.title}>
            <h2 className="heading">Contact us</h2>
            <Line />
          </div>
          <div className={style.form_container}>
            <div className={style.form}>
              <form id="form" onSubmit={onSubmitHandler}>
                <div>
                  <label className={style.form_label} htmlFor="full-name">
                    Full Name<span className={style.form_label_sterik}>*</span>
                  </label>
                  <input
                    className={style.form_input}
                    type="text"
                    name="full-name"
                    id="full-name"
                    placeholder="Full Name"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    required
                  />
                </div>
                <div>
                  <label className={style.form_label} htmlFor="email">
                    Email Address
                    <span className={style.form_label_sterik}>*</span>
                  </label>
                  <input
                    className={style.form_input}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div>
                  <label className={style.form_label} htmlFor="phone-no">
                    Phone No.<span className={style.form_label_sterik}>*</span>
                  </label>
                  <input
                    className={style.form_input}
                    type="tel"
                    name="phone-no"
                    id="phone-no"
                    placeholder="Phone No."
                    onChange={(e) => {
                      setphoneno(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label className={style.form_label} htmlFor="services">
                    Services
                  </label>
                  <select
                    className={style.form_input}
                    name="services"
                    id="services"
                    placeholder="Services"
                    onChange={(e) => {
                      setservices(e.target.value);
                    }}
                    required
                  >
                    <option value="">Please select</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Web Designing">Web Designing</option>
                    <option value="Social Media Marketing">
                      Social Media Marketing
                    </option>
                  </select>
                </div>
                <div>
                  <label className={style.form_label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={style.form_input}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                  ></textarea>
                </div>
                {/* <div className="g-recaptcha" data-sitekey="6LcAaN8hAAAAACBL1sAynDE0uyAY9DYesIe4bquo"></div> */}
                <button
                  className={"g-recaptcha "+style.form_submit }
                  data-sitekey="6LcAaN8hAAAAACBL1sAynDE0uyAY9DYesIe4bquo"
                  data-callback="onSubmit"
                  data-action="submit"
                  id="submit-form"
                >
                  {!Loadingstate ? "Send" : "Sending ..."}
                </button>
                <p>
                  {MessageSend
                    ? "Thank you for your message. It has been sent."
                    : ""}
                </p>
              </form>
            </div>
            <div className={style.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.6351154988436!2d73.12375486828385!3d33.551273717405095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeda4a344c44b%3A0x96ff8b86b912f44!2sGubloo%20Technologies%20Pvt%20ltd!5e0!3m2!1sen!2s!4v1659629148904!5m2!1sen!2s"
                style={{ border: 0, width: "100%", height: "52.5%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <Script src="https://www.google.com/recaptcha/api.js" />
        <Script src="https://www.google.com/recaptcha/api.js?render=6LcAaN8hAAAAACBL1sAynDE0uyAY9DYesIe4bquo"/>
        <Script src="contactpage.js" />
      </section>
    </Fragment>
  );
};

export default Contact_us;
