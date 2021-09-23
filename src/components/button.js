import React, { Component } from "react";
import "./button.css";

const STYLES =  [
    "btn--primary--solid", 
    "btn--warning--solid",
    "btn--danger--solid", 
    "btn--success--solid",
    "btn--primary--outline", 
    "btn--warning--outline",
    "btn--primary--outline", 
    "btn--warning--outline",
];

const SIZES = ["btn--medium", "btn--small"];

const Button = ({type, onClick, children, buttonStyle, buttonSize}) => {
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <div className = "mt-1 overflow align-items-center flex-direction-column">
            <button type = {type} 
                className = {'btn ' + checkButtonStyle+' '+checkButtonSize + ' text-upperCase'} 
                onClick = {onClick}>
                {children}
            </button>
        </div> 
    )
  }

export default Button;