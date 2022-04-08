import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const Users = ()=>{
    const [tdata, setData] = useState([]);
    useEffect(()=>{
        getData()
    },[])
    const getData = ()=>{
        axios.get('http://localhost:8080/users').then((res)=>{setData(res.data)});
    }
    return(
        <div className="box">
            <h1>Users List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Data Of Birth</th>
                        <th>State</th>
                        <th>Address</th>
                        <th>Pin Code</th>
                    </tr>
                </thead>
                <tbody>
                   {tdata.map((el)=>
                   <tr key={el.id}>
                       <td>{el.name}</td>
                       <td>{el.age}</td>
                       <td>{el.date_of_birth}</td>
                       <td>{el.state_of_residence}</td>
                       <td>{el.address}</td>
                       <td>{el.pin_code}</td>
                   </tr>)}
                </tbody>
            </table>
            <Link to={'/'} style={{textDecoration:'none', color:'black',marginTop:'20px', fontSize:'12px'}}>home</Link>
        </div>
    )
}