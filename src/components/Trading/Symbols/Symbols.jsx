import React, { useEffect, useState } from "react";
import "./Symbols.scss";
import { Segmented } from "antd";
import TableComp from "../../ReusableComponent/TableComp/TableComp";

const Symbols = () => {
  const [activeSymbols, setActiveSymbols] = useState("Forex");

  const symbolsOptions = ["Forex", "Metals", "Cash Indices", "Commodities"];

  const handleSymbolsNav = (value) => {
    setActiveSymbols(value);
  };

  const forexData = [
    {
      pair: "AUDCAD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "AUDCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "AUDJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "AUDNZD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "AUDUSD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "CADCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "CADJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "CHFJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURAUD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURCAD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURGBP",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURNZD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "EURUSD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPAUD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPCAD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPNZD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPSGD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "GBPUSD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "NZDCAD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "NZDCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "NZDJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "NZDUSD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "USDCAD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "USDCHF",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "USDHKD",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
    {
      pair: "USDJPY",
      spread: { raw: "Raw", standard: "Standard" },
      contractSize: 100000,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      leveragePro: "1:100",
      leverageSwing: "1:30",
      margin: "1%",
    },
  ];

  const metalsData = [
    {
      pair: "XAGUSD",
      contractSize: 100,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:30",
      leverageSwing: "1:9",
      margin: "3.33%",
    },
    {
      pair: "XAUUSD",
      contractSize: 100,
      commission: { pro: "0 USD/Lot", raw: "2.5 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:30",
      leverageSwing: "1:9",
      margin: "3.33%",
    },
  ];

  const cashIndicesData = [
    {
      pair: "EUSTX50",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "GER30",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "HK50",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "JPN225",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "NAS100",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "UK100",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "US30",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "US500",
      contractSize: 1,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
  ];

  const commodotiesdata = [
    {
      pair: "UKOIL",
      contractSize: 10,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
    {
      pair: "USSOIL",
      contractSize: 10,
      commission: { pro: "0 USD/Lot", raw: "0 USD/Lot" },
      spread: { raw: "Raw", standard: "Standard" },
      leveragePro: "1:20",
      leverageSwing: "1:10",
      margin: "5%",
    },
  ];

  const columns = [
    {
      Header: "Instrument",
      accessor: "pair",
    },
    {
      Header: "Commission",
      accessor: "commission",
      Cell: ({ row }) => (
        <div className="commissionBox">
          <p>Pro: {row.original.commission.pro}, </p>
          <p>Raw: {row.original.commission.raw}</p>
        </div>
      ),
    },
    {
      Header: "Contract Size",
      accessor: "contractSize",
      Cell: ({ value }) => `${value.toLocaleString()}`,
    },

    {
      Header: "Spread",
      Cell: ({ row }) => (
        <>
          <div className="spreadBox">
            <p>•{row.original.spread.raw}</p>
            <p>•{row.original.spread.standard}</p>
          </div>
        </>
      ),
    },
    {
      Header: "Leverage Pro",
      accessor: "leveragePro",
    },
    {
      Header: "Leverage Swing",
      accessor: "leverageSwing",
    },
    {
      Header: "Margin",
      accessor: "margin",
      Cell: ({ value }) => `${value}`,
    },
  ];

  const [isVertical, setIsVertical] = useState(window.innerWidth > 1280);

  const updateLayout = () => {
    setIsVertical(window.innerWidth > 1280);
  };

  useEffect(() => {
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="symbolsMainWrapper">
      <div className="symbolsWrapper">
        <div className="symbolsTopSection">
          <p>SYMBOLS</p>
          <div className="symbolTitleSection">
            <h3>
              Explore Our <span>Trading Symbols</span>
            </h3>
            <p className="symbolInfo">
              At Alpha Capital, we pride ourselves on providing top-tier trading
              conditions and competitive spreads across a diverse array of
              instruments. Whether you're trading Forex, commodities or indices,
              our extensive list of symbols is designed to meet your trading
              needs. Dive into our offerings and experience the exceptional
              trading environment that sets Alpha Capital apart.
            </p>
          </div>
        </div>
        <div className="forexTradingSection">
          <Segmented
            vertical={isVertical}
            options={symbolsOptions}
            onChange={handleSymbolsNav}
          />
          <div className="forexTableWrapper">
            <h2>{activeSymbols}</h2>
            <div className="forexTable">
              <TableComp
                columns={columns || []}
                data={
                  activeSymbols === "Forex"
                    ? forexData
                    : activeSymbols === "Metals"
                    ? metalsData
                    : activeSymbols === "Cash Indices"
                    ? cashIndicesData
                    : activeSymbols === "Commodities"
                    ? commodotiesdata
                    : []
                }
              />
            </div>
          </div>
        </div>
        <div className="symbolBottomSection">
          <div className="tradingHrsSection">
            <div className="tradingTimeHeader">
              <h3>FX trading hours (all symbols) </h3>
            </div>

            <div className="tradingTimeTableChart">
              <div className="dayAndTimeSection">
                <div className="daysMainSection">
                  <div className="daySection">Day</div>
                  <div className="weekSection">Monday</div>
                  <div className="weekSection">Tuesday</div>
                  <div className="weekSection">Wednesday</div>
                  <div className="weekSection">Thursday</div>
                  <div className="weekSection">Friday</div>
                  <div className="weekSection">Saturday</div>
                  <div className="weekSection">Sunday</div>
                </div>
                <div className="timeMainSection">
                  <div className="timeSection">Time</div>
                  <div className="fixedTime">00:05 - 23:55</div>
                  <div className="fixedTime">00:05 - 23:55</div>
                  <div className="fixedTime">00:05 - 23:55</div>
                  <div className="fixedTime">00:05 - 23:55</div>
                  <div className="fixedTime">00:05 - 23:55</div>
                  <div className="fixedTime">Trading is Closed</div>
                  <div className="fixedTime">Trading is Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symbols;
