import React from "react";
import TimeField from "react-simple-timefield";

import "./Style/InputTime.css";

function InputTime({ onChange }) {
  return (
    <div className="container-input-son">
      <TimeField value={"00:00:00"} showSeconds={true} onChange={onChange} />
    </div>
  );
}

export default InputTime;
