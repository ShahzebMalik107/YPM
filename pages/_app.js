import { Fragment, useState } from "react";
import "../styles/globals.css";
import Header_v2 from "../components/header-v2";
import Footer from "../components/footer";
import Router from "next/router";
import { useRouter } from "next/router";
import Loader from "../components/loader/loader";
import Head from "next/head";
import Script from "next/script";
import Cookies from "universal-cookie"
import consts from "../consts"
import App from "next/app"

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  const router = useRouter();
  const showHeader = router.pathname === "/landing/schedule-an-appointment" ? false : true;
  const showHeaderlp = router.pathname === "/landing/what-we-offer" ? false : true;
  const thankyou = router.pathname === "/thank-you"? false: true; 
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

        {/* Google Tag manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NBMDHLJ');
          `
          }}
        ></script>
        {/* End of google tag manager */}
        {/* Google optimize  */}
        <script
          src="https://www.googleoptimize.com/optimize.js?id=OPT-W9B5TFC"
          dangerouslySetInnerHTML={{ __html: `` }}
        />
      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-NBMDHLJ"
          height="0"
          width="0"
          style={{"display":"none","visibility":"hidden"}}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      {showHeader && showHeaderlp &&thankyou&& <Header_v2 />}
      {loading && <Loader />}
      <Component {...pageProps} />
      {showHeader && showHeaderlp&&thankyou && <Footer />}
    </Fragment>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)

  try {
    const cookies = new Cookies(appContext.ctx.req.headers.cookie)
    const password = cookies.get(consts.SiteReadCookie) ?? ""

    if (password === "ypmtalent") {
    appProps.pageProps.hasReadPermission = true
    }
    return { ...appProps }
  } catch (error) {
    return { ...appProps }
    
  }
}

export default MyApp;
