import React, { useEffect, useState } from "react";
import "./JobInfoComp.scss";
import locationIcon from "../../../../assets/icons/locationIconNew.svg";
import { ReactComponent as Separator } from "../../../../assets/icons/breadcrumbSeparator.svg";
import { Breadcrumb, Segmented } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const JobListings = () => {
  const jobDetails = {
    responsibilities: [
      "Monitor and analyze trading accounts to identify potential risks and anomalies.",
      "Evaluate trading strategies and provide recommendations to ensure they align with Alpha Capital's risk management policies.",
      "Collaborate with traders and internal teams to enforce risk limits and guidelines effectively.",
      "Develop and enhance risk management tools, models, and reports to support decision-making.",
      "Conduct regular reviews of risk parameters and update them in line with market conditions and internal policies.",
      "Prepare and present risk reports to senior management, highlighting key risk metrics and areas of concern.",
      "Stay updated with market developments, trends, and regulatory requirements to ensure compliance and effective risk management.",
      "Work closely with the compliance team to ensure that all trading activities adhere to regulatory standards and internal policies.",
    ],
    requirements: [
      "Bachelor’s degree in Finance, Economics, Mathematics, or a related field.",
      "Proven experience in risk management, preferably within the trading or financial services industry.",
      "Strong analytical skills with the ability to interpret complex data and identify trends.",
      "Excellent communication skills, with the ability to present risk analysis to various stakeholders clearly and concisely.",
      "Proficiency in risk management tools and software; experience with data analysis tools is a plus.",
      "Ability to work independently and collaboratively in a fast-paced environment.",
      "High attention to detail and strong problem-solving skills.",
      "A proactive approach to risk identification and mitigation.",
    ],
    offers: [
      "Competitive salary and performance-based bonuses.",
      "A collaborative and innovative work environment with a focus on professional growth.",
      "Opportunities to work with a talented team of traders, analysts, and finance professionals.",
      "Continuous learning and development opportunities, including access to the latest tools and resources.",
      "A chance to make a meaningful impact within a leading proprietary trading firm.",
    ],
  };

  return (
    <>
      <div className="jobInfoContainer">
        <div className="jobInfoWrapper">
          <div className="jobInfoHeader">
            <p>Operations Team</p>
            <h1>Customer Support Specialist</h1>
            <p className="locationName">
              <img src={locationIcon} alt="locationIcon" /> Newcastle, UK
              (Office-Based)
            </p>
          </div>
          <div className="jobInfoAboutSection">
            <h2>About Alpha Capital:</h2>
            <p>
              Alpha Capital is a leading proprietary trading firm dedicated to
              providing traders and analysts with the tools, resources, and
              support they need to excel in financial markets. Our mission is to
              create a transparent, innovative, and client-focused environment
              that empowers traders globally.
            </p>
          </div>
          <div className="jobInfoDetailSection">
            <h2>Position Overview:</h2>
            <p>
              We are looking for a proactive and customer-oriented Customer
              Support Specialist with Spanish language skills to join our team
              in Newcastle, UK. As a key member of our customer support team,
              you will be the primary point of contact for our clients,
              assisting them with inquiries, resolving issues, and ensuring they
              have an excellent experience with Alpha Capital. You will handle
              both phone calls and message inquiries, providing support in both
              English.
            </p>
          </div>
          <ResponsibilitiesSection jobDetails={jobDetails} />
          <RequirementsSection jobDetails={jobDetails} />
          <OffersSection jobDetails={jobDetails} />
          <div className="jobInfoApplySection">
            <h2>How to Apply:</h2>
            <p>
              If you’re passionate about providing exceptional customer support
              and want to be part of an innovative and dynamic team at Alpha
              Capital, we’d love to hear from you. Please send your CV and a
              cover letter in English to
              <a
                href="mailto:info@alphacapitalgroup.co.uk"
                style={{ margin: "0 3px 0 3px" }}
              >
                info@alphacapitalgroup.co.uk
              </a>
              and let us know why you’d be a great fit for our team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListings;

const ResponsibilitiesSection = ({ jobDetails }) => (
  <div className="jobInfoSection jobInfoResponsibilitiesSection">
    <h2 className="sectionTitle responsibilitiesTitle">
      Key Responsibilities:
    </h2>
    <ul className="jobInfoList responsibilitiesList">
      {jobDetails.responsibilities.map((item, index) => (
        <li key={index} className="jobInfoItem responsibilityItem">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const RequirementsSection = ({ jobDetails }) => (
  <div className="jobInfoSection jobInfoRequirementsSection">
    <h2 className="sectionTitle requirementsTitle">Requirements:</h2>
    <ul className="jobInfoList requirementsList">
      {jobDetails.requirements.map((item, index) => (
        <li key={index} className="jobInfoItem requirementItem">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const OffersSection = ({ jobDetails }) => (
  <div className="jobInfoSection jobInfoOffersSection">
    <h2 className="sectionTitle offersTitle">What We Offer:</h2>
    <ul className="jobInfoList offersList">
      {jobDetails.offers.map((item, index) => (
        <li key={index} className="jobInfoItem offerItem">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
