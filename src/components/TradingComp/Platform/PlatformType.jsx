import React from "react";
import "./PlatformType.scss";
import tickIcon from "../../../assets/icons/tick-circle.svg";
import metaImg from "../../../assets/images/meta-trader.png";
import windowsIcon from "../../../assets/icons/windows.svg";
import androidIcon from "../../../assets/icons/android.svg";
import webIcon from "../../../assets/icons/web.svg";
import appleIcon from "../../../assets/icons/apple.svg";

function PlatformType({ platform, reverse }) {
  console.log(platform);
  return (
    <div className={`pt_wrapper ${reverse ? "platform_reverse" : ""}`}>
      <div className="pt_left">
        <div>
          <h1>{platform?.type}</h1>
          <p>{platform?.desc}</p>
        </div>
        <div className="pt_list">
          <h3>Key Features</h3>
          <div className="pt_list_items">
            {platform?.list.map((feature, idx) => (
              <span key={idx}>
                <img src={tickIcon} alt="tick" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt_right">
        <div className="img_wrapper">
          {platform.image && <img src={platform.image} alt={platform.type} />}
        </div>
        <div className="download_btns_wrapper">
          <h2>Download {platform.type} for:</h2>
          <div className="btns">
            {platform?.type === "Alpha Trader" ? (
              <button>
                <img src={windowsIcon} alt="Windows" />
                Coming soon
              </button>
            ) : (
              <>
                {platform.links[0] && (
                  <>
                    {platform.links[0].windows && (
                      <a
                        href={platform.links[0].windows}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <img src={windowsIcon} alt="Windows" />
                          Windows
                        </button>
                      </a>
                    )}

                    {platform.links[0].macos && (
                      <a
                        href={platform.links[0].macos}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <img src={appleIcon} alt="MacOS" />
                          MacOS
                        </button>
                      </a>
                    )}

                    {platform.links[0].android && (
                      <a
                        href={platform.links[0].android}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <img src={androidIcon} alt="Android" />
                          Android
                        </button>
                      </a>
                    )}

                    {platform.links[0].web && (
                      <a
                        href={platform.links[0].web}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <img src={webIcon} alt="Web Browser" />
                          Web Browser
                        </button>
                      </a>
                    )}
                    {platform.links[0].ios && (
                      <a
                        href={platform.links[0].ios}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button>
                          <img src={appleIcon} alt="MacOS" />
                          iOS
                        </button>
                      </a>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatformType;
