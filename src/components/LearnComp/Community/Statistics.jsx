import React from "react";
import "./Statistics.scss";

function Statistics() {
  return (
    <div className="st_wrapper">
      <div className="st_intro">
        <h1>Statistics of Alpha Capital Analysts</h1>
        <p>
          Explore the impressive numbers behind our Alpha Analysts. Check out
          the latest stats and see the strength of our global community!
        </p>
      </div>

      <div className="sb_wrapper">
        <div className="row1">
          <StatsBox title="Number of Analysts" value="308K" />
          <StatsBox value="XAU/USD" title="Most Traded Pair" height={"173px"} />
          <StatsBox
            value="$326,315.57"
            title="Highest Lifetime Performance Fees Ever"
          />
        </div>
        <div className="row2">
          <StatsBox value="140+" title="Countries" />
          <StatsBox
            value="32K+"
            title="Total Qualified Analysts"
            height="175px"
          />
          <StatsBox value="$71M+" title="Total Amount of Performance Fees" />
        </div>
      </div>
    </div>
  );
}

export default Statistics;

// StatsBox Component that accepts props
const StatsBox = ({ title, value, height = "150px" }) => {
  return (
    <div className="sb" style={{ height: height }}>
      <span className="gradientText">{value}</span>
      <p>{title}</p>
    </div>
  );
};
