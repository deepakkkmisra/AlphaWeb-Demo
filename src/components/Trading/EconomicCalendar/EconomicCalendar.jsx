import React, { useEffect, useState } from "react";
import "./EconomicCalendar.scss";
import LoaderOverlap from "../../ReusableComponent/LoaderOverlap/LoaderOverlap";

const EconomicCalendar = () => {
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
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="economicCalendarMainWrapper">
      {loading && <LoaderOverlap />}
      <div className="economicCalendarTopSection">
        <p>ECONOMIC CALENDAR</p>
        <div className="economicCalendarTitleSection">
          <h3>
            Economic <span> Calendar</span>
          </h3>
          <p className="economicCalendarInfo">
            Track key economic events and data releases in real-time with our
            Economic Calendar. From central bank announcements to GDP reports,
            stay ahead of the markets and make informed trading decisions
            confidently
          </p>
        </div>
      </div>
      <div className="calendarSection">
        <iframe
          title="Economic Calendar"
          name="Economic Calendar"
          src={
            "https://eia.autochartist.com/calendar/?broker_id=826&showall=true&nextdays=3&token=cfb475144d58ecf67e915f58b0ffbb27&expire=1748815200&user=Alpha-Capital-Group&locale=en#/calendar"
          }
          id="CalendarWidget"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ backgroundColor: "#FFFFFF" }}
          onLoad={handleIframeLoad}
        ></iframe>
      </div>
    </div>
  );
};

export default EconomicCalendar;
