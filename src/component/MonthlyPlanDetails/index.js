/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useContext} from 'react'
import FormContext from '../../context/FormContext'
import './index.css'

const MonthlyPlanDetails = props => {
  const {eachPlan} = props
  const {id, imageUrl, plan, PlanPrice} = eachPlan

  const {choosePlan, changeChoosePlan, addToSummery} = useContext(FormContext)

  const onAddMonthlyPlan = () => {
    changeChoosePlan()
    addToSummery(plan, PlanPrice)
  }

  return (
    <div className="plan-details" onClick={onAddMonthlyPlan}>
      <img className="plan-image" src={imageUrl} alt={plan} />
      <div>
        <span className="plan">{plan}</span>
        <span className="price">{`$${PlanPrice}/mo`}</span>
      </div>
    </div>
  )
}

export default MonthlyPlanDetails
