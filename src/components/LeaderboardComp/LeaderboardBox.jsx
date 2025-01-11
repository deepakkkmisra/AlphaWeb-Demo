import React from 'react'
import './LeaderboardBox.scss'
import flagImg from '../../assets/icons/flag-usa.svg'

function LeaderboardBox({image}) {
  return (
    <div className='lb_box'>
        <div className='bg_img'>
            <img src={image} alt='' />
        </div>
        <div className='lb_box_header'>
            <h2>rayn williams</h2>
            <div className='lb_box_header_right'>
                <img src={flagImg} alt='' />
                <p>USA</p>
            </div>
        </div>
        <div className='lb_box_details'>
            <div>
                <span>Profit</span>
                <p>$460,648</p>
            </div>
            <div>
                <span>Profit</span>
                <p>$460,648</p>
            </div>
            <div>
                <span>Profit</span>
                <p>$460,648</p>
            </div>
            <div>
                <span>Profit</span>
                <p>$460,648</p>
            </div>
        </div>
    </div>
  )
}

export default LeaderboardBox