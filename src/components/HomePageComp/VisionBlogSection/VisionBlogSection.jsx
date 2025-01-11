import React from "react";
import "./VisionBlogSection.scss";
import arrowIcon from "../../../assets/icons/nextArrow.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import eventPic from "../../../assets/images/eventPictures.png";
import eventPic2 from "../../../assets/images/eventPictures2.png";
import eventPic3 from "../../../assets/images/eventPictures3.png";
import bestDayTrading from "../../../assets/images/20-Best-Day-Trading-Podcasts-to-Get-Inspired-in-2029.jpg";
import howToFind from "../../../assets/images/How-to-Find-Your-Trading-Style_-The-Best-Trading-Strategy-for-You.jpg";
import whyDayTraders from "../../../assets/images/Why-Day-Traders-Love-Trading-Gold.jpg";
import { useNavigate } from "react-router-dom";
import { blogDataHome } from "../../../pages/Learn/BlogData";
const VisionBlogSection = () => {
  const descData = [
    {
      image: eventPic2,
    },
    {
      image: eventPic3,
    },
    {
      image: eventPic,
    },
  ];


  

  const handleNavigationLinks = (url) => {
    window.open(url, "_blank");
  };


  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog`);
  };


  return (
    <div className="visionBlogSectionContainer">
      <div className="visionBlogSectionWrapper">
        <div className="visionSectionBox">
          <div className="visionDescDiv">
            <h2 className="title">Alpha Capital Vision</h2>
            <p>
              Alpha Capital Group is a unified ecosystem designed to empower
              market analysts and traders at every stage of their journey. Our
              group encompasses several specialised entities, each contributing
              to our mission of delivering excellence and innovation. 
            </p>
            <p>
              Alpha Capital Group is committed to equipping our 100,000 +
              monthly active community of analysts with exceptional trading
              conditions, advanced analytical tools, and outstanding customer
              care. Our in-house platform, driven by innovative technology and
              years of experience, provides a stable, accessible entry into the
              market, ensuring you have everything needed to succeed.
            </p>
            <button
              className="gradientButton_small"
              onClick={() =>
                handleNavigationLinks("https://app.alphacapitalgroup.uk/")
              }
            >
              Start Alpha Evaluation
            </button>
          </div>
          <div className="visionPicDiv">
            <p className="upperHeader">
              Pictures From Alpha Group Event <img src={arrowIcon} alt="" />
            </p>
            <div className="eventPicsDiv">
              {" "}
              <div className="descBox">
                <Splide
                  options={{
                    type: "loop",
                    perPage: 2.5,
                    gap: "1rem",
                    autoplay: true,
                    perMove: 1,
                    arrows: false,
                    drag: false,
                    breakpoints: {
                      1100: {
                        perPage: 2,
                      },
                      740: {
                        perPage: 1,
                      },
                    },
                  }}
                >
                  {descData.map((item, index) => (
                    <SplideSlide key={index}>
                      <img src={item.image} alt="" />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </div>
          </div>
        </div>
        <div className="blogSectionBox">
          <div className="blogHeader">
            <p>alpha capital blog</p>
            <h2>Useful to Read</h2>
          </div>
          <div className="blogListDiv">
            {blogDataHome.map((item, index) => (
              <div key={index} className="blogBox">
                <div className="blogBannerImg">
                  <img src={item.image} alt="blog_banner" />
                </div>
                <div className="blogSummary">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                  <button onClick={() => navigate(`blog/${item.id}`)} className="normalButton">Read More</button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="blogRedirectBtn gradientButton_small"
            onClick={handleReadMore}
          >
            CTA Blog Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionBlogSection;
