import React, { Component } from "react";
import MatchWrapper from "../HOC/MatchWrapper";

const match = props => {
  console.log(props.type)
  return (
    <div>
      {props.show ? (
        <div>
          <h1>Hello!</h1>
          <p>{props.inputName} Du har sgu scoret en jackpot</p>
          <p>{props.inputSname} Er sgu en laks udover det sædvanelige!</p>
          <p>I har scorede hele {props.percentage} procent</p>
          <p>Jeg synes du skulle invitere hende på data med det samme</p>
        </div>
      ) : null}
    </div>
  );
};
export default MatchWrapper(match);
