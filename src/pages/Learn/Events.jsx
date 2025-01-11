import React, { useEffect } from "react";
import "./Events.scss";
import VideoGallery from "../../components/LearnComp/Events/VideoGallery";
import Highlights from "../../components/LearnComp/Events/Highlights";
import Register from "../../components/LearnComp/Events/Register";

function Events() {
  const eventData = [
    {
      name: "Casino Royal Event",
      desc: "The Alpha Capital Casino Royale Event was a dynamic evening where the world of trading truly came to life. The event featured exclusive interviews with professional traders, insightful talks from the Alpha Capital team, and valuable insights from our guests. Traders and finance enthusiasts gathered for an unforgettable night of networking, learning, and in-depth discussions on the latest trends in trading. Watch the highlights and experience the energy of this remarkable event.",
      video:
        "https://www.youtube.com/embed/pm5mX_P7M7M?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=3",
    },
    {
      name: " F1 Arcade Event",
      desc: "The Formula 1 Arcade was a thrilling day where Alpha Analysts came together to network and compete in an exciting race to claim the top spot. Held at London’s iconic Formula 1 Arcade, participants had the chance to virtually drive F1 cars and test their racing skills on the go-kart RK game. The event was filled with high-energy competition, valuable networking opportunities, and some incredible prizes. It was a day where trading strategies took a backseat and our analysts raced it out for bragging rights and exclusive rewards.",
      video:
        "https://www.youtube.com/embed/gfag4KMQAao?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falphacapitalgroup.uk&widgetid=5",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="events_wrapper">
      <div className="events_intro">
        <span className="intro_head">Events</span>
        <h1>
          Alpha Capital’s <span className="gradientText">Events </span>
        </h1>
        <p>
          Step into the world of Alpha Capital events, where traders,
          enthusiasts, and analysts gather to connect, engage, and grow. Each
          event offers a unique chance to broaden your network in the trading
          industry. Don’t miss out on our next event.
        </p>
      </div>
      <div className="eventDataContainer">
        {eventData.map((event, index) => (
          <div className="eventData" key={index}>
            <div className="eventInfo">
              <h2>{event.name}</h2>
              <p>{event.desc}</p>
            </div>
            <div className="eventVideo">
              <iframe
                title={event.name}
                src={event.video}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <Register />
    </div>
  );
}

export default Events;
