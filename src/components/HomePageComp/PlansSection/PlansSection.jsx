import React from 'react'
import './PlansSection.scss'
import PlansTable from './PlansTable'

function PlansSection() {

  const plans = [
    {
      name: "Alpha Pro",
      bestSeller: true
    },
    {
      name: "Alpha X",
      bestSeller: false
    },
    {
      name: "Alpha Swing",
      bestSeller: false
    }
  ]

  const steps = [
    {
      name: "One Step",
    },
    {
      name: "Two Step",
    },
    {
      name: "Three Step",
    }
  ]
  return (
    <div className='ps_wrapper'>
      <div className='ps_intro'>
        <h1>Still Not Sure? <span className='gradientText'>Check out our other plans</span></h1>
        <p>Choose the evaluation based on your preference to become an Alpha Trader.</p>

        <div className='plan_select'>
          <p>Select Your plan</p>
          <div className='plan_btns'>
          {plans?.map((plan) => (
            <button>{plan.name}</button>
          ))}
          </div>
        </div>

        <div className='plan_select step_select'>
          <p>Select Your Step</p>
          <div className='plan_btns step_btns'>
          {steps?.map((plan) => (
            <button>{plan.name}</button>
          ))}
          </div>
        </div>

      </div>
      <PlansTable />

    </div>
  )
}

export default PlansSection