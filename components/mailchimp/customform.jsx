import React, { Fragment, useState } from "react";
import axios from "axios";
import Script from "next/script";
import {load } from 'recaptcha-v3'


// import style from "../../styles/module.customform.css"
const Customform = () => {
  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [message, setmessage] = useState("");
  const [Loadingstate, setLoadingstate] = useState(false);
  const [MessageSend, setMessageSend] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    console.log('recapthca :>> ');
    const recaptcha =await load('6LdaN7AiAAAAAKzguA2PCDUqeMJOenxvicpXKSwu')
    const token = await recaptcha.execute()

    console.log('token :>> ', token);

    console.log('form submitted...')
    setLoadingstate(true);
    let formData = new FormData();
    formData.set("Full-name", FullName);
    formData.set("your-email", email);
    formData.set("phone-no", phoneno);
    formData.set("your-subject", message);
    console.log(FormData);

    console.log('Calling the api...')

    axios
      .post(
        "https://backend.gublootechnologies.com/wp-json/contact-form-7/v1/contact-forms/475/feedback/",
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
      <form id="form" onSubmit={onSubmitHandler}>
        <div>
          <label className={"form_label"} htmlFor="full-name">
            Full Name
            <span style={{ color: "red" }} className={"form_label_sterik"}>
              *
            </span>
          </label>
          <input
            className={"form_input"}
            type="text"
            name="full-name"
            id="full-name"
            placeholder="John Doe"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label className={"form_label"} htmlFor="email">
            Email Address
            <span style={{ color: "red" }} className={"form_label_sterik"}>
              *
            </span>
          </label>
          <input
            className={"form_input"}
            type="email"
            name="email"
            id="email"
            placeholder="abc@xyz.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className={"form_label"} htmlFor="phone-no">
            Phone No.
            <span style={{ color: "red" }} className={"form_label_sterik"}>
              *
            </span>
          </label>
          <input
            className={"form_input"}
            type="tel"
            name="phone-no"
            id="phone-no"
            placeholder="(000) 000-0000"
            onInput={(e) => {
              var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
              e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
              setphoneno(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label className={"form_label"} htmlFor="message">
            Please tell us more about your product/idea
          </label>
          <textarea
            style={{
              width: "100%"
            }}
            className={"form_input"}
            name="message"
            id="message"
            rows={5}
            placeholder="This will help prepare for our meeting"
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          ></textarea>
        </div>
        {/* <div className="recaptcha" data-sitekey="6LdaN7AiAAAAAKzguA2PCDUqeMJOenxvicpXKSwu"></div> */}
        <button
          
         
          id="submit-form"
          type="submit"
          
        >
          {!Loadingstate ? "Send" : "Sending ..."}
        </button>

        {/* <button type="button" onClick={(e) => openRecaptcha(e)}>Recaptcha</button> */}
        <p>
          {MessageSend ? "Thank you for your message. It has been sent." : ""}
        </p>
      </form>
  
    </Fragment>
  );
};

export default Customform;
