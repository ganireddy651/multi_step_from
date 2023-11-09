import React from 'react'

const FormContext = React.createContext({
  stepNum: 1,
  nextStep: () => {},
  previousStep: () => {},
  togglePlan: false,
  changeTogglePlan: () => {},
  choosePlan: false,
  changeChoosePlan: () => {},
  chooseAddOns: false,
  changeChooseAddOns: () => {},
})

export default FormContext
