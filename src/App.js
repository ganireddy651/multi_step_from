import {useState} from 'react'
import MultiStepForm from './component/MultiStepForm'
import FormContext from './context/FormContext'
import './App.css'

const App = () => {
  const [stepNum, setStepNum] = useState(1)
  const [togglePlan, setTogglePlan] = useState(false)
  const [choosePlan, setChoosePlan] = useState(false)
  const [chooseAddOns, setChooseAddOns] = useState(false)

  const nextStep = () => {
    setStepNum(stepNum + 1)
  }

  const previousStep = () => {
    setStepNum(stepNum - 1)
  }

  const changeTogglePlan = () => {
    setTogglePlan(!togglePlan)
  }

  const changeChoosePlan = () => {
    setChoosePlan(!choosePlan)
  }

  const changeChooseAddOns = () => {
    setChooseAddOns(!chooseAddOns)
  }

  return (
    <FormContext.Provider
      value={{
        stepNum,
        nextStep,
        previousStep,
        togglePlan,
        changeTogglePlan,
        choosePlan,
        changeChoosePlan,
        chooseAddOns,
        changeChooseAddOns,
      }}
    >
      <MultiStepForm />
    </FormContext.Provider>
  )
}

export default App
