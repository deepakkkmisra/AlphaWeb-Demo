import React from "react";
import "./SocialMediaHandle.scss";
import { ReactComponent as XLogo } from "../../../assets/icons/twitterIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../../assets/icons/youtubeIcon.svg";
import { ReactComponent as DiscordIcon } from "../../../assets/icons/discordIcon.svg";
import { ReactComponent as InstagramLogo } from "../../../assets/icons/instaIcon.svg";

const SocialMediaHandle = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="socialMediaMain">
      <div className="socialMediaHandle">
        <h3>
          Official Alpha <span>Social Media</span>
        </h3>
        <div className="socialMediaAccounts">
          <div
            className="socialAccount instagram_account"
            onClick={() =>
              handleRedirect("https://instagram.com/alphacapitalgroupuk/")
            }
          >
            <div className="socialMedia_title">
              <p>Instagram</p>
            </div>
            {/* <div className="socialMediaLogo">
              <InstagramLogo />
            </div> */}
          </div>
          <div
            className="socialAccount twitter_account"
            onClick={() => handleRedirect("https://x.com/AlphaCapitalUK?s=20/")}
          >
            <div className="socialMedia_title">
              <p>X</p>
            </div>
            <div className="socialMediaLogo">
              <XLogo />
            </div>
          </div>
          <div
            className="socialAccount youtube_account"
            onClick={() =>
              handleRedirect(
                "https://www.youtube.com/channel/UClm3Bo5Jikj-mibeFJpgY-Q/"
              )
            }
          >
            <div className="socialMedia_title">
              <p>Youtube</p>
            </div>
            <div className="socialMediaLogo">
              <YoutubeIcon />
            </div>
          </div>

          <div
            className="socialAccount discord_account"
            onClick={() =>
              handleRedirect("https://discord.com/invite/W5aKKmPRdR/")
            }
          >
            <div className="socialMedia_title">
              <p>Discord</p>
            </div>
            <div className="socialMediaLogo">
              <DiscordIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHandle;
