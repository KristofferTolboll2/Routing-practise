import React from 'react'
import './Success.css'

const success = (props) =>{
  console.log("success")
    return( <div className="succes">
    <h1>Hello!</h1>
    <p>{props.inputName} Du har sgu scoret en jackpot</p>
    <p>{props.inputSname} Er sgu en laks udover det sædvanelige!</p>
    <p>I har scorede hele {props.percentage} procent</p>
    <p>Jeg synes du skulle invitere hende på data med det samme</p>
  </div>
    )
}

export default success