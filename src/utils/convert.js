const convertPretty = (str) => {
  const dataArray = str.split(":");
  const hr = dataArray[0] === "00" ? "" : `${dataArray[0]}:`;
  return `${hr}${dataArray[1]}:${dataArray[2]}`;
};

const convertToMil = (time) => {
  let value = time.split(":");
  let secondsToMs = parseInt(value[2]) * 1000;
  let minutesToMs = parseInt(value[1]) * 60000;
  let hoursToMs = parseInt(value[0]) * 3600000;
  time = secondsToMs + minutesToMs + hoursToMs;

  return time;
};

const formatTime = (timeMs) => {
  const ms = timeMs;
  const seg = parseInt(ms / 1000) % 60;
  const min = parseInt(ms / 60000) % 60;
  const hr = parseInt(ms / 3600000) % 24;
  const segStr = `0${seg}`.slice(-2);
  const minStr = `0${min}`.slice(-2);
  const hrStr = `0${hr}`.slice(-2);
  const timeAll = `${hrStr}:${minStr}:${segStr}`;

  return timeAll;
};


export { convertPretty, convertToMil, formatTime }