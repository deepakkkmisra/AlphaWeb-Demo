import React from "react";
import "./JoinTeamComp.scss";
import joinTeamImg from "../../../assets/images/JoinTeamImg.png";
const JoinTeamComp = () => {
  return (
    <div className="joinTeamCompContainer">
      <div className="joinTeamCompWrapper">
        <div className="leftSection">
          <p>CAREERS</p>
          <h2>Join our team</h2>
          <p>
            Ready to take your career to the next level? At Alpha Capital, we’re
            always looking for passionate, innovative minds to join our growing
            team. Explore our career opportunities and find out how you can be
            part of a dynamic, global financial ecosystem.
          </p>
          <button className="gradientButton_small">
            Alpha Capital Careers
          </button>
        </div>
        <div className="rightSection">
          <img src={joinTeamImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default JoinTeamComp;
