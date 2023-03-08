import Input from './Input'
import useInput from '../../hooks/useInput'
// import useTimer from '../../hooks/useTimer'
import './TimePicker.css'

export default function TimePicker ({ select, handleOk }) {
  const { setTimeFilter, timePomo, timeTimer } = useInput(select)
  // const { handleValue } = useTimer({ type: select })

  const eventIncrement = (type) => {
    const value = select === 'pomo' ? timePomo : timeTimer
    setTimeFilter({ type, value: value[`${type}`] + 1 })
  }
  const eventDecrement = (type) => {
    const value = select === 'pomo' ? timePomo : timeTimer
    setTimeFilter({ type, value: value[`${type}`] - 1 })
  }
  // const handleOk = () => {
  //   handleValue(timeString)
  //   handleVisible()
  // }

  return (
    <div className='timer-picker'>
      <div className='arrow-conteiner'>
        <ButtonArrow
          text='▲'
          clickEvent={() => eventIncrement('hours')}
        />
        <ButtonArrow
          text='▲'
          clickEvent={() => eventIncrement('minutes')}
        />
        <ButtonArrow
          text='▲'
          clickEvent={() => eventIncrement('seconds')}
        />
      </div>
      <div className='input-conteiner'>
        <div className='input'>
          <Input select={select} type='hours' />

          <div className='time-div'>
            <div>:</div>
          </div>

          <Input select={select} type='minutes' />

          <div className='time-div'>
            <div>:</div>
          </div>

          <Input select={select} type='seconds' />
        </div>
      </div>
      <div className='arrow-conteiner'>
        <ButtonArrow
          text='▼'
          clickEvent={() => eventDecrement('hours')}
        />
        <ButtonArrow
          text='▼'
          clickEvent={() => eventDecrement('minutes')}
        />
        <ButtonArrow
          text='▼'
          clickEvent={() => eventDecrement('seconds')}
        />
      </div>
      <div className='arrow-conteiner'>
        <button className='button-enter' onClick={handleOk}>Ok</button>

      </div>
    </div>
  )
}

function ButtonArrow ({ text, clickEvent }) {
  return (
    <div className='arrow-column'>
      <div className='button-arrow' onClick={clickEvent}>
        {text}
      </div>
    </div>
  )
}
