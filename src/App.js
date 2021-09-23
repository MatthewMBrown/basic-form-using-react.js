import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './index';
import NavBar from "./components/navbar";
import Input from "./components/input";
import React, { Component } from "react";
import './index.css';
import './components/button.css';
import Button from './components/button.js';
import Radio from './components/radio';
import Select from './components/select';
import { getElementError } from '@testing-library/react';

function App() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    race: "",
  });

  const [isChecked, setIsCheck] = useState("Yes");

  const[radio, setRadio] = useState("");

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleSurnameInputChange = (event) => {
    setValues({...values, surname: event.target.value})
  }

  const handleEmailInputChange = (event) => {
    setValues({...values, email: event.target.value})
  }

  const handlePhoneInputChange = (event) => {
    setValues({...values, phone: event.target.value})
  }

  const selectedRace = (event) => {
    setValues({...values, race: event.target.value});
  }

  const sumbitClick = (event) =>{
    const vEmail = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
    const vPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(values.name == "" || values.surname == "" || values.email == "" || values.phone == ""){
      alert("Please fill all required fields");
    }
    
    else if(!vEmail.test(values.email)){
      alert("Invalid email");
    }

    else if(!values.phone.match(vPhone)){
      alert("Invalid mobile number");
    }
  
    else if(radio == ""){
      alert("Please check your citizenship status");
    }

    else if(values.race == ""){
      alert("Please select a race");
    }
  
    else{
    var newLine = "\r\n"
             var msg = values.name;
             msg += newLine;
             msg += values.surname
             msg += newLine;
             msg += values.email;
             msg += newLine;
             msg += values.phone;
             msg += newLine;
             msg += values.race;
             msg += newLine;
             msg += radio;
             alert(msg);
    } 
  }

  function clearField(){
    var name = document.getElementById("nameId");
    values.name = "";
    name.value = "";

    var surname = document.getElementById("surnameId");
    values.surname = "";
    surname.value = "";
    
    var phone  = document.getElementById("phoneId");
    values.phone = "";
    phone.value = "";

    var email = document.getElementById("emailId"); 
    values.email = "";
    email.value = "";

    var race = document.getElementById("race"); 
    values.race = "";
  
    var citizen = document.getElementsByName("citizen");
    for(var i=0;i<citizen.length;i++)
    citizen[i].checked = false;
    setRadio("");
    
  }
  
  return (
  <div className = "container flex-direction-column">
      <NavBar />

        <Input id = "nameId" name = "name" placeholder = "Please enter name"  onChange = {handleNameInputChange}/>
        <Input id = "surnameId" name = "surname" placeholder = "Please enter surname"  onChange= {handleSurnameInputChange}/>
        <Input id = "phoneId" name = "phone" placeholder = "Please enter phone number" onChange= {handlePhoneInputChange} />
        <Input id = "emailId" name = "email" placeholder = "Please enter email address" onChange ={handleEmailInputChange}/>
        
        <div class = "mt-1 justify-content-center flex-direction-row">
              <Select onChange = {selectedRace}/>
        </div>
        
        <div class = "mt-1 justify-content-center flex-direction-row">
          <span className = "checkbox-header mr-1">
            <span class = "mr-1">South African citizen</span>
            <span class = "mr-1">Yes<Radio type = "radio" 
                                              name = "citizen"
                                              checked={radio === "Yes"} 
                                              value = "Yes" 
                                              onChange={(e)=> 
                                              {setRadio(e.target.value)}}/>
            </span>
            <span>No</span><Radio type = "radio" 
                                     name = "citizen"
                                     checked={radio === "No"} 
                                     value = "No" 
                                     onChange={(e)=> 
                                     {setRadio(e.target.value)}} />
          </span>
        </div>
        
        <div className = "mt-1 justify-content-center flex-direction-row">
          <Button onClick = {clearField} name = "submit" buttonStyle = "btn--danger--solid">Clear</Button>
        
        <span className = "ml-1">  
          <Button onClick = {sumbitClick} name = "submit" buttonStyle = "btn--danger--solid">Submit</Button>
        </span>  
        </div>
  </div>
  );
}

export default App;
