import { useContext } from 'react'
import { InputContext } from '../context/inputContext'

export default function useInput (select) {
  const { timePomo, setTimePomo, timeTimer, setTimeTimer } = useContext(InputContext)

  const selectTime = select === 'pomo' ? timePomo : timeTimer
  const hrStr = `0${selectTime.hours}`.slice(-2)
  const minStr = `0${selectTime.minutes}`.slice(-2)
  const segStr = `0${selectTime.seconds}`.slice(-2)
  const timeString = `${hrStr}:${minStr}:${segStr}`

  const setTimeFilter = ({ value, type }) => {
    if (value >= 0 && value <= 60) {
      if (select === 'pomo') {
        setTimePomo((prevState) => {
          if (type === 'hours') return { ...prevState, hours: value }
          if (type === 'minutes') return { ...prevState, minutes: value }
          if (type === 'seconds') return { ...prevState, seconds: value }
        })
      }
      if (select === 'timer') {
        setTimeTimer((prevState) => {
          if (type === 'hours') return { ...prevState, hours: value }
          if (type === 'minutes') return { ...prevState, minutes: value }
          if (type === 'seconds') return { ...prevState, seconds: value }
        })
      }
    }
  }
  return { setTimeFilter, timePomo, timeTimer, timeString }
}
