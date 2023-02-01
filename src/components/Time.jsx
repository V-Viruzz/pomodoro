import React, { useState, useEffect } from 'react'
import Button from './Button'
import useTimer from '../utils/hooks'
// import { convertPretty } from './utils/convert'
import InputTime from './InputTime'
import './Style/Time.css'

function Time({ title }) {
  // const pomodoro = useTimer({ res: 'pomo' })
  // const timer = useTimer({ res: 'timer' })
  // const chrono = useTimer({ res: 'chrono' })
  const time = useTimer({ res: title })

  const [inputToggle, setInputToggle] = useState(false)
  const [resetBtn, setResetBtn] = useState(true)
  const [nameButton, setnameButton] = useState('Start')

  const ButtonToggle = () => {
    resetBtn ? setnameButton('Pause') : setnameButton('Start')
    setResetBtn(!resetBtn)
    setInputToggle(false)
  }

  const onChange = (date, timeString) => {
    console.log(date, timeString)
    time.setValue(timeString)
  }
  // useEffect(() => {
  //   console.log(time.time)
  // }, [time.time])

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
          isButtonClick
          clickFunct={() => {
            ButtonToggle()
            time.fnStart()
          }}
        />

        <Button
          text='Stop'
          isButtonClick={false}
          clickFunct={() => {
            // nameButton == 'Reset' ? setnameButton('Start') : ''
            time.fnStop()
          }}
        />
      </div>

      <div className={`container-input ${inputToggle ? '' : 'invisible'}`}>
        <InputTime onChange={onChange} />
      </div>
    </div>
  )
}

export default Time
