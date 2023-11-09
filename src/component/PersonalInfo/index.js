/* eslint-disable import/no-extraneous-dependencies */
import React, {useState, useContext} from 'react'
import {v4 as uuidv4} from 'uuid'
import Step from '../Step'
import FormContext from '../../context/FormContext'
import './index.css'

const sideBarData = [
  {
    id: uuidv4(),
    num: 1,
    step: 'STEP 1',
    info: 'YOUR INFO',
  },
  {
    id: uuidv4(),
    num: 2,
    step: 'STEP 2',
    info: 'SELECT PLAN',
  },
  {
    id: uuidv4(),
    num: 3,
    step: 'STEP 3',
    info: 'ADD-ONS',
  },
  {
    id: uuidv4(),
    num: 4,
    step: 'STEP 4',
    info: 'SUMMERY',
  },
]

const PersonalInfo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [showNameError, setShowNameError] = useState(false)
  const [showEmailError, setShowEmailError] = useState(false)
  const [showNumberError, setShowNumberError] = useState(false)

  const {nextStep, stepNum} = useContext(FormContext)

  const onNextStep = () => {
    // if (name === '') {
    //   setShowNameError(true)
    //   setEmailError('')
    //   setPhoneError('')
    //   setNameError('This field is required')
    // } else if (email === '') {
    //   setShowEmailError(true)
    //   setNameError('')
    //   setPhoneError('')
    //   setEmailError('This field is required')
    // } else if (phone === '') {
    //   setShowNumberError(true)
    //   setNameError('')
    //   setEmailError('')
    //   setPhoneError('This field is required')
    // } else {
    //   nextStep()
    //   setActiveStep(sideBarData[1].id)
    // }
    nextStep()
  }

  return (
    <div className="app-container">
      <form className="form">
        <div className="sidebar">
          {sideBarData.map(eachStep => (
            <Step
              eachStep={eachStep}
              key={eachStep.id}
              isActive={stepNum === eachStep.num}
              nextStep={nextStep}
            />
          ))}
        </div>
        <div className="user-info-container">
          <h3 className="main-heading">Personal info</h3>
          <p className="description">
            Please provide your name,email address and phone number.
          </p>
          <div className="input-container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label htmlFor="name" className="label">
                Name
              </label>
              {showNameError && <span>{nameError}</span>}
            </div>
            <input
              className="search-input"
              type="text"
              id="name"
              placeholder="e.g.Stephen King"
              onChange={e => {
                setName(e.target.value)
              }}
              value={name}
            />
          </div>
          <div className="input-container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label className="label" htmlFor="email">
                Email Address
              </label>
              {showEmailError && <span>{emailError}</span>}
            </div>
            <input
              type="email"
              id="email"
              className="search-input"
              placeholder="e.g.stephenking@lorem.com"
              onChange={e => {
                setEmail(e.target.value)
              }}
              value={email}
            />
          </div>
          <div className="input-container">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label htmlFor="phone" className="label">
                Phone Number
              </label>
              {showNumberError && <span>{phoneError}</span>}
            </div>
            <input
              type="text"
              id="phone"
              className="search-input"
              placeholder="e.g. +91 243 567 9878"
              onChange={e => {
                setPhone(e.target.value)
              }}
              value={phone}
            />
          </div>
          <div className="next-button-container">
            <button type="button" onClick={onNextStep} className="next-button">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfo
