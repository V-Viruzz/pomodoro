import React, { useState } from 'react'
import Button from './Button'
import useTimer from '../utils/hooks'
// import { convertPretty } from './utils/convert'
import InputTime from './InputTime'
import './Style/Time.css'

function Time ({ title }) {
  // const pomodoro = useTimer({ res: 'pomo' })
  // const timer = useTimer({ res: 'timer' })
  // const chrono = useTimer({ res: 'chrono' })
  const timeHook = useTimer({ res: title })

  const [inputToggle, setInputToggle] = useState(true)
  // const [resetBtn, setResetBtn] = useState(reset)
  const [nameButton, setnameButton] = useState('Start')

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
              if (!title === 'Chronometer') {
                setInputToggle(!inputToggle)
              }
            }}
          >
            {timeHook.time}
          </span>
        </p>
      </div>

      <div className='buttons-container'>
        <Button
          text={nameButton}
          isButtonClick
          clickFunct={() => {
            // resetBtn ? setnameButton('Reset') : setnameButton('Start')
            // reset ? setResetBtn(!resetBtn) : ''

            timeHook.fnStart()
            setInputToggle(true)
          }}
        />

        <Button
          text='Stop'
          isButtonClick={false}
          clickFunct={() => {
            // nameButton == 'Reset' ? setnameButton('Start') : ''
            timeHook.fnStop()
          }}
        />

      </div>
      <div className={`container-input ${inputToggle ? 'invisible' : ''}`}>
        <InputTime />
      </div>
    </div>
  )
}

export default Time
