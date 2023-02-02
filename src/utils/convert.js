const convertPretty = (str) => {
  const dataArray = str.split(':')
  const hr = dataArray[0] === '00' ? '' : `${dataArray[0]}:`
  return `${hr}${dataArray[1]}:${dataArray[2]}`
}

const convertToMil = (time) => {
  const value = time.split(':')

  const secondsToMs = value[2] ? parseInt(value[2]) * 1000 : parseInt(value[1]) * 1000
  const minutesToMs = value[2] ? parseInt(value[1]) * 60000 : parseInt(value[0]) * 60000
  const hoursToMs = value[2] ? parseInt(value[0]) * 3600000 : 0
  time = hoursToMs + minutesToMs + secondsToMs

  return time
}

const formatStringTime = (timeMs) => {
  const ms = timeMs
  const seg = parseInt(ms / 1000) % 60
  const min = parseInt(ms / 60000) % 60
  const hr = parseInt(ms / 3600000) % 24
  const segStr = `0${seg}`.slice(-2)
  const minStr = `0${min}`.slice(-2)
  const hrStr = `0${hr}`.slice(-2)
  const timeAll = `${hrStr}:${minStr}:${segStr}`

  const pretty = convertPretty(timeAll)
  return pretty
  // return timeAll
}

export { convertPretty, convertToMil, formatStringTime }
