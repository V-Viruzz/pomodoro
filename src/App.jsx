import React, { useEffect } from "react";
import "./App.css";
import Time from "./components/Time";
import InputTime from "./components/InputTime";
import useTimer from "./utils/hooks";
import { convertPretty } from "./utils/convert";

function App() {
  const pomodoro = useTimer({ res: "pomo" });
  const timer = useTimer({ res: "timer" });
  const chrono = useTimer({ res: "chrono" });

  useEffect(() => {
    Notification.requestPermission();
    // .then((response) => console.log("respuesta", response));
  }, []);

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
            reset={true}
            // input={
            //   <InputTime onChange={(event, value) => chrono.setValue(value)} />
            // }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
