/* eslint-disable import/no-extraneous-dependencies */
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import MonthlyPlanDetails from '../MonthlyPlanDetails'
import Step from '../Step'
import './index.css'
import YearlyPlanDetails from '../YearlyPlanDetails'

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

const monthlyPlanDetails = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447891/icon-arcade_ccagxj.svg',
    plan: 'Arcade',
    price: '$9/mo',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447926/icon-advanced_y7s3ok.svg',
    plan: 'Advanced',
    price: '$12/mo',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447943/icon-pro_bn71nq.svg',
    plan: 'Pro',
    price: '$15/mo',
  },
]
const yearlyPlanDetails = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447891/icon-arcade_ccagxj.svg',
    plan: 'Arcade',
    price: '$90/yr',
    freePlan: '2 months free',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447926/icon-advanced_y7s3ok.svg',
    plan: 'Advanced',
    price: '$120/yr',
    freePlan: '2 months free',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447943/icon-pro_bn71nq.svg',
    plan: 'Pro',
    price: '$150/yr',
    freePlan: '2 months free',
  },
]

const SelectPlan = props => {
  const [activeStep, setActiveStep] = useState(sideBarData[0].id)
  const [togglePlan, setTogglePlan] = useState(false)
  const {nextStep, previousStep} = props

  const updateActiveStep = id => {
    setActiveStep(id)
  }

  const onNextStep = () => {
    nextStep()
    setActiveStep(sideBarData[2].id)
  }

  const onPreviousStep = () => {
    previousStep()
    setActiveStep(sideBarData[0].id)
  }

  const toggleIcon = togglePlan
    ? 'https://res.cloudinary.com/dky69roxl/image/upload/v1699463632/switch_zaevry.png'
    : 'https://res.cloudinary.com/dky69roxl/image/upload/v1699463659/switch_1_bfb7wm.png'
  return (
    <div className="app-container">
      <form className="form">
        <div className="sidebar">
          {sideBarData.map(eachStep => (
            <Step
              eachStep={eachStep}
              key={eachStep.id}
              isActive={activeStep === eachStep.id}
            />
          ))}
        </div>
        <div className="user-info-container">
          <h3>Select your plan</h3>
          <p>You have the option of monthly or yearly billing.</p>
          <div className="plans-container">
            {togglePlan ? (
              <>
                {yearlyPlanDetails.map(eachPlan => (
                  <YearlyPlanDetails eachPlan={eachPlan} key={eachPlan.id} />
                ))}
              </>
            ) : (
              <>
                {monthlyPlanDetails.map(eachPlan => (
                  <MonthlyPlanDetails eachPlan={eachPlan} key={eachPlan.id} />
                ))}
              </>
            )}
          </div>
          <div className="toggle-container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Monthly</span>
              <img
                style={{width: '30px', height: '30px', margin: '0 20px'}}
                src={toggleIcon}
                alt="toggle icon"
                onClick={() => setTogglePlan(!togglePlan)}
              />
              <span>Yearly</span>
            </div>
          </div>
          <button type="button" onClick={onPreviousStep}>
            Go back
          </button>
          <button type="button" onClick={onNextStep}>
            Next Step
          </button>
        </div>
      </form>
    </div>
  )
}

export default SelectPlan
