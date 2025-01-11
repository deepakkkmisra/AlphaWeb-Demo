import React, { useEffect, useState } from "react";
import "./CareersPage.scss";
import { ReactComponent as Separator } from "../../assets/icons/breadcrumbSeparator.svg";
import { Breadcrumb, Segmented } from "antd";
import {
  Navigate,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import JobListings from "../../components/HelpCenterComp/Careers/JobInfoComp/JobListings";
import RiskAnalyst from "../../components/HelpCenterComp/Careers/JobInfoComp/RiskAnalyst";

const CareersPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const symbolsOptions = ["Customer Support Specialist", "Risk Analyst"];

  const [activeSymbols, setActiveSymbols] = useState(
    "Customer Support Specialist"
  );

  const handleSymbolsNav = (value) => {
    if (value === "Customer Support Specialist") {
      navigate("/job-listing/");
    } else if (value === "Risk Analyst") {
      navigate("/risk-analyst/");
    }
  };

  useEffect(() => {
    const pathnameSegments = location.pathname.split("/");
    const desiredPart = pathnameSegments[1];
    switch (desiredPart) {
      case "job-listing":
        setActiveSymbols("Customer Support Specialist");
        break;
      case "risk-analyst":
        setActiveSymbols("Risk Analyst");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <div className="careersPageContainer">
      <div className="careersPageWrapper">
        <div className="leftSectionCareer">
          <div className="jobPageNavSmall">
            <Breadcrumb
              separator={<Separator />}
              items={[
                {
                  title: "Home page",
                  href: "/how-it-works",
                },
                {
                  title: "Careers",
                  href: "/careers/",
                },
                {
                  title: activeSymbols,
                },
              ]}
            />
          </div>

          <div className="careersPageContent">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/job-listing/" replace={true} />}
              />
              <Route path="/job-listing/" element={<JobListings />} />
              <Route path="/risk-analyst/" element={<RiskAnalyst />} />
            </Routes>
          </div>
        </div>

        <div className="jobNavigation">
          <div className="navGrp">
            <p>Operations Team</p>
            <Segmented
              vertical
              options={symbolsOptions}
              onChange={handleSymbolsNav}
              value={activeSymbols} // Ensure the selected segment is reflected
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
