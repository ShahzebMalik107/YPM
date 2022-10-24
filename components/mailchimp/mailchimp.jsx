import React from "react";

const Mailchimp = () => {
  return (
    <div>
      {/* <!-- Begin Mailchimp Signup Form --> */}
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />

      <div id="mc_embed_signup">
        <form
          action="https://yourproductmatters.us9.list-manage.com/subscribe/post?u=84de8babde8d4df9b87eb12c9&amp;id=37cc941f94&amp;f_id=001e08e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_self"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Schedule a call with our experts</h2>
            <div class="indicates-required">
              <span class="asterisk">*</span> indicates required
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME">
                First Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="FNAME"
                class="required"
                id="mce-FNAME"
                required
              />
              <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span class="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                class="required"
                id="mce-LNAME"
                required
              />
              <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group size1of2">
              <label for="mce-PHONE">
                Phone Number <span class="asterisk">*</span>
              </label>
              <div class="phonefield phonefield-us">
                (
                <span class="phonearea">
                  <input
                    class="phonepart required"
                    pattern="[0-9]*"
                    id="mce-PHONE-area"
                    name="PHONE[area]"
                    maxlength="3"
                    size="3"
                    value=""
                    type="text"
                    required
                  />
                </span>
                )
                <span class="phonedetail1">
                  <input
                    class="phonepart required"
                    pattern="[0-9]*"
                    id="mce-PHONE-detail1"
                    name="PHONE[detail1]"
                    maxlength="3"
                    size="3"
                    value=""
                    type="text"
                    required
                  />
                </span>{" "}
                -
                <span class="phonedetail2">
                  <input
                    class="phonepart required"
                    pattern="[0-9]*"
                    id="mce-PHONE-detail2"
                    name="PHONE[detail2]"
                    maxlength="4"
                    size="4"
                    value=""
                    type="text"
                    required
                  />
                </span>
                <span class="small-meta nowrap">(###) ###-####</span>
              </div>
              <span id="mce-PHONE-HELPERTEXT" class="helper_text"></span>
            </div>
            <div class="mc-field-group">
              <label for="mce-DETAILS">
                Please tell us more about your product/idea{" "}
              </label>
              <input
                type="text"
                value=""
                name="DETAILS"
                class=""
                id="mce-DETAILS"
              />
              <span id="mce-DETAILS-HELPERTEXT" class="helper_text">
                This will help prepare for our meeting.
              </span>
            </div>
            <div hidden="true">
              <input type="hidden" name="tags" value="12703309" />
            </div>
            <div id="mce-responses" class="clear foot">
              <div
                class="response"
                id="mce-error-response"
                style={{display:"none"}}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{display:"none"}}
              ></div>
              {/* </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div
                style={{position: "absolute", left: "-5000px"}}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_84de8babde8d4df9b87eb12c9_37cc941f94"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                  <p class="brandingLogo">
                    <a
                      href="http://eepurl.com/ibwVEX"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* <!--End mc_embed_signup--> */}
    </div>
  );
};

export default Mailchimp;
