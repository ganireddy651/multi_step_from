import './index.css'

const Step = props => {
  const {eachStep, isActive} = props
  const {id, step, info, num} = eachStep
  console.log(isActive, id)

  const stepStyles = isActive ? 'active-step' : 'inactive-step'

  return (
    <div className="step-item">
      <div type="button" className={stepStyles}>
        <span>{num}</span>
      </div>
      <div className="step-details">
        <span className="step">{step}</span>
        <h3 className="info">{info}</h3>
      </div>
    </div>
  )
}

export default Step
