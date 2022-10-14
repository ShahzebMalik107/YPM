import styles from "../styles/teams.module.css";
import Head from "next/head";
import Line from "../components/utils/line";
import Image from "next/image";
export default function team() {
  return (
    <div className={styles.team}>
       <Head>
        <title>About Gublootech</title>
        <meta name="description" content="Your product matters is a one-stop-shop. We are a web design and development company with the expertise to build the next generation of your website." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.about_heading}>
        <h1 className="heading">About us</h1>
        <Line />
      </div>
      <div className={"container flex " + styles.our_company}>
        <div className="fb2">
          <h2 className="subheading">Our Company</h2>
          <p className="paragraph">
            From fresh, visually appealing web design and custom application
            development to search engine optimization and social media
            management, Your product matters is a one-stop-shop. We are a web
            design and development company with the expertise to build the next
            generation of your website. We work hard to understand what you want
            your site to do, and we create it for you exactly as you envisioned.
          </p>
        </div>
        <div className={"fb2 " + styles.aml}>
          <Image src="/static/about.svg" height={400} width={400} />
        </div>
      </div>
      <div className={styles.our_vission}>
        <div className="container flex">
          <div className={"fb2 " + styles.aml}>
            <Image src={"/static/vision.svg"} height={400} width={400} />
          </div>
          <div className="fb2">
            <h2 className="subheading">Our Vision</h2>
            <p className="paragraph">
              As a full-service digital agency with a passion for ingenuity and
              innovation in every medium, Your product matters will continue to
              focus on expanding its digital expertise to bring you the best
              solutions. We are happy and proud to have in our portfolio a large
              base of satisfied clients and success stories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
