// import { useState } from 'react'
import './App.css'
import Time from "./components/Time";

function App() {
  // const [count, setCount] = useState(0)

  function fnStart() {
    console.log('wtf start');
  }
  function fnStop() {
    console.log('wtf stop');
  }
  return (
    <div className="App">
      <main className="container-app">
        <div className="container-time">
        <Time title="Pomodoro" valueTime="00:00" clickStart={fnStart} clickStop={fnStop}/>
        <Time title="Timer" valueTime="00:00" clickStart={fnStart} clickStop={fnStop}/>
        <Time title="Chronometer" valueTime="00:00" clickStart={fnStart} clickStop={fnStop}/>
        </div>
      </main>
    </div>
  )
}

export default App





