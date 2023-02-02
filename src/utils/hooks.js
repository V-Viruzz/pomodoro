import { useState } from 'react'
import { convertPretty, convertToMil, formatStringTime } from './convert'
import notification from './notification'

const useTimer = ({ res = 0 } = {}) => {
  const [time, setTime] = useState('00:00')
  const [toggleReset, setToggleReset] = useState(false)
  const [intervalState, setIntervalState] = useState(null)
  let breakTime = true
  let timeMillis = convertToMil(time)
  let interval

  const Start = () => {
    if (!toggleReset) return
    if (res === 'chrono' && toggleReset) {
      timeMillis = 0
      setTime(formatStringTime(timeMillis))
      console.log('reset')
      Stop()
      setToggleReset(false)
      return
    }

    setToggleReset(!toggleReset)

    let dateNow = new Date().getSeconds()

    // Condicional para chrono

    interval = setInterval(() => {
      // Condicion para Pomodoro
      if (timeMillis <= 0 && breakTime && res === 'pomo') {
        timeMillis = 5000 + 1000
        breakTime = false
        notification('start')
      } else if (timeMillis <= 0 && !breakTime && res === 'pomo') {
        timeMillis = convertToMil(time) + 1000
        breakTime = true
        notification('break')
      }

      // Condicion para Timer
      if (timeMillis <= 0 && res === 'timer') {
        notification('break')
        clearInterval(interval)
        return
      }

      const dateIncre = new Date().getSeconds()

      // Ejecucion cada segundo
      if (dateNow !== dateIncre) {
        dateNow = dateIncre
        res === 'chrono'
          ? timeMillis = timeMillis + 1000
          : timeMillis = timeMillis - 1000

        setTime(formatStringTime(timeMillis))
      }
    }, 500)
    setIntervalState(interval)
  }

  const Stop = () => {
    clearInterval(intervalState)
    setToggleReset(true)
  }

  const handleValue = (date, timeString) => {
    setTime(convertPretty(timeString))
    Stop()
  }

  return {
    time,
    Start,
    Stop,
    handleValue
  }
}

export default useTimer
