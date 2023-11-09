import React from 'react'

const FormContext = React.createContext({
  stepNum: 1,
  nextStep: () => {},
  previousStep: () => {},
  togglePlan: 'Monthly',
  changeTogglePlan: () => {},
  choosePlan: false,
  changeChoosePlan: () => {},
  chooseAddOns: false,
  changeChooseAddOns: () => {},
  summery: [],
  addToSummery: () => {},
})

export default FormContext
