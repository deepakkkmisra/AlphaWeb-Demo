import React, { useState, useRef, useEffect } from "react";
import "./BrokerSection.scss";
import earthImage from "../../../assets/images/earthImage.png";
import usaFlag from "../../../assets/icons/usaFlag.svg";
import ukFlag from "../../../assets/icons/ukFlag.svg";
import nigerianFlag from "../../../assets/icons/nigerianFlag.svg";
import brazilFlag from "../../../assets/icons/brazilFlag.svg";
import Tabination from "../../ReusableComponent/Tabination/Tabination";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ReactComponent as PrevArrow } from "../../../assets/icons/prevArrow.svg";
import { ReactComponent as NextArrow } from "../../../assets/icons/nextArrow.svg";

const BrokerSection = () => {
  const tradingFeatures = [
    { value: 1, name: "$0 commission" },
    { value: 2, name: "1-on-1 Risk Reviews" },
    { value: 3, name: "Products For All Traders" },
    { value: 4, name: "Unlimited Trading Days" },
    { value: 5, name: "Institutional Trading Environment" },
  ];

  const [activeNav, setActiveNav] = useState(0);
  const splideRef = useRef(null);

  const descData = [
    {
      key: 1,
      label: "Zero commission",
      desc: "Maximise your profits without worrying about any commission fees.",
    },
    {
      key: 2,
      label: "1-on-1 Risk Reviews",
      desc: "Receive personalised risk assessments tailored to your trading style to manage your risk.",
    },
    {
      key: 3,
      label: "Products For All Traders",
      desc: "Pick from a diverse range of products tailored to your trading needs and.",
    },
    {
      key: 4,
      label: "Unlimited Trading Days",
      desc: "Take advantage of unlimited trading days to complete your assessment, trade at your pace and perform on the daily market fluctuations.",
    },
    {
      key: 5,
      label: "Institutional Trading Environment",
      desc: "Our Partner ACG Markets provides our client the ability to gain access to an institutional trading environment, all conditions and orders simulate real market liquidity, depth of market, executions speeds of sub 70ms targeted.",
    },
  ];

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(activeNav);
    }
  }, [activeNav]);

  const handleNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go(">");
    }
  };

  const handlePrev = () => {
    if (splideRef.current) {
      splideRef.current.splide.go("<");
    }
  };

  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleActiveDesc = (index) => {
    setActiveNav(index);
  };

  return (
    <div
      className={`brokerSectionContainer ${
        isTablet ? "tabletBrokerSection" : ""
      }`}
    >
      <div className="brokerSectionWrapper">
        <div className="topSectionBroker">
          <p className="captionTop">
            Trading With <span>Alpha Capital</span> Means:
          </p>
          <div className="worldDiv">
            <div className="userBox">
              <img src={ukFlag} alt="usa_flag" />
              <div className="userName">
                <p>Alexander D.</p>
                <p>$4,257</p>
              </div>
            </div>
            <div className="userBox">
              <img src={usaFlag} alt="uk_flag" />
              <div className="userName">
                <p>Ousman</p>
                <p>$1,398</p>
              </div>
            </div>
            <div className="userBox">
              <img src={nigerianFlag} alt="nigerian_flag" />
              <div className="userName">
                <p>Chloe M.</p>
                <p>$1,945</p>
              </div>
            </div>
            <img src={earthImage} alt="earth_image" className="earth_image" />
            <div className="userBox">
              <img src={brazilFlag} alt="brazilian_flag" />
              <div className="userName">
                <p>Juan C.</p>
                <p>$678</p>
              </div>
            </div>
          </div>
        </div>
        {!isTablet ? (
          <div className="bottomSectionBroker">
            <Tabination
              variant={1}
              tabItems={tradingFeatures}
              activeTab={activeNav}
              setActiveTab={setActiveNav}
            />
            <div className="descBox">
              <Splide
                options={{
                  type: "loop",
                  perPage: 2,
                  gap: "1rem",
                  autoplay: false,
                  perMove: 1,
                  arrows: false,
                  drag: false,
                }}
                ref={splideRef}
                onMoved={(splide) => setActiveNav(splide.index)}
              >
                {descData.map((item, index) => (
                  <SplideSlide key={index}>
                    <h3>{item?.label}</h3>
                    <p>{item?.desc}</p>
                  </SplideSlide>
                ))}
              </Splide>

              <button className="custom_arrow prevArrow" onClick={handlePrev}>
                <PrevArrow />
              </button>
              <button className="custom_arrow nextArrow" onClick={handleNext}>
                <NextArrow />
              </button>
            </div>
          </div>
        ) : (
          <div className="tabletBottomSectionBroker">
            <div className="descArea">
              {tradingFeatures.map((item, index) => {
                return (
                  <div key={item.value} className="descWrapper">
                    <button
                      className={`descHeaderPill ${
                        activeNav === index ? "activePill" : "inactivePill"
                      }`}
                      onClick={() => handleActiveDesc(index)}
                    >
                      <p>{item.name}</p>
                    </button>
                    <div
                      className={`descBox ${
                        activeNav === index ? "activeDesc" : "inactiveDesc"
                      }`}
                    >
                      <h3>{descData[index].label}</h3>
                      <p>{descData[index].desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrokerSection;
