import React from "react";
import "./TheTeamComp.scss";
import georgeKohlerPFP from "../../../assets/images/GeorgeKohler.png";
import andrewBlaylockPFP from "../../../assets/images/AndrewBlaylock.png";
import alexanderAlexPFP from "../../../assets/images/AlexanderAlex.png";
import konathanPlantyPFP from "../../../assets/images/JonathanPlanty.png";
const TheTeamComp = () => {
  const teamData = [
    {
      profilePic: georgeKohlerPFP,
      name: "George Kohler",
      designation: "Managing Director & Founder Of Alpha Capital Group",
      desc1:
        "George’s first foray into investing was at age 18, when he discovered he had a knack for the financial markets. His early experiences trading sparked a passion that he pursued at University, studying banking, finance, and investments while honing his skills in various investment and sales roles.",
      desc2:
        "While at university, George discovered proprietary trading through an ad. The idea of leveraging a firm’s capital to amplify his potential profits was appealing. However, in the different firms he trialled, he noticed that some excelled in evaluations, and others boasted superior technology. But none seemed to offer the full trading experience he was looking for.",
      desc3:
        "Driven by a vision to fill this gap, George founded Alpha Capital Group, a one-stop shop for traders that combines robust evaluations, cutting-edge technology, and comprehensive trader support.",
      desc4:
        "Today, Alpha Capital Group empowers traders worldwide with the tools, training, support, and environment they need to succeed.",
    },
    {
      profilePic: andrewBlaylockPFP,
      name: "Andrew Blaylock",
      designation: "Co-Founder & Director Of Alpha Capital Group",
      desc1:
        "Drew’s been in the financial services sector for nearly two decades. Fresh out of college, he went straight into a number of institutions. His experience led to launching his own brokerage, a venture that remains successful to this day.",
      desc2:
        "In 2018, George Kohler approached Drew with the idea of establishing Alpha Capital Group, a firm with core values absent in the prop trading industry. The idea was simple: a firm that prioritised rapid customer support and valued approachability in an impersonal, automated industry.",
      desc3:
        "As a pillar of Alpha Capital’s customer-first philosophy, Drew has played a pivotal role in shaping the business’s backend operations to remove commission fees and reward traders for their hard work—a rare stance in an industry aimed at boosting firm profits.",
      desc4:
        "Drew continues to ensure the operations within Alpha Capital align with the firm’s values of transparency, support, and a trader-first mentality so that Alpha continues to remain at the forefront of prop firm innovation.",
    },
    {
      profilePic: alexanderAlexPFP,
      name: "Alexander 'Alex'",
      designation: "Head of Business Development",
      desc1:
        "Alex has a solid background in financial sales and extensive experience with equity and derivative brokers, including MP Capital and Central Markets.",
      desc2:
        "During his tenure at Central Markets, he formed a professional bond with Andrew Blaylock, one of Alpha’s directors. This connection later pivoted him towards the Venture Capital and private equity sectors, enriching his expertise before he joined forces with his colleagues to launch Alpha Capital Group.",
      desc3:
        "At Alpha Capital, Alex is committed to enhancing support for the traders and ensuring a first-class and seamless service. He actively oversees partnerships and affiliate programs and continues to introduce innovative strategies to advance the proprietary trading industry.",
      desc4:
        "He is particularly passionate about the inclusivity of prop trading, which welcomes individuals from diverse backgrounds, offering them a platform where skill, rather than capital, dictates success.",
    },
    {
      profilePic: konathanPlantyPFP,
      name: "Jonathan 'Planty'",
      designation: "Chief Market Analyst",
      desc1:
        "Planty is a seasoned expert with nearly three decades of experience in the financial markets. He began his illustrious career after graduating with a degree in Insurance and investment before starting work at Sun Alliance Investment Management. He focused on bonds and equities, which laid a strong foundation for his future endeavours.",
      desc2:
        "In 1997, Jonathan moved to UBS and entered the world of large-cap investment banking. This role expanded his expertise into options and equities of various sizes and ingrained a client-first approach in his professional ethos.",
      desc3:
        "During the 2007 financial crisis, Jonathan joined Liberum Capital, which was positioned in the eye of the storm. Here, he refined his skills in macroeconomics, bottom-up fundamentals, and technical analysis, becoming an advisor to clients navigating the stormy markets.",
      desc4:
        "Jonathan brings his wealth of knowledge to the Alpha Capital Group YouTube channel, where he hosts engaging interviews, shares insights, and guides traders through the complex world of finance with his seasoned perspective.",
    },
  ];

  return (
    <div className="theTeamCompContainer">
      <div className="theTeamCompWrapper">
        <div className="topHeader">
          <p> Who’s behind Alpha?</p>
          <h3>Meet the team</h3>
        </div>
        <div className="team-container">
          {teamData.map((member) => (
            <div key={member.name} className="team-member">
              <img src={member.profilePic} alt="" className="profile-pic" />
              <h2>{member.name}</h2>
              <h4>{member.designation}</h4>
              {Object.keys(member)
                .filter((key) => key.startsWith("desc"))
                .map((descKey) => (
                  <p key={descKey}>{member[descKey]}</p>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamComp;
