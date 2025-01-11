import React from "react";
import "./MissionComp.scss";
import missionSect from "../../../assets/images/missionSectionImg.png";
const MissionComp = () => {
  return (
    <div className="missionCompContainer">
      <div className="missionCompWrapper">
        <div className="leftSection">
          <img src={missionSect} alt="mission_event_pic" />
        </div>
        <div className="rightSection">
          <h2> The Mission </h2>
          <p>
            Alpha Capital Group is a global leader in proprietary trading,
            committed to equipping our 100,000 + monthly active community of
            analysts with exceptional trading conditions, advanced analytical
            tools, and outstanding customer care. Our in-house platform, driven
            by innovative technology and years of experience, provides a stable,
            accessible entry into the market, ensuring you have everything
            needed to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionComp;
