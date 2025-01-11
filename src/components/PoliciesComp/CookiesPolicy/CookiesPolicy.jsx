import React, { useEffect } from "react";
import "./CookiesPolicy.scss";

const CookiesPolicy = () => {
  const cookiesData = {
    cookies: [
      {
        category: "Performance",
        cookiesList: [
          {
            name: "_ga",
            domain: "alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 year 1 month",
            description:
              "Associated with Google Universal Analytics. Distinguishes users by assigning a random ID. Helps in analytics reports.",
          },
          {
            name: "_ga_077MT27561",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 year 1 month",
            description: "Used by Google Analytics to maintain session state.",
          },
          {
            name: "_ga_NLS6ZRHJJL",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 year 1 month",
            description: "Used by Google Analytics to maintain session state.",
          },
        ],
      },
      {
        category: "Targeting",
        cookiesList: [
          {
            name: "MR",
            domain: ".c.bing.com",
            type: "Third-party",
            expiration: "7 days",
            description: "Microsoft MSN cookie used for internal analytics.",
          },
          {
            name: "_gcl_au",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "3 months",
            description:
              "Used by Google AdSense to experiment with advertisement efficiency across websites.",
          },
          {
            name: "CLID",
            domain: "www.clarity.ms",
            type: "Third-party",
            expiration: "1 year",
            description:
              "Set by Dstillery for sharing content to social media and gathering related visitor information.",
          },
          {
            name: "MUID",
            domain: ".clarity.ms",
            type: "Third-party",
            expiration: "1 year",
            description:
              "Microsoft’s unique user identifier, believed to sync across various Microsoft domains.",
          },
          {
            name: "MR",
            domain: ".c.clarity.ms",
            type: "Third-party",
            expiration: "7 days",
            description: "Microsoft MSN cookie used for internal analytics.",
          },
          {
            name: "_fbp",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "3 months",
            description:
              "Used by Meta to deliver advertisement products such as real-time bidding from third-party advertisers.",
          },
          {
            name: "SRM_B",
            domain: ".c.bing.com",
            type: "Third-party",
            expiration: "1 year",
            description:
              "Microsoft MSN cookie ensuring the proper functioning of the website.",
          },
          {
            name: "test_cookie",
            domain: ".doubleclick.net",
            type: "Third-party",
            expiration: "15 minutes",
            description:
              "Set by DoubleClick (owned by Google) to determine browser cookie support.",
          },
          {
            name: "ANONCHK",
            domain: ".c.clarity.ms",
            type: "Third-party",
            expiration: "10 minutes",
            description:
              "Provides information about user website interactions and previous advertising exposure.",
          },
          {
            name: "IDE",
            domain: ".doubleclick.net",
            type: "Third-party",
            expiration: "1 year",
            description:
              "Set by DoubleClick, provides information about user website interactions and previous advertising exposure.",
          },
          {
            name: "SM",
            domain: ".c.clarity.ms",
            type: "Third-party",
            expiration: "Session",
            description: "Microsoft MSN cookie used for internal analytics.",
          },
          {
            name: "YSC",
            domain: ".youtube.com",
            type: "Third-party",
            expiration: "Session",
            description: "Set by YouTube to track views of embedded videos.",
          },
          {
            name: "VISITOR_INFO1_LIVE",
            domain: ".youtube.com",
            type: "Third-party",
            expiration: "6 months",
            description:
              "Set by YouTube to track user preferences for embedded videos; identifies the YouTube interface version in use.",
          },
          {
            name: "MUID",
            domain: ".bing.com",
            type: "Third-party",
            expiration: "1 year",
            description:
              "Microsoft’s unique user identifier, believed to sync across various Microsoft domains.",
          },
        ],
      },
      {
        category: "Unclassified",
        cookiesList: [
          {
            name: "__mh_tt_s",
            domain: "186072.t.hyros.com",
            type: "Third-party",
            expiration: "1 year 1 month",
            description:
              "Hyros. We use this cookie to gather analytics on how you may use all of our social media platforms to return to our site.",
          },
          {
            name: "mp_*_mixpanel",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 year",
            description:
              "Mixpanel. Used to identify individual users. This tool is used to measure site performance and usage patterns. Unique strings replace the * in the cookie name. For statistical purposes.",
          },
          {
            name: "_clck",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 year",
            description: "To store a unique user ID. For marketing purposes.",
          },
          {
            name: "_clsk",
            domain: ".alphacapitalgroup.uk",
            type: "First-party",
            expiration: "1 day",
            description:
              "Microsoft Clarity. To store and combine pageviews by a user into a single session recording. For statistical purposes.",
          },
          {
            name: "_fontstore_key",
            domain: "api.fontshare.com",
            type: "Third-party",
            expiration: "Session",
            description: "api.fontshare.com. For the website’s font.",
          },
          {
            cookieName: "recent_write",
            domain: "help.alphacapitalgroup.uk",
            type: "First-party",
            expiration: "Session",
            description: "This cookie is used to alert users of help updates.",
          },
        ],
      },
    ],
  };
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cookiePoliciesMainWrapper">
      <div className="cookiePoliciesWrapper">
        <div className="headerSection">
          <div className="cookiePolicyHeader">
            <h3>Cookie Policy</h3>
            <p>
              Please read this policy carefully before using the Sites or
              interacting with us. It contains our privacy and cookie policy.
            </p>
          </div>
        </div>
        <div className="cookieInformation">
          <h3>Legal Information</h3>
          <p className="policyDetails">
            We are Alpha Capital Group Limited (company number 13719951), a
            limited company incorporated in England & Wales, whose registered
            office address is at 10 Lower Thames Street, Billingsgate, London,
            England, EC3R 6AF (‘Company,’ ‘we,’ ‘us,’ or ‘our’).
          </p>
          <p className="policyDetails">
            Website:{" "}
            <span
              className="websiteLink"
              onClick={() => handleRedirect("https://alphacapitalgroup.uk/")}
            >
              https://alphacapitalgroup.uk/
            </span>{" "}
            (‘Website’)
          </p>
        </div>
        <div className="cookieInformation">
          <h3>Introduction</h3>
          <p className="policyDetails">
            We respect your privacy and are committed to protecting your
            personal data. Please see our Privacy Policy (available here:
            https://alphacapitalgroup.uk/privacy-policy/) for more information
            about how we look after your personal data, your privacy rights and
            how the law protects you. Capitalised terms not defined in this
            policy have the meaning given to them in the Privacy Policy.
          </p>
          <p className="policyDetails">
            We use Sites to provide our products and services, including the
            following (collectively, the “Sites”): our Website and, if
            applicable, its subdomains and app, and third party Sites, for
            example platforms, websites, apps, including social media sites.
          </p>

          <div className="policyDetailGroup">
            <ul className="importantPolicyDetails">
              <li className="policyDetails">
                Important information and who we are
              </li>
              <li className="policyDetails">
                How your personal data is collected using cookies <br />
                Important information and who we are <br /> Controller
              </li>
            </ul>
            <p className="policyDetails ">
              The Company described in the Legal Information is the controller
              and responsible for your personal data (collectively referred to
              as “Company”, “we“, “us” or “our” in this policy). We have
              appointed a data privacy manager who is responsible for overseeing
              questions in relation to this cookie policy. If you have any
              questions about this cookie policy, including any requests to
              exercise your legal rights, please contact the data privacy
              manager using the details set out below.
            </p>
          </div>
          <p className="policyDetails">Contact Details</p>
          <p className="policyDetails">
            If you have any questions about this cookie policy or our privacy
            practices, please contact our data privacy manager using the Contact
            Details in the Legal Information.
          </p>
          <p className="policyDetails">Complaints</p>
          <p className="policyDetails">
            You have the right to make a complaint at any time to the
            Information Commissioner’s Office (ICO), the UK regulator for data
            protection issues
          </p>
          <p className="policyDetails">
            (www.ico.org.uk). We would, however, appreciate the chance to deal
            with your concerns before you approach the ICO so please contact us
            in the first instance.
          </p>
        </div>

        <div className="changesCookiePolicy changePolicy">
          <p className="cookieInformation">
            Changes to the cookie policy and your duty to inform us of changes
          </p>
          <p className="cookieInformation">
            We keep this policy under regular review. We reserve the right to
            change it at any time without notice and we encourage you to read it
            periodically to ensure that you are at all times fully aware of it.
            Any changes are effective immediately upon posting to our Website or
            written notice to you.
          </p>
          <p className="cookieInformation">
            This version was last updated on Update Date first mentioned above.
            It is important that the personal data we hold about you is accurate
            and current. Please keep us informed if your personal data changes
            during your relationship with us.
          </p>
        </div>

        <div className="changesCookiePolicy personalData">
          <p className="cookieInformation questionRelatedCookies">
            How your personal data is collected using cookies
          </p>
          <p className="cookieInformation">
            <p>
              <span className="highlightedText">
                Automated technologies or interactions.
              </span>{" "}
              As you interact with our Website, or certain other Sites such as
              landing pages that are not on our Website, we will automatically
              collect Technical Data about your equipment, browsing actions and
              patterns. We collect this personal data by using cookies, server
              logs and other similar technologies. We may also receive Technical
              Data about you if you visit other Websites employing our cookies.
              Please see our cookie policy below for further details.
            </p>
          </p>
          <p className="cookieInformation technicalData">
            <p>
              <span className="highlightedText">Technical Data </span>includes
              internet protocol (IP) address, your login data, browser type and
              version, time zone setting and location, browser plug-in types and
              versions, operating system and platform, and other technology on
              the devices you use to access this Website.
            </p>
          </p>
        </div>

        <div className="changesCookiePolicy ourCookiesSection">
          <p className="cookieInformation underlineText ">Cookies</p>
          <p className="cookieInformation">
            Our Website uses cookies to distinguish you from other users of our
            Website. This helps us to provide you with a good experience when
            you browse our Website and also allows us to improve our Website. We
            use the cookies set out in the information at the end of this
            section. A cookie is a small file of letters and numbers that we
            store on your browser or the hard drive of your computer if you
            agree. Cookies contain information that is transferred to your
            computer’s hard drive.
          </p>
        </div>
        <div className="changesCookiePolicy cookiesGroupSection ">
          <p className="cookieInformation underlineText">Our cookies</p>
          <p className="cookieInformation">We may use the following cookies:</p>

          <p className="cookieInformation">
            <p>
              –
              <span className="highlightedText">
                Strictly necessary cookies.
              </span>{" "}
              These are cookies that are required for the operation of our
              Website. They include, for example, cookies that enable you to log
              into secure areas of our Website, use a shopping cart or make use
              of e-billing services.
            </p>
          </p>

          <p className="cookieInformation">
            <p>
              –{" "}
              <span className="highlightedText">
                Analytical or performance cookies.
              </span>{" "}
              These allow us to recognise and count the number of visitors and
              to see how visitors move around our Website when they are using
              it. This helps us to improve the way our Website works, for
              example, by ensuring that users are finding what they are looking
              for easily.
            </p>
          </p>
          <p className="cookieInformation">
            <p>
              – <span className="highlightedText">Functionality cookies.</span>{" "}
              These are used to recognise you when you return to our Website.
              This enables us to personalise our content for you, greet you by
              name and remember your preferences (for example, your choice of
              language or region).
            </p>
          </p>
          <p className="cookieInformation">
            <p>
              – <span className="highlightedText">Targeting cookies.</span>{" "}
              These cookies record your visit to our Website, the pages you have
              visited and the links you have followed. We will use this
              information to make our Website and the advertising displayed on
              it more relevant to your interests. We may also share this
              information with third parties for this purpose.
            </p>
          </p>
        </div>

        <div className="changesCookiePolicy thirdParty">
          <p className="cookieInformation underlineText  ">
            Third party cookies
          </p>
          <p className="cookieInformation">
            Please note that the third parties listed in the Legal Information
            or notified to you may also use cookies, over which we have no
            control. These named third parties may include, for example,
            advertising networks and providers of external services like web
            traffic analysis services. These third party cookies are likely to
            be analytical cookies, performance cookies or targeting cookies.
          </p>
        </div>

        <div className="changesCookiePolicy cookieControlWrapper">
          <p className="cookieInformation cookieControl">Cookie controls</p>
          <p className="cookieInformation">
            To change your cookie settings, deactivate or block our cookies or
            the use of third party advertising cookies, please see below. You
            can choose which analytical, functionality and targeting cookies you
            accept by adjusting your settings via our cookie settings widget on
            your screen. You can do this by adjusting the sliders to opt in or
            out of the cookie categories. To save your changes, scroll to the
            bottom and click on the save button. If you cannot see the save
            button, you may be using a blocker to prevent the setting of
            cookies.
          </p>
        </div>
        <div className="changesCookiePolicy browserCookie ">
          <p className="cookieInformation underlineText ">
            Browser cookie controls
          </p>
          <p className="cookieInformation">
            You can block cookies by activating the setting on your browser that
            allows you to refuse the setting of all or some cookies. However, if
            you use your browser settings to block all cookies (including
            essential cookies) you may not be able to access all or parts of our
            Website.
          </p>
        </div>

        <div className="changesCookiePolicy blockCookies">
          <p className="cookieInformation">
            Information about how to configure your browser to block cookies can
            be found at:
          </p>
          <ul>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect("https://support.google.com/chrome/answer/95647")
              }
            >
              – Google Chrome
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect(
                  "https://support.microsoft.com/en-us/search?query=enable%20cookies%20in%20edge"
                )
              }
            >
              – Microsoft Edge
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect(
                  "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d"
                )
              }
            >
              – Internet Explorer
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect(
                  "https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox"
                )
              }
            >
              – Firefox
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect(
                  "https://support.apple.com/en-gb/guide/safari/ibrw850f6c51/mac"
                )
              }
            >
              – Safari
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect("https://support.apple.com/en-us/105082")
              }
            >
              – Safari Mobile
            </li>
            <li
              className="cookieInformation websiteLink"
              onClick={() =>
                handleRedirect(
                  "https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
                )
              }
            >
              – Opera
            </li>
          </ul>
        </div>

        <div className="changesCookiePolicy googleAnalytics">
          <p className="cookieInformation">
            <p>
              If you prefer to not have data reported by Google Analytics, you
              can install the Google Analytics Opt-Out Browser Add-On by
              following the instructions
              <span
                className="websiteLink linkHere"
                onClick={() =>
                  handleRedirect(
                    "https://support.google.com/analytics/answer/181881?hl=en"
                  )
                }
              >
                here
              </span>
              .
            </p>
          </p>
          <p className="cookieInformation">
            You can find out how to opt out of Google’s use of tracking
            technologies via the Google advertising opt-out page here.
          </p>
        </div>

        <div className="changesCookiePolicy advertisingSection">
          <p className="cookieInformation cookiesTitle">Advertising</p>
          <p className="cookieInformation">
            To learn more about adverts which are displayed to you whilst you
            are online, please consult the applicable site’s privacy and cookie
            policy on which you see our ads.
          </p>
          <p className="cookieInformation">
            The advertising companies we work with generally use cookies and
            similar technologies as part of their services. To learn more about
            how advertisers generally use cookies and the choices they offer,
            you can review the following resources:
          </p>
          <div className="advertisingAlliance">
            <p
              className="cookieInformation websiteLink "
              onClick={() =>
                handleRedirect("https://optout.aboutads.info/?c=2&lang=EN")
              }
            >
              – Digital Advertising Alliance
            </p>
            <p
              className="cookieInformation websiteLink"
              onClick={() => handleRedirect("https://youronlinechoices.eu/")}
            >
              – European Interactive Digital Advertising Alliance
            </p>
          </div>
        </div>

        <div className="changesCookiePolicy cookiesExpiry">
          <p className="cookieInformation underlineText ">Expiry of cookies</p>
          <p className="cookieInformation">
            The cookies will expire as set out below.
          </p>
        </div>
        <div className="changesCookiePolicy cookiesExpiry">
          <p className="cookieInformation underlineText ">
            More information about cookies
          </p>
          <p
            className="cookieInformation moreCookies  "
            style={{ display: "block" }}
          >
            You can find out more about cookies, including how to see what
            cookies have been set and how to manage and delete them by visiting
            <span
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
              className="websiteLink linkHere"
              onClick={() => handleRedirect("https://www.aboutcookies.org/")}
            >
              www.aboutcookies.org
            </span>
            or
            <span
              style={{ paddingLeft: "10px" }}
              className="websiteLink linkHere"
              onClick={() => handleRedirect("https://allaboutcookies.org/")}
            >
              www.allaboutcookies.org
            </span>
          </p>
        </div>

        <div className="changesCookiePolicy">
          <p className="cookieInformation underlineText">
            If we use cookies, you will find details about them here:
          </p>
        </div>

        {cookiesData.cookies.map((item, index) => {
          return (
            <div className="cookiesWrapper">
              <div className="cookiesSection" key={index}>
                <p className="cookiesTitle">{item.category}</p>
                <div className="wrapper">
                  {item.cookiesList.map((item, index) => {
                    return (
                      <div className="cookiesDetails">
                        <p>Cookie Name: {item.name}</p>
                        <p>Domain: {item.domain}</p>
                        <p>Type: {item.type}</p>
                        <p>Expiration: {item.expiration}</p>
                        <p>Description: {item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CookiesPolicy;
