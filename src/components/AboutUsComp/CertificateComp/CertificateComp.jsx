import React from "react";
import "./CertificateComp.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import achievementCert from "../../../assets/images/achievementCert.png";
import congratulationCert from "../../../assets/images/congratulationsCert.png";
import lifetimePayoutCert from "../../../assets/images/lifetimePayoutCert.png";
const CertificateComp = () => {
  return (
    <div className="certificateCompContainer">
      <div className="certificateCompWrapper">
        <div className="certificateSection">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              gap: "2rem",
              autoplay: true,
              perMove: 1,
              arrows: true,
              drag: true,
              focus: "center",
              breakpoints: {
                1024: {
                  perPage: 2,
                },
                768: {
                  perPage: 1,
                },
                480: {
                  gap: "2rem",
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <img src={achievementCert} alt="certificate_img" />
            </SplideSlide>
            <SplideSlide>
              <img src={lifetimePayoutCert} alt="certificate_img" />
            </SplideSlide>
            <SplideSlide>
              <img src={congratulationCert} alt="certificate_img" />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default CertificateComp;
