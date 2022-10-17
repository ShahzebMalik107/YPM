import React, { Fragment, useState } from "react";
import style from "../styles/contact.module.css";
import Line from "../components/utils/line";
import Head from "next/head";
import Script from "next/script";

const Contact_us = () => {
  return (
    <Fragment>
      <section className={style.contact_main}>
        <Head>
          <title>Schedule an appointment </title>
          <meta
            name="description"
            content="As a full-service digital agency with a passion for ingenuity and innovation in every medium, YourProductMatters will continue to focus on expanding its digital expertise to bring you the best solutions."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="container">
          <div className={style.title}>
            <h2 className="heading">Schedule an Appointment</h2>
            <Line />
            <p className="paragraph">
              Please select a date and time on which you would like to discuss
              your project</p>
          </div>
          <div className={""}>
            <div className={style.form}>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/yourproductmatters/consultation?text_color=a387bc&primary_color=2a2441"
                style={{ "min-width": "320px", height: "930px" }}
              ></div>
              <Script
                type="text/javascript"
                src="https://assets.calendly.com/assets/external/widget.js"
                async
              ></Script>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact_us;
