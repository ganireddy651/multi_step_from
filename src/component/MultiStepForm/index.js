/* eslint-disable consistent-return */
import React, {useState} from 'react'
import PersonalInfo from '../PersonalInfo'
import SelectPlan from '../SelectPlan'
import AddOns from '../AddOns'
import Summery from '../Summery'
import './index.css'

const MultiStepFrom = () => {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const previousStep = () => {
    setStep(step - 1)
  }

  const renderForm = () => {
    switch (step) {
      case 1:
        return <PersonalInfo nextStep={nextStep} />
      case 2:
        return <SelectPlan nextStep={nextStep} previousStep={previousStep} />
      case 3:
        return <AddOns nextStep={nextStep} previousStep={previousStep} />
      case 4:
        return <Summery nextStep={nextStep} previousStep={previousStep} />
      default:
        return <PersonalInfo nextStep={nextStep} previousStep={previousStep} />
    }
  }

  return <>{renderForm()}</>
}

export default MultiStepFrom
