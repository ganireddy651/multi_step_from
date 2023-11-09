import {useContext} from 'react'
import FormContext from '../../context/FormContext'
import './index.css'

const MonthlyAddOnDetails = props => {
  const {eachAddon} = props
  const {service, description, price} = eachAddon

  const {chooseAddOns, changeChooseAddOns, addToSummery} = useContext(
    FormContext,
  )

  const onAddMonthlyAddon = () => {
    changeChooseAddOns()
    addToSummery({service, price})
  }

  const containerStyles = chooseAddOns
    ? 'selected-addon-details'
    : 'addon-details'

  return (
    <div className={containerStyles}>
      <input onClick={onAddMonthlyAddon} id={service} type="checkbox" />
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
