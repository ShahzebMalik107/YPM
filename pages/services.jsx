import { Fragment } from "react";
import styles from "../styles/servicespage.module.css";
import Link from "next/link";
import tech_service_img from "../public/static/tech-services.png";
import web_app_img from "../public/static/web-application-development.png";
import mobile_img from "../public/static/mobile-app-d.png";
import UIUX_img from "../public/static/UI-UX.png";
import graphic_design from "../public/static/UI-UX.png";
import seo_img from "../public/static/seo-s.png"
import Image from "next/image";
import Head from "next/head";
const services = () => {
  return (
    <Fragment>
       <Head>
        <title>Services at YPM</title>
        <meta name="description" content="We work as an extension of you. Let's go on an imporvement journey, together." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className={styles.top_banner}>
        <div className="container">
          <h1 className={"heading " + styles.heading_lite}>
            We work as an <span>extension of you.</span> Let's go on an
            imporvement journey, together.
          </h1>
        </div>
      </section>
      {/* Banner in middle */}
      <section className={styles.banner_section} >
        <div className="container">
          <div className={styles.halfleft}>
            <h2 className="subheading">
              Software engineering is in our hearts.
            </h2>
            <p className="paragraph-small light">
              We're techies who like to solve complex problems. Combining our
              software engineering expertise with our vast business knowledge,
              we've built lasting relationships with companies of all sizes from
              a range of industries. <br /> <br /> We don't pretend to have all
              the answers at the start. But we have the experience to know the
              best path to follow, the agility to adapt as we go along, and the
              drive to always deliver on our commitments. <br />
              <br /> This is our way and it's the journey we'd like to take
              together with you.
            </p>
          </div>
          <div>
            <img src="/static/services.png" alt="" />
          </div>
        </div>
      </section>
      {/* Services main */}
      <section className={styles.service_main}>
        <div className={"container " + `${styles.inner}  ${styles.img_center}` }>
          <div className={ `${styles.service_left} ${styles.img_center}`}>
            <Image className={styles.img_center}
              src={tech_service_img.src}
              height={tech_service_img.height}
              width={tech_service_img.width}
            />
          </div>

          <div className={styles.service_left}>
            <h2 className="subheading">Tech Services</h2>
            <p className="paragraph-small">
              You have the idea; you retain complete control over the project.{" "}
              <br />
              <br />
              We will assemble a dedicated agile team for you, according to your
              needs: DevOps engineers, backend developers, frontend developers,
              test engineers, project managers, and UX/UI designers.
              <br />
              <br /> Our Project Managers will work closely with you to bridge
              your requirements to the development team. So while we are
              bringing to life your ideas, you can stay focused on the core of
              your business.
            </p>
          </div>
        </div>
      </section>

      <section id="webdev" className={styles.service_main + " " + styles.service_main_alt}>
        <div className={"container " + styles.inner}>
          <div className={styles.service_left}>
            <h2 className="subheading">Web Application Development</h2>
            <p className="paragraph-small">
              From initial analysis to design, prototyping, and implementation,
              followed by support and maintenance, we provide custom end-to-end
              web development services.
            </p>
            <ul className={styles.list}>
              <li>
                <p className="paragraph-small"> Software architecture </p>
              </li>
              <li>
                <p className="paragraph-small"> Software integration </p>
              </li>
              <li>
                <p className="paragraph-small"> Software modernisation </p>
              </li>
              <li>
                <p className="paragraph-small"> API development </p>
              </li>
              <li>
                <p className="paragraph-small"> Maintenance and support </p>
              </li>
            </ul>
            {/* <Link href={"/services/webservice"}>
              <a className="btn-Dark">Learn More </a>
            </Link> */}
          </div>

          <div className={`${styles.service_left} ${styles.img_center}`}>
              <Image
                src={web_app_img.src}
                height={web_app_img.height}
                width={web_app_img.width}
              />
          </div>
        </div>
      </section>

      <section id="mobileapp" className={styles.service_main}>
        <div className={"container " + styles.inner}>
          <div className={ `${styles.service_left} ${styles.img_center}`}>
            <Image
              src={mobile_img.src}
              height={mobile_img.height}
              width={mobile_img.width}
            />
          </div>

          <div className={styles.service_left}>
            <h2 className="subheading">Mobile Applications Development</h2>
            <p className="paragraph-small">
              Our development team is made up of experienced professionals.
              They're passionate about developing quality native mobile
              applications for all platforms, Android devices, and mobile
              cross-platform solutions.
            </p>
            <ul className={styles.list}>
              <li>
                <p className="paragraph-small"> iPhone and iPad </p>
              </li>
              <li>
                <p className="paragraph-small">Android smartphones </p>
              </li>
              <li>
                <p className="paragraph-small">
                  {" "}
                  Cross-platform solutions (such as, React Native, Unity 3D,
                  Flutter, etc.)
                </p>
              </li>
            </ul>
            {/* <Link href={"/services/mobile-app"}>
              <a className="btn-Dark">Learn More </a>
            </Link> */}
          </div>
        </div>
      </section>

      <section id="uiux" className={styles.service_main + " " + styles.service_main_alt}>
        <div className={"container " + styles.inner}>
          <div className={styles.service_left}>
            <h2 className="subheading">UI/UX Design</h2>
            <p className="paragraph-small">
              We aspire to create effective UX/UI design solutions. Focused on
              the end-user experience, we use design to improve how people
              interact with products and how they engage with businesses.
            </p>
            <ul className={styles.list}>
              <li>
                <p className="paragraph-small">
                  {" "}
                  User research and personas description{" "}
                </p>
              </li>
              <li>
                <p className="paragraph-small">
                  UX/UI design for web and mobile apps
                </p>
              </li>
              <li>
                <p className="paragraph-small">
                  Software wireframing and prototyping
                </p>
              </li>
              <li>
                <p className="paragraph-small">Data-driven design</p>
              </li>
              <li>
                <p className="paragraph-small">Data visualisation</p>
              </li>
              <li>
                <p className="paragraph-small">
                  Usability, responsiveness, and accessibility
                </p>
              </li>
              <li>
                <p className="paragraph-small">
                  Design quality control and testing
                </p>
              </li>
            </ul>
            {/* <Link href={"/services/uiux-design"}>
              <a className="btn-Dark">Learn More </a>
            </Link> */}
          </div>

          <div className={ `${styles.service_left} ${styles.img_center}`}>
            <Image
              src={UIUX_img.src}
              height={UIUX_img.height}
              width={UIUX_img.width}
            />
          </div>
        </div>
      </section>

      <section id="graphic_design" className={styles.service_main}>
        <div className={"container " + styles.inner}>
          <div className={ `${styles.service_left} ${styles.img_center}`}>
          <Image
              src={graphic_design.src}
              height={graphic_design.height}
              width={graphic_design.width}
            />
          </div>

          <div className={styles.service_left}>
            <h2 className="subheading">Graphic Design</h2>
            <p className="paragraph-small">
              A good design influences the choices, decisions & buying behavior
              of customers. Our design team is highly experienced in creating
              the right set of designs and color combinations for your brand's
              success.
            </p>
          </div>
        </div>
      </section>

      <section id="seo" className={styles.service_main + " " + styles.service_main_alt}>
        <div className={"container " + styles.inner}>
          <div className={styles.service_left}>
            <h2 className="subheading">SEO and Digital Marketing</h2>
            <p className="paragraph-small">
              Our digital marketers have expertise in creating unique social
              campaigns and efficient SEO plans to rank up your business or
              portfolios over search engines and social media platforms.
            </p>
           
          </div>

          <div className={ `${styles.service_left} ${styles.img_center}`}>
            <Image
              src={seo_img.src}
              height={seo_img.height}
              width={seo_img.width}
            />
          </div>
        </div>
      </section>

      {/* Contact us section */}
      <section className={styles.contact_us}>
        <div className="container">
          <h2 className="subheading light">You got the idea we have the expertise</h2>
          <linewhite />
          <Link href={"/consultation"}>
            <a className="btn-Dark">Get a free Consultation</a>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default services;
