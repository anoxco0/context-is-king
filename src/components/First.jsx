import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import {RegistrationContext} from "../context/RegistrationContext"

export const First = ()=>{
    const {name, age, date_of_birth, dispatch} = React.useContext(RegistrationContext)
    const navigate= useNavigate();

    const btnHandle=()=>{
        if(name.length>=2&&
            age.length>=1 &&
            date_of_birth.length>=2){
                navigate('/registration/two')
            }
        else{
            alert('All fields ara mandantory')
        }
    }
    console.log(name, age, date_of_birth)
    return (
        <div className="box">
            <label htmlFor="">Full Name</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_NAME", payload:e.target.value})}}
            type="text" name="" id="name" placeholder="Your Full Name" />
            <label htmlFor="">Age</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_AGE", payload:e.target.value})}} type="text" name="" id="age" placeholder="Your Age"/>
            <label htmlFor="">Date of Birth</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_DOB", payload:e.target.value})}} type="date" name="" id="date_of_birth"  />
        <button  style={{cursor:`pointer`}} className="btn" onClick={()=>{btnHandle()}}>next</button>
            <Link to={'/'} style={{textDecoration:'none', color:'black',marginTop:'20px', fontSize:'12px'}}>home</Link>
        </div>
    )
}