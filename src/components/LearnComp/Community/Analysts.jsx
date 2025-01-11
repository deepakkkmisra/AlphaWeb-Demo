import React, { useState } from "react";
import "./Analysts.scss";
import analystImg from "../../../assets/images/analyst.png";
import armanPfp from "../../../assets/images/armanPfp.png";
import danPfp from "../../../assets/images/danpfp.png";
import davidPfp from "../../../assets/images/davidpfp.png";
import katiePfp from "../../../assets/images/katiepfp.png";
import indianFlag from "../../../assets/icons/indianFlag.svg";
import ukFlag from "../../../assets/icons/ukFlag.svg";
import { ReactComponent as CrossBtn } from "../../../assets/icons/crossButton.svg";
function Analysts() {
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
    <div className="al_wrapper">
      <div className="al_intro">
        <h1>Meet Our Top Analysts</h1>
        <p>Get inspired by our leading analysts from across the globe.</p>
      </div>

      <div className="ab_wrapper">
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
      </div>

      <button
        className="gradientButton_small"
        onClick={() =>
          handleNavigationLinks(
            "https://www.youtube.com/playlist?list=PLtbF-cGkygI8O1nDCaELXaVuAFP3nb0QD"
          )
        }
      >
        Watch Full Interviews Here
      </button>

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
    </div>
  );
}

export default Analysts;

// const AnalystBox = ({ img, name, country, countryImg, profit, mt = 0 }) => {
//   return (
//     <div className="ab" style={{ marginTop: mt }}>
//       <img src={img} alt="analyst" />
//       <div className="ab_details">
//         <img src={countryImg} alt="country flag" />
//         <div>
//           <p>{name}</p>
//           <h2>{country}</h2>
//         </div>
//       </div>

//       <div className="ab_profit">
//         <p>Profit</p>
//         <h2>{profit}</h2>
//       </div>
//     </div>
//   );
// };
