import React, { Component } from "react";
import "./select.css";


const Select = ({name, onChange}) => {
    return (
        <select name = {name} className = "select-style" onChange = {onChange}> 
              <option value disabled selected>Select your race</option>
              <option value  = "Coloured">Coloured</option>
              <option value  = "White">White</option>
              <option value  = "Black">Black</option>
              <option value  = "Asian/Indian">Asian/Indian</option>
        </select>
    )
  }

export default Select;
