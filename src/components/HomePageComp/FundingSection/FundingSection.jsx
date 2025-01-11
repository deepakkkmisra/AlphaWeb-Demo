import React, { useState } from "react";
import "./FundingSection.scss";
import armanPfp from "../../../assets/images/armanPfp.png";
import danPfp from "../../../assets/images/danpfp.png";
import davidPfp from "../../../assets/images/davidpfp.png";
import katiePfp from "../../../assets/images/katiepfp.png";
import indianFlag from "../../../assets/icons/indianFlag.svg";
import ukFlag from "../../../assets/icons/ukFlag.svg";
import PlansSection from "../PlansSection/PlansSection";
import { ReactComponent as CrossBtn } from "../../../assets/icons/crossButton.svg";
const FundingSection = () => {
  const analystData = [
    {
      name: "Arman",
      country: "India",
      nationality: indianFlag,
      image: armanPfp,
      videoUrl: "https://www.youtube.com/embed/CAaFeRiw5dQ?autoplay=1",
    },
    {
      name: "David",
      country: "UK",
      nationality: ukFlag,
      image: davidPfp,
      videoUrl: "https://www.youtube.com/embed/H7sDdZCFRsc?autoplay=1",
    },
    {
      name: "Katie",
      country: "UK",
      nationality: ukFlag,
      image: katiePfp,
      videoUrl: "https://www.youtube.com/embed/USAcMwGUmWM?autoplay=1",
    },
    {
      name: "Dan",
      country: "UK",
      nationality: ukFlag,
      image: danPfp,
      videoUrl: "https://www.youtube.com/embed/r3ItEqkh1l4?autoplay=1",
    },
  ];

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handlePfpClick = (url) => {
    setVideoUrl(url);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="fundingSectionContainer">
        <div className="fundingSectionWrapper">
          <PlansSection />
        </div>
        <div className="tradersInterviewWrapper">
          <div className="topHeaderSection">
            <p>ALPHA CAPITAL ANALYSTS</p>
            <h4>Meet the Analysts Powering Alpha Capital</h4>
            <p>
              Dive into the proven strategies and expert insights that drive the
              success of our elite analysts, paving the way for your own trading
              triumphs with Alpha Capital.
            </p>
          </div>
          <div className="analystList">
            {analystData.map((analyst, index) => (
              <div className="analystCard" key={index}>
                <img
                  className="pfPImage"
                  src={analyst.image}
                  alt={`${analyst.name}'s profile`}
                  onClick={() => handlePfpClick(analyst.videoUrl)}
                />
                <div className="analystDetails">
                  <img
                    className="nationalFlag"
                    src={analyst.nationality}
                    alt="nations_flag"
                  />
                  <div className="analystBio">
                    <h3>{analyst.name}</h3>
                    <p>{analyst.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="analystCaption">
            <p>
              We're proud of the exceptional analysts who form the backbone of
              Alpha Capital. Delve into their strategies and insights, and see
              how their expertise can help shape your own trading success.
            </p>
            <div className="moreInfoBtn">
              <button className="gradientButton_small">
                <p>Watch More Interviews</p>
              </button>
              <button
                className="normalButton"
                onClick={() =>
                  handleNavigationLinks("https://app.alphacapitalgroup.uk/")
                }
              >
                <p>Start Alpha Evaluation</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="videoOverlay" onClick={closeVideo}>
          <div className="iframeContainer" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={closeVideo}>
              <CrossBtn />
            </button>
            <iframe
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FundingSection;
