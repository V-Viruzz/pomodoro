import './Input.css'
import useInput from '../../hooks/useInput'
// import useTimer from '../../hooks/useTimer'

export default function Input ({ select, type }) {
  const { setTimeFilter, timePomo, timeTimer } = useInput(select)
  // const { handleValue } = useTimer({ type: select })
  const value = select === 'pomo' ? timePomo[`${type}`] : timeTimer[`${type}`]

  const handleInput = (event) => {
    const value = parseInt(event.target.value)
    setTimeFilter({ value, type })

    // const newState = timeString
    // handleValue(newState)
  }

  return (
    <div className='num-input'>
      <div className='input-conteiner'>
        <input
          type='text'
          placeholder='00'
          maxLength='2'
          onChange={handleInput}
          value={value}
          // value={inputValue === 0 ? 0 : inputValue}
        />
      </div>
    </div>
  )
}
