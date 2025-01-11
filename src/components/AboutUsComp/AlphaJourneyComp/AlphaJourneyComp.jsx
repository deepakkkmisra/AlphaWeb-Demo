import React, { useEffect, useRef, useState } from "react";
import "./AlphaJourneyComp.scss";
import { ReactComponent as PrevArrow } from "../../../assets/icons/upArrow.svg";
import { ReactComponent as NextArrow } from "../../../assets/icons/downArrw.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const AlphaJourneyComp = () => {
  const splideRef = useRef(null);

  const journeyData = [
    {
      value: 1,
      year: "2021",
      events: [
        { month: "November", description: "Alpha Capital group launched" },
      ],
    },
    {
      value: 2,
      year: "2022",
      events: [
        {
          month: "March",
          description: "Development of our technology complete",
        },
        { month: "March", description: "We onboarded our first client" },
        {
          month: "April",
          description:
            "ACG Markets, our sister company, obtained Metaquotes licensing",
        },
      ],
    },
    {
      value: 3,
      year: "2023",
      events: [
        { month: "November", description: "Received FSA Seychelles approval" },
        { month: "December", description: "75,000 free accounts given away" },
      ],
    },
    {
      value: 4,
      year: "2024",
      events: [
        {
          month: "October",
          description: "70,000,000 performance fee paid out",
        },
        {
          month: "Q1 & Q2",
          description: "Design and development of Alpha Futures",
        },
        {
          month: "Q3",
          description: "Alpha Futures Launch",
        },
        {
          month: "Q3 & Q4",
          description: "Design and development of Alpha Trader",
        },
        {
          month: "Q4",
          description: "Branding update\nAlpha One & Alpha One X launch",
        },
      ],
    },
    {
      value: 5,
      year: "2025",
      events: [{ month: "Q1", description: "Alpha Trader & TV launched" }],
    },
  ];

  const [activeYear, setActiveYear] = useState(1);

  const handleNext = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go(">");
    }
  };

  const handlePrev = () => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go("<");
    }
  };

  const handleActiveYear = (value) => {
    console.log(activeYear);
    setActiveYear(value);
    if (splideRef.current?.splide) {
      splideRef.current.splide.go(value - 1); // Move to corresponding slide
    }
  };

  useEffect(() => {
    if (splideRef.current?.splide) {
      splideRef.current.splide.go(activeYear - 1);
    }
  }, [activeYear]);

  return (
    <div className="alphaJourneyCompContainer">
      <div className="alphaJourneyCompWrapper">
        <div className="topHeaderSection">
          <p>Milestones That Define Our Path to Excellence</p>
          <h2>The Alpha Capital Journey</h2>
        </div>
        <div className="journeySlidesSection">
          <div className="slidesLeftSection">
            <div className="stepsSection">
              {journeyData.map((data) => (
                <React.Fragment key={data.value}>
                  <div
                    className={`yearBox ${
                      activeYear === data.value ? "active" : ""
                    }`}
                  >
                    <p>{data.year}</p>
                    <div
                      className={`dot ${
                        activeYear === data.value ? "activeDot" : ""
                      }`}
                      onClick={() => handleActiveYear(data.value)}
                    ></div>
                  </div>
                  {data.value < journeyData.length && (
                    <div className="lines"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="contentSection">
              <Splide
                options={{
                  direction: "ttb",
                  height: "500px",
                  type: "loop",
                  perPage: 2,
                  gap: "1rem",
                  autoplay: false,
                  perMove: 1,
                  arrows: false,
                  drag: false,
                  breakpoints: {
                    768: {
                      arrows: true,
                      perPage: 1,
                    },
                    480: {
                      gap: "2rem",
                      perPage: 1,
                    },
                  },
                }}
                ref={splideRef}
                onMoved={(splide) => {
                  const normalizedIndex =
                    (splide.index % journeyData.length) + 1;
                  setActiveYear(normalizedIndex);
                }}
              >
                {journeyData.map((data, index) => (
                  <SplideSlide key={index} className="yearSection">
                    <h2>{data.year}</h2>
                    {data.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="eventItem">
                        <p>{event.month}</p>
                        <p> - {event.description}</p>
                      </div>
                    ))}
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
          <div className="navSection">
            <button className="prevArrow" onClick={handlePrev}>
              <PrevArrow />
            </button>
            <button className="nextArrow" onClick={handleNext}>
              <NextArrow />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaJourneyComp;
