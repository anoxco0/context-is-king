import { useNavigate } from "react-router-dom"


export const Home = () =>{
    const navigate = useNavigate();
    return(
        <div className="box">
            <button style={{marginBottom:'20px'}} className="btn" onClick={()=>{navigate('/registration/one')}}>Fill The Form</button>
            <button className="btn" onClick={()=>{navigate('/users')}} >Users List</button>
        </div>
    )
}