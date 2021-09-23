import React, { Component } from "react";
import "./input.css";

const Input = ({name, type, placeholder, onChange, value, id}) => {
    return (
        <div className = "mt-1 overflow align-items-center flex-direction-column">
            <input type = {type} id = {id} name = {name} placeholder = {placeholder} value = {value}  className ="input-style" onChange = {onChange}></input>
        </div> 
    )
  }

export default Input;
