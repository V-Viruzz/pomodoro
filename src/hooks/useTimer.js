import { useState, useRef, useCallback } from 'react'
import { convertPretty, convertToMil, formatStringTime } from '../utils/convert'
import notification from '../utils/notification'

const useTimer = ({ type = 0 } = {}) => {
  const [time, setTime] = useState('00:00')
  const intervalRef = useRef()

  const Start = useCallback(({ time, toggleReset }) => {
    let dateNow = new Date().getSeconds()
    let timeMillis = convertToMil(time)
    let breakTime = true

    console.log(toggleReset)
    if (!toggleReset) {
      timeMillis = 0
      setTime(formatStringTime(timeMillis))
      Stop()
      return
    }

    if (type === 'chrono') {
      intervalRef.current = setInterval(() => {
        const dateIncre = new Date().getSeconds()

        if (dateNow !== dateIncre) {
          dateNow = dateIncre
          timeMillis = timeMillis + 1000
          setTime(formatStringTime(timeMillis))
        }
      }, 300)
      return
    }

    // let dateNow = new Date().getSeconds()

    intervalRef.current = setInterval(() => {
      console.log(intervalRef.current)
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
    }, 300)
  }, [])

  const Stop = () => {
    clearInterval(intervalRef.current)
  }

  const handleValue = (date, timeString) => {
    setTime(convertPretty(timeString))
    Stop()
  }

  return { time, Start, Stop, handleValue }
}

export default useTimer
