import * as React from "react";
import dayjs from "dayjs";
import "./App.css";
import Time from "./components/Time";
import SecondsTimePicker from "./components/SecondsTimePicker";

function App() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  const [time, setTime] = React.useState('00:00');

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
        <div className="container-input">
          <SecondsTimePicker
            value={value}
            fnChange={(newValue) => {
              setTime(`${newValue.$H}:${newValue.$m}:${newValue.$s}`)
              setValue(newValue);
            }}
          ></SecondsTimePicker>
        </div>
      </main>
    </div>
  );
}

export default App;
