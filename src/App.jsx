import React, { useState, useEffect } from "react";
import "./App.css";
import Time from "./components/Time";
import InputTime from "./components/InputTime";

const convertPretty = (str) => {
  const dataArray = str.split(":");
  const hr = dataArray[0] === "00" ? "" : `${dataArray[0]}:`;
  return `${hr}${dataArray[1]}:${dataArray[2]}`;
};

function convertToMil(time) {
  let value = time.split(":");
  let secondsToMs = parseInt(value[2]) * 1000;
  let minutesToMs = parseInt(value[1]) * 60000;
  let hoursToMs = parseInt(value[0]) * 3600000;
  time = secondsToMs + minutesToMs + hoursToMs;

  return time;
}

function formatTime(timeMs) {
  const ms = timeMs;
  const seg = parseInt(ms / 1000) % 60;
  const min = parseInt(ms / 60000) % 60;
  const hr = parseInt(ms / 3600000) % 24;
  const segStr = `0${seg}`.slice(-2);
  const minStr = `0${min}`.slice(-2);
  const hrStr = `0${hr}`.slice(-2);
  const timeAll = `${hrStr}:${minStr}:${segStr}`;

  return timeAll;
}

const useTimer = () => {
  const [time, setTime] = useState("00:00:00");
  const setValue = (value) => setTime(value);
  let timeMillis;
  let breakTime = true;
  timeMillis = convertToMil(time);

  const fnstart = () => {
    let dateNow = new Date().getSeconds();
    setInterval(() => {
      if (timeMillis <= 0 && breakTime) {
        breakTime = false;
        timeMillis = 5000;
      } else if (timeMillis <= 0 && !breakTime) {
        timeMillis = convertToMil(time);
        breakTime = true;
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
  return {
    time,
    setValue,
    fnstart,
  };
};

function App() {
  const pomodoro = useTimer();
  const timer = useTimer();
  const chrono = useTimer();

  function fnStart() {
    console.log("wtf start");
    // console.log(value);
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
            valueTime={convertPretty(pomodoro.time)}
            clickStart={pomodoro.fnstart}
            clickStop={fnStop}
            input={
              <InputTime
                onChange={(event, value) => pomodoro.setValue(value)}
              />
            }
          />
          <Time
            title="Timer"
            valueTime={convertPretty(timer.time)}
            clickStart={fnStart}
            clickStop={fnStop}
            input={
              <InputTime
                onChange={(event, value) =>
                  timer.setValue(convertPretty(value))
                }
              />
            }
          />
          <Time
            title="Chronometer"
            valueTime={convertPretty(chrono.time)}
            clickStart={fnStart}
            clickStop={fnStop}
            input={
              <InputTime
                onChange={(event, value) =>
                  chrono.setValue(convertPretty(value))
                }
              />
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
