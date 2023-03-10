import React, { useState } from 'react'
import Button from '../Button/Button'
import useTimer from '../../hooks/useTimer'
import InputTime from '../InputTime/InputTime'
import useInput from '../../hooks/useInput'
import './Time.css'

function Time ({ title, type }) {
  const { time, Start, Stop, handleValue } = useTimer({ type })
  const { timeString } = useInput(type)
  const [inputToggle, setInputToggle] = useState(false)
  const [resetBtn, setResetBtn] = useState(true)
  const [nameButton, setnameButton] = useState('Start')

  const handleInput = () => {
    if (type === 'chrono') return
    setInputToggle(!inputToggle)
  }
  const handleOk = () => {
    handleInput()
    handleValue(timeString)
    setnameButton('Start')
    setResetBtn(true)
  }

  const startButton = () => {
    if (timeString === '00:00:00' && type !== 'chrono') return
    resetBtn ? setnameButton('Reset') : setnameButton('Start')
    setResetBtn(!resetBtn)
    setInputToggle(false)
    const newTime = time === '00:00' && type !== 'chrono' ? timeString : time
    Start({ time: newTime, toggleReset: resetBtn })
  }

  const stopButton = () => {
    if (time === '00:00' || resetBtn) return
    setResetBtn(!resetBtn)
    resetBtn ? setnameButton('Reset') : setnameButton('Start')
    Stop()
  }

  return (
    <div className='time'>
      <div className='title'>
        <h2>{title}</h2>
      </div>

      <div className='time-render'>
        <p>
          <span
            className='value'
            onClick={handleInput}
          >
            {time}
          </span>
        </p>
      </div>

      <div className='buttons-container'>
        <Button
          text={nameButton}
          clickFunct={startButton}
        />

        <Button
          text='Stop'
          isButtonClick={false}
          clickFunct={stopButton}
        />
      </div>

      <div className={`container-input ${inputToggle ? '' : 'invisible'}`}>
        <InputTime select={type} handleOk={handleOk} />
      </div>
    </div>
  )
}

export default Time
