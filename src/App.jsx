import React, { useEffect } from 'react'
import './App.css'
import Time from './components/Time'

function App () {
  useEffect(() => {
    Notification.requestPermission()
    // .then((response) => console.log("respuesta", response));
  }, [])

  return (
    <div className='App'>
      <main className='container-app'>
        <div className='container-time'>
          <Time title='Pomodoro' type='pomo' />
          <Time title='Timer' type='timer' />
          <Time title='Chronometer' type='chrono' />
        </div>
      </main>
    </div>
  )
}

export default App
