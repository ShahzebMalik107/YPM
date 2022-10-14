import React, { Fragment } from "react";
import Styles from "../../styles/loader.module.css";
import LoaderAnimation from "../../public/static/Infinity-1s-200px.svg";
import Image from "next/image";

const Loader = () => {

  console.log(LoaderAnimation);
  return (
    <Fragment>
      <div className={Styles.loader}>
        <Image
          src={LoaderAnimation.src}
          width={LoaderAnimation.width}
          height={LoaderAnimation.height}
        />
      </div>
    </Fragment>
  );
};

export default Loader;
