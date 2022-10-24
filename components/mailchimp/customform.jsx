import React, { Fragment, useState } from "react";
import axios from "axios";
// import style from "../../styles/module.customform.css"
const Customform = () => {
  const [FirstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [LastName, setLastName] = useState("");
  const [message, setmessage] = useState("");
  const [Loadingstate, setLoadingstate] = useState(false);
  const [MessageSend, setMessageSend] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoadingstate(true);
    let formData = new FormData();
    formData.set("first-name", FirstName);
    formData.set("your-email", email);
    formData.set("phone-no", phoneno);
    formData.set("last-name", LastName);
    formData.set("your-subject", message);
    console.log(FormData);
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
        <h2>Schedule a call with our experts</h2>
        <div>
          <label className={"form_label"} htmlFor="full-name">
            First Name<span className={"form_label_sterik"}>*</span>
          </label>
          <input
            className={"form_input"}
            type="text"
            name="full-name"
            id="full-name"
            placeholder="John"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className={"form_label"} htmlFor="full-name">
            Last Name<span className={"form_label_sterik"}>*</span>
          </label>
          <input
            className={"form_input"}
            type="text"
            name="Last-name"
            id="last-name"
            placeholder="Doe"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className={"form_label"} htmlFor="email">
            Email Address
            <span className={"form_label_sterik"}>*</span>
          </label>
          <input
            className={"form_input"}
            type="email"
            name="email"
            id="email"
            placeholder="abc@yourproductmatters"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className={"form_label"} htmlFor="phone-no">
            Phone No.<span className={"form_label_sterik"}>*</span>
          </label>
          <input
            className={"form_input"}
            type="tel"
            name="phone-no"
            id="phone-no"
            placeholder="000.000.0000"
            onChange={(e) => {
              setphoneno(e.target.value);
            }}
          />
        </div>

        <div>
          <label className={"form_label"} htmlFor="message">
            Please tell us more about your product/ide
          </label>
          <input
            type={"text"}
            className={"form_input"}
            name="message"
            id="message"
            placeholder="Message...."
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          ></input>
          <small>This will help prepare for our meeting</small>
        </div>
        {/* <div className="recaptcha" data-sitekey="6LcAaN8hAAAAACBL1sAynDE0uyAY9DYesIe4bquo"></div> */}
        <button
          data-sitekey="6LcAaN8hAAAAACBL1sAynDE0uyAY9DYesIe4bquo"
          data-callback="onSubmit"
          data-action="submit"
          id="submit-form"
        >
          {!Loadingstate ? "Send" : "Sending ..."}
        </button>
        <p>
          {MessageSend ? "Thank you for your message. It has been sent." : ""}
        </p>
      </form>
    </Fragment>
  );
};

export default Customform;
