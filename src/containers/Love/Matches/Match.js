import React, { Component } from "react";
import MatchWrapper from "../HOC/MatchWrapper";
import Success from '../Displays/Succes/Succes'
import Mediocre from '../Displays/Mediocore/Mediocre'
import Failure from '../Displays/Failure/Failure'


const match = (props, type) => {
  console.log(type) 
  let display = ""
  if(type="succes"){
    display = <Success {...props} />
  } else if(type="mediocore"){
    display=<Mediocre {...props}/>
  }else{
    display=<Failure {...props} />
  }
  return (
    <div>
      {props.show && 
      <div className="match"> 
        {display}
        </div>
      }
    </div>
  );
};
export default MatchWrapper(match);
