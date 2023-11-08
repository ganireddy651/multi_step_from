import './index.css'

const YearlyPlanDetails = props => {
  const {eachPlan} = props
  const {id, imageUrl, plan, price, freePlan} = eachPlan

  return (
    <div className="yearly-plan-details">
      <img className="plan-image" src={imageUrl} alt={plan} />
      <div>
        <span className="plan">{plan}</span>
        <span className="price">{price}</span>
        <span className="free-plan">{freePlan}</span>
      </div>
    </div>
  )
}

export default YearlyPlanDetails
