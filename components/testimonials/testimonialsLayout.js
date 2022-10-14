import Link from "next/link";
import React from "react";
import styles from "../../styles/testimonals.module.css"
import Image from "next/image";
import Script from "next/script";


{/* <img src={props.style3Source}></img> */}

function testimonalsLayout(props) {
  return (
    <div className={styles.main_container + " testimonial-flex"}>
        <div className="fb2-testimonial text-left iframe-container ">
        <div className={props.style1} style={{backgroundColor: props.style1Color}}></div>
        <div className={props.style2} style={{backgroundColor: props.style2Color}}></div>
        {props.style3Source ? (
        <div className={props.style3} > <Image src={props.style3Source} layout="fill" /> </div>
          ):(<div></div>)}
        
        <div
          style={{
            padding: "73.33% 0 0 0",
            position: "relative"
          }}
        >
          <iframe
            src={props.videolink}
            title={props.title}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%"
            }}
          ></iframe>
        </div>
        <Script src="https://player.vimeo.com/api/player.js" />
        <div className="fb2-testimonial
         social-button-container-flex-bottom">
          {
              props.youtube!=" " ?<Link href={props.youtube}><a className=" social-buton btn-border button-flex"><Image className="socail-image-margin" src="/static/youtube-icon.svg" height={15} width={20} />YouTube</a></Link> : "" 
          }
          
          <Link href={props.instagram}>
          <a className=" social-buton btn-border button-flex">
            <Image src="/static/instagram-icon.svg" height={20} width={20} />
                Instagram</a>
          </Link>
        </div>
      </div>
      <div className="fb40">
        <h2 className="subheading paragraph-right">{props.title}</h2>
        <p className="test-paragraph paragraph-right">{props.description}</p>
        <div className="fb2-testimonial
         social-button-container-flex-end">
          {props.youtube !=" "? <Link href={props.youtube}>
          <a className=" social-buton btn-border button-flex">
            <Image className="socail-image-margin" src="/static/youtube-icon.svg" height={15} width={20} />
                YouTube
                </a>
          </Link>: ""}
         {props.instagram !=""?  <Link href={props.instagram}>
          <a className=" social-buton btn-border button-flex">
            <Image src="/static/instagram-icon.svg" height={20} width={20} />
                Instagram</a>
          </Link>: ""}
        </div>
      </div>
      
    </div>
  );
}

export default testimonalsLayout;