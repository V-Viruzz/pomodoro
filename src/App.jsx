import * as React from "react";
import "./App.css";
import Time from "./components/Time";

function App() {
  const [time, setTime] = React.useState("00:00");

  function fnStart() {
    console.log("wtf start");
    console.log(value);
    // setTime(`${value.$H}:${value.$m}:${value.$s}`)
  }
  function fnStop() {
    console.log("wtf stop");
  }
  return (
    <div className="App">
      <main className="container-app">
        <div className="container-time">
          <Time
            title="Pomodoro"
            valueTime={time}
            clickStart={fnStart}
            clickStop={fnStop}
          />
          <Time
            title="Timer"
            valueTime={time}
            clickStart={fnStart}
            clickStop={fnStop}
          />
          <Time
            title="Chronometer"
            valueTime={time}
            clickStart={fnStart}
            clickStop={fnStop}
          />
        </div>
        {/* <div className="container-input">
        </div> */}
      </main>
    </div>
  );
}

export default App;
