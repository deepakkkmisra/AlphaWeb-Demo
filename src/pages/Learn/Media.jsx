import React, { useEffect } from "react";
import "./Media.scss";
import MediaOptions from "../../components/LearnComp/Media/MediaOptions";
import WhyFollow from "../../components/LearnComp/Media/WhyFollow";
import SocialMediaHandle from "../../components/ReusableComponent/SocialMediaHandle/SocialMediaHandle";

function Media() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="media_wrapper">
      <div className="media_intro">
        <span className="into_head">Media</span>
        <h1>
          Stay Informed with{" "}
          <span className="gradientText"> Alpha Capital Media </span>
        </h1>
        <p>
          Welcome to Alpha Capital's Media Hub—your go-to resource for the
          latest market insights, social media updates, and press coverage.
          Whether you're an experienced analyst or just starting your trading
          journey, our curated content will keep you informed and ahead of the
          curve.
        </p>
      </div>
      <MediaOptions />
      <WhyFollow />
      <div className="social_media_wrapper">
        <SocialMediaHandle />
      </div>
    </div>
  );
}

export default Media;
