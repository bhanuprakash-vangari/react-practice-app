import React from "react";
import classes from "./Person.css";

const person = (props) => {

  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name}! My age is {props.age} and My Hobbies are{" "}
        {props.hobbies}
      </p>
      <input
        className={classes.InputText} 
        type="text"
        onChange={props.changed}
        value={props.hobbies}
      />
    </div>
  );
};
export default person;
