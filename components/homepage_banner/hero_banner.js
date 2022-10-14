import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";
import { Fragment } from "react";
import Style from "../../styles/heroBanner.module.css";
import mobile_img from "../../public/static/mobile-app.png"

const HeroBanner = () => {
  let innitalstate = 1;
  const [activeslide, setactiveslide] = useState(innitalstate);
  
  const activetabs = (index) => {
    setactiveslide(index);
  };

  const clearInterval_handler = ()=>{

  }
  return (
    <Fragment>
      <section className={Style.slider_main}>
        <div
          className={
            activeslide === 1
              ? Style.HeroBanner + " " + Style.slide_active
              : Style.not_active + " " + Style.HeroBanner
          }
        >
          <div className={Style.Slider}>
            <div className={Style.Slide_1}>
              <div className="container">
                <div className={Style.slider_item}>
                  <div className={Style.slider_text}>
                    <h2 className="heading light">Web Development</h2>
                    <p className="paragraph light">
                      Team of highly experienced web developers to help your
                      brand reach its full potential. Get more sales for your
                      business with the high quality and professional web
                      development experience.
                    </p>
                    <button className="btn btn-Dark">
                      <Link href={"/services#webdev"}>Learn more</Link>
                    </button>
                  </div>
                  <div className={Style.slider_img}>
                    <Image
                      src={"/static/hero_web_dev.svg"}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile App Development Section*/}
        <div
          className={
            activeslide === 2
              ? Style.HeroBanner + " " + Style.slide_active
              : Style.not_active + " " + Style.HeroBanner
          }
        >
          <div className={Style.Slider}>
            <div className={Style.Slide_2}>
              <div className="container">
                <div className={Style.slider_item}>
                  <div className={Style.slider_text}>
                    <h2 className="heading ">Mobile App Development</h2>
                    <p className="paragraph ">
                      {
                        "  We offer you design, development, integration, and management service for your app. Leading the entire process from ideation and concept to delivery, and to ongoing support."
                      }
                    </p>
                    <button className="btn btn-light">
                      <Link href={"/services#mobileapp"}>Learn more</Link>
                    </button>
                  </div>
                  <div className={Style.slider_img}>
                    <Image
                      src={mobile_img.src}
                      width={mobile_img.width}
                      height={mobile_img.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*UI/UX Design Section*/}
        <div
          className={
            activeslide === 3
              ? Style.HeroBanner + " " + Style.slide_active
              : Style.not_active + " " + Style.HeroBanner
          }
        >
          <div className={Style.Slider}>
            <div className={Style.Slide_3}>
              <div className="container">
                <div className={Style.slider_item}>
                  <div className={Style.slider_text}>
                    <h2 className="heading">UI/UX Design</h2>
                    <p className="paragraph">
                      {
                        " We are specialized in creating interactive and smooth UI/UX designs that provide a better user experience for your product. Making it user-friendly for consumers and competitive in the market."
                      }
                    </p>
                    <button className="btn btn-light">
                      <Link href={"/services#uiux"}>Learn more</Link>
                    </button>
                  </div>
                  <div className={Style.slider_img}>
                    <Image
                      src={"/static/UXDesign.svg"}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Graphic Design Section*/}
        <div
          className={
            activeslide === 4
              ? Style.HeroBanner + " " + Style.slide_active
              : Style.not_active + " " + Style.HeroBanner
          }
        >
          <div className={Style.Slider}>
            <div className={Style.Slide_4}>
              <div className="container">
                <div className={Style.slider_item}>
                  <div className={Style.slider_text}>
                    <h2 className="heading light">Graphic Design</h2>
                    <p className="paragraph light">
                      {
                        "A good design influences the choices, decisions & buying behavior of customers. Our design team is highly experienced in creating the right set of designs and color combinations for your brand's success."
                      }{" "}
                    </p>
                    <button className="btn btn-light">
                      <Link href={"/services#graphic_design"}>Learn more</Link>
                    </button>
                  </div>
                  <div className={Style.slider_img}>
                    <Image
                      src={"/static/GraphicDesign.svg"}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*SEO and Digital Marketing Section*/}
        <div
          className={
            activeslide === 5
              ? Style.HeroBanner + " " + Style.slide_active
              : Style.not_active + " " + Style.HeroBanner
          }
        >
          <div className={Style.Slider}>
            <div className={Style.Slide_5}>
              <div className="container">
                <div className={Style.slider_item}>
                  <div className={Style.slider_text}>
                    <h2 className="heading">SEO and Digital Marketing</h2>
                    <p className="paragraph">
                      {
                        " Our digital marketers have expertise in creating unique social campaigns and efficient SEO plans to rank up your business or portfolios over search engines and social media platforms."
                      }
                    </p>
                    <button className="btn btn-light">
                      <Link href={"/services#seo"}>Learn more</Link>
                    </button>
                  </div>
                  <div className={Style.slider_img}>
                    <Image
                      src={"/static/SEOandDigitalMarketing.svg"}
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Slider Buttons Section*/}
      <section className={Style.Slider_btn}>
        <div className={Style.Slider_btns_row}>
          <div
            className={
              activeslide === 1
                ? Style.Slider_col + " " + Style.Slider_col_active
                : Style.Slider_col
            }
            onClick={() => activetabs(1)}
            id="slide-1"
            
          >
            <h2>
              Web <br />
              development
            </h2>
            <h3>01</h3>
          </div>
          <div
            className={
              activeslide === 2
                ? Style.Slider_col + " " + Style.Slider_col_active
                : Style.Slider_col
            }
            onClick={() => activetabs(2)}
            id="slide-2"
          >
            <h2>Mobile App Development</h2>
            <h3>02</h3>
          </div>
          <div
            className={
              activeslide === 3
                ? Style.Slider_col + " " + Style.Slider_col_active
                : Style.Slider_col
            }
            onClick={() => activetabs(3)}
            id="slide-3"
          >
            <h2>
              UI/UX <br />
              Design
            </h2>
            <h3>03</h3>
          </div>
          <div
            className={
              activeslide === 4
                ? Style.Slider_col + " " + Style.Slider_col_active
                : Style.Slider_col
            }
            onClick={() => activetabs(4)}
            id="slide-4"
          >
            <h2>
              Graphics <br />
              Design
            </h2>
            <h3>04</h3>
          </div>
          <div
            className={
              activeslide === 5
                ? Style.Slider_col + " " + Style.Slider_col_active
                : Style.Slider_col
            }
            onClick={() => activetabs(5)}
            id="slide-5"
          >
            <h2>
              SEO and <br />
              Digital Marketing
            </h2>
            <h3>05</h3>
          </div>
        </div>
      </section>
      <Script src="/banner-script.js"/>
    </Fragment>
  );
};

export default HeroBanner;
