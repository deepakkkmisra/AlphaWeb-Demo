import React, { useState } from "react";
import arrowIcon from "../../../assets/icons/arrow-down-circle.svg";
import arrowBlueIcon from "../../../assets/icons/arrow-blue.svg";
import tickBlueIcon from "../../../assets/icons/tick-circle-blue.svg";

const dummyData = [
  {
    rule: "Profit Target",
    phase1: "10%",
    funded: "-",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    rule: "Risk Limit",
    phase1: "5%",
    funded: "100%",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    rule: "Drawdown Limit",
    phase1: "3%",
    funded: "-",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  },
  {
    rule: "Max Position Size",
    phase1: "50k",
    funded: "50%",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function PlansTable() {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow((prev) => (prev === index ? null : index));
  };

  return (
    <div className="plansTable_wrapper">
      <div className="plans_table">
        <div className="planDetails_wrapper">
          <span className="gradientText">1-Step Regular</span>
          <div className="plan_name">
            <h3>Alpha Pro</h3>
            <span className="bestseller">BestSeller</span>
          </div>

          <p className="alphaOffers">
            Alpha Pro offers a clear 1-Step path to becoming an Alpha Trader in
            a single phase, making it the fastest evaluation process we offer.
          </p>
          <div className="plan_highlights">
            <div>
              <img src={tickBlueIcon} alt="" />
              <p>No Profit Cap</p>
            </div>
            <div>
              <img src={tickBlueIcon} alt="" />
              <p>No Profit Cap</p>
            </div>
            <div>
              <img src={tickBlueIcon} alt="" />
              <p>No Profit Cap</p>
            </div>
          </div>
        </div>
        <div className="tableWrapper">
          <div className="tableBox">
            <div className="table_header">
              <div className="table_head">Rule</div>
              <div className="table_head">Phase 1</div>
              <div className="table_head">Funded</div>
            </div>

            <div className="table_rows">
              {dummyData.map((row, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`table_row ${
                      index % 2 !== 0 ? "table_row_white" : ""
                    }`}
                    onClick={() => handleRowClick(index)}
                  >
                    <div className="table_row_data">
                      <img
                        src={arrowIcon}
                        alt="arrow"
                        className={`arrow-icon ${
                          expandedRow === index ? "expanded" : ""
                        }`}
                      />
                      {row.rule}
                    </div>
                    <div className="table_row_data">{row.phase1}</div>
                    <div className="table_row_data">{row.funded}</div>
                  </div>

                  {expandedRow === index && (
                    <div className="table_expanded_row">
                      <p>{row.description}</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="table_footer">
          <h3>Alpha One</h3>
          <button className="normalButton">
            Start Alpha Capital Evaluation <img src={arrowBlueIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlansTable;
