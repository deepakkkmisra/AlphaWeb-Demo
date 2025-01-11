import React from "react";
import "./PhaseSection.scss";
import phase1 from "../../../assets/images/phase1.png";
import phase2 from "../../../assets/images/phase2.png";
import achievementCert from "../../../assets/images/achievementCert.png";
import congratulationCert from "../../../assets/images/congratulationsCert.png";
import lifetimePayoutCert from "../../../assets/images/lifetimePayoutCert.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const PhaseSection = () => {
  const phaseData = [
    {
      phase: 1,
      title: "Begin Your Trading Journey",
      description:
        "Start your path to becoming an Alpha Analyst by taking on the Phase 1 trading challenge. Execute virtual trades at your own pace—there’s no time limit—while avoiding the maximum drawdown. Your goal is to achieve an 8% virtual profit target. Once you’ve met these objectives, you’ll be ready to advance to the next stage of your trading journey.",
      image: phase1,
    },
    {
      phase: 2,
      title: "Establish a Track Record",
      description:
        "In Phase 2, you’ll have the chance to solidify your trading track record. Without any time constraints, focus on reaching a 5% virtual profit target. Upon successful completion, you’ll be certified as an official Alpha Analyst, demonstrating your trading expertise and readiness to excel.",
      image: phase2,
    },
    {
      phase: 3,
      title: "Become An Alpha Analyst",
      description:
        "After the successful completion of Alpha Prop Phase 1 and 2 assestments, you will be ready to become a Virtual Alpha Capital Analyst. The Alpha Capital Team will provide you an account with a 0% virtual profit target where you can receive an 80% performance fee, allowing you to take your virtual trading strategy to new heights.",
    },
  ];

  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="phaseSectionContainer">
      <div className="phaseSectionWrapper">
        <div className="initialPhaseSection">
          {phaseData.slice(0, 2).map((item) => (
            <div key={item.phase} className="phaseCard">
              <div className="phaseDetail">
                <p>Phase {item.phase}</p>
                <h3>{item.title}</h3>
                <p className="phaseDesc">{item.description}</p>
                <button
                  onClick={() =>
                    handleNavigationLinks("https://app.alphacapitalgroup.uk/")
                  }
                >
                  <p>Start Alpha Evaluation</p>
                </button>
              </div>
              <img src={item?.image} alt="phase_graph" />
            </div>
          ))}
        </div>
        <div className="finalPhaseSection">
          <div className="certificateSection">
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                gap: "1rem",
                autoplay: true,
                perMove: 1,
                arrows: true,
                drag: true,
                focus: "center",
                breakpoints: {
                  1024: {
                    perPage: 2,
                  },
                  768: {
                    perPage: 1,
                  },
                  480: {
                    gap: "2rem",
                    perPage: 1,
                  },
                },
              }}
            >
              <SplideSlide>
                <img src={achievementCert} alt="certificate_img" />
              </SplideSlide>
              <SplideSlide>
                <img src={lifetimePayoutCert} alt="certificate_img" />
              </SplideSlide>
              <SplideSlide>
                <img src={congratulationCert} alt="certificate_img" />
              </SplideSlide>
            </Splide>
          </div>
          {phaseData.slice(-1).map((item) => (
            <div key={item.phase} className="phaseCard">
              <div className="phaseDetail">
                <p>Phase {item.phase}</p>
                <h3>{item.title}</h3>
                <p className="phaseDesc">{item.description}</p>
                <button
                  className="gradientButton_small"
                  onClick={() =>
                    handleNavigationLinks("https://app.alphacapitalgroup.uk/")
                  }
                >
                  Start Alpha Evaluation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhaseSection;
