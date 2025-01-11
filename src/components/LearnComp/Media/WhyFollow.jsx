import React from 'react'
import './WhyFollow.scss'
import timeIcon from '../../../assets/icons/time.svg'
import analysisIcon from '../../../assets/icons/analysis.svg'
import globalIcon from '../../../assets/icons/global.svg'
import contentIcon from '../../../assets/icons/content.svg'

const fbData = [
  {
    image: timeIcon,
    title: "Timely Updates",
    description: "Stay ahead with real-time information that keeps your trading strategies sharp and relevant."
  },
  {
    image: analysisIcon,
    title: "Expert Analysis",
    description: "Gain access to insights from top analysts who provide deep, actionable market expertise."
  },
  {
    image: globalIcon,
    title: "Global Perspective",
    description: "Tap into a worldwide network of analysts, offering diverse insights and a comprehensive market view."
  },
  {
    image: contentIcon,
    title: "Exclusive Content",
    description: "Enjoy exclusive market insights, interviews, and reports that are only available through Alpha Capital Media."
  }
];

function WhyFollow() {
  return (
    <div className='wf_wrapper'>
      <h1>
        Why Follow Alpha Capital Group Media?
      </h1>

      <div className='fb_wrapper'>
        {fbData.map((data, index) => (
          <FollowBox 
            key={index} 
            image={data.image} 
            title={data.title} 
            description={data.description} 
          />
        ))}
      </div>
    </div>
  );
}

const FollowBox = ({ image, title, description }) => {
  return (
    <div className='fb'>
      <img src={image} alt={title} />
      <h2 className='gradientText'>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default WhyFollow;
