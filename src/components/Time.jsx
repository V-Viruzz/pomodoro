import React from "react";
import Button from "./Button";
import "../Style/Time.css";

function Time({ title, valueTime, clickStart, clickStop, input, hideDiv }) {
  const [classDiv, setClass] = React.useState(true);

  return (
    <div className="time">
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="time-render">
        <p>
          <span
            className="value"
            onClick={() => {
              clickStop();
              setClass(!classDiv);
            }}
          >
            {valueTime}
          </span>
        </p>
      </div>

      <div className="buttons-container">
        <Button text="Start" isButtonClick={true} clickFunct={() => {
          clickStart()
          setClass(true)
          }} />
        <Button text="Stop" isButtonClick={false} clickFunct={clickStop} />
      </div>
      <div className={`container-input ${classDiv ? "invisible" : ""}`}>
        {input}
      </div>
    </div>
  );
}

export default Time;
