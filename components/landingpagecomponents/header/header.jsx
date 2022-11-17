import React from "react";
import styles from "../../../styles/landingpagestyling/lp.header.module.css";
import Image from "next/image";
import { useState } from "react";
const Header = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <headee className={styles.header}>
      <div className="container">
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav_desktop}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <div className={styles.menu_toggle}>
            <Image
              onClick={() => setShowMenu(!ShowMenu)}
              src={"/static/mobile-menu.svg"}
              height={40}
              width={40}
            />
          </div>
          <ul className={ShowMenu ? styles.nav_mobile : styles.nav_mobile_hide}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>

          </ul>
        </nav>
      </div>
    </headee>
  );
};

export default Header;
