/* eslint-disable import/no-extraneous-dependencies */
import React, {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import FormContext from '../../context/FormContext'
import Step from '../Step'
import ThankYou from '../ThankYou'
import './index.css'

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

const Summery = () => {
  const {previousStep, stepNum, summery} = useContext(FormContext)
  const [confirm, setConfirm] = useState(false)
  console.log(summery)

  const onPreviousStep = () => {
    previousStep()
  }

  return (
    <div className="app-container">
      <form className="form">
        <div className="sidebar">
          {sideBarData.map(eachStep => (
            <Step
              eachStep={eachStep}
              key={eachStep.id}
              isActive={stepNum === eachStep.num}
            />
          ))}
        </div>
        {confirm ? (
          <ThankYou />
        ) : (
          <div className="user-info-container">
            <h3 className="main-heading">Finishing up</h3>
            <p className="description">
              Double-check every thing looks OK before confirming.
            </p>
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
            <div className="button-container">
              <button
                className="go-back-button"
                type="button"
                onClick={onPreviousStep}
              >
                Go back
              </button>
              <button
                onClick={() => setConfirm(true)}
                className="confirm-button"
                type="button"
              >
                Confirm
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default Summery
