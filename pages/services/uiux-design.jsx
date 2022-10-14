import React, { Fragment } from "react";
import ServiceBanner from "../../components/serviceBanner/serviceBanner";
import serviceImage from "../../public/static/Service-image.png";
import Styles from "../../styles/services.module.css";
import chohan from "../../public/static/chohan_estate.png";
import Image from "next/image";
import Wordpress from "../../public/static/wordpress.svg";
import PHP from "../../public/static/PHP.svg";
import Reactsvg from "../../public/static/React.svg";
import lamb from "../../public/static/lamb.svg";
import webBanner from "../../public/static/hero_web_dev.svg"
const WebService = () => {
  return (
    <Fragment>
      <ServiceBanner
        title={"UI/UX Design"}
        description={
          "Team of highly experienced web developers to help your brand reach its full potential. Get more sales for your business with the high quality and professional web development experience."
        }
        ServiceImage={serviceImage}
      />
      <div className="container">
        <section className={Styles.clients}>
          <div className={Styles.servicec_image}>
            <a href="#">
              <Image
                src={chohan.src}
                width={chohan.width}
                height={chohan.height}
              />
            </a>
          </div>
          <div className={Styles.servicec_image}>
            <a href="#">
              <Image
                src={chohan.src}
                width={chohan.width}
                height={chohan.height}
              />
            </a>
          </div>
          <div className={Styles.servicec_image}>
            <a href="#">
              <Image
                src={chohan.src}
                width={chohan.width}
                height={chohan.height}
              />
            </a>
          </div>
          <div className={Styles.servicec_image}>
            <a href="#">
              <Image
                src={chohan.src}
                width={chohan.width}
                height={chohan.height}
              />
            </a>
          </div>
        </section>
        {/* Experience Section */}
        <section className={Styles.experience}>
          <h2 className="subheading">Our Expertise</h2>
          <p className="paragraph">
            Team of highly experienced web developers to help your brand reach
            its full potential. Get more sales for your business with the high
            quality and professional web development experience.
          </p>
          <div className={Styles.cards}>
            {/* First Item */}
            <div className={Styles.wordpress + " " + Styles.card_items}>
              <div className={Styles.logo}>
                <Image
                  src={Wordpress.src}
                  height={Wordpress.height}
                  width={Wordpress.width}
                />
              </div>
              <p className={Styles.paragraph_small}>
                -Lorem ipsum dolor sit -amet, consetetur -sadipscing elitr, sed
                diam -nonumy eirmod tempor
              </p>
            </div>
            {/* 2nd Item */}
            <div className={Styles.php + " " + Styles.card_items}>
              <div className={Styles.logo}>
                <Image src={PHP.src} height={PHP.height} width={PHP.width} />
              </div>
              <p className={Styles.paragraph_small}>
                -Lorem ipsum dolor sit -amet, consetetur -sadipscing elitr, sed
                diam -nonumy eirmod tempor
              </p>
            </div>
            {/* Third Itmem */}
            <div className={Styles.lamb_stack + " " + Styles.card_items}>
              <div className={Styles.logo}>
                <Image src={lamb.src} height={lamb.height} width={lamb.width} />
              </div>
              <p className={Styles.paragraph_small}>
                -Lorem ipsum dolor sit -amet, consetetur -sadipscing elitr, sed
                diam -nonumy eirmod tempor
              </p>
            </div>
            {/* Forth item */}
            <div className={Styles.react + " " + Styles.card_items}>
              <div className={Styles.logo}>
                <Image
                  src={Reactsvg.src}
                  height={Reactsvg.height}
                  width={Reactsvg.width}
                />
              </div>
              <p className={Styles.paragraph_small}>
                -Lorem ipsum dolor sit -amet, consetetur -sadipscing elitr, sed
                diam -nonumy eirmod tempor
              </p>
            </div>
          </div>
        </section>
        {/* Web Development */}
        <section className={Styles.Service_paragraph +" "+Styles.Service_paragraph1}>
          <div className={Styles.Service_paragraph_text}>
            <h2 className="subparagraph">UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              maxime amet nulla dolores sint voluptatum ea tenetur, molestias
              possimus officiis, assumenda sit consectetur delectus earum, et
              quis officia temporibus laudantium magnam vero. Modi dolorum sequi
              ducimus minima repellat sed! Fugit quam laudantium, recusandae
              culpa aperiam voluptatem laboriosam pariatur libero, magni tempore
              debitis fugiat minus, vero eos. Delectus, modi!
            </p>
          </div>
          <div className={Styles.Service_paragraph_image}>
            <Image src={webBanner.src} width={webBanner.width} height={webBanner.height}  />
          </div>
        </section>

        <section className={Styles.Service_paragraph}>
          <div className={Styles.Service_paragraph_image}>
            <Image src={webBanner.src} width={webBanner.width} height={webBanner.height}  />
          </div>
          <div className={Styles.Service_paragraph_text}>
            <h2 className="subparagraph">UI/UX Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              maxime amet nulla dolores sint voluptatum ea tenetur, molestias
              possimus officiis, assumenda sit consectetur delectus earum, et
              quis officia temporibus laudantium magnam vero. Modi dolorum sequi
              ducimus minima repellat sed! Fugit quam laudantium, recusandae
              culpa aperiam voluptatem laboriosam pariatur libero, magni tempore
              debitis fugiat minus, vero eos. Delectus, modi!
            </p>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default WebService;
