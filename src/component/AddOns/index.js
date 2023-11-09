/* eslint-disable import/no-extraneous-dependencies */
import {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import FormContext from '../../context/FormContext'
import Step from '../Step'
import YearlyAddOnDetails from '../YearlyAddOnDetails'
import MonthlyAddOnDetails from '../MonthlyAddOnDetails'
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

const monthlyAddOnDetails = [
  {
    id: uuidv4(),
    service: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: uuidv4(),
    service: 'Large storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: uuidv4(),
    service: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2,
  },
]
const yearlyAddOnDetails = [
  {
    id: uuidv4(),
    service: 'Online service',
    description: 'Access to multiplayer games',
    price: 10,
  },
  {
    id: uuidv4(),
    service: 'Large storage',
    description: 'Extra 1TB of cloud save',
    price: 20,
  },
  {
    id: uuidv4(),
    service: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 20,
  },
]

const AddOns = () => {
  const {nextStep, previousStep, stepNum, togglePlan} = useContext(FormContext)

  const onNextStep = () => {
    nextStep()
  }

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
        <div className="user-info-container">
          <h3 className="main-heading">Pick add-ons</h3>
          <p className="description">
            Add-ons help enhance your gaming experience.
          </p>
          <div className="toggle-addon-container">
            {togglePlan ? (
              <>
                {yearlyAddOnDetails.map(eachAddon => (
                  <YearlyAddOnDetails
                    eachAddon={eachAddon}
                    key={eachAddon.id}
                  />
                ))}
              </>
            ) : (
              <>
                {monthlyAddOnDetails.map(eachAddon => (
                  <MonthlyAddOnDetails
                    eachAddon={eachAddon}
                    key={eachAddon.id}
                  />
                ))}
              </>
            )}
          </div>
          <div className="button-container">
            <button
              className="go-back-button"
              type="button"
              onClick={onPreviousStep}
            >
              Go back
            </button>
            <button className="next-button" type="button" onClick={onNextStep}>
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddOns
