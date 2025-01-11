import React from "react";
import "./IntroSection.scss";
import { ReactComponent as TrustPilotLogo } from "../../../assets/icons/trustpilotLogo.svg";
import { ReactComponent as RatingsFourHalf } from "../../../assets/icons/ratingsFourHalf.svg";
import CountUp from "react-countup";
const IntroSection = () => {
  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="introSectionContainer">
      <div className="introSectionWrapper">
        <div className="topSectionIntro">
          <p className="title">ALPHA CAPITAL</p>
          <h2 className="motto">
            Trade Smarter,<span>Trade Alpha</span>
          </h2>
          <p className="stats">
            Join <span>308,000+</span> traders who trust Alpha Capital Group.
            Improve with an Alpha analyst account up to <span>$200,000 </span>
            and earn up to <span>80%</span> of your simulated profits.
          </p>
        </div>
        <div className="midSectionIntro">
          <button
            className="normalButton"
            onClick={() =>
              handleNavigationLinks("https://app.alphacapitalgroup.uk/")
            }
          >
            Start Alpha Evaluation
          </button>
          <button
            className="normalButton"
            onClick={() =>
              handleNavigationLinks("https://app.alphacapitalgroup.uk/")
            }
          >
            Take Your Free Trial
          </button>
        </div>
        <div className="bottomSectionIntro">
          <div className="ratingsBox">
            <p>Excellent</p>
            <RatingsFourHalf
              // style={{ cursor: "pointer" }}
              onClick={() =>
                handleNavigationLinks(
                  "  https://www.trustpilot.com/review/alphacapitalgroup.uk?utm_medium=trustbox&utm_source=Horizontal"
                )
              }
            />

            <TrustPilotLogo
              style={{ cursor: "pointer" }}
              onClick={() =>
                handleNavigationLinks(
                  "  https://www.trustpilot.com/review/alphacapitalgroup.uk?utm_medium=trustbox&utm_source=Horizontal"
                )
              }
            />
          </div>
          <div className="statsBox">
            <div className="statDiv">
              <p className="statNum">
                <CountUp start={0} end={140} />+
              </p>
              <p className="statLabel">Countries</p>
            </div>
            <div className="statDiv">
              <p className="statNum">
                {" "}
                <CountUp start={0} end={30} />
                K+
              </p>
              <p className="statLabel">Qualified Analysts</p>
            </div>
            <div className="statDiv">
              <p className="statNum">
                {" "}
                <CountUp start={0} end={308} />
                K+
              </p>
              <p className="statLabel">Traders</p>
            </div>
            <div className="statDiv">
              <p className="statNum">
                {" "}
                <CountUp start={0} end={10} />K
              </p>
              <p className="statLabel">Virtual Strategies</p>
            </div>
            <div className="statDiv">
              <p className="statNum">
                $
                <CountUp start={0} end={70} />
                M+
              </p>
              <p className="statLabel">Performance Fee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
