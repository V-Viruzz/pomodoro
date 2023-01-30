import { useState } from 'react'
import { convertToMil, formatTime } from './convert'
import mySound from '../assets/pomoStart.mp3'
import mySound2 from '../assets/pomoFinal.mp3'

const NOTIFICATION_TITLE = 'Pomodoro ACABO!'
const NOTIFICATION_BODY =
  'Tomate 5 minutos de descanso, preferiblemente no sentado'
const CLICK_MESSAGE = 'Notification clicked!'

const useTimer = ({ res = 0 } = {}) => {
  const [audioBreak] = useState(new Audio(mySound))
  const [audioStart] = useState(new Audio(mySound2))
  const [time, setTime] = useState('00:00:00')
  const [toggleReset, setToggleReset] = useState(false)
  const setValue = (value) => setTime(value)
  let breakTime = true
  let timeMillis
  let interval
  timeMillis = convertToMil(time)

  function notifi (typeAudio) {
    const noti = new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
    noti.onclick = () => console.log(CLICK_MESSAGE)

    if (typeAudio === 'break') {
      audioBreak.volume = 0.3
      audioBreak.play()
    } else if (typeAudio === 'start') {
      audioStart.volume = 0.3
      audioStart.play()
    }
  }
  const fnStart = () => {
    let dateNow = new Date().getSeconds()
    setToggleReset(!toggleReset)

    // Condicional para chrono
    if (res === 'chrono' && toggleReset) {
      timeMillis = 0
      setToggleReset(false)
      setTime(formatTime(timeMillis))
      console.log('reset')
      fnStop()
      return
    }
    interval = setInterval(() => {
      // Condicion para Pomodoro
      if (timeMillis <= 0 && breakTime && res === 'pomo') {
        timeMillis = 5000 + 1000
        breakTime = false
        console.log('pomo start')
        notifi('start')
      } else if (timeMillis <= 0 && !breakTime && res === 'pomo') {
        timeMillis = convertToMil(time) + 1000
        breakTime = true
        notifi('break')
      }

      // Condicion para Timer
      if (timeMillis <= 0 && res === 'timer') {
        console.log('stop timer', interval)
        notifi('break')
        clearInterval(interval)
        return
      }

      const dateIncre = new Date().getSeconds()

      // Ejecucion cada segundo
      if (dateNow !== dateIncre) {
        dateNow = dateIncre
        if (res === 'chrono') {
          timeMillis = timeMillis + 1000
        } else {
          timeMillis = timeMillis - 1000
        }

        setTime(formatTime(timeMillis))
      }
    }, 500)
  }
  const fnStop = () => {
    console.log('stop timer', interval)
    clearInterval(interval)
  }

  return {
    time,
    setValue,
    fnStart,
    fnStop
  }
}

export default useTimer
