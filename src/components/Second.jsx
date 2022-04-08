import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {RegistrationContext} from "../context/RegistrationContext"


export const Second = ()=>{
    const {name, age, date_of_birth, state_of_residence, address, pin_code, dispatch} = React.useContext(RegistrationContext)
    const navigate= useNavigate();
    console.log(name, age, date_of_birth,state_of_residence, address, pin_code)
    const submitHandle = ()=>{
        if(name.length<2&&
            age.length<1&&
            date_of_birth.length<1){
                navigate('/registration/one')
            }
            else if(name.length>=2&&
                age.length>=1 &&
                date_of_birth.length>=2&&
                state_of_residence.length>=2&&
                address.length>=2&&
                pin_code.length>=6){
                    axios.post('http://localhost:8080/users',{
                        name:name,
                        age:age,
                        date_of_birth:date_of_birth,
                        state_of_residence:state_of_residence,
                        address:address,
                        pin_code:pin_code
                    })
                    navigate('/')
                    alert('registered');
                }
            else{
                alert('All fields ara mandantory')
            }
    }
    return (
        <div className="box">
            <label htmlFor="">State</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_SOR", payload:e.target.value})}} type="text" name="" id="state_of_residence" placeholder="State" />
            <label htmlFor="">address</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_ADDRESS", payload:e.target.value})}} type="text" name="" id="address" placeholder="address"/>
            <label htmlFor="">Pincode</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_PIN", payload:e.target.value})}} maxLength='6' minLength='6' type="phone" name="" id="pin_code" placeholder="Pin code" />
            <button className="btn" onClick={()=>{submitHandle()}}>Submit</button>
            <span style={{marginTop:'20px'}}><Link to={'/'} style={{textDecoration:'none', color:'black',fontSize:'12px'}}>home</Link>/<Link to={'/registration/one'} style={{textDecoration:'none', color:'black', fontSize:'12px'}}> first page</Link></span>
        </div>
    )
}