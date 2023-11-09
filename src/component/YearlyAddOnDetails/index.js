import './index.css'

const YearlyAddonDetails = props => {
  const {eachAddon} = props
  const {id, service, description, price} = eachAddon

  return (
    <div className="addon-details">
      <input id={service} type="checkbox" />
      <label htmlFor={service} className="label-container">
        <div>
          <span style={{display: 'block'}}>{service}</span>
          <span style={{display: 'block'}}>{description}</span>
        </div>
        <span>{`+$${price}/yr`}</span>
      </label>
    </div>
  )
}

export default YearlyAddonDetails
