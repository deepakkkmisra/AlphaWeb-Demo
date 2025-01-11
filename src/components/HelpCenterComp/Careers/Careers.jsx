import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Careers.scss";

const Careers = () => {
  const jobData = [
    {
      teamName: "Operations Team",
      desc: "Be the driving force behind our global trading operations. As a key player on the front lines, you'll represent Alpha Capital, working closely with traders from around the world. We prioritize your growth with ongoing education and skill development, offering clear paths for career advancement. Additionally, you'll have the opportunity to engage in various internal processes, contributing to the broader success of the company.",
      jobOpenings: [
        {
          name: "Customer Support Specialist",
          jobDesc: "/job-listing/",
        },
        {
          name: "Risk Analyst",
          jobDesc: "/risk-analyst/",
        },
      ],
    },
  ];

  const navigate = useNavigate();

  const sectionRefs = {
    section1: useRef(null),
  };

  const handleScrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careersMainWrapper">
      <div className="careersTopSection">
        <div className="joinTeamSection">
          <p>Careers</p>
          <div className="careersTitle">
            <h3>
              Join the <span>Alpha Capital Team</span>
            </h3>
          </div>
          <div className="titleDetails">
            <p>
              Become a part of our global Alpha Capital team and work alongside
              some of the best minds in the trading industry. Whether you're
              just starting out or you're an experienced professional, we offer
              exciting opportunities to grow and make a real impact. Explore our
              job openings and take the next step in your career with us.
            </p>
          </div>
        </div>
        <div className="joinButton">
          <button
            className="viewButton"
            onClick={() => handleScrollToSection("section1")}
          >
            View Open Positions
          </button>
        </div>
      </div>

      <div
        className={`availableProfiles ${
          jobData.length > 1 ? "profileWithPadding" : "profileWithNoPadding"
        }`}
        ref={sectionRefs.section1}
      >
        {jobData.map((team, teamIndex) => (
          <div key={teamIndex} className="teamSection">
            <h4>{team.teamName}</h4>
            <div className="jobOpenings">
              <p>{team.desc}</p>
              <div className="jobOpeningsBox">
                {team.jobOpenings.map((job, jobIndex) => (
                  <button
                    key={jobIndex}
                    className="jobButton normalButton"
                    onClick={() => navigate(job.jobDesc)} // Redirect to route
                  >
                    {job.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
