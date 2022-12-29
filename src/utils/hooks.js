import { useState } from "react";
import mySound from "../assets/pomoStart.mp3";
import mySound2 from "../assets/pomoFinal.mp3";
import { convertToMil, formatTime } from "./convert";
let interval;

const NOTIFICATION_TITLE = "Pomodoro ACABO!";
const NOTIFICATION_BODY =
  "Tomate 5 minutos de descanso, preferiblemente no sentado";
const CLICK_MESSAGE = "Notification clicked!";

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
        new Notification(NOTIFICATION_TITLE, {
          body: NOTIFICATION_BODY,
        }).onclick = () => console.log(CLICK_MESSAGE);
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
  };
  return {
    time,
    setValue,
    fnStart,
    fnStop,
  };
};

export default useTimer;
