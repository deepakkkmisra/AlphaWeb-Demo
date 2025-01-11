import React from 'react'
import './VideoGallery.scss'
import eventImg from '../../../assets/images/event-1.png'
import event2Img from '../../../assets/images/event-2.png'

function VideoGallery() {
    return (
        <div className='vg_wrapper'>
            <h1>Immerse Yourself in Alpha Capital’s Events</h1>
            <div className="gallery">
                <div className="col1">
                    <img className="photo1" src={eventImg} alt="" />
                    <img className="photo2" src={eventImg} alt="" />
                </div>
                <div className="col2">
                    <img className="photo3" src={eventImg} alt="" />
                    <img className="photo4" src={eventImg} alt="" />
                </div>
                <div className="col3">
                    <img className="photo5" src={event2Img} alt="" />
                    <div>
                    <img className="photo6" src={eventImg} alt="" />
                    <img className="photo7" src={eventImg} alt="" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default VideoGallery