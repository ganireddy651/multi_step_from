/* eslint-disable import/no-extraneous-dependencies */
import {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import MonthlyPlanDetails from '../MonthlyPlanDetails'
import Step from '../Step'
import FormContext from '../../context/FormContext'
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
    PlanPrice: 9,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447926/icon-advanced_y7s3ok.svg',
    plan: 'Advanced',
    PlanPrice: 12,
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447943/icon-pro_bn71nq.svg',
    plan: 'Pro',
    PlanPrice: 15,
  },
]
const yearlyPlanDetails = [
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447891/icon-arcade_ccagxj.svg',
    plan: 'Arcade',
    PlanPrice: 90,
    freePlan: '2 months free',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447926/icon-advanced_y7s3ok.svg',
    plan: 'Advanced',
    PlanPrice: 120,
    freePlan: '2 months free',
  },
  {
    id: uuidv4(),
    imageUrl:
      'https://res.cloudinary.com/dky69roxl/image/upload/v1699447943/icon-pro_bn71nq.svg',
    plan: 'Pro',
    PlanPrice: 120,
    freePlan: '2 months free',
  },
]

const SelectPlan = () => {
  const {
    nextStep,
    previousStep,
    stepNum,
    togglePlan,
    changeTogglePlan,
  } = useContext(FormContext)

  const onNextStep = () => {
    nextStep()
  }

  const onPreviousStep = () => {
    previousStep()
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
              isActive={stepNum === eachStep.num}
            />
          ))}
        </div>
        <div className="user-info-container">
          <h3 className="main-heading">Select your plan</h3>
          <p className="description">
            You have the option of monthly or yearly billing.
          </p>
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
                onClick={() => changeTogglePlan()}
              />
              <span>Yearly</span>
            </div>
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

export default SelectPlan
