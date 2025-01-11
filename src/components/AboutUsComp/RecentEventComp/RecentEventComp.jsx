import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "./RecentEventComp.scss";
import eventPic from "../../../assets/images/eventPictures.png";
import eventPic2 from "../../../assets/images/eventPictures2.png";
import eventPic3 from "../../../assets/images/eventPictures3.png";
const RecentEventComp = () => {
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

  return (
    <div className="recentEventCompContainer">
      <div className="recentEventCompWrapper">
        <div className="leftSection">
          <h2>Recent Events</h2>
          <p>
            Explore the moments that define Alpha Capital. From global events to
            behind-the-scenes insights, our Recent Events section offers a
            glimpse into the vibrant community that powers our success. Dive in
            and see how we bring our vision to life.
          </p>
          <button className="gradientButton_small">
            Pictures From Alpha Group Event
          </button>
        </div>
        <div className="rightSection">
          {" "}
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
                  <SplideSlide key={index} className="sliderSection">
                    <img src={item.image} alt="" />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEventComp;
