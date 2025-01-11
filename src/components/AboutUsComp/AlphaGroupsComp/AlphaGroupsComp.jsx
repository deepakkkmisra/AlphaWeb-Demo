import React from "react";
import "./AlphaGroupsComp.scss";
import alphaLogo from "../../../assets/images/AlphaLogoImg.png";
import futuresLogo from "../../../assets/images/FuturesLogoImg.png";
import marketsLogo from "../../../assets/images/MarketsLogoImg.png";
import { ReactComponent as FuturesMockup } from "../../../assets/icons/FuturesMockup.svg";
import { ReactComponent as MarketsMockup } from "../../../assets/icons/MarketsMockup.svg";
import { ReactComponent as AlphaMockup } from "../../../assets/icons/AlphaGroupMockup.svg";
const AlphaGroupsComp = () => {
  const groupData = [
    {
      logo: alphaLogo,
      img: <AlphaMockup />,
      name: "Alpha Capital",
      desc: "Is our flagship proprietary trading firm, where the focus is on leveraging your analytical skills to shape data-driven strategies. Our commitment to transparency, integrity, and support ensures you have the tools and environment to excel in your market evaluations.",
    },
    {
      logo: futuresLogo,
      img: <FuturesMockup />,
      name: "Alpha Futures",
      desc: "Takes proprietary futures trading to the next level, offering a platform where market analysts can utilize advanced, in-house technology to generate precise and impactful insights. As a core part of Alpha Capital Group, Alpha Futures benefits from the same innovative infrastructure that defines our commitment to superior trading experiences.",
    },
    {
      logo: marketsLogo,
      img: <MarketsMockup />,
      name: "ACG Markets",
      desc: "Our regulated broker licensed in the Seychelles, provides a secure and compliant environment for market participants. With a focus on regulatory excellence and competitive market access, Alpha Markets stands as a trusted gateway to global financial markets.",
    },
  ];

  return (
    <div className="alphaGroupsCompContainer">
      <div className="alphaGroupsCompWrapper">
        <div className="topSection">
          <p>The Alpha Group</p>
          <h2>Everything You Need Under One Roof</h2>
          <p>
            Alpha Capital Group is a unified financial ecosystem designed to
            empower market analysts and traders at every stage of their journey.
            Our group encompasses several specialized entities, each
            contributing to our mission of delivering excellence and innovation
            in the financial markets.
          </p>
        </div>
        <div className="midSection">
          {groupData.map((item, index) => (
            <div key={index} className="groupDataBox">
              <div className="logos">
                <img src={item.logo} alt="" />
              </div>

              <h2>{item.name}</h2>
              <p>{item.desc}</p>

              <div className="images">
                <div className="image">{item.img}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bottomSection">
          <div className="bottomSecDesc">
            <h3>Coming soon</h3>
            <p>
              Alpha Trader will introduce a revolutionary trading platform,
              custom-built with full TradingView integration, advanced charting
              tools, and a seamless execution panel. Developed entirely
              in-house, Alpha Trader represents the pinnacle of our
              technological innovation, designed to meet the evolving needs of
              our analysts and traders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaGroupsComp;
