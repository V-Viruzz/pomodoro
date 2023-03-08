import mySound from '../assets/pomoStart.mp3'
import mySound2 from '../assets/pomoFinal.mp3'

const NOTIFICATION_TITLE = 'Pomodoro ACABO!'
const NOTIFICATION_BODY =
  'Tomate 5 minutos de descanso, preferiblemente no sentado'
const CLICK_MESSAGE = 'Notification clicked!'

function notification (typeAudio) {
  const audioBreak = new window.Audio(mySound)
  const audioStart = new window.Audio(mySound2)
  const noti = new window.Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  noti.onclick = () => console.log(CLICK_MESSAGE)

  if (typeAudio === 'break') {
    audioBreak.volume = 0.3
    audioBreak.play()
  } else if (typeAudio === 'start') {
    audioStart.volume = 0.3
    audioStart.play()
  }
}

export default notification
