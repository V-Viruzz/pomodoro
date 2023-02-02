import React from 'react'
import { TimePicker } from 'antd'
import './Style/InputTime.css'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

function InputTime ({ onChange }) {
  return (
    <div className='input-conteiner'>
      <TimePicker
        popupStyle={{
          scale: '1.5'
        }}
        placeholder='Select a time'
        onChange={onChange}
        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
      />
    </div>
  )
}
export default InputTime
