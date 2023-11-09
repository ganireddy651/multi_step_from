import {useContext} from 'react'
import FormContext from '../../context/FormContext'
import './index.css'

const Step = props => {
  const {eachStep, isActive} = props
  const {id, step, info, num} = eachStep

  const {stepNum} = useContext(FormContext)
  console.log(stepNum, isActive)

  const stepStyles = isActive ? 'active-step' : 'inactive-step'

  return (
    <div className="step-item">
      <button type="button" className={stepStyles}>
        <span>{num}</span>
      </button>
      <div className="step-details">
        <span className="step">{step}</span>
        <h3 className="info">{info}</h3>
      </div>
    </div>
  )
}

export default Step
