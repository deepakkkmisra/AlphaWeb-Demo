import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Using React Router
import "./Navbar.scss";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.svg";
import arrowIcon from "../../assets/icons/downArrow.svg";
import crossIcon from "../../assets/icons/crossIcon.svg";
import { ReactComponent as DropDownArrow } from "../../assets/icons/dropDownIcon.svg";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const navItems = [
    {
      key: "how-it-works",
      name: "How it works",
      path: "/how-it-works",
      subpages: [
        {
          key: "trading-objectives",
          name: "Trading Objective",
          path: "/#TestYourSkills",
        },
        {
          key: "evaluation-process",
          name: "Evaluation Process",
          path: "/#evaluations",
        },
      ],
    },
    {
      key: "trading",
      name: "Trading",
      path: null,
      subpages: [
        { key: "platform", name: "Platforms", path: "/platforms/" },
        {
          key: "trading-tools",
          name: "Trading Tools",
          path: "/trading-tools-page/",
        },
        { key: "symbols", name: "Symbols", path: "/symbols/" },
        {
          key: "careers",
          name: "Economic Calendar",
          path: "/economic-calendar/",
        },
        {
          key: "leaderboard",
          name: "Leaderboard",
          path: "/leaderboard/",
        },
      ],
    },
    {
      key: "about-us",
      name: "About us",
      path: "/about/",
      subpages: [],
    },
    {
      key: "learn",
      name: "Learn",
      path: null,
      subpages: [
        { key: "blog", name: "Blogs", path: "/blogs" },
        {
          key: "Youtube",
          name: "Trader Interviews",
          path: "/trader-interviews",
        },
        { key: "events", name: "Events", path: "/events" },
        { key: "media", name: "Media", path: "/media" },
        { key: "community", name: "Community", path: "/community" },
      ],
    },
    {
      key: "help-center",
      name: "Help Center",
      path: null,
      subpages: [
        {
          key: "faq",
          name: "FAQ",
          path: "https://help.alphacapitalgroup.uk/en/?_gl=1*x4tgli*_gcl_au*NDcwMTAyODYzLjE3MzMyMDY0MzAuMTIyMTEwNTYwOS4xNzM0OTQ5NDIyLjE3MzQ5NDk0MjI.",
        },

        { key: "contact-us", name: "Contact Us", path: "/contact-us/" },
        { key: "careers", name: "Careers", path: "/careers/" },
      ],
    },
  ];

  useEffect(() => {
    const activeMenu = navItems.find((item) =>
      item.subpages.some((sub) => sub.path === location.pathname)
    );
    if (activeMenu) {
      setActiveItem(activeMenu.key);
    }
  }, [location.pathname]);

  const handleNavClick = (item) => {
    if (item.path?.startsWith("/#")) {
      const basePath = item.path.split('#')[0]; 
      navigate(basePath); 
  
      const anchorId = item.path.replace("/#", "");
  
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.error(`Element with id '${anchorId}' not found.`);
        }
      }, 500);
    } else if (item.path) {
      // For regular links, navigate normally
      navigate(item.path);
      setIsMobileMenu(false);
      setActiveSubMenu(false);
    } else if (item.subpages.length > 0) {
      // Toggle the submenu if the item has subpages
      setActiveItem((key) => (key === item.key ? null : item.key));
    } else {
      setActiveItem(null);
    }
  };
  

  const handleMobileMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  const handleMouseEnter = (item) => {
    if (item.subpages.length > 0 && activeItem !== item.key) {
      setActiveItem(item.key);
    }
  };

  const handleSubpageClick = (subpage) => {
    const anchorId = subpage.path.replace("/#", ""); 
    const element = document.getElementById(anchorId);
  
    // If you're already on the correct page
    if (location.pathname === "/how-it-works" && element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (subpage.path.startsWith("/#")) {
      // If you're on a different page, navigate to `/how-it-works` first
      navigate("/how-it-works"); // Go to the base path
  
      // Wait for the page to load, then scroll
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); 
    } else {
      // Regular navigation if the path doesn't have a hash
      navigate(subpage.path);
    }
  };
  
  

  const handleMobileMenuSelection = (item) => {
    if (item.path) {
      navigate(item.path);
      setIsMobileMenu(false);
      setActiveSubMenu(false);
    } else if (item.subpages.length > 0) {
      setActiveSubMenu((key) => (key === item.key ? null : item.key));
    }
  };

  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenu]);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  const handleReadMore = () => {
    navigate(`/`);
  };

  return (
    <>
      <div className="Navbar_Section">
        <div className="nav_wrapper">
          <div className="companyTitle" onClick={handleReadMore}>
            <h3>Alpha </h3>
            <span>Capital</span>
          </div>
          <div className="navbar_options">
            <ul>
              {navItems.map((item) => (
                <li
                  key={item.key}
                  onMouseEnter={() => handleMouseEnter(item)}
                  onClick={() => handleNavClick(item)}
                  className={`${activeItem === item.key ? "active" : ""} ${
                    item.subpages.length > 0 && activeItem === item.key
                      ? "submenu-open"
                      : ""
                  }`}
                >
                  {item.name}{" "}
                  {item.subpages.length > 0 ? (
                    <span style={{ marginLeft: "5px" }}>
                      <img src={arrowIcon} alt="" />
                    </span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="button_div">
            <button
              className="gradientButton_small"
              onClick={() => {
                handleRedirect("https://app.alphacapitalgroup.uk/");
              }}
            >
              Client Area
            </button>
          </div>

          <div className="hamburger_menu">
            <img src={hamburgerIcon} onClick={handleMobileMenu} alt="" />

            <div
              className={`mobileMenu ${
                isMobileMenu === true ? "openMobileMenu" : "closeMobileMenu"
              }`}
            >
              <div className="itemWrapper">
                <div className="closeIcon">
                  <img
                    src={crossIcon}
                    alt=""
                    className="crossIconSvg"
                    onClick={handleMobileMenu}
                  />
                </div>

                <div className="itemListWrapper">
                  {navItems.map((item, index) => {
                    return (
                      <div className="mobileItems" key={index}>
                        <div className="menuOption">
                          <p
                            className="itemsHeader"
                            onClick={() => handleMobileMenuSelection(item)}
                          >
                            {item.name}
                            {item.subpages.length > 0 && index > 0 && (
                              <DropDownArrow />
                            )}
                          </p>

                          {item.subpages.length > 0 && index > 0 && (
                            <div className={`subMenuOption`}>
                              {item.subpages.length > 0 &&
                                activeSubMenu === item.key && (
                                  <div className="subMenuOption openSubMenu">
                                    {item.subpages.map((subItem) => (
                                      <p
                                        key={subItem.key}
                                        onClick={() => handleNavClick(subItem)}
                                        className="Optionheader"
                                      >
                                        {subItem.name}
                                      </p>
                                    ))}
                                  </div>
                                )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <div className="clientArea itemsHeader">
                    <p
                      onClick={() => {
                        handleRedirect("https://app.alphacapitalgroup.uk/");
                      }}
                    >
                      Client Area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onMouseLeave={() => setActiveItem(null)}
        className={`subpages_Section ${activeItem ? "open" : "hidden"}`}
      >
        {activeItem &&
          navItems
            .find((item) => item.key === activeItem)
            ?.subpages.map((subpage) => (
              <div
                key={subpage.key}
                className={`subpage_item ${
                  location.pathname === subpage.path ? "active" : ""
                }`}
                onClick={() => handleSubpageClick(subpage)}
              >
                {subpage.path.startsWith("http") ? (
                  <a
                    href={subpage.path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {subpage.name}
                  </a>
                ) : (
                  <a>{subpage.name}</a>
                )}
              </div>
            ))}
      </div>
    </>
  );
};

export default Navbar;