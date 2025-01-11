import React, { useEffect } from "react";
import "./HomePage.scss";
import IntroSection from "../../components/HomePageComp/IntroSection/IntroSection";
import BrokerSection from "../../components/HomePageComp/BrokerSection/BrokerSection";
import FundingSection from "../../components/HomePageComp/FundingSection/FundingSection";
import PhaseSection from "../../components/HomePageComp/PhaseSection/PhaseSection";
import DashboardSection from "../../components/HomePageComp/DashboardSection/DashboardSection";
import CheckoutSection from "../../components/HomePageComp/CheckoutSection/CheckoutSection";
import AlphaGroupSection from "../../components/HomePageComp/AlphaGroupSection/AlphaGroupSection";
import TestimonialSection from "../../components/HomePageComp/TestimonialSection/TestimonialSection";
import MarketSummarySection from "../../components/HomePageComp/MarketSummarySection/MarketSummarySection";
import VisionBlogSection from "../../components/HomePageComp/VisionBlogSection/VisionBlogSection";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePageContainer">
      <div className="homePageWrapper">
        <IntroSection />
        <BrokerSection />
        <FundingSection />
        <PhaseSection />
        <DashboardSection />
        <CheckoutSection />
        <AlphaGroupSection />
        {/* <TestimonialSection /> */}
        <VisionBlogSection />
        <MarketSummarySection />
      </div>
    </div>
  );
};

export default HomePage;
