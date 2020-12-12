import React from "react";
import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: auto ;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px aquamarine;
  padding: 18px;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: aliceblue;
  background-color: blue;
`;

const StyledInput = styled.input`
  padding: 8px;
  outline-color: aquamarine;
`;

const person = (props) => {

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name}! My age is {props.age} and My Hobbies are{" "}
        {props.hobbies}
      </p>
      <StyledInput
        type="text"
        onChange={props.changed}
        value={props.hobbies}
      />
    </StyledDiv>
  );
};
export default person;
