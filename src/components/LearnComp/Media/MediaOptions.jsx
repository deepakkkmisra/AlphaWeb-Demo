import React, { useEffect, useState } from "react";
import "./MediaOptions.scss";
import Tabination from "../../ReusableComponent/Tabination/Tabination";
import thumbnail from "../../../assets/images/thumbnail.png";
import LoaderOverlap from "../../ReusableComponent/LoaderOverlap/LoaderOverlap";

function MediaOptions() {
  const [activeNav, setActiveNav] = useState(0);
  const chartingNavs = [
    { value: 0, name: "Market Insight" },
    { value: 1, name: "Social Media Content" },
    { value: 2, name: "In The Press" },
  ];

  const mediaData = {
    marketInsight: [
      "https://www.youtube.com/embed/9_7o0z9ODzo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=1",
      "https://www.youtube.com/embed/J9-7s0WYKI4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=3",
      "https://www.youtube.com/embed/4Wg-i9MuqfY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=5",
      "https://www.youtube.com/embed/bIyocfCQbjE?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=7",
      "https://www.youtube.com/embed/xumhzUPsclg?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=9",
    ],

    alphaSocials: [
      "https://www.youtube.com/embed/CpgxdRkkPJ4?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=21",
      "https://www.youtube.com/embed/BpNO-MUxEAU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=23",
      "https://www.youtube.com/embed/8MqVyM8D9JU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=25",
      "https://www.youtube.com/embed/ywEhV0oqTBc?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=27",
      "https://www.youtube.com/embed/oRkQ4YEzEk0?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=29",
      "https://www.youtube.com/embed/VFVF-wL6Smo?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=31",
    ],
    education: [
      "https://www.youtube.com/embed/VzRbzJXg7p8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=45",
      "https://www.youtube.com/embed/-Rs4yyy6Uus?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=47",
      "https://www.youtube.com/embed/eoJOjYC28k8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=49",
      "https://www.youtube.com/embed/a3T-09KeJNc?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=51",
      "https://www.youtube.com/embed/5oIZLww2DO8?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=53",
      "https://www.youtube.com/embed/Wchx17KgTHY?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=55",
    ],
  };

  const getMediaByTab = () => {
    switch (activeNav) {
      case 0:
        return mediaData.marketInsight;
      case 1:
        return mediaData.alphaSocials;
      case 2:
        return mediaData.education;
      default:
        return [];
    }
  };
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <div className="mo_wrapper">
      {loading && <LoaderOverlap />}
      <Tabination
        variant={2}
        tabItems={chartingNavs}
        activeTab={activeNav}
        setActiveTab={setActiveNav}
      />

      <div className="mo_videos">
        {getMediaByTab().map((item, index) => (
          <div className="videoBox" key={index}>
            <iframe
              className="videosFrame"
              src={item}
              title={`video-${index}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              onLoad={handleIframeLoad}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaOptions;
