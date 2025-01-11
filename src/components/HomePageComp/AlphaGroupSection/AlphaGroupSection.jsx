import React from "react";
import "./AlphaGroupSection.scss";
const AlphaGroupSection = () => {
  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="alphaGroupSectionContainer">
      <div className="alphaGroupSectionWrapper">
        <div className="groupTopHeader">
          <p>THE ALPHA GROUP</p>
          <h3>Broker Backed: More Than Just a Prop Firm </h3>
          <p className="headerdesc">
            At Alpha Capital Group, we are more than just a proprietary trading
            firm—we are a comprehensive financial ecosystem designed to empower
            analysts and traders at every stage of their journey. Our diverse
            group of specialized entities works in harmony to deliver excellence
            and innovation across the financial markets.
          </p>
        </div>
        <div className="groupCard">
          <div className="groupDetail alphaFutures">
            <h2>
              Alpha <span>Futures</span>
            </h2>
            <p>
              Alpha Futures elevates proprietary futures trading by offering a
              cutting-edge platform that utilises advanced, in-house technology.
              This entity is integral to Alpha Capital Group’s mission,
              benefiting from the same innovative infrastructure that drives our
              commitment to exceptional trading experiences.
            </p>
            <button
              className="normalButton"
              onClick={() =>
                handleNavigationLinks("https://alpha-futures.com/")
              }
            >
              Learn More
            </button>
          </div>
          <div className="groupDetail alphaMarkets">
            <h2>
              ACG <span>Markets</span>
            </h2>
            <p>
              ACG Markets, our regulated broker licensed in the Seychelles,
              offers a secure and compliant gateway to global financial markets.
              With a strong focus on regulatory excellence and competitive
              access, ACG Markets ensures that your trading is supported by a
              robust and reliable foundation.
            </p>
            <button
              className="normalButton"
              onClick={() => handleNavigationLinks("https://acg-markets.com/")}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaGroupSection;
