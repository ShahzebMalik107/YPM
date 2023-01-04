import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroBanner from "../components/homepage_banner/hero_banner";
import Image from "next/image";
import Line from "../components/utils/line";
import { Fragment } from "react";
import Link from "next/link";
import Testimonals from "../components/testimonals/testimonals";

// import InViewPoint from "../components/utils/InViewPoint";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>YourProductMatters</title>
        <meta
          name="description"
          content="YourProductMatters specializes in offering services to medium-sized and large businesses all across the world."
        />
        <meta property="og:image" content="favicon.ico" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* Hero Banner */}
      <HeroBanner />
      {/* We Offer a Full Range of B2B Service */}
      <section className={styles.b2b + " " + "container"}>
        <div className="flex">
          <div className="fb2">
            <h2 className="heading">We Offer a Full Range of B2B Services!</h2>
            <Line />
            <h3 className="subheading">
            YourProductMatters specializes in offering services to medium-sized and large businesses all across the world.

            </h3>
            <ul className={styles.list}>
              <li>
                <p className="paragraph">
                Our broad technical expertise and business acumen help us design distinctive solutions that support various businesses in attracting and retaining new customers.

                </p>
              </li>
              <li>
                <p className="paragraph">
                With a well-coordinated unit of 70+ employees, YourProductMatters serves its customers globally regardless of their geographical region, operational domain, and organizational fine points.
                </p>
              </li>
              <li>
                <p className="paragraph">
                We stick to a well-organized and managed development process. Above all, we respect deadlines!
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.image_right + " fb2"}>
            <Image
              src={"/static/We-Offer-a-full-Range.svg"}
              height={432}
              width={358}
            />
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className={styles.whoweare}>
        <div className="container">
          <div className="flex">
            <div className="fb2">
              <h2 className="heading">Who We Are</h2>
              <Line />
              <p className="paragraph">
              YourProductMatters is a one-stop shop for contemporary web/mobile development projects! Our team comprises a talent pool that aims to build complex designs schematically. We possess a great track record of understanding client needs quickly, walking you through each step of the process, and delivering a high-quality product on budget and schedule.

              </p>
              {/* <button className="btn btn-Dark">
                {" "}
                <Link href={"#"}>Button Dark</Link>
              </button> */}
            </div>
            <div className={styles.image_right + " fb2"}>
              <Image src={"/static/Who_we_are.svg"} height={262} width={384} />
            </div>
          </div>
        </div>
      </section>
      {/* Industries we Serve */}
      <section className="container margin-100">
        <div className={styles.we_server_heading}>
          <h2 className="heading">Industries We Serve</h2>
          <Line />
        </div>
        {/* <p className="paragraph center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </p> */}
        <div className={styles.we_server_icons}>
          <div className={styles.we_server_item}>
            <Image src={"/static/on_demand.svg"} height={64} width={64} />
            <p className="small_heading">On Demand</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/game.jpg"} height={64} width={64} />
            <p className="small_heading">Games</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/ecommerce.jpg"} height={64} width={64} />
            <p className="small_heading">E-commerce</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/finance.jpg"} height={64} width={64} />
            <p className="small_heading">Finance</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/healthCare.jpg"} height={64} width={64} />
            <p className="small_heading">Health Care</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/food.jpg"} height={64} width={64} />
            <p className="small_heading">Food</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/realestate.jpg"} height={64} width={64} />
            <p className="small_heading">Real Estate</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/ture.jpg"} height={64} width={64} />
            <p className="small_heading">Tour and Travel</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/education.jpg"} height={64} width={64} />
            <p className="small_heading">Education</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/transport.jpg"} height={64} width={64} />
            <p className="small_heading">Transport</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/block.png"} height={64} width={64} />
            <p className="small_heading">Block Chain</p>
          </div>
          <div className={styles.we_server_item}>
            <Image src={"/industries/grocery.jpg"} height={64} width={64} />
            <p className="small_heading">Grocery</p>
          </div>
        </div>
      </section>

      <div className={styles.testimonals + " padding-100"}>
        <div className="container ">
            <Testimonals/>
        </div>
      </div>


      
      <section className={styles.Testimonials + " padding-100"}>
        <div className="container"> 
          <div className={styles.we_server_heading}>
            <h2 className="heading light">Schedule a Free Consultation</h2>
            <div className="line_heading">
              <span className="small-line"></span> 
              <span className="large-line"></span>
            </div>
          </div>
          <button className="btn btn-Dark btn-center">
            <a href="/consultation">Get in touch</a>
          </button>
        </div>
      </section>

      {/* { Careers } */}
      {/* <section className={styles.careers + " padding-100"}>
        <div className="container center">
          <div className={styles.fix_width}>
            <p className="paragraph light">Careers</p>
            <h2 className="heading light">Like to join our team</h2>
            <div className="line_heading">
              <span className="small-line light" />{" "}
              <span className="large-line light" />
            </div>
            <button className="btn btn-Dark">
              {" "}
              <Link href={"#"}>Apply Now</Link>
            </button>
          </div>
        </div>
      </section> */}
    </Fragment>
  );
}
