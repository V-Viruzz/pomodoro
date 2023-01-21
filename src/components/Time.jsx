import React, { useState } from "react";
import Button from "./Button";
import "./Style/Time.css";

function Time({
  title,
  valueTime,
  clickStart,
  clickStop = 0,
  input,
  reset = false,
}) {
  const [classInput, setClassInput] = useState(true);
  const [resetBtn, setResetBtn] = useState(reset);
  const [nameButton, setnameButton] = useState("Start");

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
              if (!reset) {
                clickStop();
                setClassInput(!classInput);
              }
            }}
          >
            {valueTime}
          </span>
        </p>
      </div>

      <div className="buttons-container">
        <Button
          text={nameButton}
          isButtonClick={true}
          clickFunct={() => {
            resetBtn ? setnameButton("Reset") : setnameButton("Start");
            reset ? setResetBtn(!resetBtn): '';
            
            clickStart();
            setClassInput(true);
          }}
        />

        {clickStop === 0 ? (
          console.log("no hay boton")
        ) : (
          <Button
            text="Stop"
            isButtonClick={false}
            clickFunct={() => {
              nameButton == "Reset" ? setnameButton("Start") : "";
              clickStop();
            }}
          />
        )}
      </div>
      <div className={`container-input ${classInput ? "invisible" : ""}`}>
        {input}
      </div>
    </div>
  );
}

export default Time;
