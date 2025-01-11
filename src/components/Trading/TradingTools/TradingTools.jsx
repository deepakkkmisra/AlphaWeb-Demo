import React, { useEffect } from "react";
import "./TradingTools.scss";
import partnerSreenerImg from "../../../assets/images/partnerScreenerImg.png";
import arrowIcon from "../../../assets/images/ArrowIcon.svg";
import marketScreenerImg from "../../../assets/images/marketScreenerImg.png";
import economicCalendarImg from "../../../assets/images/economicCalendar.png";
import liveMarketImg from "../../../assets/images/liveMarket.png";
import tradingJournalImg from "../../../assets/images/tradingJournal.png";
import marketReportsImg from "../../../assets/images/marketReports.png";
import tradingViewImg from "../../../assets/images/tradingViewImg.png";
import freeTrialImg from "../../../assets/images/freeTrialTools.png";
import tradingCompetition from "../../../assets/images/tradingCompetition.png";

const TradingTools = () => {
  const tradingToolData = [
    {
      label: "Partnership with Autochartist",
      desc: "Autochartist is a leading analysis tool that delivers technical and statistical insights, instantly identifying emerging and completed trade setups. It caters to all types of traders with diverse analysis types, including chart patterns like triangles and wedges, horizontal key levels for spotting support and resistance, Fibonacci patterns for key retracement points, and statistical patterns that highlight significant market movements and trends.",
      image: partnerSreenerImg,
    },
    {
      label: "Market Screener",
      desc: "Our Market Screener offers a comprehensive view of trading opportunities across multiple asset classes. Featuring tools like Volatility Analysis, Forex Matrix, and Ticker Tape, it provides a detailed overview of market conditions to help you identify optimal entry and exit points. Stay on top of market movements and make strategic decisions with confidence.",
      image: marketScreenerImg,
    },
    {
      label: "Economic Calendar",
      desc: "Keep track of important economic events that can impact your trading strategies. Our Economic Calendar provides up-to-date information on key financial events, announcements, and market movements. With this tool, you can plan your trades around significant market events and adjust your strategies in real time.",
      image: economicCalendarImg,
    },
    {
      label: "Live Market Data",
      desc: "Access live market data that keeps you connected to the latest market trends and price movements. Whether you're trading stocks, forex, or commodities, our live data feeds provide the information you need to make timely, informed trading decisions. Don’t miss a beat with real-time updates directly from the markets.",
      image: liveMarketImg,
    },
    {
      label: "Trading Journal",
      desc: "Monitor your trades, review your performance, and refine your strategies with our custom-built Trading Journal. This tool provides a detailed record of your trading activities, helping you identify strengths and areas for improvement. Use it to stay accountable and continuously enhance your trading approach.",
      image: tradingJournalImg,
    },
    {
      label: "Market Reports",
      desc: "Access in-depth market reports that offer a comprehensive analysis of market trends, price movements, and trading opportunities. Our reports are designed to provide traders with actionable insights, enabling you to make informed decisions and optimize your trading strategies.",
      image: marketReportsImg,
    },
    {
      label: "Trading View Charts",
      desc: "Analyze market data visually with Trading View Charts, a powerful tool for identifying trends and patterns. Whether you're a technical trader or just looking to gain a clearer view of market movements, our charting tool provides all the features you need to make well-informed trading decisions.",
      image: tradingViewImg,
    },
    {
      label: "Free Trials Tools",
      desc: "Explore the full potential of Alpha Capital’s suite of trading tools with our free trial options. Test the capabilities of our advanced analytics, market data, and evaluation tools without any commitment. Experience firsthand how our platform can elevate your trading performance, providing you with the insights and confidence needed to succeed.",
      image: freeTrialImg,
    },
    {
      label: "Trading Competitions",
      desc: "Challenge yourself and refine your skills in our monthly trading competitions. Compete with other traders in a dynamic, engaging environment that pushes you to be your best. With real-time performance tracking and instant feedback, these competitions are designed to help you grow and achieve more as a trader. Showcase your expertise and earn recognition within the Alpha Capital community.",
      image: tradingCompetition,
    },
  ];
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="tradingToolsMainWrapper">
      <div className="tradingWrapper">
        <div className="TradingToolsTopSection">
          <div className="headingSection">
            <p>TRADING TOOLS</p>
            <h3>
              Elevate Your Trading Experience with Alpha Capital's{" "}
              <span> Advanced Tools</span>
            </h3>
          </div>
          <div className="informationSection">
            <h3>
              Empower Your Trading Journey with Cutting-Edge Analytics and
              Real-Time Market Data
            </h3>
            <p>
              At Alpha Capital, we provide traders with a suite of powerful
              tools designed to enhance your trading experience and
              decision-making. From advanced market analysis and personalized
              trading journals to real-time data and economic insights, our
              platform equips you with everything you need to succeed. Access
              all these features on the go with our mobile app, available for
              download on the App Store and Google Play. Elevate your trading
              strategy today and gain the competitive edge with Alpha Capital.
            </p>
          </div>
        </div>

        <div className="tradingToolsOptions">
          {tradingToolData.map((item, index) => (
            <div className="tradingOptionBox">
              <div className="imgSection">
                <img src={item.image} alt="" />
              </div>
              <div className="toolDesc">
                <div className="labelSection">
                  <h3>{item.label}</h3>
                </div>
                <div className="toolInfo">
                  <p>{item.desc}</p>
                </div>
                <div className="btnToJoin">
                  <button
                    className="normalButton"
                    onClick={() =>
                      handleRedirect("https://app.alphacapitalgroup.uk/")
                    }
                  >
                    Get Started
                    <img src={arrowIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingTools;
