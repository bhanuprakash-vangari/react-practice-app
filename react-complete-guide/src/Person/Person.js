import React from "react"
import "./Person.css"

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name}! My age is {props.age} and My Hobbies are{" "}
        {props.hobbies}
      </p>
      <input className="input-text" type="text" onChange={props.changed} value={props.hobbies} />
    </div>
  )
}
export default person
