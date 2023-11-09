import {useContext} from 'react'
import FormContext from '../../context/FormContext'
import './index.css'

const MonthlyAddOnDetails = props => {
  const {eachAddon} = props
  const {id, service, description, price} = eachAddon

  const {
    choosePlan,
    changeChoosePlan,
    chooseAddOns,
    changeChooseAddOns,
  } = useContext(FormContext)

  return (
    <div className="addon-details">
      <input id={service} type="checkbox" />
      <label htmlFor={service} className="label-container">
        <div>
          <span style={{display: 'block'}}>{service}</span>
          <span style={{display: 'block'}}>{description}</span>
        </div>
        <span>{`+$${price}/mo`}</span>
      </label>
    </div>
  )
}

export default MonthlyAddOnDetails
