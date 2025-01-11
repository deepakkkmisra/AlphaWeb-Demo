import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "./PageLayout.scss";
import Footer from "../components/Footer/Footer";

const PageLayout = ({
  children,
  variant,
  isEmailBox = false,
  isRedirects = false,
  backgroundColor = "var(--GRADIENT-2, linear-gradient(0deg, #020411 41.53%, #050D42 97.84%))",
}) => {
  return (
    <div className="mainPageLayoutContainer">
      <div className="mainPageLayoutWrapper">
        <div className="headerSection">
          <Navbar />
        </div>
        <div className="contentSection">{children}</div>
      </div>
      <Footer
        variant={variant}
        isEmailBox={isEmailBox}
        isRedirects={isRedirects}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default PageLayout;
