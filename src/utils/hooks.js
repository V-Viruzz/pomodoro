import { useState } from "react";
// import mySound from "../assets/pomoStart.mp3";
// import mySound2 from "../assets/pomoFinal.mp3";
import { convertToMil, formatTime } from "./convert";

const NOTIFICATION_TITLE = "Pomodoro ACABO!";
const NOTIFICATION_BODY =
  "Tomate 5 minutos de descanso, preferiblemente no sentado";
const CLICK_MESSAGE = "Notification clicked!";

const notifi = () => {
  new Notification(NOTIFICATION_TITLE, {
    body: NOTIFICATION_BODY,
  }).onclick = () => console.log(CLICK_MESSAGE);
};

const useTimer = ({ res = 0 } = {}) => {
  // const [audioBreak] = useState(new Audio(mySound));
  // const [audioStart] = useState(new Audio(mySound2));
  const [time, setTime] = useState("00:00:00");
  const [interval, setIntervalReact] = useState(0);
  const [toggleReset, setToggleReset] = useState(false);
  const setValue = (value) => setTime(value);
  let breakTime = true;
  let timeMillis;
  timeMillis = convertToMil(time);

  const fnStart = () => {
    let dateNow = new Date().getSeconds();
    setToggleReset(!toggleReset);

    // Condicional para chrono
    if (res == "chrono" && toggleReset) {
      timeMillis = 0;
      setToggleReset(false);
      setTime(formatTime(timeMillis));
      console.log("reset");
      fnStop();
      return;
    }
    setIntervalReact(
      setInterval(() => {
        // Condicion para Pomodoro
        if (timeMillis <= 0 && breakTime && res == "pomo") {
          timeMillis = 5000 + 1000;
          breakTime = false;
          audioBreak.volume = 0.3;
          audioBreak.play();
          notifi();
          console.log("pomo start");
        } else if (timeMillis <= 0 && !breakTime && res == "pomo") {
          timeMillis = convertToMil(time) + 1000;
          breakTime = true;
          // audioStart.volume = 0.3;
          // audioStart.play();
          notifi();
          console.log("pomo descam");
        }

        // Condicion para Timer
        if (timeMillis <= 0 && res == "timer") {
          // audioBreak.volume = 0.3;
          // audioBreak.play();
          notifi();
          console.log('stop timer', interval);
          clearInterval(interval);
          return;
        }

        const dateIncre = new Date().getSeconds();

        // Ejecucion cada segundo
        if (dateNow !== dateIncre) {
          dateNow = dateIncre;
          if (res == "chrono") {
            timeMillis = timeMillis + 1000;
          } else {
            timeMillis = timeMillis - 1000;
          }

          setTime(formatTime(timeMillis));
        }
      }, 500)
    );
  };
  const fnStop = () => {
    clearInterval(interval);
    console.log('stop timer', interval);
  };

  return {
    time,
    setValue,
    fnStart,
    fnStop,
  };
};

export default useTimer;
