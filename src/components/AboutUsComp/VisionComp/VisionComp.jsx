import React from "react";
import "./VisionComp.scss";
import oldAlphaLogo from "../../../assets/images/oldAlphaLogo.png";
import newAlphaLogo from "../../../assets/images/newAlphaLogo.png";

const VisionComp = () => {
  return (
    <div className="visionCompContainer">
      <div className="visionCompWrapper">
        <div className="leftSection">
          <p> ALPHA CAPITAL</p>
          <h3>Our Vision</h3>
          <h6>
            The trading industry is often clouded by complexity. At Alpha
            Capital Group, we cut through that with a transparent, supportive
            environment that sees you as a partner, not just a user.
          </h6>
          <p>
            Our unique blend of expert-led education, opportunities for growth
            as a Qualified Alpha Analyst, and cutting-edge technology is
            designed to elevate your trading journey. Trust and transparency are
            at our core, and your success is our mission.
          </p>
        </div>
        <div className="rightSection">
          <div className="firstVersion">
            <img src={oldAlphaLogo} alt="" />
            <p>Alpha Capital</p>
            <p>2021</p>
          </div>
          <div className="secondVersion">
            <img src={newAlphaLogo} alt="" />
            <p>Alpha Capital</p>
            <p>2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionComp;
