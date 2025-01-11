import React, { useEffect } from "react";
import "./ReturnPolicy.scss";

const ReturnPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="returnPolicyContainer">
      <div className="returnPolicyWrapper">
        <h1 className="returnPolicyTitle">Return Policy</h1>
        <p className="returnPolicyLastUpdated">
          Last updated December 21, 2021
        </p>

        <div className="PolicyWrapper">
          <div className="returnPolicySection">
            <h2 className="sectionHeading">REFUNDS</h2>
            <p className="refundPolicyText">
              All sales are final and no refund will be issued.
            </p>
          </div>
          <div className="returnPolicySection">
            <h2 className="sectionHeading">QUESTIONS</h2>
            <p className="contactText">
              If you have any questions concerning our return policy, please
              contact us at:
            </p>
            <a
              href="mailto:support@alphacapitalgroup.uk"
              className="contactEmail"
            >
              support@alphacapitalgroup.uk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
