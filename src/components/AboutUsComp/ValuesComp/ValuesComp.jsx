import React from "react";
import "./ValuesComp.scss";

import step1Icon from "../../../assets/icons/step1Icon.svg";
import step2Icon from "../../../assets/icons/step2Icon.svg";
import step3Icon from "../../../assets/icons/step3Icon.svg";
import step4Icon from "../../../assets/icons/step4Icon.svg";
import valueMockup from "../../../assets/images/valueMockup.png";

const ValuesComp = () => {
  return (
    <div className="valuesCompContainer">
      <div className="valueCompWrapper">
        <div className="topHeader">
          <p>Our values</p>
          <h2>What it means to work with Alpha</h2>
        </div>
        <div className="contentWrapper">
          <div className="leftContent">
            <div className="contentBox">
              <img src={step1Icon} alt="step1Icon" />
              <div className="contentDesc">
                <h4>Integrity</h4>
                <p>
                  Every decision we make is in your best interest. We operate
                  with complete transparency, ensuring you can trade with
                  confidence and peace of mind
                </p>
              </div>
            </div>
            <div className="contentBox">
              <img src={step2Icon} alt="step1Icon" />
              <div className="contentDesc">
                <h4>Trust</h4>
                <p>
                  Your trust in us is paramount. With our consistently fair
                  trading conditions and being a steadfast resource, you can
                  depend on us
                </p>
              </div>
            </div>
            <div className="contentBox">
              <img src={step3Icon} alt="step1Icon" />
              <div className="contentDesc">
                <h4>Quality</h4>
                <p>
                  We are committed to providing you with the highest quality
                  services and tools to make your trading life easier.
                </p>
              </div>
            </div>
            <div className="contentBox">
              <img src={step4Icon} alt="step1Icon" />
              <div className="contentDesc">
                <h4>Customer-Centric</h4>
                <p>
                  Your success is our success. We listen to your needs and adapt
                  our service to ensure you get the support & tools that matter
                  to you.
                </p>
              </div>
            </div>
          </div>
          <div className="rightContent">
            <img src={valueMockup} alt="valueMockup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesComp;
