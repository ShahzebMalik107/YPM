import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import style from "../styles/header.module.css";
function Header_v2() {
  const [mobileNav, setmobileNav] = useState(false);
  const [Activemenu, setActivemenu] = useState(()=>{
    const location = useRouter();
    const url = location.pathname;
    if (url === "/") {
      return(1);
    }
    else if(url === "/services"){
      return(2)
    }
    else if(url === "/team"){
      return(3)
    }
    else if(url==="/about"){
      return(4)
    }
    else if(url==="/contact"){
      return(5)
    }
    console.log(url);
  });


  return (
    <header className={style.header}>
      <Head>
        <title>Gubloo</title>
      </Head>

      <div className={style.header_main}>
        <div className={"container flex"}>
          <div className={style.logo}>
            <Link href="/">
              <a  onClick={() => {
                      setActivemenu(1);
                    }}>
                <img src="logo.svg" alt="logo" />
              </a>
            </Link>
          </div>
          <div className={style.nav}>
            <div className={style.hamburgermenu}>
              <Image
                onClick={() => setmobileNav(!mobileNav)}
                src={"/static/mobile-menu.svg"}
                height={40}
                width={40}
              />
            </div>
            <ul>
              <li
                className={
                  Activemenu === 1
                    ? style.nav_item + " " + style.nav_item_active
                    : style.nav_item
                }
              >
                <Link href={"/"}>
                  <a
                    onClick={() => {
                      setActivemenu(1);
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={
                  Activemenu === 2
                    ? style.nav_item +
                      " " +
                      style.nav_item_active +
                      " " +
                      style.nav_item_dropdown
                    : style.nav_item + " " + style.nav_item_dropdown
                }
              >
                <Link href={"/services"}>
                  <a
                    onClick={() => {
                      setActivemenu(2);
                    }}
                  >
                    Services
                  </a>
                </Link>
                {/* <div className={style.nav_dropdown}>
                  <ul>
                    <li>
                      <Link href={"/services/webservice"}>
                        <a>Web Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/mobile-app"}>
                        <a>Mobile App Development</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/uiux-design"}>
                        <a>UI/UX Design</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/graphic-design"}>
                        <a>Graphic Design</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/services/digital-marketing"}>
                        <a>SEO and Digital Marketing</a>
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li
                className={
                  Activemenu === 4
                    ? style.nav_item + " " + style.nav_item_active
                    : style.nav_item
                }
              >
                <Link href={"/about"}>
                  <a
                    onClick={() => {
                      setActivemenu(4);
                    }}
                  >
                    About
                  </a>
                </Link>
              </li>
              {/* <li className={style.nav_item}>
                <Link href={"/"}>
                  <a>Careers</a>
                </Link>
              </li> */}
              <li className={style.btn +" btn btn-light"} >
                <Link href={"/contact"}>
                  <a 
                    onClick={() => {
                      setActivemenu(5);
                    }}
                  >
                    Get free consultation
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className={style.contact_img}>
            <Link href={"/contact"}>
              <a>
                <Image
                  objectFit="contain"
                  src="/static/contactus.svg"
                  width={50}
                  height={50}
                />
              </a>
            </Link>
          </div> */}
        </div>
      </div>
      <div className={mobileNav ? style.mobile_active : style.mobile_nav}>
        <ul>
          <li className={style.nav_item}>
            <Link href={"/"}>
              <a onClick={() => setmobileNav(!mobileNav)}>Home</a>
            </Link>
          </li>
          <li className={style.nav_item + " " + style.nav_item_dropdown}>
            <Link href={"/services"}>
              <a onClick={() => setmobileNav(!mobileNav)}>Services</a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href={"/team"}>
              <a onClick={() => setmobileNav(!mobileNav)}>Our team</a>
            </Link>
          </li>
          <li className={style.nav_item}>
            <Link href={"/about"}>
              <a onClick={() => setmobileNav(!mobileNav)}>About us</a>
            </Link>
          </li>
          {/* <li className={style.nav_item}>
            <Link href={"/"}>
              <a>Careers</a>
            </Link>
          </li> */}
          <li className={style.nav_item}>
            <Link href={"/contact"}>
              <a onClick={() => setmobileNav(!mobileNav)}>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header_v2;
