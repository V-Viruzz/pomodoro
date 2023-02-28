import React from 'react'
import { TimePicker } from 'antd'
import './InputTime.css'

function InputTime ({ onChange }) {
  return (
    <div className='input-conteiner'>
      <TimePicker
        popupStyle={{
          scale: '1.5'
        }}
        showNow={false}
        placeholder='Select a time'
        onChange={onChange}
      />
    </div>
  )
}
export default InputTime
