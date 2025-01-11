import React, { useEffect, useState } from "react";
import "./Tabination.scss";

const Tabination = ({
  tabItems = [],
  activeTab = 0,
  setActiveTab = () => {},
  style = {},
  tabStyle = {},
  variant = 1,
}) => {
  const [active, setActive] = useState(activeTab);
  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActive(index);
  };

  return (
    <>
      {variant === 1 && (
        <div className="tabinationContainer variant1_tabs">
          <div className="tabinationWrapper">
            <ul style={style} className="tabinationBox">
              {tabItems.map((item, index) => {
                const [firstWord, ...rest] = item.name.split(" ");
                const secondWord = rest.join(" ");
                return (
                  <li
                    key={index}
                    style={tabStyle}
                    className={`tabinationButton ${
                      index === active ? "activeTab" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <p>
                      <span>{firstWord}</span>
                      <span>{secondWord}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      {variant === 2 && (
        <div className="tabinationContainer variant2_tabs">
          <div className="tabinationWrapper">
            <ul style={style} className="tabinationBox">
              {tabItems.map((item, index) => {
                const [firstWord, ...rest] = item.name.split(" ");
                const secondWord = rest.join(" ");
                return (
                  <li
                    key={index}
                    style={tabStyle}
                    className={`tabinationButton ${
                      index === active ? "activeTab" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    <p>
                      <span>{firstWord}</span>
                      <span>{secondWord}</span>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabination;
