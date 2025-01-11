import React, { useEffect } from "react";
import AlphaGroupsComp from "../../components/AboutUsComp/AlphaGroupsComp/AlphaGroupsComp";
import BecameAlphaComp from "../../components/AboutUsComp/BecameAlphaComp/BecameAlphaComp";
import CertificateComp from "../../components/AboutUsComp/CertificateComp/CertificateComp";
import MissionComp from "../../components/AboutUsComp/MissionComp/MissionComp";
import TheTeamComp from "../../components/AboutUsComp/TheTeamComp/TheTeamComp";
import VisionComp from "../../components/AboutUsComp/VisionComp/VisionComp";
import JoinTeamComp from "../../components/AboutUsComp/JoinTeamComp/JoinTeamComp";
import RecentEventComp from "../../components/AboutUsComp/RecentEventComp/RecentEventComp";
import ValuesComp from "../../components/AboutUsComp/ValuesComp/ValuesComp";
import AlphaJourneyComp from "../../components/AboutUsComp/AlphaJourneyComp/AlphaJourneyComp";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="aboutUsPageContainer">
      <div className="aboutUsPageWrapper">
        <VisionComp />
        <MissionComp />
        <CertificateComp />
        <BecameAlphaComp />
        <AlphaJourneyComp />
        <TheTeamComp />
        <ValuesComp />
        <AlphaGroupsComp />
        <JoinTeamComp />
        <RecentEventComp />
      </div>
    </div>
  );
};

export default AboutUs;
