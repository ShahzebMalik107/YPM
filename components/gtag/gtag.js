import React from "react";
import Script from "next/script";
const Gtag = () => {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QKYEHZZCKK"
        strategy="afterInteractive" 
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QKYEHZZCKK');
        `}
      </Script>
    </>
  );
};

export default Gtag;
