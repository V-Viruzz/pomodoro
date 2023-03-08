import { createContext, useState } from 'react'

export const InputContext = createContext()

export function InputProvider ({ children }) {
  const [timePomo, setTimePomo] = useState(
    {
      type: 'pomo',
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  )

  const [timeTimer, setTimeTimer] = useState(

    {
      type: 'timer',
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  )

  return (
    <InputContext.Provider value={{ timePomo, setTimePomo, timeTimer, setTimeTimer }}>
      {children}
    </InputContext.Provider>
  )
}
