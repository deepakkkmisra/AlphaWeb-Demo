import React, { useEffect, useRef } from "react";
import "./Disclaimer.scss";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const handleScrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="disclaimerContainer">
      <div className="disclaimerWrapper">
        <h1 className="disclaimerTitle">Disclaimer</h1>
        <p className="lastUpdated">Last updated December 21, 2021</p>

        <div className="disclaimerOptionsSection">
          <ul className="disclaimerTypes">
            <li onClick={() => handleScrollToSection("section1")}>
              WEBSITE DISCLAIMER
            </li>
            <li onClick={() => handleScrollToSection("section2")}>
              EXTERNAL LINKS DISCLAIMER
            </li>
            <li onClick={() => handleScrollToSection("section3")}>
              PROFESSIONAL DISCLAIMER
            </li>
            <li onClick={() => handleScrollToSection("section4")}>
              TESTIMONIALS DISCLAIMER
            </li>
          </ul>

          <div className="detailedDisclaimer">
            <div className="disclaimerSection" ref={sectionRefs.section1}>
              <h2 className="sectionHeading">WEBSITE DISCLAIMER</h2>
              <p className="sectionContent">
                Alpha Capital Group Limited operates an educational and training
                platform for customers who want to learn how to trade
                effectively. All trading activity carried out by our customers
                is simulated or virtual trading only. As we are not carrying out
                any regulated investment business and we are not issuing any
                financial promotions, we are not required to be authorised and
                regulated by the Financial Conduct Authority and our services
                will not be covered by the Financial Ombudsman Service. The
                information provided by Alpha Capital Group Limited ("we," "us,"
                or "our") on http://www.alphacapitalgroup.uk (the "Site") is for
                general informational purposes only. All information on the Site
                is provided in good faith, however, we make no representation or
                warranty of any kind, express or implied, regarding the
                accuracy, adequacy, validity, reliability, availability, or
                completeness of any information on the Site. UNDER NO
                CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OF
                DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE
                OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF
                THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
                SOLELY AT YOUR OWN RISK.
              </p>
            </div>
            <div className="disclaimerSection" ref={sectionRefs.section2}>
              <h2 className="sectionHeading">EXTERNAL LINKS DISCLAIMER</h2>
              <p className="sectionContent">
                The Site may contain (or you may be sent through the Site) links
                to other websites or content belonging to or originating from
                third parties or links to websites and features in banners or
                other advertising. Such external links are not investigated,
                monitored, or checked for accuracy, adequacy, validity,
                reliability, availability, or completeness by us. WE DO NOT
                WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
                ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
                THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR
                FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT
                BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
                TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR
                SERVICES.
              </p>
            </div>
            <div className="disclaimerSection" ref={sectionRefs.section3}>
              <h2 className="sectionHeading">PROFESSIONAL DISCLAIMER</h2>
              <p className="sectionContent">
                Alpha Capital Group Limited does not carry out any regulated
                activities, the only exclusive activities we carry out are
                Proprietary Trading and Professional Training. Consequently, we
                are not required to be authorized by the regulatory authority.
                Traders do not have direct access to company capital, and trade
                accounts with virtual funds, therefore, traders are not required
                to have a money managers license. Alpha Capital Group Limited &
                ACG Markets are not a broker, and do not accept deposits. All
                information provided on this site is intended solely for the
                study purposes related to trading on financial markets and does
                not serve in any way as a specific investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of
                investment instruments. Trading in financial markets is a
                high-risk activity and it is advised not to risk more than one
                can afford to lose.
              </p>
            </div>
            <div className="disclaimerSection" ref={sectionRefs.section4}>
              <h2 className="sectionHeading">TESTIMONIALS DISCLAIMER</h2>
              <p className="sectionContent">
                The Site may contain testimonials by users of our products
                and/or services. These testimonials reflect the real-life
                experiences and opinions of such users. However, the experiences
                are personal to those particular users, and may not necessarily
                be representative of all users of our products and/or services.
                We do not claim, and you should not assume, that all users will
                have the same experiences. YOUR INDIVIDUAL RESULTS MAY VARY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
