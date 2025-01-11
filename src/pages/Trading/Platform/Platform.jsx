import React, { useEffect } from "react";
import "./Platform.scss";
import PlatformType from "../../../components/TradingComp/Platform/PlatformType";
import metaImg from "../../../assets/images/meta-trader.png";
import cTrderImg from "../../../assets/images/c-trader.png";
import dxTradeImg from "../../../assets/images/dx-trade.png";
import alphaTraderImg from "../../../assets/images/alpha-trader.png";

function Platform() {
  const platformData = [
    {
      type: "MetaTrader 5",
      desc: "MetaTrader 5 is the advanced successor to MT4, offering additional features and improvements. With enhanced charting tools, a broader range of order types, and the ability to view the depth of market, MT5 is ideal for Alpha Analysts looking for more advanced trading capabilities.",
      list: [
        "Enhanced charting tools",
        "Multiple order types",
        "Depth of Market view",
        "Improved strategy tester",
      ],
      links: [
        {
          ios: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg",
          windows:
            "https://download.mql5.com/cdn/web/acg.markets.limited/mt5/acgmarkets5setup.exe",
          android:
            "https://download.mql5.com/cdn/mobile/mt5/android?server=ACGMarkets-Main",
          macos:
            "https://download.mql5.com/cdn/mobile/mt5/ios?server=ACGMarkets-Main",
          web: "https://download.mql5.com/cdn/web/21201/mt5/acgmarkets5setup.exe",
        },
      ],
      image: metaImg,
    },
    {
      type: "C Trader",
      desc: "C Trader is a popular trading platform known for its intuitive interface and powerful charting tools. It provides a smooth trading experience with fast order execution and advanced features for technical analysis.",
      list: [
        "Advanced charting and analysis tools",
        "Fast order execution",
        "Support for algorithmic trading via cTrader Automate",
        "Customizable interface",
      ],
      links: [
        {
          windows:
            "https://getctrader.com/acgmarkets/ctrader-acgmarkets-setup.exe",
          android:
            "https://app.ctrader.com/?mainSource=mailer&additionalSource=cta",
          macos:
            "https://getctradermac.com/acgmarkets/ctrader-acgmarkets-setup.dmg",
          web: "https://app.ctrader.com/?mainSource=mailer&additionalSource=cta",
        },
      ],
      image: cTrderImg,
    },
    {
      type: "Dx Trade",
      desc: "Dx Trade is designed for institutional traders and offers advanced features like deep liquidity and institutional-grade order types. It allows for customized workflows and high-frequency trading.",
      list: [
        "Customizable workflows",
        "Advanced order management",
        "Depth of Market (DOM) feature",
        "Support for algorithmic trading",
        "Real-time market data",
      ],
      links: [
        {
          //   ios: "https://link-to-apple.com",
          //   windows: "https://link-to-windows.com",
          //   android: "https://link-to-android.com",
          //   macos: "https://link-to-macos.com",
          web: "https://dxtrade.alphacapitalgroup.uk/",
        },
      ],
      image: dxTradeImg,
    },
    {
      type: "Alpha Trader",
      desc: "Alpha Trader is a proprietary trading platform developed by Alpha Capital, offering unique features tailored for Alpha Analysts. It integrates cutting-edge algorithmic tools, advanced charting, and a customizable interface to optimize trading performance.",
      list: [
        "Charts and execution panel powered by Trading view",
        "Custom risk tools to assist you daily",
        "Deep dive into your trading and performance analytics",
        "Integrated economic calendar and news feeds",
      ],
      links: [
        {
          ios: "https://link-to-apple.com",
          windows: "https://link-to-windows.com",
          android: "https://link-to-android.com",
          macos: "https://link-to-macos.com",
          web: "https://link-to-web.com",
        },
      ],
      image: alphaTraderImg,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="platform_wrapper">
      <div className="platform_intro">
        <h4>Platform</h4>
        <h1>
          Alpha Capital{" "}
          <span className="gradientText"> Trading Platforms </span>
        </h1>
        <p>
          Alpha Capital provides its Alpha Analysts with access to some of the
          most powerful and reliable trading platforms available in the market.
          These platforms are designed to accommodate various trading styles,
          whether you prefer manual trading or utilising automated strategies.
          Choose the platform that suits your trading style best and start your
          journey with Alpha Capital.
        </p>
        <div className="platform_intro_btns">
          <button className="normalButton">Meta Trader</button>
          <button className="normalButton">C Trader</button>
          <button className="normalButton">Dx Trader</button>
        </div>
      </div>

      <div className="platform_type">
        {platformData.map((platform, index) => (
          <PlatformType
            key={index}
            platform={platform}
            reverse={index % 2 === 0}
          />
        ))}{" "}
      </div>
    </div>
  );
}

export default Platform;
