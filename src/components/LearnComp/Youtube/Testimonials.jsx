import React from 'react'
import './Testimonials.scss'
import rating from '../../../assets/icons/rating.svg'

function Testimonials() {
    return (
        <div className='tm_wrapper'>
            <div className='tm_intro'>
                <span className='gradientText'>Testimonials</span>
                <h2>What Traders Are Saying About Us</h2>
            </div>

            <div className='tm_box_wrapper'>
                <TestimonialBox />
            </div>
        </div>
    )
}

export default Testimonials

const TestimonialBox = () => {
    return (
        <div className='tm_box'>
            <div className='rating'>
               <img src={rating} alt='' />
            </div>
            <h2>$5k payout approved and received in 2…</h2>
            <p>$5k payout approved and received in 2 business days from request. Great experience so far, good executions, standard slippage for a prop and can’t fault at all.</p>
        </div>
    )
}