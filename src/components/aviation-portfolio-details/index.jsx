import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import HeaderOne from "../../layout/headers/header";
import React from "react";
import FooterContact from "../../layout/footers/footer-contact";
import FooterThree from "../../layout/footers/footer-3";
// import It_ServiceArea from "./Aviation-portfolio-details-area";
import Aviation_ServiceArea from "./Aviation-portfolio-details-area";

const AviationPortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Aviation Advisor" page_title=" Portfolio Details" />
        <Aviation_ServiceArea/>
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default AviationPortfolioDetails;
