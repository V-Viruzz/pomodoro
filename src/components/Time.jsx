import React, { useState } from 'react'
import Button from './Button'
import useTimer from '../utils/hooks'
// import { convertPretty } from './utils/convert'
import InputTime from './InputTime'
import './Style/Time.css'

// eslint-disable-next-line react/prop-types
function Time ({ title, type }) {
  const time = useTimer({ res: type })

  const [inputToggle, setInputToggle] = useState(false)
  const [resetBtn, setResetBtn] = useState(true)
  const [nameButton, setnameButton] = useState('Start')

  const ButtonToggle = () => {
    if (time.time === '00:00') return
    resetBtn ? setnameButton('Reset') : setnameButton('Start')
    setResetBtn(!resetBtn)
    setInputToggle(false)
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
            onClick={() => {
              if (title === 'Chronometer') return
              setInputToggle(!inputToggle)
            }}
          >
            {time.time}
          </span>
        </p>
      </div>

      <div className='buttons-container'>
        <Button
          text={nameButton}
          clickFunct={() => {
            ButtonToggle()
            time.Start()
          }}
        />

        <Button
          text='Stop'
          isButtonClick={false}
          clickFunct={() => {
            // nameButton == 'Reset' ? setnameButton('Start') : ''
            time.Stop()
          }}
        />
      </div>

      <div className={`container-input ${inputToggle ? '' : 'invisible'}`}>
        <InputTime onChange={time.handleValue} />
      </div>
    </div>
  )
}

export default Time
