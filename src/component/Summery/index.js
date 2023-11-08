/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Step from '../Step'

const sideBarData = [
  {
    id: uuidv4(),
    num: 1,
    step: 'STEP 1',
    info: 'YOUR INFO',
  },
  {
    id: uuidv4(),
    num: 2,
    step: 'STEP 2',
    info: 'SELECT PLAN',
  },
  {
    id: uuidv4(),
    num: 3,
    step: 'STEP 3',
    info: 'ADD-ONS',
  },
  {
    id: uuidv4(),
    num: 4,
    step: 'STEP 4',
    info: 'SUMMERY',
  },
]

const Summery = props => {
  const [activeStep, setActiveStep] = useState(sideBarData[0].id)
  const {nextStep, previousStep} = props

  const updateActiveStep = id => {
    setActiveStep(id)
  }

  const onNextStep = () => {
    nextStep()
  }

  const onPreviousStep = () => {
    previousStep()
    setActiveStep(sideBarData[2])
  }
  return (
    <div className="app-container">
      <form className="form">
        <div className="sidebar">
          {sideBarData.map(eachStep => (
            <Step
              eachStep={eachStep}
              key={eachStep.id}
              isActive={activeStep === eachStep.id}
              updateActiveStep={updateActiveStep}
            />
          ))}
        </div>
        <div className="user-info-container">
          <h3>Finishing up</h3>
          <p>Please provide your name,email address and phone number.</p>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <br />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Phone Number</label>
            <br />
            <input
              type="text"
              id="address"
              placeholder="e.g. +91 243 567 9878"
            />
          </div>
          <button type="button" onClick={onPreviousStep}>
            Go back
          </button>
          <button type="button">Confirm</button>
        </div>
      </form>
    </div>
  )
}

export default Summery
