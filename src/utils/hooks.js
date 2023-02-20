import { useState, useRef } from 'react'
import { convertPretty, convertToMil, formatStringTime } from './convert'
import notification from './notification'

const useTimer = ({ type = 0 } = {}) => {
  const [time, setTime] = useState('00:00')
  const [toggleReset, setToggleReset] = useState(false)
  const intervalRef = useRef()
  let breakTime = true
  let timeMillis = convertToMil(time)
  // let interval

  const Start = () => {
    let dateNow = new Date().getSeconds()

    if (type === 'chrono') {
      if (toggleReset) {
        timeMillis = 0
        setTime(formatStringTime(timeMillis))
        console.log('reset')
        Stop()
        setToggleReset(false)
        return
      }

      intervalRef.current = setInterval(() => {
        const dateIncre = new Date().getSeconds()

        if (dateNow !== dateIncre) {
          dateNow = dateIncre
          type === 'chrono'
            ? timeMillis = timeMillis + 1000
            : timeMillis = timeMillis - 1000

          setTime(formatStringTime(timeMillis))
        }
      }, 500)
      return
    }

    // let dateNow = new Date().getSeconds()

    intervalRef.current = setInterval(() => {
      // Condicion para Pomodoro
      if (timeMillis <= 0 && breakTime && type === 'pomo') {
        timeMillis = 5000 + 1000
        breakTime = false
        notification('start')
      } else if (timeMillis <= 0 && !breakTime && type === 'pomo') {
        timeMillis = convertToMil(time) + 1000
        breakTime = true
        notification('break')
      }

      // Condicion para Timer
      if (timeMillis <= 0 && type === 'timer') {
        notification('break')
        clearInterval(intervalRef.current)
        return
      }

      const dateIncre = new Date().getSeconds()

      // Ejecucion cada segundo
      if (dateNow !== dateIncre) {
        dateNow = dateIncre
        timeMillis = timeMillis - 1000
        setTime(formatStringTime(timeMillis))
      }
    }, 500)
  }

  const Stop = () => {
    clearInterval(intervalRef.current)
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
