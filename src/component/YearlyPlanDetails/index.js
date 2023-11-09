import './index.css'

const YearlyPlanDetails = props => {
  const {eachPlan} = props
  const {id, imageUrl, plan, PlanPrice, freePlan} = eachPlan

  return (
    <div className="yearly-plan-details">
      <img className="plan-image" src={imageUrl} alt={plan} />
      <div>
        <span className="plan">{plan}</span>
        <span className="price">{`$${PlanPrice}/yr`}</span>
        <span className="free-plan">{freePlan}</span>
      </div>
    </div>
  )
}

export default YearlyPlanDetails
