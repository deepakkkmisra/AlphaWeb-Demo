import React, { useEffect } from "react";
import "./Youtube.scss";
import VideoPlayer from "../../components/LearnComp/Youtube/VideoPlayer";
import Accomplishments from "../../components/LearnComp/Youtube/Accomplishments";
import Testimonials from "../../components/LearnComp/Youtube/Testimonials";

function Youtube() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="yt_wrapper">
      <div className="yt_intro">
        <span className="yt_head">alpha capital Youtube</span>
        <h1>
          Meet <span className="gradientText">the Analysts </span> Behind Alpha
          Capital
        </h1>
        <p>
          Dive into the proven strategies and expert insights that drive the
          success of our elite analysts, paving the way for your own trading
          triumphs with Alpha Capital.
        </p>

        <div className="btns">
          <button className="gradientButton_small">
            Watch More Interviews
          </button>
          <button className="normalButton">Join The Community</button>
        </div>
      </div>

      <div className="comp_wrapper">
        <VideoPlayer />
      </div>
      <Testimonials />

      <Accomplishments />

      <div className="yt_content">
        <h1>Alpha and Words of Rizdom</h1>
        <p>
          Are you an Alpha analyst with a story to share? Get the chance to be
          interviewed by the world’s most respected trading podcaster, Words of
          Rizdom. If you’re ready to showcase your journey, click the button
          below to apply.
        </p>
        <button className="gradientButton_small">Apply Here</button>
      </div>
    </div>
  );
}

export default Youtube;
