/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
const Card = (props) => {
  return (
    <div>
        <h1 style={{ backgroundColor: props.color, transition: 'background-color 0.5s' }}>{props.name}</h1>
        <p>{props.description}</p>
        <button onClick={props.changeColor}>Change Color</button>
        `{props.children}`
    </div>
  )
}
export default Card;
