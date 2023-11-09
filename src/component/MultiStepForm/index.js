/* eslint-disable consistent-return */
import {useContext} from 'react'
import PersonalInfo from '../PersonalInfo'
import SelectPlan from '../SelectPlan'
import AddOns from '../AddOns'
import Summery from '../Summery'
import FormContext from '../../context/FormContext'
import './index.css'

const MultiStepFrom = () => {
  const {stepNum} = useContext(FormContext)

  const renderForm = () => {
    switch (stepNum) {
      case 1:
        return <PersonalInfo />
      case 2:
        return <SelectPlan />
      case 3:
        return <AddOns />
      case 4:
        return <Summery />
      default:
        break
    }
  }

  return <>{renderForm()}</>
}

export default MultiStepFrom
