import React, { useEffect } from "react";
import "./Community.scss";
import Globe from "../../components/LearnComp/Community/Globe";
import Statistics from "../../components/LearnComp/Community/Statistics";
import Analysts from "../../components/LearnComp/Community/Analysts";
import discordImg from "../../assets/icons/discordIcon.svg";

function Community() {
  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cm_wrapper">
      <div className="cm_intro">
        <span className="intro_head">COMMUNITY</span>
        <h1>
          Join the Global{" "}
          <span className="gradientText"> Alpha Analyst Community</span>
        </h1>
        <p>
          Welcome to the Alpha Analyst community a global network of elite
          analysts united by a shared passion for success. Here, you can connect
          with top-performing analysts from around the world, share insights,
          and grow together.
        </p>
        <button
          className="gradientButton_small"
          onClick={() =>
            handleNavigationLinks("https://discord.com/invite/W5aKKmPRdR")
          }
        >
          Join Our Community
        </button>
      </div>
      <div className="comp_wrapper">
        <Globe />
        <Statistics />
        <Analysts />
      </div>

      <div className="blueBox">
        <div className="discordImg">
          <img src={discordImg} alt="" />
        </div>
        <h1>Join the Conversation on Discord</h1>
        <p>
          Become a part of the conversation. Ready to dive deeper? Join our
          Discord community, where Alpha Analysts share real-time insights,
          strategies, and support. Click the button below to become part of our
          thriving network.
        </p>
        <button
          className="gradientButton_small"
          onClick={() =>
            handleNavigationLinks("https://discord.com/invite/W5aKKmPRdR")
          }
        >
          Join Our Discord Community
        </button>
      </div>
    </div>
  );
}

export default Community;
