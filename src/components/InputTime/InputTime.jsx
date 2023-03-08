import React from 'react'
// import { TimePicker } from 'antd'
import TimePicker from '../TimePicker/TimePicker'
import './InputTime.css'

function InputTime ({ select, handleOk }) {
  return (
    <div className='input-conteiner'>
      <TimePicker select={select} handleOk={handleOk} />
    </div>
  )
}
export default InputTime
