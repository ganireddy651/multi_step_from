import './index.css'

const MonthlyPlanDetails = props => {
  const {eachPlan} = props
  const {id, imageUrl, plan, price} = eachPlan

  return (
    <div className="plan-details">
      <img className="plan-image" src={imageUrl} alt={plan} />
      <div>
        <span className="plan">{plan}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  )
}

export default MonthlyPlanDetails
