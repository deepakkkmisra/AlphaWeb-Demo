import React, { useEffect, useRef } from "react";
import "./TermsOfUse.scss";

const TermsOfUse = () => {
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
    section14: useRef(null),
    section15: useRef(null),
    section16: useRef(null),
    section17: useRef(null),
    section18: useRef(null),
    section19: useRef(null),
    section20: useRef(null),
    section21: useRef(null),
  };

  const handleScrollToSection = (sectionId) => {
    sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="termsOfUseContainer">
      <div className="termsOfUseWrapper">
        <div className="termsAndCondition">
          <div className="headerSection">
            <h3>Terms And Conditions</h3>
          </div>
          <div className="headerPoints">
            <ul>
              <li onClick={() => handleScrollToSection("section1")}>
                WHO ARE WE AND HOW TO CONTACT US
              </li>
              <li onClick={() => handleScrollToSection("section2")}>
                AGREEMENT TO TERMS
              </li>
              <li onClick={() => handleScrollToSection("section3")}>
                THE SITE
              </li>
              <li onClick={() => handleScrollToSection("section4")}>
                CHANGES TO TERMS
              </li>
              <li onClick={() => handleScrollToSection("section5")}>
                INTELLECTUAL PROPERTY RIGHTS
              </li>
              <li onClick={() => handleScrollToSection("section6")}>
                USER REGISTRATION
              </li>
              <li onClick={() => handleScrollToSection("section7")}>
                USER REPRESENTATIONS
              </li>
              <li onClick={() => handleScrollToSection("section8")}>
                PROHIBITED ACTIVITIES
              </li>
              <li onClick={() => handleScrollToSection("section9")}>
                USER GENERATED CONTRIBUTIONS
              </li>
              <li onClick={() => handleScrollToSection("section10")}>
                SUBMISSIONS
              </li>
              <li onClick={() => handleScrollToSection("section11")}>
                THIRD-PARTY WEBSITE AND CONTENT
              </li>
              <li onClick={() => handleScrollToSection("section12")}>
                SITE MANAGEMENT
              </li>
              <li onClick={() => handleScrollToSection("section13")}>
                PRIVACY POLICY
              </li>
              <li onClick={() => handleScrollToSection("section14")}>
                MODIFICATIONS AND INTERRUPTIONS
              </li>
              <li onClick={() => handleScrollToSection("section15")}>
                GOVERNING LAW
              </li>
              <li onClick={() => handleScrollToSection("section16")}>
                CORRECTIONS
              </li>
              <li onClick={() => handleScrollToSection("section17")}>
                DISCLAIMER
              </li>
              <li onClick={() => handleScrollToSection("section18")}>
                LIMITATIONS OF LIABILITY
              </li>
              <li onClick={() => handleScrollToSection("section19")}>
                USER DATA
              </li>
              <li onClick={() => handleScrollToSection("section20")}>
                ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
              </li>
              <li onClick={() => handleScrollToSection("section21")}>
                MISCELLANEOUS
              </li>
            </ul>
          </div>
        </div>

        <div className="detailedAnswers">
          <div className="setOfQuestionsAnswers" ref={sectionRefs.section1}>
            <h3 className="questionsSection">
              WHO ARE WE AND HOW TO CONTACT US
            </h3>
            <p className="answerSection">
              http://www.alphacapitalgroup.uk is a site operated by Alpha
              Capital Group Limited{" "}
              <span>(“Company,” “we,” “us,” or “our”)</span>. We are registered
              in England and Wales under company number 13719951 and have our
              registered office at 10 Lower Thames Street, Billingsgate, London,
              England, EC3R 6AF. Our main trading address is 10 Lower Thames
              Street, Billingsgate, London, England, EC3R 6AF.
            </p>
            <p className="answerSection">
              To contact us, please email accounts@alphacapitalgroup.uk.
            </p>
          </div>
          <div className="setOfQuestionsAnswers" ref={sectionRefs.section2}>
            <h3 className="questionsSection">AGREEMENT TO TERMS</h3>
            <p className="answerSection">
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (“
              <span>you</span>
              ”) and the Company concerning your access to and use of the
              http://www.alphacapitalgroup.uk website as well as any other media
              form, media channel, mobile website or mobile application related,
              linked, or otherwise connected thereto (collectively, the “
              <span>Site”</span>).
            </p>
            <p className="answerSection">
              You agree that by accessing the Site, you have read, understood,
              and agreed to comply with all of these Terms of Use. If you do not
              agree to these terms, you must not use our Site.
            </p>
            <p className="answerSection">
              Supplemental terms and conditions or documents that may be posted
              on the Site from time to time are hereby expressly incorporated
              herein by reference.
            </p>
          </div>
          <div className="setOfQuestionsAnswers" ref={sectionRefs.section3}>
            <h3 className="questionsSection">THE SITE</h3>
            <p className="answerSection">
              Our Site is directed to people residing in the United Kingdom. We
              do not represent that <span>content</span> available on or through
              our Site is appropriate for use or available in other locations.
              Accordingly, those persons who choose to access the Site from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
            <p className="answerSection">
              The Site is intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the Site.
            </p>
          </div>
          <div className="setOfQuestionsAnswers" ref={sectionRefs.section4}>
            <h3 className="questionsSection">CHANGES TO TERMS</h3>
            <p className="answerSection">
              We reserve the right, in our sole discretion, to make changes or
              modifications to these Terms of Use from time to time. We will
              alert you about any changes by updating the “Last updated” date of
              these Terms of Use, and you waive any right to receive specific
              notice of each such change. Please ensure that you check the
              applicable Terms every time you use our Site so that you
              understand which Terms apply. You will be subject to, and will be
              deemed to have been made aware of and to have accepted, the
              changes in any revised Terms of Use by your continued use of the
              Site after the date such revised Terms of Use are posted.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section5}>
            <h3 className="questionsSection">INTELLECTUAL PROPERTY RIGHTS</h3>
            <p className="answerSection">
              Unless otherwise indicated, the Site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the Site
              (collectively, “<span>Content”</span>) and the trademarks, service
              marks, and logos contained therein (“<span>Marks</span>”) are
              owned or controlled by us or licensed to us, and are protected by
              copyright and trademark laws and various other intellectual
              property rights and unfair competition laws of the United States,
              international copyright laws, and international conventions. The
              Content and the Marks are provided on the Site “AS IS” for your
              information and personal use only. Except as expressly provided in
              these Terms of Use, no part of the Site and no Content or Marks
              may be copied, reproduced, aggregated, republished, uploaded,
              posted, publicly displayed, encoded, translated, transmitted,
              distributed, sold, licensed, or otherwise exploited for any
              commercial purpose whatsoever, without our express prior written
              permission.
            </p>
            <p>
              Provided that you are eligible to use the Site, you are granted a
              limited license to access and use the Site and to download or
              print a copy of any portion of the Content to which you have
              properly gained access solely for your personal, non-commercial
              use. You must not modify the paper or digital copies of any
              materials you have printed off or downloaded in any way, and you
              must not use any illustrations, photographs, video or audio
              sequences or any graphics separately from any accompanying text.
              Our status (and that of any identified contributors) as the
              authors of content on our Site must always be acknowledged (except
              where the content is user-generated).
            </p>
            <p>
              We reserve all rights not expressly granted to you in and to the
              Site, the Content and the Marks.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section6}>
            <h3 className="questionsSection">USER REGISTRATION</h3>
            <p className="answerSection">
              You may be required to register to access certain parts of the
              Site. You agree to keep your password confidential and will be
              responsible for all use of your account and password. We reserve
              the right to remove, reclaim, or change a username you select if
              we determine, in our sole discretion, that such username is
              inappropriate, obscene, or otherwise objectionable.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section7}>
            <h3 className="questionsSection">USER REPRESENTATIONS</h3>
            <p className="answerSection">
              By using the Site, you represent and warrant that: (1) all
              registration information you submit will be true, accurate,
              current, and complete; (2) you will maintain the accuracy of such
              information and promptly update such registration information as
              necessary; (3) you have the legal capacity and you agree to comply
              with these Terms of Use; (4) you are not a minor in the
              jurisdiction in which you reside; (5) you will not access the Site
              through automated or non-human means, whether through a bot,
              script, or otherwise; (6) you will not use the Site for any
              illegal or unauthorised purpose; and (7) your use of the Site will
              not violate any applicable law or regulation.
            </p>
            <p className="answerSection">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse all current or future use of the Site (or
              any portion thereof).
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section8}>
            <h3 className="questionsSection">PROHIBITED ACTIVITIES</h3>
            <p className="answerSection">
              You may not access or use the Site for any purpose other than that
              for which we make the Site available. The Site may not be used in
              connection with any commercial endeavours except those that are
              specifically endorsed or approved by us.
            </p>
            <p className="answerSection">
              As a user of the Site, you agree not to:
            </p>
            <div className="toRememberList">
              <ul>
                <li className="answerSection">
                  Systematically retrieve data or other content from the Site to
                  create or compile, directly or indirectly, a collection,
                  compilation, database, or directory without written permission
                  from us.
                </li>
                <li className="answerSection">
                  Trick, defraud, or mislead us and other users, especially in
                  any attempt to learn sensitive account information such as
                  user passwords.
                </li>
                <li className="answerSection">
                  Circumvent, disable, or otherwise interfere with
                  security-related features of the Site, including features that
                  prevent or restrict the use or copying of any Content or
                  enforce limitations on the use of the Site and/or the Content
                  contained therein.
                </li>
                <li className="answerSection">
                  Make improper use of our support services or submit false
                  reports of abuse or misconduct.
                </li>
                <li className="answerSection">
                  Use the Site in a manner inconsistent with any applicable laws
                  or regulations.
                </li>
                <li className="answerSection">
                  Engage in unauthorised framing of or linking to the Site.
                </li>
                <li className="answerSection">
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material, including excessive
                  use of capital letters and spamming (continuous posting of
                  repetitive text), that interferes with any party’s
                  uninterrupted use and enjoyment of the Site or modifies,
                  impairs, disrupts, alters, or interferes with the use,
                  features, functions, operation, or maintenance of the Site.
                </li>
                <li className="answerSection">
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, web scraping robots, or similar data gathering and
                  extraction tools. This includes using (or permitting,
                  authorising or attempting the use of): any “robot”, “bot”,
                  “spider”, “scraper” or other automated device, program, tool,
                  algorithm, code, process or methodology to access, obtain,
                  copy, monitor or republish any portion of the Site or any
                  data, content, information or services accessed via the same
                  and any automated analytical technique aimed at analysing text
                  and data in digital form to generate information which
                  includes but is not limited to patterns, trends and
                  correlations.
                </li>
                <li className="answerSection">
                  Delete the copyright or other proprietary rights notice from
                  any Content.
                </li>
                <li className="answerSection">
                  Attempt to impersonate another user or person or use the
                  username of another user.
                </li>
                <li className="answerSection">
                  Upload or transmit (or attempt to upload or to transmit) any
                  material that acts as a passive or active information
                  collection or transmission mechanism, including without
                  limitation, clear graphics interchange formats (“gifs”), 1×1
                  pixels, web bugs, cookies, or other similar devices (sometimes
                  referred to as “spyware” or “passive collection mechanisms” or
                  “pcms”).
                </li>
                <li className="answerSection">
                  Interfere with, disrupt, or create an undue burden on the Site
                  or the networks or services connected to the Site.
                </li>
                <li className="answerSection">
                  Harass, annoy, intimidate, or threaten any of our employees or
                  agents engaged in providing any portion of the Site to you.
                </li>
                <li className="answerSection">
                  Attempt to bypass any measures of the Site designed to prevent
                  or restrict access to the Site, or any portion of the Site.
                </li>
                <li className="answerSection">
                  Copy or adapt the Site’s software, including but not limited
                  to Flash, PHP, HTML, JavaScript, or other code.
                </li>
                <li className="answerSection">
                  Except as permitted by applicable law, decipher, decompile,
                  disassemble, or reverse engineer any of the software
                  comprising or in any way making up a part of the Site.
                </li>
                <li className="answerSection">
                  Except as may be the result of standard search engine or
                  Internet browser usage, use, launch, develop, or distribute
                  any automated system, including without limitation, any
                  spider, robot, cheat utility, scraper, or offline reader that
                  accesses the Site, or using or launching any unauthorized
                  script or other software.
                </li>
                <li className="answerSection">
                  Use a buying agent or purchasing agent to make purchases on
                  the Site.
                </li>
                <li className="answerSection">
                  Make any unauthorised use of the Site, including collecting
                  usernames and/or email addresses of users by electronic or
                  other means for the purpose of sending unsolicited email, or
                  creating user accounts by automated means or under false
                  pretenses.
                </li>
                <li className="answerSection">
                  Use the Site as part of any effort to compete with us or
                  otherwise use the Site and/or the Content for any
                  revenue-generating endeavor or commercial enterprise.
                </li>
                <li className="answerSection">
                  Use the Site to advertise or offer to sell goods and services.
                </li>
              </ul>
            </div>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section9}>
            <h3 className="questionsSection">USER GENERATED CONTRIBUTIONS</h3>
            <p className="answerSection">
              We may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Site, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, “<span>Contributions”</span>). Contributions may be
              viewable by other users of the Site and through third-party
              websites. As such, any Contributions you transmit will be treated
              in accordance with our Privacy Policy.
            </p>
            <p className="answerSection">
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Site. You are solely responsible for your Contributions to
              the Site and you expressly agree to free us from any and all
              responsibility and to refrain from any legal action against us
              regarding your Contributions.
            </p>
            <p className="answerSection">
              When you create or make available any Contributions, you represent
              and warrant that:
              <div className="toRememberList">
                <ul>
                  <li className="answerSection">
                    The creation, distribution, transmission, public display, or
                    performance, and the accessing, downloading, or copying of
                    your Contributions do not and will not infringe the
                    proprietary rights, including but not limited to the
                    copyright, patent, trademark, trade secret, or moral rights
                    of any third party.
                  </li>
                  <li className="answerSection">
                    You are the creator and owner of or have the necessary
                    licenses, rights, consents, releases, and permissions to use
                    and to authorise us, the Site, and other users of the Site
                    to use your Contributions in any manner contemplated by the
                    Site and these Terms of Use.
                  </li>
                  <li className="answerSection">
                    You have the written consent, release, and/or permission of
                    each and every identifiable individual person in your
                    Contributions to use the name or likeness of each and every
                    such identifiable individual person to enable inclusion and
                    use of your Contributions in any manner contemplated by the
                    Site and these Terms of Use.
                  </li>
                  <li className="answerSection">
                    Your Contributions are not false, inaccurate, or misleading.
                  </li>
                  <li className="answerSection">
                    Your Contributions are not unsolicited or unauthorized
                    advertising, promotional materials, pyramid schemes, chain
                    letters, spam, mass mailings, or other forms of
                    solicitation.
                  </li>
                  <li className="answerSection">
                    Your Contributions are not obscene, lewd, lascivious,
                    filthy, violent, harassing, libellous, slanderous, or
                    otherwise objectionable (as determined by us).
                  </li>
                  <li className="answerSection">
                    Your Contributions do not ridicule, mock, disparage,
                    intimidate, or abuse anyone.
                  </li>
                  <li className="answerSection">
                    Your Contributions are not used to harass or threaten (in
                    the legal sense of those terms) any other person and to
                    promote violence against a specific person or class of
                    people.
                  </li>
                  <li className="answerSection">
                    Your Contributions do not violate any applicable law,
                    regulation, or rule.
                  </li>
                  <li className="answerSection">
                    Your Contributions do not violate the privacy or publicity
                    rights of any third party.
                  </li>
                  <li className="answerSection">
                    Your Contributions do not violate any applicable law
                    concerning child pornography, or otherwise intended to
                    protect the health or well-being of minors.
                  </li>
                  <li className="answerSection">
                    Your Contributions do not include any offensive comments
                    that are connected to race, national origin, gender, sexual
                    preference, or physical handicap.
                  </li>
                  <li className="answerSection">
                    Your Contributions do not otherwise violate, or link to
                    material that violates, any provision of these Terms of Use,
                    or any applicable law or regulation.
                  </li>
                  <li className="answerSection">
                    Any use of the Site in violation of the foregoing violates
                    these Terms of Use and may result in, among other things,
                    termination or suspension of your rights to use the Site.
                  </li>
                </ul>
              </div>
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section10}>
            <h3 className="questionsSection">SUBMISSIONS</h3>
            <p className="answerSection">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              Site (“<span>Submissions</span>”) provided by you to us are
              non-confidential and shall become our sole property.
            </p>
            <p className="answerSection">
              By submitting suggestions or other feedback regarding the Site,
              you agree that we can use and share such feedback for any purpose
              without compensation to you. We shall own exclusive rights,
              including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these Submissions for
              any lawful purpose, commercial or otherwise, without
              acknowledgment or compensation to you. You hereby waive all moral
              rights to any such Submissions, and you hereby warrant that any
              such Submissions are original with you or that you have the right
              to submit such Submissions. You agree there shall be no recourse
              against us for any alleged or actual infringement or
              misappropriation of any proprietary right in your Submissions.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section11}>
            <h3 className="questionsSection">
              THIRD-PARTY WEBSITE AND CONTENT
            </h3>
            <p className="answerSection">
              The Site may contain (or you may be sent via the Site) links to
              other websites (“<span>Third-Party Websites</span>”) as well as
              articles, photographs, text, graphics, pictures, designs, music,
              sound, video, information, applications, software, and other
              content or items belonging to or originating from third parties (“
              <span>Third-Party Content</span>”). Such Third-Party Websites and
              Third-Party Content are not investigated, monitored, or checked
              for accuracy, appropriateness, or completeness by us, and we are
              not responsible for any Third-Party Websites accessed through the
              Site or any Third-Party Content posted on, available through, or
              installed from the Site, including the content, accuracy,
              offensiveness, opinions, reliability, privacy practices, or other
              policies of or contained in the Third-Party Websites or the
              Third-Party Content. Inclusion of, linking to, or permitting the
              use or installation of any Third-Party Websites or any Third-Party
              Content does not imply approval or endorsement thereof by us. If
              you decide to leave the Site and access the Third-Party Websites
              or to use or install any Third-Party Content, you do so at your
              own risk, and you should be aware these Terms of Use no longer
              govern. You should review the applicable terms and policies,
              including privacy and data gathering practices, of any website to
              which you navigate from the Site or relating to any applications
              you use or install from the Site. Any purchases you make through
              Third-Party Websites will be through other websites and from other
              companies, and we take no responsibility whatsoever in relation to
              such purchases which are exclusively between you and the
              applicable third party. You agree and acknowledge that we do not
              endorse the products or services offered on Third-Party Websites
              and that we have no control over the contents of those sites or
              resources.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section12}>
            <h3 className="questionsSection">SITE MANAGEMENT</h3>
            <p className="answerSection">
              Our Site is made available free of charge. We do not guarantee
              that our Site, or any content on it, will always be available or
              be uninterrupted. We may suspend or withdraw or restrict the
              availability of all or any part of our Site for business and
              operational reasons. We will try to give you reasonable notice of
              any suspension or withdrawal. In addition, we reserve the right,
              but not the obligation, to: (1) monitor the Site for violations of
              these Terms of Use; (2) take appropriate legal action against
              anyone who, in our sole discretion, violates the law or these
              Terms of Use, including without limitation, reporting such user to
              law enforcement authorities; (3) in our sole discretion and
              without limitation, refuse, restrict access to, limit the
              availability of, or disable (to the extent technologically
              feasible) any of your Contributions or any portion thereof; (4) in
              our sole discretion and without limitation, notice, or liability,
              to remove from the Site or otherwise disable all files and content
              that are excessive in size or are in any way burdensome to our
              systems; and (5) otherwise manage the Site in a manner designed to
              protect our rights and property and to facilitate the proper
              functioning of the Site.
            </p>
            <p className="answerSection">
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section13}>
            <h3 className="questionsSection">PRIVACY POLICY</h3>
            <p className="answerSection">
              We care about data privacy and security. Please review our Privacy
              Policy: https://alphacapitalgroup.uk/privacy-policy/. By using the
              Site, you agree to be bound by our Privacy Policy, which is
              incorporated into these Terms of Use. Please be advised the Site
              is hosted in the United Kingdom. If you access the Site from any
              other region of the world with laws or other requirements
              governing personal data collection, use, or disclosure that differ
              from applicable laws in the United Kingdom, then through your
              continued use of the Site, you are transferring your data to the
              United Kingdom, and you agree to have your data transferred to and
              processed in the United Kingdom.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section14}>
            <h3 className="questionsSection">
              MODIFICATIONS AND INTERRUPTIONS
            </h3>
            <p className="answerSection">
              We reserve the right to change, modify, or remove the contents of
              the Site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Site. We also reserve the right to modify or
              discontinue all or part of the Site without notice at any time. We
              will not be liable to you or any third party for any modification,
              price change, suspension, or discontinuance of the Site.
            </p>
            <p className="answerSection">
              We cannot guarantee the Site will be available at all times. We
              may experience hardware, software, or other problems or need to
              perform maintenance related to the Site, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the Site
              at any time or for any reason without notice to you. You agree
              that we have no liability whatsoever for any loss, damage, or
              inconvenience caused by your inability to access or use the Site
              during any downtime or discontinuance of the Site. Nothing in
              these Terms of Use will be construed to obligate us to maintain
              and support the Site or to supply any corrections, updates, or
              releases in connection therewith.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section15}>
            <h3 className="questionsSection">GOVERNING LAW</h3>
            <p className="answerSection">
              These Terms of Use, their subject matter and their formation, are
              governed by English law. You and we both agree that the courts of
              England and Wales will have exclusive jurisdiction except that if
              you are a resident of Northern Ireland you may also bring
              proceedings in Northern Ireland, and if you are resident of
              Scotland, you may also bring proceedings in Scotland.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section16}>
            <h3 className="questionsSection">CORRECTIONS</h3>
            <p className="answerSection">
              There may be information on the Site that contains typographical
              errors, inaccuracies, or omissions, including descriptions,
              pricing, availability, and various other information. We reserve
              the right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section17}>
            <h3 className="questionsSection">DISCLAIMER</h3>
            <p className="answerSection">
              The Site is provided on an as-is and as-available basis. You agree
              that your use of the Site and our services will be at your sole
              risk. To the fullest extent permitted by law, we disclaim all
              warranties, express or implied, in connection with the Site and
              your use thereof, including, without limitation, the implied
              warranties of merchantability, fitness for a particular purpose,
              and non- infringement. We make no warranties or representations
              about the accuracy or completeness of the Site, the Content or the
              content of any websites linked to the Site and we will assume no
              liability or responsibility for any: (1) errors, mistakes, or
              inaccuracies of content and materials; (2) any unauthorised access
              to or use of our secure servers and/or any and all personal
              information and/or financial information stored therein; (3) any
              interruption or cessation of transmission to or from the Site; (4)
              any bugs, viruses, trojan horses, or the like which may be
              transmitted to or through the Site by any third party; and/or (6)
              any errors or omissions in any Content or for any loss or damage
              of any kind incurred as a result of the use of any Content posted,
              transmitted, or otherwise made available via the Site.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section18}>
            <h3 className="questionsSection">LIMITATIONS OF LIABILITY</h3>
            <p className="answerSection">
              We do not exclude or limit in any way our liability to you where
              it would be unlawful to do so. This includes liability for death
              or personal injury caused by our negligence or the negligence of
              our employees, agents or subcontractors and for fraud or
              fraudulent misrepresentation.
            </p>
            <p className="answerSection">
              We only provide our Site for domestic and private use. You agree
              not to use our Site for any commercial or business purposes, and
              we have no liability to you for any loss of profit, loss of
              business, business interruption, or loss of business opportunity.
            </p>
            <p className="answerSection">
              If defective digital content that we have supplied, damages a
              device or digital content belonging to you and this is caused by
              our failure to use reasonable care and skill, we will either
              repair the damage or pay you compensation. However, we will not be
              liable for damage that you could have avoided by following our
              advice to apply an update offered to you free of charge or for
              damage that was caused by you failing to correctly follow
              installation instructions or to have in place the minimum system
              requirements advised by us.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section19}>
            <h3 className="questionsSection">USER DATA</h3>
            <p className="answerSection">
              We will maintain certain data that you transmit to the Site for
              the purpose of managing the performance of the Site, as well as
              data relating to your use of the Site. Although we perform regular
              routine backups of data, you are solely responsible for all data
              that you transmit or that relates to any activity you have
              undertaken using the Site. You agree that we shall have no
              liability to you for any loss or corruption of any such data, and
              you hereby waive any right of action against us arising from any
              such loss or corruption of such data.
            </p>
          </div>
          <div className="setOfQuestionsAnswers" ref={sectionRefs.section20}>
            <h3 className="questionsSection">
              ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h3>
            <p className="answerSection">
              Visiting the Site, sending us emails, and completing online forms
              constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Site, satisfy any legal
              requirement that such communication be in writing. You hereby
              agree to the use of electronic signatures, contracts, orders, and
              other records, and to electronic delivery of notices, policies,
              and records of transactions initiated or completed by us or via
              the Site. You hereby waive any rights or requirements under any
              statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </div>

          <div className="setOfQuestionsAnswers" ref={sectionRefs.section21}>
            <h3 className="questionsSection">MISCELLANEOUS</h3>
            <p className="answerSection">
              These Terms of Use and any policies or operating rules posted by
              us on the Site or in respect to the Site constitute the entire
              agreement and understanding between you and us. Our failure to
              exercise or enforce any right or provision of these Terms of Use
              shall not operate as a waiver of such right or provision. These
              Terms of Use operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. If any provision or part of a provision of these Terms
              of Use is determined to be unlawful, void, or unenforceable, that
              provision or part of the provision is deemed severable from these
              Terms of Use and does not affect the validity and enforceability
              of any remaining provisions. There is no joint venture,
              partnership, employment or agency relationship created between you
              and us as a result of these Terms of Use or use of the Site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
