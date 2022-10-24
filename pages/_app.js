import { Fragment, useState } from "react";
import "../styles/globals.css";
import Header_v2 from "../components/header-v2";
import Footer from "../components/footer";
import Router from "next/router";
import { useRouter } from "next/router";
import Loader from "../components/loader/loader";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  const router = useRouter();
  const showHeader = router.pathname === "/landing-page" ? false : true;
  return (
    <Fragment>
      <Head>
        {/* Gtag */}
        <script
          src="https://www.googletagmanager.com/gtag/js?id=G-QKYEHZZCKK"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: `` }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-QKYEHZZCKK');
        `
          }}
        />
        {/* Google optimize  */}
        <script
          src="https://www.googleoptimize.com/optimize.js?id=OPT-W9B5TFC"
          dangerouslySetInnerHTML={{ __html: `` }}
        />
      </Head>
      {showHeader && <Header_v2 />}
      {loading && <Loader />}
      <Component {...pageProps} />
      {showHeader && <Footer />}
    </Fragment>
  );
}

export default MyApp;
