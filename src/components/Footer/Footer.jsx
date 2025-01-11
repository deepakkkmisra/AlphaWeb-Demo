import React, { useState } from "react";
import "./Footer.scss";
import { ReactComponent as Discord } from "../../assets/icons/Discord.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";

import arrowImg from "../../assets/icons/arrowImage.svg";
import { useNavigate } from "react-router-dom";

const Footer = ({
  variant = 6,
  isEmailBox = true,
  isRedirects = true,
  backgroundColor = "var(--GRADIENT-2, linear-gradient(0deg, #020411 41.53%, #050D42 97.84%))",
}) => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  const navItems = [
    {
      key: "how-it-works",
      name: "How it works",
      path: "/",
    },
    {
      key: "trading",
      name: "Trading",
      path: "/trading-tools-page/",
    },
    {
      key: "about-us",
      name: "About us",
      path: "/about/",
    },
    {
      key: "learn",
      name: "Learn",
      path: "/blogs/",
    },
    {
      key: "help-center",
      name: "Help Center",
      path: "/contact-us/",
    },
  ];

  const policies = [
    {
      key: "cookie-policy",
      name: "Cookie Policy",
      path: "/cookie-policy/",
    },
    {
      key: "privacy-policy",
      name: "Privacy Policy",
      path: "/privacy-policy-2/",
    },
    {
      key: "terms-of-use",
      name: "Terms of Use",
      path: "/terms-and-conditions/",
    },
    {
      key: "disclaimer",
      name: "Disclaimer",
      path: "/disclaimer/",
    },
    {
      key: "return-policy",
      name: "Return Policy",
      path: "/return-policy/",
    },
  ];

  const handleNavClick = (item) => {
    navigate(item.path);
  };

  return (
    <div className="footer_wrapper" style={{ background: backgroundColor }}>
      <div className="footer_container">
        {variant === 0 && ""}
        {variant === 1 && (
          <div className="footer_top footerVariant_1">
            <h3>Get free advice to become a better trader</h3>
            <div className="tradingSkillsInfo">
              <p>
                We send out emails overflowing with smart trading advice that
                most trading gurus would charge for. Why? Because we know that
                smarter traders stick around longer. Pop your email in the box
                below and we promise to send you information to level up your
                trading skills.
              </p>
            </div>
          </div>
        )}

        {variant === 2 && (
          <div className="footer_top footerVariant_2">
            <h3>Choose Your Platform</h3>
            <div className="platformInfo">
              <p>
                At Alpha Capital, we understand that each Alpha Analyst has
                unique needs and preferences. That's why we offer a range of
                trading platforms to help you succeed in the markets. Choose the
                platform that best fits your trading style and start making the
                most of your trading opportunities with Alpha Capital.
              </p>
            </div>
          </div>
        )}

        {variant === 3 && (
          <div className="footer_top footerVariant_3">
            <h3>Become An Alpha Analyst</h3>
          </div>
        )}

        {variant === 4 && (
          <div className="footer_top footerVariant_4">
            <h3>Become An Alpha Analyst</h3>
            <div className="platformInfo">
              <p>
                We send out emails overflowing with smart trading advice that
                most trading gurus would charge for. Why? Because we know that
                smarter traders stick around longer. Pop your email in the box
                below and we promise to send you information to level up your
                trading skills.
              </p>
            </div>
          </div>
        )}
        {variant === 5 && (
          <div className="footer_top footerVariant_5">
            <h3> Unleash Your Trading Potential</h3>
            <div className="platformInfo">
              <p>
                Take the next step in your trading journey. Sharpen your skills,
                rise through the ranks, and aim for a spot on the leaderboard.
                Your path to becoming an Alpha Analyst starts here.
              </p>
            </div>
          </div>
        )}
        {variant === 6 && (
          <div className="footer_top footerVariant_6">
            <h3>Join Our Media Network</h3>
            <div className="platformInfo">
              <p>
                Be the first to know about the latest market insights, social
                media content, and press features. Sign up for our newsletter
                and follow us on social media to stay connected with Alpha
                Capital.
              </p>
            </div>
          </div>
        )}
        {variant === 7 && (
          <div className="footer_top footerVariant_7">
            <h3>Stay Ahead with Alpha Insights</h3>
            <div className="platformInfo">
              <p>
                <span>Subscribe to our Alpha Market Pulse</span>—a weekly
                overview packed with key market trends, expert analysis, and
                actionable insights. Delivered straight to your inbox, these
                updates will keep you informed and ahead of the curve. We
                believe that informed traders make better decisions, and we’re
                here to support your growth. Enter your email below and start
                receiving the knowledge you need to elevate your trading game.
              </p>
            </div>
          </div>
        )}
        {variant === 8 && (
          <div className="footer_top footerVariant_8">
            <h3> Register for Our Next Event</h3>
            <div className="platformInfo">
              <p>
                Don’t miss out on the opportunity to connect with top traders,
                analysts, and enthusiasts at our upcoming event. Secure your
                spot now and take a step toward expanding your network and
                enhancing your trading skills. Simply fill out the form below to
                be notified about our next event
              </p>
            </div>
          </div>
        )}

        {isRedirects === true && (
          <div className="getStartedWrapper">
            <button
              className="gradientButton_small "
              onClick={() => {
                handleRedirect("https://app.alphacapitalgroup.uk/");
              }}
            >
              Get started
            </button>

            <button
              className="freeTrialDiv"
              onClick={() => {
                handleRedirect("https://app.alphacapitalgroup.uk/");
              }}
            >
              Free Trial
            </button>
          </div>
        )}

        {isEmailBox === true && (
          <div className="email_container">
            <div className="email_section">
              <label htmlFor="email">Your email</label>
              <input type="email" />
            </div>
            <div className="arrow_icon">
              <img src={arrowImg} alt="" />
            </div>
          </div>
        )}

        <div className="footer_bottom">
          <div className="bottom_title">
            <div className="left_corner">
              <div className="companyTitle">
                <h3>Alpha </h3>
                <span>Capital</span>
              </div>
            </div>
            <div className="right_corner">
              <ul>
                {navItems.map((item) => (
                  <li key={item.key} onClick={() => handleNavClick(item)}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bottom_content">
            <div className="social_media_logo">
              <div className="grpName">
                <h3>© 2024 AlphaGroup</h3>
              </div>
              <div className="logo_div">
                <Discord className="discordMediaSection" />
                <Instagram className="instaMediaSection" />
                <Youtube className="youtubeMediaSection" />
                <Twitter className="twitterMediaSection" />
              </div>
            </div>
            <div className="add_info_section">
              <div className="address_Section">
                <p>Mon – Fri: 8am – 8pm (GMT)</p>
                <p>Info@alphacapitalgroup.uk</p>
                <p>10 Lower Thames Street, Billingsgate, London, </p>
                <p>England, EC3R 6AF</p>
              </div>
              <div className="informationSection">
                <p>
                  All information provided on this site is intended solely for
                  the study purposes related to trading on financial markets and
                  does not serve in any way as a specific investment
                  recommendation, business recommendation, investment
                  opportunity analysis or similar general recommendation
                  regarding the trading of investment instruments.
                </p>
              </div>
            </div>
          </div>

          <div className="policyMainWrapper">
            <div className="policiesWrapper">
              {policies.map((item, index) => (
                <div className="policiesSection ">
                  <p onClick={() => handleNavClick(item)}>{item.name}</p>
                </div>
              ))}

              {/* <div className="policiesSection privacySection">
                <p>Privacy Policy</p>
              </div>
              <div className="policiesSection termsSection">
                <p>Terms of Use</p>
              </div>
              <div className="policiesSection disclaimerSection">
                <p>Disclaimer</p>
              </div>
              <div className="policiesSection returnSection">
                <p>Return Policy</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
