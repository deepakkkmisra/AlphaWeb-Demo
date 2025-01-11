import React, { useEffect, useState } from "react";
import "./JobInfoComp.scss";
import locationIcon from "../../../../assets/icons/locationIconNew.svg";
import { ReactComponent as Separator } from "../../../../assets/icons/breadcrumbSeparator.svg";
import { Breadcrumb, Segmented } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const RiskAnalyst = () => {
  const jobDetails = {
    responsibilities: [
      "Provide outstanding customer support to clients via phone, email, and messaging platforms in both English and Spanish.",
      "Address client inquiries regarding our trading platform, products, and services promptly and accurately.",
      "Assist clients with account setup, verification processes, platform navigation, and troubleshooting technical issues.",
      "Manage and resolve customer issues by liaising with other internal teams, ensuring a timely and effective resolution.",
      "Monitor and document client interactions in the CRM system, ensuring information is accurate and up-to-date.",
      "Continuously update knowledge of Alpha Capital's products, services, and market trends to deliver high-quality support.",
      "Collaborate with team members to share feedback, improve processes, and enhance the overall client experience.",
    ],
    requirements: [
      "Based in or willing to commute to our Newcastle, UK office.",
      "Fluent in both English and Spanish (written and spoken).",
      "Previous experience in customer support, client service, or a similar role, ideally within the finance or trading sector.",
      "Excellent communication and interpersonal skills, with a customer-centric approach.",
      "Ability to handle multiple tasks and manage high volumes of inquiries efficiently.",
      "Strong problem-solving skills and the ability to think on your feet.",
      "A good understanding of trading platforms, financial markets, or related experience is a plus.",
      "Comfortable working in a dynamic and fast-paced environment.",
    ],
    offers: [
      "Competitive salary and benefits package.",
      "A dynamic and collaborative work environment with opportunities for growth.",
      "Comprehensive training to help you understand our platform and the financial markets.",
      "The opportunity to be part of a leading firm in the proprietary trading industry.",
      "Access to the latest trading tools and resources.",
    ],
  };
  const symbolsOptions = ["Customer Support Specialist", "Risk Analyst"];
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSymbols, setActiveSymbols] = useState("Risk Analyst");

  const handleSymbolsNav = (value) => {
    if (value === "Customer Support Specialist") {
      navigate("/job-listing/");
    } else if (value === "Risk Analyst") {
      navigate("/risk-analyst/");
    } else {
      setActiveSymbols("");
    }
  };

  console.log(location.pathname, "dasdasdasdasdsa");

  useEffect(() => {
    if (location.pathname === "/risk-analyst/") {
      setActiveSymbols("Risk Analyst");
    } else if (location.pathname === "/job-listing/") {
      setActiveSymbols("Customer Support Specialist");
    }
  }, []);

  return (
    <>
      <div className="jobInfoContainer">
        <div className="jobInfoWrapper">
          <div className="jobInfoHeader">
            <p className="teamName">Operations Team</p>
            <h1>Risk Analyst</h1>
            <p className="locationName">
              <img src={locationIcon} alt="locationIcon" /> Newcastle, UK
              (Office-Based)
            </p>
          </div>
          <div className="jobInfoAboutSection">
            <h2>About Alpha Capital:</h2>
            <p>
              Alpha Capital is a global leader in the proprietary trading
              industry, committed to providing traders with the best tools,
              resources, and support to reach their potential. Our innovative
              trading platform and strong emphasis on risk management help us
              maintain a secure and efficient trading environment for our
              community of analysts and traders. As we continue to grow, we are
              looking for a talented Risk Analyst to join our dynamic team.
            </p>
          </div>
          <div className="jobInfoDetailSection">
            <h2>Role Overview:</h2>
            <p>
              We are seeking a highly analytical and detail-oriented
              <span> Risk Analyst </span> to help us manage and mitigate risks
              across our trading activities. In this role, you will be
              responsible for monitoring trading accounts, identifying potential
              risks, and ensuring compliance with our risk management policies.
              You will work closely with our trading and compliance teams to
              ensure our risk controls are robust and effective. This is an
              exciting opportunity for someone who thrives in a fast-paced
              environment and is passionate about risk management.
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
                style={{ margin: "0 3px" }}
                href="mailto:info@alphacapitalgroup.co.uk"
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

export default RiskAnalyst;

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
