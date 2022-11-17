import React from "react";
import AmazingFeatures from "../../components/landingpagecomponents/amazingFeatures/amazingFeatures";
import Banner from "../../components/landingpagecomponents/banner/banner";
import Banifits from "../../components/landingpagecomponents/benefits/banifits";
import Faqs from "../../components/landingpagecomponents/faqs/faqs";
import Footer from "../../components/landingpagecomponents/footer/footer";
import GetStarted from "../../components/landingpagecomponents/getstarted/getStarted";
import GetStartedToday from "../../components/landingpagecomponents/GetStartedToday/GetStartedToday";
import Header from "../../components/landingpagecomponents/header/header";
import IntegratedSolutions from "../../components/landingpagecomponents/integratedSolution/integratedSolutions";
import Pricing from "../../components/landingpagecomponents/pricing/pricing";
import Testimonals from "../../components/landingpagecomponents/testimonals/testimonals";
import Testimonals_2 from "../../components/testimonals/testimonals";
const lp2 = () => {
  return (
    <>
      <Header />
      <Banner />
      <IntegratedSolutions />
      <GetStartedToday />
      <AmazingFeatures />
      <GetStarted />
      <Faqs />
      <Testimonals />
      <Banifits />
      <div className="container" style={{ padding: "100px 0" }}>
        <Testimonals_2 />
      </div>
      <Pricing />
      <Footer />
    </>
  );
};

export default lp2;
