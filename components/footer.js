import Link from "next/link";
import React from "react";
import style from "../styles/Footer.module.css";
import Line from "./utils/line";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_inner}>
          <div className={style.footer_left}>
            <img className={style.footer_logo} src="logo-white.svg" alt="" />
            <Line />
            <p className={"paragraph light" + " " + style.footer_text}>
              YourProductMatters Inc is a full-service digital agency with a
              passion for ingenuity and innovation in every medium, YourProductMatters focuses on expanding its digital expertise to bring you
              the best solutions. We are happy and proud to have in our
              portfolio a large base of satisfied clients and success stories.
            </p>
          </div>
          <div className={style.footer_right}>
            <div className={style.footer_right_services}>
              <h2 className="heading light">Company</h2>
              <div className={style.service_links}>
                <ul>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>

                  <li>
                    {/* <Link href="/team">Our team</Link> */}
                  </li>

                  <li>
                    <Link href="/about">About us</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.footer_right_services}>
              <h2 className="heading light">Services</h2>
              <div className={style.service_links}>
                <ul>
                  <li>
                    <Link href="/services#webdev">Web development</Link>
                  </li>

                  <li>
                    <Link href="/services#mobileapp">App development</Link>
                  </li>

                  <li>
                    <Link href="/services#uiux">UI/UX Design</Link>
                  </li>

                  <li>
                    <Link href="/services#graphic_design">Graphic design</Link>
                  </li>

                  <li>
                    <Link href="/services#seo">SEO and Digital Marketing</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.social_images}>
          <ul>
            <li>
              <a href="https://www.facebook.com/gublootechnologies/">
                <img src="static/Facebook.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/gubloo/">
                <img src="static/Linkdin.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/gublootechnologies/">
                <img src="static/instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </div> */}
        {/* <hr className={style.footer_devider} /> */}
        {/* <h2 className="heading light">Contact</h2> */}
        {/* <Line /> */}

        {/* <div className={style.contact_info}>
          <div>
            <div className={style.icon}>
              <img src="static/phone.svg" />
            </div>
            <p className="paragraph light">
              <Link href={"tel:03360529929"}>(+92) 336-052-9929</Link>
            </p>
          </div>
          <div>
            <div className={style.icon}>
              <img src="static/email.svg" />
            </div>
            <p className="paragraph light">
              <Link href={"mailto:hello@gublootechnologies.com"}>
                hello@gublootechnologies.com
              </Link>
            </p>
          </div>
          <div>
            <div className={style.icon}>
              <img src="static/location.svg" />
            </div>
            <div>
              <p className="paragraph light">Bahria Town, Islamabad</p>
              <p className={style.footer_location_text}>
                Gubloo Technologies, Lower Ground, Plot 74, Phase 4, Civic
                Center
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <div className={style.copyright}>
        <p className="paragraph light">©2022 YourProductMatters All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
