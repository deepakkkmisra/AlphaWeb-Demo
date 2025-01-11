import React from 'react';
import './Accomplishments.scss';
import certificate1Img from '../../../assets/images/certificate-1.png';

function Accomplishments() {
  return (
    <div className='acc_wrapper'>
      <div className='acc_intro'>
        <h1>Analyst Accomplishments</h1>
        <p>Discover the incredible achievements of our Alpha analysts and join us in celebrating their success. As an Alpha analyst, your journey begins by passing the evaluation and earning your place among our experts. From there, you can reach new heights by achieving [specific target] in performance fees, demonstrating your growing expertise. The ultimate recognition comes with the Lifetime Performance Fee award, signifying your outstanding long-term success and dedication within Alpha Capital.</p>
      </div>
      <div className='acc_certificates'>
        <img className='certificate certificate_1' src={certificate1Img} alt='Certificate 1' />
        <img className='certificate certificate_2' src={certificate1Img} alt='Certificate 2' />
        <img className='certificate certificate_3' src={certificate1Img} alt='Certificate 3' />
      </div>

    </div>
  );
}

export default Accomplishments;
