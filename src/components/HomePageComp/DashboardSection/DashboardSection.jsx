import React, { useEffect, useRef, useState } from "react";
import "./DashboardSection.scss";
import realTimeMarketSnap from "../../../assets/images/realTimeMarket.png";
import accntAnaly1 from "../../../assets/images/accntAnaly1.png";
import accntAnaly2 from "../../../assets/images/accntAnaly2.png";
import accntAnaly3 from "../../../assets/images/accntAnaly3.png";
import accntAnaly4 from "../../../assets/images/accntAnaly4.png";
import accntAnaly5 from "../../../assets/images/accntAnaly5.png";
import concurrentTrades from "../../../assets/images/concurrentTrades.png";
import tradesLots from "../../../assets/images/tradesLots.png";
import lotsPerTrade from "../../../assets/images/lotsPerTrade.png";
import riskPerTrade from "../../../assets/images/riskPerTrade.png";
import dashboardImage from "../../../assets/images/dashboardImage.png";
import Tabination from "../../ReusableComponent/Tabination/Tabination";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const DashboardSection = () => {
  const [activeNav, setActiveNav] = useState(0);
  const splideRef = useRef(null);
  const chartingNavs = [
    { value: 1, name: "Risk per trade" },
    { value: 2, name: "Concurrent trades & Lots per day" },
    { value: 3, name: "Trades & Lots per day" },
    { value: 4, name: "Lots per trade" },
  ];

  const detailImagesData = [
    {
      key: 1,
      images: riskPerTrade,
    },
    {
      key: 2,
      images: concurrentTrades,
    },
    {
      key: 3,
      images: tradesLots,
    },
    {
      key: 4,
      images: lotsPerTrade,
    },
  ];

  const handleActiveDesc = (index) => {
    setActiveNav(index);
  };

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(activeNav);
    }
  }, [activeNav]);

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  return (
    <div className="dashboardSectionContainer">
      <div className="dashboardSectionWrapper">
        <div className="topHeaderSection">
          <p>Alpha Dashboard</p>
          <h3>
            Our Dashboard Empowers over 215,000 Analysts Every Day to Execute
            Fast and Effective Trades
          </h3>
        </div>
        <div className="dashboardDetailSection">
          <div className="topDetailSection">
            <div className="firstDetail detailBox">
              <p> Real-time Market Insights</p>
              <img src={realTimeMarketSnap} alt="realTimeMarketImage" />
            </div>
            <div className="secondDetail detailBox">
              <p>Advanced Account Analysis</p>
              <div className="accntAnalysisImages">
                <img src={accntAnaly1} alt="analysisImages" />
                <img src={accntAnaly2} alt="analysisImages" />
                <img src={accntAnaly3} alt="analysisImages" />
                <img src={accntAnaly4} alt="analysisImages" />
                <img src={accntAnaly5} alt="analysisImages" />
              </div>
            </div>
          </div>
          <div className="bottomDetailSection">
            <div className="thirdDetail detailBox">
              <p>Advanced Charting Tools</p>
              <Tabination
                variant={2}
                tabItems={chartingNavs}
                activeTab={activeNav}
                setActiveTab={setActiveNav}
              />
              <div className="detailImagesBox">
                <Splide
                  options={{
                    type: "loop",
                    perPage: 1,
                    gap: "1rem",
                    autoplay: false,
                    perMove: 1,
                    arrows: false,
                    drag: false,
                  }}
                  ref={splideRef}
                  onMoved={(splide) => setActiveNav(splide.index)}
                >
                  {detailImagesData.map((item, index) => (
                    <SplideSlide key={index}>
                      <img src={item?.images} alt="" />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
            <div className="fourthDetail detailBox">
              <p>Portfolio Management</p>
              <img src={dashboardImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
