import React, { useEffect } from "react";
import "./Leaderboard.scss";
import LeaderboardBox from "../../components/LeaderboardComp/LeaderboardBox";
import LeaderboardTable from "../../components/LeaderboardComp/LeaderboardTable";
import oneImg from "../../assets/icons/01.svg";
import twoimg from "../../assets/icons/02.svg";
import threeImg from "../../assets/icons/03.svg";

function Leaderboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="lb_wrapper">
      <div className="lb_intro">
        <span className="intro_head">LEADERBOARD</span>
        <h1>
          Our Top Performing{" "}
          <span className="gradientText">Alpha Analysts</span>
        </h1>
        <p>
          Check out the current leaderboard showcasing the most profitable and
          active Alpha Analysts in real-time. These top traders are setting the
          standard with their outstanding performance and strategic trading.
        </p>
      </div>
      <div className="lb_date">
        <p>08/10/2024</p>
      </div>

      <div className="lb_content">
        <div className="lb_box_wrapper">
          <LeaderboardBox image={oneImg} />
          <LeaderboardBox image={twoimg} />
          <LeaderboardBox image={threeImg} />
        </div>
        <LeaderboardTable />
      </div>
      <p className="note">
        *Only registered users can see the full leaderboard in the client area.
        Sign up now to join the leaderboard.
      </p>
    </div>
  );
}

export default Leaderboard;
