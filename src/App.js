import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import MultiStepForm from './component/MultiStepForm'
import FormContext from './context/FormContext'
import './App.css'

const App = () => {
  const [stepNum, setStepNum] = useState(1)
  const [togglePlan, setTogglePlan] = useState(false)
  const [choosePlan, setChoosePlan] = useState(false)
  const [chooseAddOns, setChooseAddOns] = useState(false)
  const [summery, setSummery] = useState([])

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

  const addToSummery = (price, service, plan, PlanPrice) => {
    const newPlan = {
      id: uuidv4(),
      price,
      service,
      plan,
      PlanPrice,
    }
    setSummery(newPlan)
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
        summery,
        addToSummery,
      }}
    >
      <MultiStepForm />
    </FormContext.Provider>
  )
}

export default App
