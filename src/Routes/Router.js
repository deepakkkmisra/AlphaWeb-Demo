import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Careers from "../components/HelpCenterComp/Careers/Careers";
import ContactUs from "../components/HelpCenterComp/ContactUs/ContactUs";
import PageLayout from "../Layout/PageLayout";
import HomePage from "../pages/HomePage/HomePage";
import JobListings from "../components/HelpCenterComp/Careers/JobInfoComp/JobListings";
import RiskAnalyst from "../components/HelpCenterComp/Careers/JobInfoComp/RiskAnalyst";
import Platform from "../pages/Trading/Platform/Platform";
import TradingTools from "../components/Trading/TradingTools/TradingTools";
import Symbols from "../components/Trading/Symbols/Symbols";
import Blogs from "../pages/Learn/Blogs";
import BlogDetails from "../pages/Learn/BlogDetails";
import Youtube from "../pages/Learn/Youtube";
import EconomicCalendar from "../components/Trading/EconomicCalendar/EconomicCalendar";
import AboutUs from "../pages/AboutUs/AboutUs";
import PrivacyPolicy from "../components/PoliciesComp/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../components/PoliciesComp/TermsOfUse/TermsOfUse";
import Disclaimer from "../components/PoliciesComp/Disclaimer/Disclaimer";
import ReturnPolicy from "../components/PoliciesComp/ReturnPolicy/ReturnPolicy";
import Events from "../pages/Learn/Events";
import Media from "../pages/Learn/Media";
import Community from "../pages/Learn/Community";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import CookiesPolicy from "../components/PoliciesComp/CookiesPolicy/CookiesPolicy";
import CareersPage from "../pages/CareersPage/CareersPage";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/how-it-works"
            element={
              <PageLayout
                variant={7}
                isRedirects={false}
                isEmailBox={true}
                backgroundColor="#020411"
              >
                <HomePage />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/contact-us/"
            element={
              <PageLayout variant={3} isRedirects={true}>
                <ContactUs />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/economic-calendar/"
            element={
              <PageLayout>
                <EconomicCalendar />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/careers/"
            element={
              <PageLayout variant={4} isRedirects={true}>
                <Careers />
              </PageLayout>
            }
          />
          {/* <Route
            exact
            path="/job-listing/"
            element={
              <PageLayout variant={4} isRedirects={true} isEmailBox={true}>
                <JobListings />
              </PageLayout>
            }
          /> */}
          <Route
            exact
            path="/*"
            element={
              <PageLayout variant={4} isRedirects={true} isEmailBox={true}>
                <CareersPage />
              </PageLayout>
            }
          />
          {/* <Route
            exact
            path="/risk-analyst/"
            element={
              <PageLayout variant={4} isRedirects={true} isEmailBox={true}>
                <RiskAnalyst />
              </PageLayout>
            }
          /> */}
          <Route
            exact
            path="/platforms/"
            element={
              <PageLayout variant={2} isRedirects={true}>
                <Platform />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/blogs"
            element={
              <PageLayout variant={3} isRedirects={true}>
                <Blogs />
              </PageLayout>
            }
          />

          <Route
            exact
            path="/blog/:blogId"
            element={
              <PageLayout variant={4} isRedirects={true}>
                <BlogDetails />
              </PageLayout>
            }
          />

          <Route
            exact
            path="/trader-interviews"
            element={
              <PageLayout variant={4} isRedirects={true}>
                <Youtube />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/events"
            element={
              <PageLayout variant={8} isRedirects={false} isEmailBox={true}>
                <Events />
              </PageLayout>
            }
          />

          <Route
            exact
            path="/media"
            element={
              <PageLayout variant={6} isRedirects={true}>
                <Media />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/community"
            element={
              <PageLayout variant={4} isRedirects={true}>
                <Community />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/leaderboard"
            element={
              <PageLayout variant={4} isRedirects={true}>
                <Leaderboard />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/trading-tools-page/"
            element={
              <PageLayout>
                <TradingTools />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/symbols/"
            element={
              <PageLayout variant={4} isRedirects={true} isEmailBox={true}>
                <Symbols />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/about/"
            element={
              <PageLayout>
                <AboutUs />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/cookie-policy/"
            element={
              <PageLayout variant={0} isRedirects={false}>
                <CookiesPolicy />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/return-policy/"
            element={
              <PageLayout variant={0} isRedirects={false}>
                <ReturnPolicy />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/disclaimer/"
            element={
              <PageLayout variant={0} isRedirects={false}>
                <Disclaimer />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/terms-and-conditions/"
            element={
              <PageLayout variant={0} isRedirects={false}>
                <TermsOfUse />
              </PageLayout>
            }
          />
          <Route
            exact
            path="/privacy-policy-2/"
            element={
              <PageLayout variant={0} isRedirects={false}>
                <PrivacyPolicy />
              </PageLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
