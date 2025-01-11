import React from 'react'
import './Highlights.scss'
import eventImg from '../../../assets/images/eventPictures2.png'

function Highlights() {
  return (
    <div className='hl_wrapper'>
        <h1>Highlights from Our Past Events</h1>
        <div className='hl_imgs'>
            <div className='hl_img_wrapper'>
                <img src={eventImg} alt='' />
                <p>Loreum Ipsum dolor sit</p>
            </div>
            <div className='hl_img_wrapper'>
                <img src={eventImg} alt='' />
                <p>Loreum Ipsum dolor sit</p>
            </div>
            <div className='hl_img_wrapper'>
                <img src={eventImg} alt='' />
                <p>Loreum Ipsum dolor sit</p>
            </div>
            <div className='hl_img_wrapper'>
                <img src={eventImg} alt='' />
                <p>Loreum Ipsum dolor sit</p>
            </div>
        </div>
    </div>
  )
}

export default Highlights