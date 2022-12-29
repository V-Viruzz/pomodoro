import React, { useState } from "react";
import "./App.css";
import Time from "./components/Time";
import InputTime from "./components/InputTime";
import mySound from "./assets/pomoStart.mp3";
import mySound2 from "./assets/pomoFinal.mp3";
import { convertPretty, convertToMil, formatTime } from './utils/convert'
// import useTimer from './utils/hooks'
let interval;


const useTimer = ({ res = 0 } = {}) => {
  const [audioBreak] = useState(new Audio(mySound));
  const [audioStart] = useState(new Audio(mySound2));
  const [time, setTime] = useState("00:00:00");
  const setValue = (value) => setTime(value);
  let timeMillis;
  let breakTime = true;
  timeMillis = convertToMil(time);

  const fnStart = () => {
    let dateNow = new Date().getSeconds();
    interval = setInterval(() => {
      if (timeMillis <= 0 && breakTime && res) {
        breakTime = false;
        timeMillis = 5000 + 1000;
        audioBreak.volume = 0.3;
        audioBreak.play();
      } else if (timeMillis <= 0 && !breakTime && res) {
        timeMillis = convertToMil(time) + 1000;
        breakTime = true;
        audioStart.volume = 0.3;
        audioStart.play();
      }

      // condicion para timer
      if (timeMillis <= 0 && !res) {
        audioBreak.volume = 0.3;
        audioBreak.play();
        clearInterval(interval);
        return;
      }
      const dateIncre = new Date().getSeconds();

      // Ejecucion cada segundo
      if (dateNow !== dateIncre) {
        dateNow = dateIncre;
        timeMillis = timeMillis - 1000;
        setTime(formatTime(timeMillis));
      }
    }, 500);
  };
  const fnStop = () => {
    clearInterval(interval);
    // setTime(formatTime(timeMillis));
  };
  return {
    time,
    setValue,
    fnStart,
    fnStop,
  };
};

function App() {
  const pomodoro = useTimer({ res: true });
  const timer = useTimer();
  const chrono = useTimer();

  return (
    <div className="App">
      <main className="container-app">
        <div className="container-time">
          <Time
            title="Pomodoro"
            valueTime={convertPretty(pomodoro.time)}
            clickStart={pomodoro.fnStart}
            clickStop={pomodoro.fnStop}
            input={
              <InputTime
                onChange={(event, value) => pomodoro.setValue(value)}
              />
            }
          />
          <Time
            title="Timer"
            valueTime={convertPretty(timer.time)}
            clickStart={timer.fnStart}
            clickStop={timer.fnStop}
            input={
              <InputTime onChange={(event, value) => timer.setValue(value)} />
            }
          />
          <Time
            title="Chronometer"
            valueTime={convertPretty(chrono.time)}
            clickStart={chrono.fnStart}
            clickStop={chrono.fnStop}
            input={
              <InputTime onChange={(event, value) => chrono.setValue(value)} />
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;

// <div className="container-input">
//           <TimeField
//             value={"00:30:00"}
//             colon="red"
//             showSeconds={true}
//             onChange={(event, value) => console.log(event, value)}
//           />
//         </div>
