import Image from "next/image";
import React from "react";
import Styles from "../../styles/servicecBanner.module.css";

const ServiceBanner = (props) => {
  console.log(props.ServiceImage.width);
  return (
    <section className={Styles.Banner}>
      <div className="container">
        <div className={"flex "+ Styles.banner_flex }>
            <div className={Styles.banner_left}>
                <h2 className="heading">
                    {props.title}
                </h2>
                <p className="paragraph">
                    {props.description}
                </p>
            </div>
            <div className={Styles.banner_right}>
                <Image src={props.ServiceImage.src} height={props.ServiceImage.height} width={props.ServiceImage.width} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
