
import React, { useState} from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {db} from './firebase'

function App() {

   
      
    const [values, setValues] = useState({
        username: "",
        phonenumber: "",
        dateofbirth: "",
        Gender: "Male",
        email: "",
        city: "",
        pincode: "",
        state:"AP",
      
    });

    

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "phonenumber",
            type: "text",
            placeholder: "phonenumber",
            errorMessage: "phone number should be 1-10 numbers and shouldn't include any!",
            label: "Phone number",
            pattern: "^[0-9]{1,10}$",
            required: true,
        },
        {
            id: 3,
            name: "dateofbirth",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
        },

        {
            id: 4,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 5,
            name: "city",
            type: "text",
            placeholder: "city",
            errorMessage: "It should be a valid city address!",
            label: "city",
            required: true,
        },
        {
            id: 6,
            name: "pincode",
            type: "text",
            placeholder: "pincode",
            errorMessage: "number should be 1-10 numbers and shouldn't include any!",
            label: "pincode",
            pattern: "^[0-9]{1,10}$",
            required: true,
        },
        
    ];
    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("users").add(values).then(alert ("Your response is recorded"))
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange} />
                ))}
                <label>State</label>
                <Select style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.state}
          label="State"
          onChange={(e)=>{setValues({...values,['state']:e.target.value})}}
        >
          <MenuItem value={"AP"}>AP</MenuItem>
          <MenuItem value={"TS"}>TS</MenuItem>
          <MenuItem value={"UP"}>UP</MenuItem>
          <MenuItem value={"AR"}>AR</MenuItem>
          <MenuItem value={"AS"}>AS</MenuItem>
          <MenuItem value={"BR"}>BR</MenuItem>
          <MenuItem value={"CH"}>CH</MenuItem>
          <MenuItem value={"TR"}>TR</MenuItem>
          <MenuItem value={"OTHER"}>OTHER</MenuItem>
        </Select>


        <label>Gender</label>
                <Select style={{width:"100%"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.Gender}
          label="Gender"
          onChange={(e)=>{setValues({...values,['Gender']:e.target.value})}}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"OTHER"}>OTHER</MenuItem>
        </Select>
                <button onClick={(e)=>{handleSubmit(e)}} >Submit</button>
            </form>
        </div>
    );
    
}

export default App;