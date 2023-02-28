import { useEffect, useState } from 'react'
import Time from './components/Time/Time'
import Setting from './components/Setting/Setting'
import './App.css'

function App () {
  const [classToggle, setClassToggle] = useState(true)

  const handleClassToggle = () => setClassToggle(!classToggle)

  useEffect(() => {
    window.Notification.requestPermission()
    // .then((response) => console.log('respuesta', response))
  }, [])

  return (
    <div className='App'>

      <header className='container-header'>
        <div
          className='button-setting'
          onClick={handleClassToggle}
        >☰
        </div>
      </header>

      <div className='container-time'>
        <Time title='Pomodoro' type='pomo' />
        <Time title='Timer' type='timer' />
        <Time title='Chronometer' type='chrono' />
      </div>

      <footer className='container-header' />

      <Setting classToggle={classToggle} handleClassToggle={handleClassToggle} />

    </div>
  )
}

export default App
