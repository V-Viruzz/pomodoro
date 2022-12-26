import React from "react";
import Button from "./Button";
import "../Style/Time.css";

function Time({ title, valueTime, clickStart, clickStop }) {
  return (
    <div className="time">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="time-render">
        <p>
          <span className="value">{valueTime}</span>
        </p>
      </div>
      <div className="buttons-container">
        <Button text="Start" isButtonClick={true} clickFunct={clickStart} />
        <Button text="Stop" isButtonClick={false} clickFunct={clickStop} />
      </div>
    </div>
  );
}

export default Time;
