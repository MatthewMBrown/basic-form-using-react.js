import React, { Component } from "react";
import "./radio.css";

const Radio = ({type, name, placeholder, onChange, value, id, children}) => {
    return (
        <input type = {type}
               id = {id} 
               name = {name} 
               placeholder = {placeholder} 
               value = {value}  
               className = "" 
               children = {children} 
               onChange = {onChange}>
        </input>
    )
  }

export default Radio;
