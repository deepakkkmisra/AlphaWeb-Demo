import React from "react";
import './Globe.scss'
import globeImg from '../../../assets/images/globe.png'

function Globe() {
  return (
    <div className="gb_wrapper">
        <div className="gb_intro">
            <h1>Alpha Analysts Across the Globe</h1>
            <p>Our Alpha Analysts are making their mark on every continent, trading from almost every corner of the world.</p>
        </div>

        <div className="gb_img">
          <img src={globeImg} alt="" />
        </div>
    </div>
  );
}

export default Globe;
