import React from "react";
import "./MarketSummarySection.scss";
const MarketSummarySection = () => {
  return (
    <div className="marketSummarySectionContainer">
      <div className="marketSummarySectionWrapper">
        <div className="summaryWidgetContainer">
          <div className="summaryWidgetWrapper">
            <div className="summaryWidgetHeader">
              <p>SYMBOLS</p>
              <h3>Market Summary</h3>
            </div>
            <div className="summaryWidget">
              <iframe
                title="Market Summary"
                name="Market Summary"
                src="https://component.autochartist.com/to/?broker_id=826&token=cfb475144d58ecf67e915f58b0ffbb27&expire=1748815200&user=Alpha-Capital-Group&locale=en_GB&layout=horizontal&account_type=LIVE&trade_now=y#/results"
                width={"100%"}
                height={"100%"}
              ></iframe>
            </div>
            <button className="normalButton">Check all symbols </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketSummarySection;
