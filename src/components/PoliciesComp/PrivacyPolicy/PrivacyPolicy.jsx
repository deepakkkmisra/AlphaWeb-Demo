import React, { useEffect, useRef } from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
    section13: useRef(null),
  };

  const handleScrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="privacyPolicyContainer">
      <div className="privacyPolicyWrapper">
        <div className="headerSection">
          <h3>Privacy Policy</h3>
        </div>
        <div className="privacyPoliciesDetail">
          <p>
            Thank you for choosing to be part of our community at Alpha Capital
            Group Limited (“Company,” “we,” “us,” or “our”). We are committed to
            protecting your personal information and your right to privacy. If
            you have any questions or concerns about this privacy notice or our
            practices with regard to your personal information, please contact
            us at accounts@alphacapitalgroup.uk
          </p>
        </div>
        <div className="websiteInfo">
          <p>
            This privacy notice describes how we might use your information if
            you:
          </p>
          <p>Visit our website at http://www.alphacapitalgroup.uk</p>
          <p>
            Engage with us in other related ways ― including any sales,
            marketing, or events
          </p>
        </div>
        <div className="referingDetails">
          <p>In this privacy notice, if we refer to:</p>
          <p>
            “Website,” we are referring to any website of ours that references
            or links to this policy
          </p>
        </div>
        <div className="servicesSection">
          <p>
            “Services,” we are referring to our Website, and other related
            services, including any sales, marketing, or events
          </p>
        </div>

        <div className="privacyPoliciesDetail">
          <p>
            The purpose of this privacy notice is to explain to you in the
            clearest way possible what information we collect, how we use it,
            and what rights you have in relation to it. If there are any terms
            in this privacy notice that you do not agree with, please
            discontinue use of our Services immediately.
          </p>
        </div>

        <div className="privacyNotice">
          <p>
            Please read this privacy notice carefully, as it will help you
            understand what we do with the information that we collect.
          </p>
          <ul className="questionsList">
            <li onClick={() => handleScrollToSection("section1")}>
              WHAT INFORMATION DO WE COLLECT?
            </li>
            <li onClick={() => handleScrollToSection("section2")}>
              HOW DO WE USE YOUR INFORMATION?
            </li>
            <li onClick={() => handleScrollToSection("section3")}>
              WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </li>
            <li onClick={() => handleScrollToSection("section4")}>
              WHO WILL YOUR INFORMATION BE SHARED WITH?
            </li>
            <li onClick={() => handleScrollToSection("section5")}>
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </li>
            <li onClick={() => handleScrollToSection("section6")}>
              HOW DO WE KEEP YOUR INFORMATION SAFE?
            </li>
            <li onClick={() => handleScrollToSection("section7")}>
              DO WE COLLECT INFORMATION FROM MINORS?
            </li>
            <li onClick={() => handleScrollToSection("section8")}>
              WHAT ARE YOUR PRIVACY RIGHTS?
            </li>
            <li onClick={() => handleScrollToSection("section9")}>
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </li>
            <li onClick={() => handleScrollToSection("section10")}>
              DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </li>
            <li onClick={() => handleScrollToSection("section11")}>
              DO WE MAKE UPDATES TO THIS NOTICE?
            </li>
            <li onClick={() => handleScrollToSection("section12")}>
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </li>
            <li onClick={() => handleScrollToSection("section13")}>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </ul>
          <div className="answersToTheQuestion" ref={sectionRefs.section1}>
            <p className="privacyQuestion">WHAT INFORMATION DO WE COLLECT?</p>
            <p className="privacyAnswer">
              Personal information you disclose to us
            </p>
            <p className="privacyAnswer">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="privacyAnswer">
              We collect personal information that you voluntarily provide to us
              when you register on the Website, express an interest in obtaining
              information about us or our products and Services, when you
              participate in activities on the Website or otherwise when you
              contact us.
            </p>
            <p className="privacyAnswer">
              The personal information that we collect depends on the context of
              your interactions with us and the Website, the choices you make
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <p className="privacyAnswer">
              Personal Information Provided by You. We collect names; phone
              numbers; email addresses; mailing addresses; contact preferences;
              and other similar information.
            </p>
            <p className="privacyAnswer">
              Payment Data. We may collect data necessary to process your
              payment if you make purchases, such as your payment instrument
              number (such as a credit card number), and the security code
              associated with your payment instrument. All payment data is
              stored by Stripe . You may find their privacy notice link(s) here:
              https://stripe.com/gb/privacy.
            </p>
            <p className="privacyAnswer">
              All personal information that you provide to us must be true,
              complete and accurate, and you must notify us of any changes to
              such personal information.
            </p>
            <p className="privacyAnswer">Information automatically collected</p>
            <p className="privacyAnswer">
              In Short: Some information — such as your Internet Protocol (IP)
              address and/or browser and device characteristics — is collected
              automatically when you visit our Website.
            </p>
            <p className="privacyAnswer">
              We automatically collect certain information when you visit, use
              or navigate the Website. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Website and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Website, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="privacyAnswer">
              The information we collect includes:
            </p>
            <p className="privacyAnswer">
              Log and Usage Data. Log and usage data is service-related,
              diagnostic, usage and performance information our servers
              automatically collect when you access or use our Website and which
              we record in log files. Depending on how you interact with us,
              this log data may include your IP address, device information,
              browser type and settings and information about your activity in
              the Website (such as the date/time stamps associated with your
              usage, pages and files viewed, searches and other actions you take
              such as which features you use), device event information (such as
              system activity, error reports (sometimes called ‘crash dumps’)
              and hardware settings). Location Data. We collect location data
              such as information about your device’s location, which can be
              either precise or imprecise. How much information we collect
              depends on the type and settings of the device you use to access
              the Website. For example, we may use GPS and other technologies to
              collect geolocation data that tells us your current location
              (based on your IP address). You can opt out of allowing us to
              collect this information either by refusing access to the
              information or by disabling your Location setting on your device.
              Note however, if you choose to opt out, you may not be able to use
              certain aspects of the Services.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section2}>
            <p className="privacyQuestion">HOW DO WE USE YOUR INFORMATION?</p>
            <p className="privacyAnswer">
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent.
            </p>
            <p className="privacyAnswer">
              We use personal information collected via our Website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below.
            </p>
            <p className="privacyAnswer">
              We use the information we collect or receive:
            </p>
            <p className="privacyAnswer">
              To facilitate account creation and logon process. If you choose to
              link your account with us to a third-party account (such as your
              Google or Facebook account), we use the information you allowed us
              to collect from those third parties to facilitate account creation
              and logon process for the performance of the contract.
            </p>
            <p className="privacyAnswer">
              To post testimonials. We post testimonials on our Website that may
              contain personal information. Prior to posting a testimonial, we
              will obtain your consent to use your name and the content of the
              testimonial. If you wish to update, or delete your testimonial,
              please contact us at support@alphacapitalgroup.uk and be sure to
              include your name, testimonial location, and contact information.
              Request feedback. We may use your information to request feedback
              and to contact you about your use of our Website. To enable
              user-to-user communications. We may use your information in order
              to enable user-to- user communications with each user’s consent.
            </p>
            <p className="privacyAnswer">
              To manage user accounts. We may use your information for the
              purposes of managing our account and keeping it in working order.
              To send administrative information to you. We may use your
              personal information to send you product, service and new feature
              information and/or information about changes to our terms,
              conditions, and policies.
            </p>
            <p className="privacyAnswer">
              To protect our Services. We may use your information as part of
              our efforts to keep our Website safe and secure (for example, for
              fraud monitoring and prevention).
            </p>
            <p className="privacyAnswer">
              To enforce our terms, conditions and policies for business
              purposes, to comply with legal and regulatory requirements or in
              connection with our contract.
            </p>
            <p className="privacyAnswer">
              To respond to legal requests and prevent harm. If we receive a
              subpoena or other legal request, we may need to inspect the data
              we hold to determine how to respond.
            </p>
            <p className="privacyAnswer">
              Fulfill and manage your orders. We may use your information to
              fulfill and manage your orders, payments, returns, and exchanges
              made through the Website.
            </p>
            <p className="privacyAnswer">
              Administer prize draws and competitions. We may use your
              information to administer prize draws and competitions when you
              elect to participate in our competitions.
            </p>
            <p className="privacyAnswer">
              To deliver and facilitate delivery of services to the user. We may
              use your information to provide you with the requested service. To
              respond to user inquiries/offer support to users. We may use your
              information to respond to your inquiries and solve any potential
              issues you might have with the use of our Services.
            </p>
            <p className="privacyAnswer">
              To send you marketing and promotional communications. We and/or
              our third-party marketing partners may use the personal
              information you send to us for our marketing purposes, if this is
              in accordance with your marketing preferences. For example, when
              expressing an interest in obtaining information about us or our
              Website, subscribing to marketing or otherwise contacting us, we
              will collect personal information from you. You can opt-out of our
              marketing emails at any time (see the “WHAT ARE YOUR PRIVACY
              RIGHTS?” below).
            </p>
            <p className="privacyAnswer">
              Deliver targeted advertising to you. We may use your information
              to develop and display personalized content and advertising (and
              work with third parties who do so) tailored to your interests
              and/or location and to measure its effectiveness.
            </p>
            <p className="privacyAnswer">
              For other business purposes. We may use your information for other
              business purposes, such as data analysis, identifying usage
              trends, determining the effectiveness of our promotional campaigns
              and to evaluate and improve our Website, products, marketing and
              your experience. We may use and store this information in
              aggregated and anonymized form so that it is not associated with
              individual end users and does not include personal information.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section3}>
            <p className="privacyQuestion">
              WILL YOUR INFORMATION BE SHARED WITH ANYONE?
            </p>
            <p className="privacyAnswer">
              In Short: We only share information with your consent, to comply
              with laws, to provide you with services, to protect your rights,
              or to fulfill business obligations.
            </p>
            <p className="privacyAnswer">
              We may process or share your data that we hold based on the
              following legal basis:
            </p>
            <p className="privacyAnswer">
              Consent: We may process your data if you have given us specific
              consent to use your personal information for a specific purpose.
              Legitimate Interests: We may process your data when it is
              reasonably necessary to achieve our legitimate business interests.
              Performance of a Contract: Where we have entered into a contract
              with you, we may process your personal information to fulfill the
              terms of our contract.
            </p>
            <p className="privacyAnswer">
              Legal Obligations: We may disclose your information where we are
              legally required to do so in order to comply with applicable law,
              governmental requests, a judicial proceeding, court order, or
              legal process, such as in response to a court order or a subpoena
              (including in response to public authorities to meet national
              security or law enforcement requirements).
            </p>
            <p className="privacyAnswer">
              Vital Interests: We may disclose your information where we believe
              it is necessary to investigate, prevent, or take action regarding
              potential violations of our policies, suspected fraud, situations
              involving potential threats to the safety of any person and
              illegal activities, or as evidence in litigation in which we are
              involved.
              <p>
                More specifically, we may need to process your data or share
                your personal information in the following situations:
              </p>
            </p>
            <p className="privacyAnswer">
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company.
            </p>
            <p className="privacyAnswer">
              Vendors, Consultants and Other Third-Party Service Providers. We
              may share your data with third-party vendors, service providers,
              contractors or agents who perform services for us or on our behalf
              and require access to such information to do that work. Examples
              include: payment processing, data analysis, email delivery,
              hosting services, customer service and marketing efforts. We may
              allow selected third parties to use tracking technology on the
              Website, which will enable them to collect data on our behalf
              about how you interact with our Website over time. This
              information may be used to, among other things, analyze and track
              data, determine the popularity of certain content, pages or
              features, and better understand online activity. Unless described
              in this notice, we do not share, sell, rent or trade any of your
              information with third parties for their promotional purposes. We
              have contracts in place with our data processors, which are
              designed to help safeguard your personal information. This means
              that they cannot do anything with your personal information unless
              we have instructed them to do it. They will also not share your
              personal information with any organization apart from us. They
              also commit to protect the data they hold on our behalf and to
              retain it for the period we instruct.
            </p>
            <p className="privacyAnswer">
              Affiliates. We may share your information with our affiliates, in
              which case we will require those affiliates to honor this privacy
              notice. Affiliates include our parent company and any
              subsidiaries, joint venture partners or other companies that we
              control or that are under common control with us.
            </p>
            <p className="privacyAnswer">
              Business Partners. We may share your information with our business
              partners to offer you certain products, services or promotions.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section4}>
            <p className="privacyQuestion">
              WHO WILL YOUR INFORMATION BE SHARED WITH?
            </p>
            <p className="privacyAnswer">
              In Short: We only share information with the following categories
              of third parties.
            </p>

            <p className="privacyAnswer">
              We only share and disclose your information with the following
              categories of third parties. If we have processed your data based
              on your consent and you wish to revoke your consent, please
              contact us using the contact details provided in the section below
              titled “HOW CAN YOU CONTACT US ABOUT THIS NOTICE?”.
            </p>
            <p className="privacyAnswer">Payment Processors</p>
            <p className="privacyAnswer">Ad Networks</p>
            <p className="privacyAnswer">Data Analytics Services</p>
            <p className="privacyAnswer">Finance & Accounting Tools</p>
            <p className="privacyAnswer">Order Fulfillment Service Provider</p>
            <p className="privacyAnswer">
              User Account Registration & Authentication Services
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section5}>
            <p className="privacyQuestion">
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </p>
            <p className="privacyAnswer">
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy notice unless
              otherwise required by law.
            </p>

            <p className="privacyAnswer">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than six (6) months past the termination of the user’s
              account.
            </p>
            <p className="privacyAnswer">
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section6}>
            <p className="privacyQuestion">
              HOW DO WE KEEP YOUR INFORMATION SAFE?
            </p>
            <p className="privacyAnswer">
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures.
            </p>

            <p className="privacyAnswer">
              We have implemented appropriate technical and organizational
              security measures designed to protect the security of any personal
              information we process. However, despite our safeguards and
              efforts to secure your information, no electronic transmission
              over the Internet or information storage technology can be
              guaranteed to be 100% secure, so we cannot promise or guarantee
              that hackers, cybercriminals, or other unauthorized third parties
              will not be able to defeat our security, and improperly collect,
              access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of
              personal information to and from our Website is at your own risk.
              You should only access the Website within a secure environment.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section7}>
            <p className="privacyQuestion">
              DO WE COLLECT INFORMATION FROM MINORS?
            </p>
            <p className="privacyAnswer">
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age.
            </p>

            <p className="privacyAnswer">
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Website, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Website. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at
              support@alphacapitalgroup.uk
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section8}>
            <p className="privacyQuestion">WHAT ARE YOUR PRIVACY RIGHTS?</p>
            <p className="privacyAnswer">
              In Short: In some regions, such as the European Economic Area
              (EEA) and United Kingdom (UK), you have rights that allow you
              greater access to and control over your personal information. You
              may review, change, or terminate your account at any time.
            </p>

            <p className="privacyAnswer">
              In some regions (like the EEA and UK), you have certain rights
              under applicable data protection laws. These may include the right
              (i) to request access and obtain a copy of your personal
              information, (ii) to request rectification or erasure; (iii) to
              restrict the processing of your personal information; and (iv) if
              applicable, to data portability. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. To make such a request, please use the contact
              details provided below. We will consider and act upon any request
              in accordance with applicable data protection laws.
            </p>

            <p className="privacyAnswer">
              If we are relying on your consent to process your personal
              information, you have the right to withdraw your consent at any
              time. Please note however that this will not affect the lawfulness
              of the processing before its withdrawal, nor will it affect the
              processing of your personal information conducted in reliance on
              lawful processing grounds other than consent.
            </p>
            <p className="privacyAnswer">
              If you are a resident in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here:
              https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
            </p>
            <p className="privacyAnswer">
              If you are a resident in Switzerland, the contact details for the
              data protection authorities are available here:
              <p>https://www.edoeb.admin.ch/edoeb/en/home.html.</p>
            </p>
            <p className="privacyAnswer">
              If you have questions or comments about your privacy rights, you
              may email us at support@alphacapitalgroup.uk
            </p>
            <p className="privacyAnswer">Account Information</p>
            <p className="privacyAnswer">
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <p className="privacyAnswer">
              Contact us using the contact information provided.
              <p>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our Terms of Use and/or comply with
                applicable legal requirements.
              </p>
            </p>
            <p>
              Opting out of email marketing: You can unsubscribe from our
              marketing email list at any time by clicking on the unsubscribe
              link in the emails that we send or by contacting us using the
              details provided below. You will then be removed from the
              marketing email list — however, we may still communicate with you,
              for example to send you service-related emails that are necessary
              for the administration and use of your account, to respond to
              service requests, or for other non-marketing purposes. To
              otherwise opt-out, you may:
            </p>
            <p>Contact us using the contact information provided.</p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section9}>
            <p className="privacyQuestion">
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </p>
            <p className="privacyAnswer">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track (“DNT”) feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section10}>
            <p className="privacyQuestion">
              DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </p>
            <p className="privacyAnswer">
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information.
            </p>
            <p className="privacyAnswer">
              California Civil Code Section 1798.83, also known as the “Shine
              The Light” law, permits our users who are California residents to
              request and obtain from us, once a year and free of charge,
              information about categories of personal information (if any) we
              disclosed to third parties for direct marketing purposes and the
              names and addresses of all third parties with which we shared
              personal information in the immediately preceding calendar year.
              If you are a California resident and would like to make such a
              request, please submit your request in writing to us using the
              contact information provided below.
            </p>
            <p className="privacyAnswer">
              If you are under 18 years of age, reside in California, and have a
              registered account with the Website, you have the right to request
              removal of unwanted data that you publicly post on the Website. To
              request removal of such data, please contact us using the contact
              information provided below, and include the email address
              associated with your account and a statement that you reside in
              California. We will make sure the data is not publicly displayed
              on the Website, but please be aware that the data may not be
              completely or comprehensively removed from all our systems (e.g.
              backups, etc.).
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section11}>
            <p className="privacyQuestion">
              DO WE MAKE UPDATES TO THIS NOTICE?
            </p>
            <p className="privacyAnswer">
              In Short: Yes, we will update this notice as necessary to stay
              compliant with relevant laws.
            </p>
            <p className="privacyAnswer">
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated “Revised” date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section12}>
            <p className="privacyQuestion">
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </p>
            <p className="privacyAnswer">
              If you have questions or comments about this notice, you may email
              us at support@alphacapitalgroup.uk or by post to:
            </p>
            <p className="privacyAnswer">
              Alpha Capital Group Limited
              <p>10 Lower Thames Street Billingsgate</p>
              <p>London EC3R 6AF</p>
            </p>
            <p className="privacyAnswer">
              <p>United Kingdom</p>
            </p>
          </div>

          <div className="answersToTheQuestion" ref={sectionRefs.section13}>
            <p className="privacyQuestion">
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </p>
            <p className="privacyAnswer">
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances. To request to review, update, or delete your
              personal information, please submit a request form by clicking
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
