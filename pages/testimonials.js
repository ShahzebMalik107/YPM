// import moduleName from 'module';
import { Fragment } from "react";
import Testimonalslayout1 from "../components/testimonials/testimonalslayout1";
import Testimonalslayout from "../components/testimonials/testimonialsLayout";
import styles from "../styles/testimonals.module.css";
import Line from "../components/utils/line";
import Head from "next/head";
function testimonals() {
  return (
    <Fragment>
       <Head>
        <title>Testimonials Gublootech </title>
        <meta name="description" content="What People say about Us" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className="container">
        <div className={styles.text_head}>
          <h1 className="heading">Testimonials</h1>
          <Line />
        </div>
        <p className="paragraph text-center padding-bottom-50p">
        The customer's perception is our reality.
        </p>
      </section>
      
      <div className={styles.testimonials_page}>
        <section className="container">
          <Testimonalslayout1
            title={"Huub Van Der Mark"}
            description={
              "I’m incredibly grateful that I am able to do something I love every day "
            }
            youtube={"https://www.youtube.com/c/HuubVlogs"}
            instagram={"https://www.instagram.com/huubvlogs/?hl=en"}
            videolink={`https://player.vimeo.com/video/745873594?h=fba489d442&badge=0&autopause=0&player_id=0&app_id=58479`}
            style1={"box-bottom-right"}
            style1Color={"#462C2B"}
            style2={"box-top-left"}
            style2Color={"#ED5C56"}
            style3={"background-circle-top-right"}
            style3Source={"/static/background_circle_top_right.svg"}
          />
        </section>
        <section className="container">
          <Testimonalslayout
            title={"Alexander Volberding"}
            description={
              "Alexander is a multilingual senior producer with 5 years of experience operating across 3 continents. He’s passionate about documentaries, marketing, rollerblading, and firebreathing. Over the last 10 years he’s lived in China, Mexico and Pakistan and served 4 years as an Air Force linguist."
            }
            youtube={"https://www.youtube.com/c/CollegeFreeUSA"}
            instagram={"https://www.instagram.com/alexander.video/"}
            videolink={`https://player.vimeo.com/video/745873549?h=71283ffc37&badge=0&autopause=0&player_id=0&app_id=58479`}
            style1={"circle-bottom-left"}
            style1Color={"#6356ED"}
            style2={"circle-top-right"}
            style2Color={"#1DDF92"}
            style3={"background-circle-top-left"}
            style3Source={"/static/background_circle_top_left.svg"}
          />
        </section>
        <section className="container">
          <Testimonalslayout1
            title={"Sara Farooqi Nutritionist"}
            description={
              "We at Kid's Plate, are a team of Nutritionists and chefs who not only produce the healthiest tastier food for the kids but also keep a close check on their appropriate calorie intake and nutritional needs. "
            }
            youtube={""}
            instagram={"https://www.instagram.com/kidsplatepk/"}
            videolink={`https://player.vimeo.com/video/745873467?h=516167d4cc&badge=0&autopause=0&player_id=0&app_id=58479`}
            style1={"circle-bottom-left"}
            style1Color={"#ED5C56"}
            style2={"circle-top-right"}
            style2Color={"#EDA756"}
          />
        </section>
        <section className="container">
          <Testimonalslayout
            title={"Amel"}
            description={
              "I intend to show that yoga can be fun and an incredible tool for personal development. "
            }
            youtube={"https://www.youtube.com/channel/UCQEqSFdW2RC9NJmm6oimTYw?view_as=subscriber"}
            instagram={"https://www.instagram.com/itsamelyoga/?hl=en"}
            videolink={`https://player.vimeo.com/video/745873499?h=a165fcbb49&badge=0&autopause=0&player_id=0&app_id=58479`}
            style1={"box-bottom-right"}
            style1Color={"#EDA756"}
            style2={"box-top-left"}
            style2Color={"#1DDF92"}
            style3={"background-circle-bottom-left"}
            style3Source={"/static/background_circle_bottom_left.svg"}
          />
        </section>
        
        <section className="container">
          <Testimonalslayout1
            title={"Marsha Jean"}
            description={
              "Marsha Jean has been a nomadic travel photographer since 2015. She shoots a diverse range of subjects, often to challenge conventional media views of the world."
            }
            youtube={"https://www.youtube.com/c/MarshaJean"}
            instagram={"https://www.instagram.com/themarshajean/"}
            videolink={`https://player.vimeo.com/video/745873633?h=a04903367d&badge=0&autopause=0&player_id=0&app_id=58479`}
            style1={"box-bottom-left"}
            style1Color={"#ED5C56"}
            style2={"box-top-right"}
            style2Color={"#EDA756"}
            style3={"background-circle-bottom-right"}
            style3Source={"/static/background_circle_bottom_right.svg"}
          />
        </section>
       
      </div>
      
      
    </Fragment>
  );
}

export default testimonals;
