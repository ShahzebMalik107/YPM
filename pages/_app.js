import { Fragment, useState } from "react";
import "../styles/globals.css";
import Header_v2 from "../components/header-v2";
import Footer from "../components/footer";
import Router  from "next/router";
import {useRouter}  from "next/router";
import Loader from "../components/loader/loader"
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  });
  Router.events.on("routeChangeComplete", (url)=>{
    setLoading(false)
  })
  const router=useRouter();
  const showHeader=router.pathname==="/landing-page" ? false : true;
  return (
    <Fragment>
      {showHeader && <Header_v2 />}
      {loading && <Loader />}
      <Component {...pageProps} />
      {showHeader && <Footer />}
    </Fragment>
  );
}

export default MyApp;
